// Input 0
var webodf_version="0.4.2-1661-g0d936d4";
// Input 1
function Runtime(){}Runtime.prototype.getVariable=function(h){};Runtime.prototype.toJson=function(h){};Runtime.prototype.fromJson=function(h){};Runtime.prototype.byteArrayFromString=function(h,k){};Runtime.prototype.byteArrayToString=function(h,k){};Runtime.prototype.read=function(h,k,f,p){};Runtime.prototype.readFile=function(h,k,f){};Runtime.prototype.readFileSync=function(h,k){};Runtime.prototype.loadXML=function(h,k){};Runtime.prototype.writeFile=function(h,k,f){};
Runtime.prototype.isFile=function(h,k){};Runtime.prototype.getFileSize=function(h,k){};Runtime.prototype.deleteFile=function(h,k){};Runtime.prototype.log=function(h,k){};Runtime.prototype.setTimeout=function(h,k){};Runtime.prototype.clearTimeout=function(h){};Runtime.prototype.libraryPaths=function(){};Runtime.prototype.currentDirectory=function(){};Runtime.prototype.setCurrentDirectory=function(h){};Runtime.prototype.type=function(){};Runtime.prototype.getDOMImplementation=function(){};
Runtime.prototype.parseXML=function(h){};Runtime.prototype.exit=function(h){};Runtime.prototype.getWindow=function(){};Runtime.prototype.assert=function(h,k,f){};var IS_COMPILED_CODE=!0;
Runtime.byteArrayToString=function(h,k){function f(f){var d="",q,r=f.length;for(q=0;q<r;q+=1)d+=String.fromCharCode(f[q]&255);return d}function p(f){var d="",q,r=f.length,c=[],g,b,a,e;for(q=0;q<r;q+=1)g=f[q],128>g?c.push(g):(q+=1,b=f[q],194<=g&&224>g?c.push((g&31)<<6|b&63):(q+=1,a=f[q],224<=g&&240>g?c.push((g&15)<<12|(b&63)<<6|a&63):(q+=1,e=f[q],240<=g&&245>g&&(g=(g&7)<<18|(b&63)<<12|(a&63)<<6|e&63,g-=65536,c.push((g>>10)+55296,(g&1023)+56320))))),1E3===c.length&&(d+=String.fromCharCode.apply(null,
c),c.length=0);return d+String.fromCharCode.apply(null,c)}var n;"utf8"===k?n=p(h):("binary"!==k&&this.log("Unsupported encoding: "+k),n=f(h));return n};Runtime.getVariable=function(h){try{return eval(h)}catch(k){}};Runtime.toJson=function(h){return JSON.stringify(h)};Runtime.fromJson=function(h){return JSON.parse(h)};Runtime.getFunctionName=function(h){return void 0===h.name?(h=/function\s+(\w+)/.exec(h))&&h[1]:h.name};
function BrowserRuntime(h){function k(g){var b=g.length,a,e,m=0;for(a=0;a<b;a+=1)e=g.charCodeAt(a),m+=1+(128<e)+(2048<e),55040<e&&57344>e&&(m+=1,a+=1);return m}function f(g,b,a){var e=g.length,m,c;b=new Uint8Array(new ArrayBuffer(b));a?(b[0]=239,b[1]=187,b[2]=191,c=3):c=0;for(a=0;a<e;a+=1)m=g.charCodeAt(a),128>m?(b[c]=m,c+=1):2048>m?(b[c]=192|m>>>6,b[c+1]=128|m&63,c+=2):55040>=m||57344<=m?(b[c]=224|m>>>12&15,b[c+1]=128|m>>>6&63,b[c+2]=128|m&63,c+=3):(a+=1,m=(m-55296<<10|g.charCodeAt(a)-56320)+65536,
b[c]=240|m>>>18&7,b[c+1]=128|m>>>12&63,b[c+2]=128|m>>>6&63,b[c+3]=128|m&63,c+=4);return b}function p(c){var b=c.length,a=new Uint8Array(new ArrayBuffer(b)),e;for(e=0;e<b;e+=1)a[e]=c.charCodeAt(e)&255;return a}function n(c,b){var a,e,m;void 0!==b?m=c:b=c;h?(e=h.ownerDocument,m&&(a=e.createElement("span"),a.className=m,a.appendChild(e.createTextNode(m)),h.appendChild(a),h.appendChild(e.createTextNode(" "))),a=e.createElement("span"),0<b.length&&"<"===b[0]?a.innerHTML=b:a.appendChild(e.createTextNode(b)),
h.appendChild(a),h.appendChild(e.createElement("br"))):console&&console.log(b);"alert"===m&&alert(b)}function l(g,b,a){if(0!==a.status||a.responseText)if(200===a.status||0===a.status){if(a.response&&"string"!==typeof a.response)"binary"===b?(a=a.response,a=new Uint8Array(a)):a=String(a.response);else if("binary"===b)if(null!==a.responseBody&&"undefined"!==String(typeof VBArray)){a=(new VBArray(a.responseBody)).toArray();var e=a.length,m=new Uint8Array(new ArrayBuffer(e));for(b=0;b<e;b+=1)m[b]=a[b];
a=m}else{(b=a.getResponseHeader("Content-Length"))&&(b=parseInt(b,10));if(b&&b!==a.responseText.length)a:{var e=a.responseText,m=!1,d=k(e);if("number"===typeof b){if(b!==d&&b!==d+3){e=void 0;break a}m=d+3===b;d=b}e=f(e,d,m)}void 0===e&&(e=p(a.responseText));a=e}else a=a.responseText;c[g]=a;g={err:null,data:a}}else g={err:a.responseText||a.statusText,data:null};else g={err:"File "+g+" is empty.",data:null};return g}function d(c,b,a){var e=new XMLHttpRequest;e.open("GET",c,a);e.overrideMimeType&&("binary"!==
b?e.overrideMimeType("text/plain; charset="+b):e.overrideMimeType("text/plain; charset=x-user-defined"));return e}function q(g,b,a){function e(){var e;4===m.readyState&&(e=l(g,b,m),a(e.err,e.data))}if(c.hasOwnProperty(g))a(null,c[g]);else{var m=d(g,b,!0);m.onreadystatechange=e;try{m.send(null)}catch(f){a(f.message,null)}}}var r=this,c={};this.byteArrayFromString=function(c,b){var a;"utf8"===b?a=f(c,k(c),!1):("binary"!==b&&r.log("unknown encoding: "+b),a=p(c));return a};this.byteArrayToString=Runtime.byteArrayToString;
this.getVariable=Runtime.getVariable;this.fromJson=Runtime.fromJson;this.toJson=Runtime.toJson;this.readFile=q;this.read=function(c,b,a,e){q(c,"binary",function(m,c){var g=null;if(c){if("string"===typeof c)throw"This should not happen.";g=c.subarray(b,b+a)}e(m,g)})};this.readFileSync=function(c,b){var a=d(c,b,!1),e;try{a.send(null);e=l(c,b,a);if(e.err)throw e.err;if(null===e.data)throw"No data read from "+c+".";}catch(m){throw m;}return e.data};this.writeFile=function(g,b,a){c[g]=b;var e=new XMLHttpRequest,
m;e.open("PUT",g,!0);e.onreadystatechange=function(){4===e.readyState&&(0!==e.status||e.responseText?200<=e.status&&300>e.status||0===e.status?a(null):a("Status "+String(e.status)+": "+e.responseText||e.statusText):a("File "+g+" is empty."))};m=b.buffer&&!e.sendAsBinary?b.buffer:r.byteArrayToString(b,"binary");try{e.sendAsBinary?e.sendAsBinary(m):e.send(m)}catch(d){r.log("HUH? "+d+" "+b),a(d.message)}};this.deleteFile=function(g,b){delete c[g];var a=new XMLHttpRequest;a.open("DELETE",g,!0);a.onreadystatechange=
function(){4===a.readyState&&(200>a.status&&300<=a.status?b(a.responseText):b(null))};a.send(null)};this.loadXML=function(c,b){var a=new XMLHttpRequest;a.open("GET",c,!0);a.overrideMimeType&&a.overrideMimeType("text/xml");a.onreadystatechange=function(){4===a.readyState&&(0!==a.status||a.responseText?200===a.status||0===a.status?b(null,a.responseXML):b(a.responseText,null):b("File "+c+" is empty.",null))};try{a.send(null)}catch(e){b(e.message,null)}};this.isFile=function(c,b){r.getFileSize(c,function(a){b(-1!==
a)})};this.getFileSize=function(g,b){if(c.hasOwnProperty(g)&&"string"!==typeof c[g])b(c[g].length);else{var a=new XMLHttpRequest;a.open("HEAD",g,!0);a.onreadystatechange=function(){if(4===a.readyState){var e=a.getResponseHeader("Content-Length");e?b(parseInt(e,10)):q(g,"binary",function(a,e){a?b(-1):b(e.length)})}};a.send(null)}};this.log=n;this.assert=function(c,b,a){if(!c)throw n("alert","ASSERTION FAILED:\n"+b),a&&a(),b;};this.setTimeout=function(c,b){return setTimeout(function(){c()},b)};this.clearTimeout=
function(c){clearTimeout(c)};this.libraryPaths=function(){return["lib"]};this.setCurrentDirectory=function(){};this.currentDirectory=function(){return""};this.type=function(){return"BrowserRuntime"};this.getDOMImplementation=function(){return window.document.implementation};this.parseXML=function(c){return(new DOMParser).parseFromString(c,"text/xml")};this.exit=function(c){n("Calling exit with code "+String(c)+", but exit() is not implemented.")};this.getWindow=function(){return window}}
function NodeJSRuntime(){function h(d){var c=d.length,g,b=new Uint8Array(new ArrayBuffer(c));for(g=0;g<c;g+=1)b[g]=d[g];return b}function k(d,c,g){function b(b,e){if(b)return g(b,null);if(!e)return g("No data for "+d+".",null);if("string"===typeof e)return g(b,e);g(b,h(e))}d=n.resolve(l,d);"binary"!==c?p.readFile(d,c,b):p.readFile(d,null,b)}var f=this,p=require("fs"),n=require("path"),l="",d,q;this.byteArrayFromString=function(d,c){var g=new Buffer(d,c),b,a=g.length,e=new Uint8Array(new ArrayBuffer(a));
for(b=0;b<a;b+=1)e[b]=g[b];return e};this.byteArrayToString=Runtime.byteArrayToString;this.getVariable=Runtime.getVariable;this.fromJson=Runtime.fromJson;this.toJson=Runtime.toJson;this.readFile=k;this.loadXML=function(d,c){k(d,"utf-8",function(g,b){if(g)return c(g,null);if(!b)return c("No data for "+d+".",null);c(null,f.parseXML(b))})};this.writeFile=function(d,c,g){c=new Buffer(c);d=n.resolve(l,d);p.writeFile(d,c,"binary",function(b){g(b||null)})};this.deleteFile=function(d,c){d=n.resolve(l,d);
p.unlink(d,c)};this.read=function(d,c,g,b){d=n.resolve(l,d);p.open(d,"r+",666,function(a,e){if(a)b(a,null);else{var m=new Buffer(g);p.read(e,m,0,g,c,function(a){p.close(e);b(a,h(m))})}})};this.readFileSync=function(d,c){var g;g=p.readFileSync(d,"binary"===c?null:c);if(null===g)throw"File "+d+" could not be read.";"binary"===c&&(g=h(g));return g};this.isFile=function(d,c){d=n.resolve(l,d);p.stat(d,function(g,b){c(!g&&b.isFile())})};this.getFileSize=function(d,c){d=n.resolve(l,d);p.stat(d,function(g,
b){g?c(-1):c(b.size)})};this.log=function(d,c){var g;void 0!==c?g=d:c=d;"alert"===g&&process.stderr.write("\n!!!!! ALERT !!!!!\n");process.stderr.write(c+"\n");"alert"===g&&process.stderr.write("!!!!! ALERT !!!!!\n")};this.assert=function(d,c,g){d||(process.stderr.write("ASSERTION FAILED: "+c),g&&g())};this.setTimeout=function(d,c){return setTimeout(function(){d()},c)};this.clearTimeout=function(d){clearTimeout(d)};this.libraryPaths=function(){return[__dirname]};this.setCurrentDirectory=function(d){l=
d};this.currentDirectory=function(){return l};this.type=function(){return"NodeJSRuntime"};this.getDOMImplementation=function(){return q};this.parseXML=function(f){return d.parseFromString(f,"text/xml")};this.exit=process.exit;this.getWindow=function(){return null};d=new (require("xmldom").DOMParser);q=f.parseXML("<a/>").implementation}
function RhinoRuntime(){function h(d,f){var c;void 0!==f?c=d:f=d;"alert"===c&&print("\n!!!!! ALERT !!!!!");print(f);"alert"===c&&print("!!!!! ALERT !!!!!")}var k=this,f={},p=f.javax.xml.parsers.DocumentBuilderFactory.newInstance(),n,l,d="";p.setValidating(!1);p.setNamespaceAware(!0);p.setExpandEntityReferences(!1);p.setSchema(null);l=f.org.xml.sax.EntityResolver({resolveEntity:function(d,r){var c=new f.java.io.FileReader(r);return new f.org.xml.sax.InputSource(c)}});n=p.newDocumentBuilder();n.setEntityResolver(l);
this.byteArrayFromString=function(d,f){var c,g=d.length,b=new Uint8Array(new ArrayBuffer(g));for(c=0;c<g;c+=1)b[c]=d.charCodeAt(c)&255;return b};this.byteArrayToString=Runtime.byteArrayToString;this.getVariable=Runtime.getVariable;this.fromJson=Runtime.fromJson;this.toJson=Runtime.toJson;this.loadXML=function(d,r){var c=new f.java.io.File(d),g=null;try{g=n.parse(c)}catch(b){return print(b),r(b,null)}r(null,g)};this.readFile=function(q,r,c){d&&(q=d+"/"+q);var g=new f.java.io.File(q),b="binary"===r?
"latin1":r;g.isFile()?((q=readFile(q,b))&&"binary"===r&&(q=k.byteArrayFromString(q,"binary")),c(null,q)):c(q+" is not a file.",null)};this.writeFile=function(q,r,c){d&&(q=d+"/"+q);q=new f.java.io.FileOutputStream(q);var g,b=r.length;for(g=0;g<b;g+=1)q.write(r[g]);q.close();c(null)};this.deleteFile=function(q,r){d&&(q=d+"/"+q);var c=new f.java.io.File(q),g=q+Math.random(),g=new f.java.io.File(g);c.rename(g)?(g.deleteOnExit(),r(null)):r("Could not delete "+q)};this.read=function(q,r,c,g){d&&(q=d+"/"+
q);var b;b=q;var a="binary";(new f.java.io.File(b)).isFile()?("binary"===a&&(a="latin1"),b=readFile(b,a)):b=null;b?g(null,this.byteArrayFromString(b.substring(r,r+c),"binary")):g("Cannot read "+q,null)};this.readFileSync=function(d,f){if(!f)return"";var c=readFile(d,f);if(null===c)throw"File could not be read.";return c};this.isFile=function(q,p){d&&(q=d+"/"+q);var c=new f.java.io.File(q);p(c.isFile())};this.getFileSize=function(q,p){d&&(q=d+"/"+q);var c=new f.java.io.File(q);p(c.length())};this.log=
h;this.assert=function(d,f,c){d||(h("alert","ASSERTION FAILED: "+f),c&&c())};this.setTimeout=function(d){d();return 0};this.clearTimeout=function(){};this.libraryPaths=function(){return["lib"]};this.setCurrentDirectory=function(f){d=f};this.currentDirectory=function(){return d};this.type=function(){return"RhinoRuntime"};this.getDOMImplementation=function(){return n.getDOMImplementation()};this.parseXML=function(d){d=new f.java.io.StringReader(d);d=new f.org.xml.sax.InputSource(d);return n.parse(d)};
this.exit=quit;this.getWindow=function(){return null}}Runtime.create=function(){return"undefined"!==String(typeof window)?new BrowserRuntime(window.document.getElementById("logoutput")):"undefined"!==String(typeof require)?new NodeJSRuntime:new RhinoRuntime};var runtime=Runtime.create(),core={},gui={},xmldom={},odf={},ops={};
(function(){function h(d,f){var c=d+"/manifest.json",g,b;if(!l.hasOwnProperty(c)){try{g=runtime.readFileSync(c,"utf-8")}catch(a){console.log(String(a));return}g=JSON.parse(g);for(b in g)g.hasOwnProperty(b)&&(f[b]={dir:d,deps:g[b]});l[c]=1}}function k(d,f,c){var g=f[d].deps,b={};c[d]=b;g.forEach(function(a){b[a]=1});g.forEach(function(b){c[b]||k(b,f,c)});g.forEach(function(a){Object.keys(c[a]).forEach(function(a){b[a]=1})})}function f(d,f){function c(a,e){var m,g=f[a];if(-1===b.indexOf(a)&&-1===e.indexOf(a)){e.push(a);
for(m=0;m<d.length;m+=1)g[d[m]]&&c(d[m],e);e.pop();b.push(a)}}var g,b=[];for(g=0;g<d.length;g+=1)c(d[g],[]);return b}function p(d,f){for(var c=0;c<d.length&&void 0!==f[c];)null!==f[c]&&(eval(f[c]),f[c]=null),c+=1}var n={},l={},d={core:core,gui:gui,xmldom:xmldom,odf:odf,ops:ops};runtime.loadClass=function(q){var r;if(!(r=IS_COMPILED_CODE))a:{r=q.split(".");var c,g=d,b=r.length;for(c=0;c<b;c+=1){if(!g.hasOwnProperty(r[c])){r=!1;break a}g=g[r[c]]}r=!0}if(!r&&(r=q.replace(".","/")+".js",!l.hasOwnProperty(r))){if(!(0<
Object.keys(n).length)){c=runtime.libraryPaths();r={};runtime.currentDirectory()&&h(runtime.currentDirectory(),r);for(g=0;g<c.length;g+=1)h(c[g],r);var a,g={};for(a in r)r.hasOwnProperty(a)&&k(a,r,g);for(a in r)r.hasOwnProperty(a)&&(c=Object.keys(g[a]),r[a].deps=f(c,g),r[a].deps.push(a));n=r}a=q.replace(".","/")+".js";q=[];a=n[a].deps;for(r=0;r<a.length;r+=1)l.hasOwnProperty(a[r])||q.push(a[r]);a=[];a.length=q.length;for(r=q.length-1;0<=r;r-=1)l[q[r]]=1,void 0===a[r]&&(c=q[r],c=n[c].dir+"/"+c,g=runtime.readFileSync(c,
"utf-8"),g+="\n//# sourceURL="+c,g+="\n//@ sourceURL="+c,a[r]=g);p(q,a)}}})();(function(){var h=function(h){return h};runtime.getTranslator=function(){return h};runtime.setTranslator=function(k){h=k};runtime.tr=function(k){var f=h(k);return f&&"string"===String(typeof f)?f:k}})();
(function(h){function k(f){if(f.length){var p=f[0];runtime.readFile(p,"utf8",function(h,l){function d(){var c;(c=eval(k))&&runtime.exit(c)}var q="",k=l;-1!==p.indexOf("/")&&(q=p.substring(0,p.indexOf("/")));runtime.setCurrentDirectory(q);h?(runtime.log(h),runtime.exit(1)):null===k?(runtime.log("No code found for "+p),runtime.exit(1)):d.apply(null,f)})}}h=h?Array.prototype.slice.call(h):[];"NodeJSRuntime"===runtime.type()?k(process.argv.slice(2)):"RhinoRuntime"===runtime.type()?k(h):k(h.slice(1))})("undefined"!==
String(typeof arguments)&&arguments);
// Input 2
core.Async=function(){this.forEach=function(h,k,f){function p(q){d!==l&&(q?(d=l,f(q)):(d+=1,d===l&&f(null)))}var n,l=h.length,d=0;for(n=0;n<l;n+=1)k(h[n],p)};this.destroyAll=function(h,k){function f(p,n){if(n)k(n);else if(p<h.length)h[p](function(h){f(p+1,h)});else k()}f(0,void 0)}};
// Input 3
function makeBase64(){function h(b){var a,e=b.length,c=new Uint8Array(new ArrayBuffer(e));for(a=0;a<e;a+=1)c[a]=b.charCodeAt(a)&255;return c}function k(b){var a,e="",c,m=b.length-2;for(c=0;c<m;c+=3)a=b[c]<<16|b[c+1]<<8|b[c+2],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a>>>18],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a>>>12&63],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a>>>6&63],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a&
63];c===m+1?(a=b[c]<<4,e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a>>>6],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a&63],e+="=="):c===m&&(a=b[c]<<10|b[c+1]<<2,e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a>>>12],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a>>>6&63],e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a&63],e+="=");return e}function f(b){b=b.replace(/[^A-Za-z0-9+\/]+/g,
"");var a=b.length,e=new Uint8Array(new ArrayBuffer(3*a)),c=b.length%4,d=0,g,f;for(g=0;g<a;g+=4)f=(m[b.charAt(g)]||0)<<18|(m[b.charAt(g+1)]||0)<<12|(m[b.charAt(g+2)]||0)<<6|(m[b.charAt(g+3)]||0),e[d]=f>>16,e[d+1]=f>>8&255,e[d+2]=f&255,d+=3;a=3*a-[0,0,2,1][c];return e.subarray(0,a)}function p(b){var a,e,c=b.length,m=0,d=new Uint8Array(new ArrayBuffer(3*c));for(a=0;a<c;a+=1)e=b[a],128>e?d[m++]=e:(2048>e?d[m++]=192|e>>>6:(d[m++]=224|e>>>12&15,d[m++]=128|e>>>6&63),d[m++]=128|e&63);return d.subarray(0,
m)}function n(b){var a,e,c,m,d=b.length,g=new Uint8Array(new ArrayBuffer(d)),f=0;for(a=0;a<d;a+=1)e=b[a],128>e?g[f++]=e:(a+=1,c=b[a],224>e?g[f++]=(e&31)<<6|c&63:(a+=1,m=b[a],g[f++]=(e&15)<<12|(c&63)<<6|m&63));return g.subarray(0,f)}function l(a){return k(h(a))}function d(a){return String.fromCharCode.apply(String,f(a))}function q(a){return n(h(a))}function r(a){a=n(a);for(var b="",e=0;e<a.length;)b+=String.fromCharCode.apply(String,a.subarray(e,e+45E3)),e+=45E3;return b}function c(a,b,e){var c,m,
d,g="";for(d=b;d<e;d+=1)b=a.charCodeAt(d)&255,128>b?g+=String.fromCharCode(b):(d+=1,c=a.charCodeAt(d)&255,224>b?g+=String.fromCharCode((b&31)<<6|c&63):(d+=1,m=a.charCodeAt(d)&255,g+=String.fromCharCode((b&15)<<12|(c&63)<<6|m&63)));return g}function g(a,b){function e(){var g=d+1E5;g>a.length&&(g=a.length);m+=c(a,d,g);d=g;g=d===a.length;b(m,g)&&!g&&runtime.setTimeout(e,0)}var m="",d=0;1E5>a.length?b(c(a,0,a.length),!0):("string"!==typeof a&&(a=a.slice()),e())}function b(a){return p(h(a))}function a(a){return String.fromCharCode.apply(String,
p(a))}function e(a){return String.fromCharCode.apply(String,p(h(a)))}var m=function(a){var b={},e,c;e=0;for(c=a.length;e<c;e+=1)b[a.charAt(e)]=e;return b}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),u,x,w=runtime.getWindow(),z,v;w&&w.btoa?(z=w.btoa,u=function(a){return z(e(a))}):(z=l,u=function(a){return k(b(a))});w&&w.atob?(v=w.atob,x=function(a){a=v(a);return c(a,0,a.length)}):(v=d,x=function(a){return r(f(a))});core.Base64=function(){this.convertByteArrayToBase64=this.convertUTF8ArrayToBase64=
k;this.convertBase64ToByteArray=this.convertBase64ToUTF8Array=f;this.convertUTF16ArrayToByteArray=this.convertUTF16ArrayToUTF8Array=p;this.convertByteArrayToUTF16Array=this.convertUTF8ArrayToUTF16Array=n;this.convertUTF8StringToBase64=l;this.convertBase64ToUTF8String=d;this.convertUTF8StringToUTF16Array=q;this.convertByteArrayToUTF16String=this.convertUTF8ArrayToUTF16String=r;this.convertUTF8StringToUTF16String=g;this.convertUTF16StringToByteArray=this.convertUTF16StringToUTF8Array=b;this.convertUTF16ArrayToUTF8String=
a;this.convertUTF16StringToUTF8String=e;this.convertUTF16StringToBase64=u;this.convertBase64ToUTF16String=x;this.fromBase64=d;this.toBase64=l;this.atob=v;this.btoa=z;this.utob=e;this.btou=g;this.encode=u;this.encodeURI=function(a){return u(a).replace(/[+\/]/g,function(a){return"+"===a?"-":"_"}).replace(/\\=+$/,"")};this.decode=function(a){return x(a.replace(/[\-_]/g,function(a){return"-"===a?"+":"/"}))};return this};return core.Base64}core.Base64=makeBase64();
// Input 4
core.ByteArray=function(h){this.pos=0;this.data=h;this.readUInt32LE=function(){this.pos+=4;var h=this.data,f=this.pos;return h[--f]<<24|h[--f]<<16|h[--f]<<8|h[--f]};this.readUInt16LE=function(){this.pos+=2;var h=this.data,f=this.pos;return h[--f]<<8|h[--f]}};
// Input 5
core.ByteArrayWriter=function(h){function k(d){d>n-p&&(n=Math.max(2*n,p+d),d=new Uint8Array(new ArrayBuffer(n)),d.set(l),l=d)}var f=this,p=0,n=1024,l=new Uint8Array(new ArrayBuffer(n));this.appendByteArrayWriter=function(d){f.appendByteArray(d.getByteArray())};this.appendByteArray=function(d){var f=d.length;k(f);l.set(d,p);p+=f};this.appendArray=function(d){var f=d.length;k(f);l.set(d,p);p+=f};this.appendUInt16LE=function(d){f.appendArray([d&255,d>>8&255])};this.appendUInt32LE=function(d){f.appendArray([d&
255,d>>8&255,d>>16&255,d>>24&255])};this.appendString=function(d){f.appendByteArray(runtime.byteArrayFromString(d,h))};this.getLength=function(){return p};this.getByteArray=function(){var d=new Uint8Array(new ArrayBuffer(p));d.set(l.subarray(0,p));return d}};
// Input 6
core.CSSUnits=function(){var h=this,k={"in":1,cm:2.54,mm:25.4,pt:72,pc:12};this.convert=function(f,h,n){return f*k[n]/k[h]};this.convertMeasure=function(f,p){var n,l;f&&p?(n=parseFloat(f),l=f.replace(n.toString(),""),n=h.convert(n,l,p).toString()):n="";return n};this.getUnits=function(f){return f.substr(f.length-2,f.length)}};
// Input 7
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
(function(){function h(){var f,h,n,l,d;void 0===k&&(d=(f=runtime.getWindow())&&f.document,k={rangeBCRIgnoresElementBCR:!1,unscaledRangeClientRects:!1},d&&(l=d.createElement("div"),l.style.position="absolute",l.style.left="-99999px",l.style.transform="scale(2)",l.style["-webkit-transform"]="scale(2)",h=d.createElement("div"),l.appendChild(h),d.body.appendChild(l),f=d.createRange(),f.selectNode(h),k.rangeBCRIgnoresElementBCR=0===f.getClientRects().length,h.appendChild(d.createTextNode("Rect transform test")),
h=h.getBoundingClientRect(),n=f.getBoundingClientRect(),k.unscaledRangeClientRects=2<Math.abs(h.height-n.height),f.detach(),d.body.removeChild(l),f=Object.keys(k).map(function(d){return d+":"+String(k[d])}).join(", "),runtime.log("Detected browser quirks - "+f)));return k}var k;core.DomUtils=function(){function f(b,a){for(var e=0,c;b.parentNode!==a;)runtime.assert(null!==b.parentNode,"parent is null"),b=b.parentNode;for(c=a.firstChild;c!==b;)e+=1,c=c.nextSibling;return e}function p(b,a){return 0>=
b.compareBoundaryPoints(Range.START_TO_START,a)&&0<=b.compareBoundaryPoints(Range.END_TO_END,a)}function n(b,a){return 0>=b.compareBoundaryPoints(Range.END_TO_START,a)&&0<=b.compareBoundaryPoints(Range.START_TO_END,a)}function l(b,a){var e=null;b.nodeType===Node.TEXT_NODE&&(0===b.length?(b.parentNode.removeChild(b),a.nodeType===Node.TEXT_NODE&&(e=a)):(a.nodeType===Node.TEXT_NODE&&(b.appendData(a.data),a.parentNode.removeChild(a)),e=b));return e}function d(b){for(var a=b.parentNode;b.firstChild;)a.insertBefore(b.firstChild,
b);a.removeChild(b);return a}function q(b,a){for(var e=b.parentNode,c=b.firstChild,g;c;)g=c.nextSibling,q(c,a),c=g;a(b)&&(e=d(b));return e}function k(b,a){return b===a||Boolean(b.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY)}function c(b,a,e){Object.keys(a).forEach(function(m){var d=m.split(":"),g=d[1],f=e(d[0]),d=a[m];"object"===typeof d&&Object.keys(d).length?(m=f?b.getElementsByTagNameNS(f,g)[0]||b.ownerDocument.createElementNS(f,m):b.getElementsByTagName(g)[0]||b.ownerDocument.createElement(m),
b.appendChild(m),c(m,d,e)):f&&b.setAttributeNS(f,m,String(d))})}var g=null;this.splitBoundaries=function(b){var a,e=[],c,d,g;if(b.startContainer.nodeType===Node.TEXT_NODE||b.endContainer.nodeType===Node.TEXT_NODE){c=b.endContainer;d=b.endContainer.nodeType!==Node.TEXT_NODE?b.endOffset===b.endContainer.childNodes.length:!1;g=b.endOffset;a=b.endContainer;if(g<a.childNodes.length)for(a=a.childNodes.item(g),g=0;a.firstChild;)a=a.firstChild;else for(;a.lastChild;)a=a.lastChild,g=a.nodeType===Node.TEXT_NODE?
a.textContent.length:a.childNodes.length;a===c&&(c=null);b.setEnd(a,g);g=b.endContainer;0!==b.endOffset&&g.nodeType===Node.TEXT_NODE&&(a=g,b.endOffset!==a.length&&(e.push(a.splitText(b.endOffset)),e.push(a)));g=b.startContainer;0!==b.startOffset&&g.nodeType===Node.TEXT_NODE&&(a=g,b.startOffset!==a.length&&(g=a.splitText(b.startOffset),e.push(a),e.push(g),b.setStart(g,0)));if(null!==c){for(g=b.endContainer;g.parentNode&&g.parentNode!==c;)g=g.parentNode;d=d?c.childNodes.length:f(g,c);b.setEnd(c,d)}}return e};
this.containsRange=p;this.rangesIntersect=n;this.getNodesInRange=function(b,a){for(var e=[],c=b.commonAncestorContainer,d,g=b.startContainer.ownerDocument.createTreeWalker(c.nodeType===Node.TEXT_NODE?c.parentNode:c,NodeFilter.SHOW_ALL,a,!1),c=g.currentNode=b.startContainer;c;){d=a(c);if(d===NodeFilter.FILTER_ACCEPT)e.push(c);else if(d===NodeFilter.FILTER_REJECT)break;c=c.parentNode}e.reverse();for(c=g.nextNode();c;)e.push(c),c=g.nextNode();return e};this.normalizeTextNodes=function(b){b&&b.nextSibling&&
(b=l(b,b.nextSibling));b&&b.previousSibling&&l(b.previousSibling,b)};this.rangeContainsNode=function(b,a){var e=a.ownerDocument.createRange(),c=a.ownerDocument.createRange(),d;e.setStart(b.startContainer,b.startOffset);e.setEnd(b.endContainer,b.endOffset);c.selectNodeContents(a);d=p(e,c);e.detach();c.detach();return d};this.mergeIntoParent=d;this.removeUnwantedNodes=q;this.getElementsByTagNameNS=function(b,a,e){var c=[];b=b.getElementsByTagNameNS(a,e);c.length=e=b.length;for(a=0;a<e;a+=1)c[a]=b.item(a);
return c};this.rangeIntersectsNode=function(b,a){var e=a.ownerDocument.createRange(),c;e.selectNodeContents(a);c=n(b,e);e.detach();return c};this.containsNode=function(b,a){return b===a||b.contains(a)};this.comparePoints=function(b,a,e,c){if(b===e)return c-a;var d=b.compareDocumentPosition(e);2===d?d=-1:4===d?d=1:10===d?(a=f(b,e),d=a<c?1:-1):(c=f(e,b),d=c<a?-1:1);return d};this.adaptRangeDifferenceToZoomLevel=function(b,a){return h().unscaledRangeClientRects?b:b/a};this.getBoundingClientRect=function(b){var a=
b.ownerDocument,e=h();if((!1===e.unscaledRangeClientRects||e.rangeBCRIgnoresElementBCR)&&b.nodeType===Node.ELEMENT_NODE)return b.getBoundingClientRect();var c;g?c=g:g=c=a.createRange();a=c;a.selectNode(b);return a.getBoundingClientRect()};this.mapKeyValObjOntoNode=function(b,a,e){Object.keys(a).forEach(function(c){var d=c.split(":"),g=d[1],d=e(d[0]),f=a[c];d?(g=b.getElementsByTagNameNS(d,g)[0],g||(g=b.ownerDocument.createElementNS(d,c),b.appendChild(g)),g.textContent=f):runtime.log("Key ignored: "+
c)})};this.removeKeyElementsFromNode=function(b,a,e){a.forEach(function(a){var c=a.split(":"),d=c[1];(c=e(c[0]))?(d=b.getElementsByTagNameNS(c,d)[0])?d.parentNode.removeChild(d):runtime.log("Element for "+a+" not found."):runtime.log("Property Name ignored: "+a)})};this.getKeyValRepresentationOfNode=function(b,a){for(var e={},c=b.firstElementChild,d;c;){if(d=a(c.namespaceURI))e[d+":"+c.localName]=c.textContent;c=c.nextElementSibling}return e};this.mapObjOntoNode=c;(function(b){var a,e;e=runtime.getWindow();
null!==e&&(a=e.navigator.appVersion.toLowerCase(),e=-1===a.indexOf("chrome")&&(-1!==a.indexOf("applewebkit")||-1!==a.indexOf("safari")),a=a.indexOf("msie"),e||a)&&(b.containsNode=k)})(this)};return core.DomUtils})();
// Input 8
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
core.EventNotifier=function(h){var k={};this.emit=function(f,h){var n,l;runtime.assert(k.hasOwnProperty(f),'unknown event fired "'+f+'"');l=k[f];for(n=0;n<l.length;n+=1)l[n](h)};this.subscribe=function(f,h){runtime.assert(k.hasOwnProperty(f),'tried to subscribe to unknown event "'+f+'"');k[f].push(h);runtime.log('event "'+f+'" subscribed.')};this.unsubscribe=function(f,h){var n;runtime.assert(k.hasOwnProperty(f),'tried to unsubscribe from unknown event "'+f+'"');n=k[f].indexOf(h);runtime.assert(-1!==
n,'tried to unsubscribe unknown callback from event "'+f+'"');-1!==n&&k[f].splice(n,1);runtime.log('event "'+f+'" unsubscribed.')};(function(){var f,p;for(f=0;f<h.length;f+=1)p=h[f],runtime.assert(!k.hasOwnProperty(p),'Duplicated event ids: "'+p+'" registered more than once.'),k[p]=[]})()};
// Input 9
/*

 Copyright (C) 2012 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
core.LoopWatchDog=function(h,k){var f=Date.now(),p=0;this.check=function(){var n;if(h&&(n=Date.now(),n-f>h))throw runtime.log("alert","watchdog timeout"),"timeout!";if(0<k&&(p+=1,p>k))throw runtime.log("alert","watchdog loop overflow"),"loop overflow";}};
// Input 10
core.PositionIterator=function(h,k,f,p){function n(){this.acceptNode=function(b){return!b||b.nodeType===a&&0===b.length?u:m}}function l(b){this.acceptNode=function(e){return!e||e.nodeType===a&&0===e.length?u:b.acceptNode(e)}}function d(){var b=c.currentNode,d=b.nodeType;g=d===a?b.length-1:d===e?1:0}function q(){if(null===c.previousSibling()){if(!c.parentNode()||c.currentNode===h)return c.firstChild(),!1;g=0}else d();return!0}var r=this,c,g,b,a=Node.TEXT_NODE,e=Node.ELEMENT_NODE,m=NodeFilter.FILTER_ACCEPT,
u=NodeFilter.FILTER_REJECT;this.nextPosition=function(){var b=c.currentNode,d=b.nodeType;if(b===h)return!1;if(0===g&&d===e)null===c.firstChild()&&(g=1);else if(d===a&&g+1<b.length)g+=1;else if(null!==c.nextSibling())g=0;else if(c.parentNode())g=1;else return!1;return!0};this.previousPosition=function(){var b=!0,e=c.currentNode;0===g?b=q():e.nodeType===a?g-=1:null!==c.lastChild()?d():e===h?b=!1:g=0;return b};this.previousNode=q;this.container=function(){var b=c.currentNode,e=b.nodeType;0===g&&e!==
a&&(b=b.parentNode);return b};this.rightNode=function(){var d=c.currentNode,f=d.nodeType;if(f===a&&g===d.length)for(d=d.nextSibling;d&&b(d)!==m;)d=d.nextSibling;else f===e&&1===g&&(d=null);return d};this.leftNode=function(){var a=c.currentNode;if(0===g)for(a=a.previousSibling;a&&b(a)!==m;)a=a.previousSibling;else if(a.nodeType===e)for(a=a.lastChild;a&&b(a)!==m;)a=a.previousSibling;return a};this.getCurrentNode=function(){return c.currentNode};this.unfilteredDomOffset=function(){if(c.currentNode.nodeType===
a)return g;for(var b=0,e=c.currentNode,e=1===g?e.lastChild:e.previousSibling;e;)b+=1,e=e.previousSibling;return b};this.getPreviousSibling=function(){var a=c.currentNode,b=c.previousSibling();c.currentNode=a;return b};this.getNextSibling=function(){var a=c.currentNode,b=c.nextSibling();c.currentNode=a;return b};this.setUnfilteredPosition=function(e,d){var f,q;runtime.assert(null!==e&&void 0!==e,"PositionIterator.setUnfilteredPosition called without container");c.currentNode=e;if(e.nodeType===a)return g=
d,runtime.assert(d<=e.length,"Error in setPosition: "+d+" > "+e.length),runtime.assert(0<=d,"Error in setPosition: "+d+" < 0"),d===e.length&&(c.nextSibling()?g=0:c.parentNode()?g=1:runtime.assert(!1,"Error in setUnfilteredPosition: position not valid.")),!0;f=b(e);for(q=e.parentNode;q&&q!==h&&f===m;)f=b(q),f!==m&&(c.currentNode=q),q=q.parentNode;d<e.childNodes.length&&f!==NodeFilter.FILTER_REJECT?(c.currentNode=e.childNodes.item(d),f=b(c.currentNode),g=0):g=1;f===NodeFilter.FILTER_REJECT&&(g=1);if(f!==
m)return r.nextPosition();runtime.assert(b(c.currentNode)===m,"PositionIterater.setUnfilteredPosition call resulted in an non-visible node being set");return!0};this.moveToEnd=function(){c.currentNode=h;g=1};this.moveToEndOfNode=function(b){b.nodeType===a?r.setUnfilteredPosition(b,b.length):(c.currentNode=b,g=1)};this.getNodeFilter=function(){return b};b=(f?new l(f):new n).acceptNode;b.acceptNode=b;k=k||4294967295;runtime.assert(h.nodeType!==Node.TEXT_NODE,"Internet Explorer doesn't allow tree walker roots to be text nodes");
c=h.ownerDocument.createTreeWalker(h,k,b,p);g=0;null===c.firstChild()&&(g=1)};
// Input 11
core.zip_HuftNode=function(){this.n=this.b=this.e=0;this.t=null};core.zip_HuftList=function(){this.list=this.next=null};
core.RawInflate=function(){function h(a,b,e,c,d,g){this.BMAX=16;this.N_MAX=288;this.status=0;this.root=null;this.m=0;var m=Array(this.BMAX+1),f,h,q,s,n,l,p,k=Array(this.BMAX+1),r,v,u,t=new core.zip_HuftNode,A=Array(this.BMAX);s=Array(this.N_MAX);var H,C=Array(this.BMAX+1),E,V,x;x=this.root=null;for(n=0;n<m.length;n++)m[n]=0;for(n=0;n<k.length;n++)k[n]=0;for(n=0;n<A.length;n++)A[n]=null;for(n=0;n<s.length;n++)s[n]=0;for(n=0;n<C.length;n++)C[n]=0;f=256<b?a[256]:this.BMAX;r=a;v=0;n=b;do m[r[v]]++,v++;
while(0<--n);if(m[0]===b)this.root=null,this.status=this.m=0;else{for(l=1;l<=this.BMAX&&0===m[l];l++);p=l;g<l&&(g=l);for(n=this.BMAX;0!==n&&0===m[n];n--);q=n;g>n&&(g=n);for(E=1<<l;l<n;l++,E<<=1)if(E-=m[l],0>E){this.status=2;this.m=g;return}E-=m[n];if(0>E)this.status=2,this.m=g;else{m[n]+=E;C[1]=l=0;r=m;v=1;for(u=2;0<--n;)l+=r[v++],C[u++]=l;r=a;n=v=0;do l=r[v++],0!==l&&(s[C[l]++]=n);while(++n<b);b=C[q];C[0]=n=0;r=s;v=0;s=-1;H=k[0]=0;u=null;V=0;for(p=p-1+1;p<=q;p++)for(a=m[p];0<a--;){for(;p>H+k[1+s];){H+=
k[1+s];s++;V=q-H;V=V>g?g:V;l=p-H;h=1<<l;if(h>a+1)for(h-=a+1,u=p;++l<V;){h<<=1;if(h<=m[++u])break;h-=m[u]}H+l>f&&H<f&&(l=f-H);V=1<<l;k[1+s]=l;u=Array(V);for(h=0;h<V;h++)u[h]=new core.zip_HuftNode;x=null===x?this.root=new core.zip_HuftList:x.next=new core.zip_HuftList;x.next=null;x.list=u;A[s]=u;0<s&&(C[s]=n,t.b=k[s],t.e=16+l,t.t=u,l=(n&(1<<H)-1)>>H-k[s],A[s-1][l].e=t.e,A[s-1][l].b=t.b,A[s-1][l].n=t.n,A[s-1][l].t=t.t)}t.b=p-H;v>=b?t.e=99:r[v]<e?(t.e=256>r[v]?16:15,t.n=r[v++]):(t.e=d[r[v]-e],t.n=c[r[v++]-
e]);h=1<<p-H;for(l=n>>H;l<V;l+=h)u[l].e=t.e,u[l].b=t.b,u[l].n=t.n,u[l].t=t.t;for(l=1<<p-1;0!==(n&l);l>>=1)n^=l;for(n^=l;(n&(1<<H)-1)!==C[s];)H-=k[s],s--}this.m=k[1];this.status=0!==E&&1!==q?1:0}}}function k(e){for(;a<e;){var c=b,d;d=s.length===F?-1:s[F++];b=c|d<<a;a+=8}}function f(a){return b&C[a]}function p(e){b>>=e;a-=e}function n(a,b,c){var g,m,h;if(0===c)return 0;for(h=0;;){k(v);m=w.list[f(v)];for(g=m.e;16<g;){if(99===g)return-1;p(m.b);g-=16;k(g);m=m.t[f(g)];g=m.e}p(m.b);if(16===g)q&=32767,a[b+
h++]=d[q++]=m.n;else{if(15===g)break;k(g);u=m.n+f(g);p(g);k(t);m=z.list[f(t)];for(g=m.e;16<g;){if(99===g)return-1;p(m.b);g-=16;k(g);m=m.t[f(g)];g=m.e}p(m.b);k(g);x=q-m.n-f(g);for(p(g);0<u&&h<c;)u--,x&=32767,q&=32767,a[b+h++]=d[q++]=d[x++]}if(h===c)return c}e=-1;return h}function l(a,b,e){var c,d,g,m,s,l,q,r=Array(316);for(c=0;c<r.length;c++)r[c]=0;k(5);l=257+f(5);p(5);k(5);q=1+f(5);p(5);k(4);c=4+f(4);p(4);if(286<l||30<q)return-1;for(d=0;d<c;d++)k(3),r[B[d]]=f(3),p(3);for(d=c;19>d;d++)r[B[d]]=0;v=
7;d=new h(r,19,19,null,null,v);if(0!==d.status)return-1;w=d.root;v=d.m;m=l+q;for(c=g=0;c<m;)if(k(v),s=w.list[f(v)],d=s.b,p(d),d=s.n,16>d)r[c++]=g=d;else if(16===d){k(2);d=3+f(2);p(2);if(c+d>m)return-1;for(;0<d--;)r[c++]=g}else{17===d?(k(3),d=3+f(3),p(3)):(k(7),d=11+f(7),p(7));if(c+d>m)return-1;for(;0<d--;)r[c++]=0;g=0}v=9;d=new h(r,l,257,A,L,v);0===v&&(d.status=1);if(0!==d.status)return-1;w=d.root;v=d.m;for(c=0;c<q;c++)r[c]=r[c+l];t=6;d=new h(r,q,0,E,V,t);z=d.root;t=d.m;return 0===t&&257<l||0!==d.status?
-1:n(a,b,e)}var d=[],q,r=null,c,g,b,a,e,m,u,x,w,z,v,t,s,F,C=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],A=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],E=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],V=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[16,17,18,0,8,7,9,6,
10,5,11,4,12,3,13,2,14,1,15],H;this.inflate=function(ea,C){d.length=65536;a=b=q=0;e=-1;m=!1;u=x=0;w=null;s=ea;F=0;var y=new Uint8Array(new ArrayBuffer(C));a:for(var B=0,T;B<C&&(!m||-1!==e);){if(0<u){if(0!==e)for(;0<u&&B<C;)u--,x&=32767,q&=32767,y[0+B]=d[q]=d[x],B+=1,q+=1,x+=1;else{for(;0<u&&B<C;)u-=1,q&=32767,k(8),y[0+B]=d[q]=f(8),B+=1,q+=1,p(8);0===u&&(e=-1)}if(B===C)break}if(-1===e){if(m)break;k(1);0!==f(1)&&(m=!0);p(1);k(2);e=f(2);p(2);w=null;u=0}switch(e){case 0:T=y;var K=0+B,P=C-B,G=void 0,G=
a&7;p(G);k(16);G=f(16);p(16);k(16);if(G!==(~b&65535))T=-1;else{p(16);u=G;for(G=0;0<u&&G<P;)u--,q&=32767,k(8),T[K+G++]=d[q++]=f(8),p(8);0===u&&(e=-1);T=G}break;case 1:if(null!==w)T=n(y,0+B,C-B);else b:{T=y;K=0+B;P=C-B;if(null===r){for(var I=void 0,G=Array(288),I=void 0,I=0;144>I;I++)G[I]=8;for(I=144;256>I;I++)G[I]=9;for(I=256;280>I;I++)G[I]=7;for(I=280;288>I;I++)G[I]=8;g=7;I=new h(G,288,257,A,L,g);if(0!==I.status){alert("HufBuild error: "+I.status);T=-1;break b}r=I.root;g=I.m;for(I=0;30>I;I++)G[I]=
5;H=5;I=new h(G,30,0,E,V,H);if(1<I.status){r=null;alert("HufBuild error: "+I.status);T=-1;break b}c=I.root;H=I.m}w=r;z=c;v=g;t=H;T=n(T,K,P)}break;case 2:T=null!==w?n(y,0+B,C-B):l(y,0+B,C-B);break;default:T=-1}if(-1===T)break a;B+=T}s=new Uint8Array(new ArrayBuffer(0));return y}};
// Input 12
core.ScheduledTask=function(h,k){function f(){l&&(runtime.clearTimeout(n),l=!1)}function p(){f();h.apply(void 0,d);d=null}var n,l=!1,d=[];this.trigger=function(){d=Array.prototype.slice.call(arguments);l||(l=!0,n=runtime.setTimeout(p,k))};this.triggerImmediate=function(){d=Array.prototype.slice.call(arguments);p()};this.processRequests=function(){l&&p()};this.cancel=f;this.destroy=function(d){f();d()}};
// Input 13
core.UnitTest=function(){};core.UnitTest.prototype.setUp=function(){};core.UnitTest.prototype.tearDown=function(){};core.UnitTest.prototype.description=function(){};core.UnitTest.prototype.tests=function(){};core.UnitTest.prototype.asyncTests=function(){};
core.UnitTest.provideTestAreaDiv=function(){var h=runtime.getWindow().document,k=h.getElementById("testarea");runtime.assert(!k,'Unclean test environment, found a div with id "testarea".');k=h.createElement("div");k.setAttribute("id","testarea");h.body.appendChild(k);return k};
core.UnitTest.cleanupTestAreaDiv=function(){var h=runtime.getWindow().document,k=h.getElementById("testarea");runtime.assert(!!k&&k.parentNode===h.body,'Test environment broken, found no div with id "testarea" below body.');h.body.removeChild(k)};core.UnitTest.createOdtDocument=function(h,k){var f="<?xml version='1.0' encoding='UTF-8'?>",f=f+"<office:document";Object.keys(k).forEach(function(h){f+=" xmlns:"+h+'="'+k[h]+'"'});f+=">";f+=h;f+="</office:document>";return runtime.parseXML(f)};
core.UnitTestLogger=function(){var h=[],k=0,f=0,p="",n="";this.startTest=function(l,d){h=[];k=0;p=l;n=d;f=(new Date).getTime()};this.endTest=function(){var l=(new Date).getTime();return{description:n,suite:[p,n],success:0===k,log:h.map(function(d){return d.message}),time:l-f}};this.debug=function(f){h.push({category:"debug",message:f})};this.fail=function(f){k+=1;h.push({category:"fail",message:f})};this.pass=function(f){h.push({category:"pass",message:f})}};
core.UnitTestRunner=function(h,k){function f(c){r+=1;k.fail(c)}function p(c,b){var a;try{if(c.length!==b.length)return f("array of length "+c.length+" should be "+b.length+" long"),!1;for(a=0;a<c.length;a+=1)if(c[a]!==b[a])return f(c[a]+" should be "+b[a]+" at array index "+a),!1}catch(e){return!1}return!0}function n(c,b,a){var e=c.attributes,d=e.length,h,l,q;for(h=0;h<d;h+=1)if(l=e.item(h),"xmlns"!==l.prefix&&"urn:webodf:names:steps"!==l.namespaceURI){q=b.getAttributeNS(l.namespaceURI,l.localName);
if(!b.hasAttributeNS(l.namespaceURI,l.localName))return f("Attribute "+l.localName+" with value "+l.value+" was not present"),!1;if(q!==l.value)return f("Attribute "+l.localName+" was "+q+" should be "+l.value),!1}return a?!0:n(b,c,!0)}function l(c,b){var a,e;a=c.nodeType;e=b.nodeType;if(a!==e)return f("Nodetype '"+a+"' should be '"+e+"'"),!1;if(a===Node.TEXT_NODE){if(c.data===b.data)return!0;f("Textnode data '"+c.data+"' should be '"+b.data+"'");return!1}runtime.assert(a===Node.ELEMENT_NODE,"Only textnodes and elements supported.");
if(c.namespaceURI!==b.namespaceURI)return f("namespace '"+c.namespaceURI+"' should be '"+b.namespaceURI+"'"),!1;if(c.localName!==b.localName)return f("localName '"+c.localName+"' should be '"+b.localName+"'"),!1;if(!n(c,b,!1))return!1;a=c.firstChild;for(e=b.firstChild;a;){if(!e)return f("Nodetype '"+a.nodeType+"' is unexpected here."),!1;if(!l(a,e))return!1;a=a.nextSibling;e=e.nextSibling}return e?(f("Nodetype '"+e.nodeType+"' is missing here."),!1):!0}function d(d,b){return 0===b?d===b&&1/d===1/
b:d===b?!0:null===d||null===b?!1:"number"===typeof b&&isNaN(b)?"number"===typeof d&&isNaN(d):Object.prototype.toString.call(b)===Object.prototype.toString.call([])?p(d,b):"object"===typeof b&&"object"===typeof d?b.constructor===Element||b.constructor===Node?l(d,b):c(d,b):!1}function q(c,b,a){"string"===typeof b&&"string"===typeof a||k.debug("WARN: shouldBe() expects string arguments");var e,m;try{m=eval(b)}catch(h){e=h}c=eval(a);e?f(b+" should be "+c+". Threw exception "+e):d(m,c)?k.pass(b+" is "+
a):String(typeof m)===String(typeof c)?(a=0===m&&0>1/m?"-0":String(m),f(b+" should be "+c+". Was "+a+".")):f(b+" should be "+c+" (of type "+typeof c+"). Was "+m+" (of type "+typeof m+").")}var r=0,c;this.resourcePrefix=function(){return h};c=function(c,b){var a=Object.keys(c),e=Object.keys(b);a.sort();e.sort();return p(a,e)&&Object.keys(c).every(function(a){var e=c[a],h=b[a];return d(e,h)?!0:(f(e+" should be "+h+" for key "+a),!1)})};this.areNodesEqual=l;this.shouldBeNull=function(c,b){q(c,b,"null")};
this.shouldBeNonNull=function(c,b){var a,e;try{e=eval(b)}catch(d){a=d}a?f(b+" should be non-null. Threw exception "+a):null!==e?k.pass(b+" is non-null."):f(b+" should be non-null. Was "+e)};this.shouldBe=q;this.countFailedTests=function(){return r};this.name=function(c){var b,a,e=[],d=c.length;e.length=d;for(b=0;b<d;b+=1){a=Runtime.getFunctionName(c[b])||"";if(""===a)throw"Found a function without a name.";e[b]={f:c[b],name:a}}return e}};
core.UnitTester=function(){function h(d,f){return"<span style='color:blue;cursor:pointer' onclick='"+f+"'>"+d+"</span>"}function k(d){f.reporter&&f.reporter(d)}var f=this,p=0,n=new core.UnitTestLogger,l={},d="BrowserRuntime"===runtime.type();this.resourcePrefix="";this.reporter=function(f){var l,c;d?runtime.log("<span>Running "+h(f.description,'runTest("'+f.suite[0]+'","'+f.description+'")')+"</span>"):runtime.log("Running "+f.description);if(!f.success)for(l=0;l<f.log.length;l+=1)c=f.log[l],runtime.log(c.category,
c.message)};this.runTests=function(q,r,c){function g(c){if(0===c.length)l[b]=m,p+=a.countFailedTests(),r();else{x=c[0].f;var d=c[0].name;z=a.countFailedTests();e.setUp();n.startTest(b,d);x(function(){k(n.endTest());e.tearDown();m[d]=z===a.countFailedTests();g(c.slice(1))})}}var b=Runtime.getFunctionName(q)||"",a=new core.UnitTestRunner(f.resourcePrefix,n),e=new q(a),m={},u,x,w,z;if(l.hasOwnProperty(b))runtime.log("Test "+b+" has already run.");else{d?runtime.log("<span>Running "+h(b,'runSuite("'+
b+'");')+": "+e.description()+"</span>"):runtime.log("Running "+b+": "+e.description);w=e.tests();for(u=0;u<w.length;u+=1)x=w[u].f,q=w[u].name,c.length&&-1===c.indexOf(q)||(z=a.countFailedTests(),e.setUp(),n.startTest(b,q),x(),k(n.endTest()),e.tearDown(),m[q]=z===a.countFailedTests());g(e.asyncTests())}};this.countFailedTests=function(){return p};this.results=function(){return l}};
// Input 14
core.Utils=function(){function h(k,f){if(f&&Array.isArray(f)){k=k||[];if(!Array.isArray(k))throw"Destination is not an array.";k=k.concat(f.map(function(f){return h(null,f)}))}else if(f&&"object"===typeof f){k=k||{};if("object"!==typeof k)throw"Destination is not an object.";Object.keys(f).forEach(function(p){k[p]=h(k[p],f[p])})}else k=f;return k}this.hashString=function(h){var f=0,p,n;p=0;for(n=h.length;p<n;p+=1)f=(f<<5)-f+h.charCodeAt(p),f|=0;return f};this.mergeObjects=function(k,f){Object.keys(f).forEach(function(p){k[p]=
h(k[p],f[p])});return k}};
// Input 15
/*

 WebODF
 Copyright (c) 2010 Jos van den Oever
 Licensed under the ... License:

 Project home: http://www.webodf.org/
*/
runtime.loadClass("core.RawInflate");runtime.loadClass("core.ByteArray");runtime.loadClass("core.ByteArrayWriter");runtime.loadClass("core.Base64");
core.Zip=function(h,k){function f(a){var b=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,
853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,
4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,
225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,
2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,
2932959818,3654703836,1088359270,936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],e,c,d=a.length,g=0,g=0;e=-1;for(c=0;c<d;c+=1)g=(e^a[c])&255,g=b[g],e=e>>>8^g;return e^-1}function p(a){return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&15,a>>5&63,(a&31)<<1)}function n(a){var b=a.getFullYear();return 1980>b?0:b-1980<<
25|a.getMonth()+1<<21|a.getDate()<<16|a.getHours()<<11|a.getMinutes()<<5|a.getSeconds()>>1}function l(a,b){var e,c,d,g,f,h,l,n=this;this.load=function(b){if(null!==n.data)b(null,n.data);else{var e=f+34+c+d+256;e+l>m&&(e=m-l);runtime.read(a,l,e,function(e,c){if(e||null===c)b(e,c);else a:{var d=c,m=new core.ByteArray(d),l=m.readUInt32LE(),s;if(67324752!==l)b("File entry signature is wrong."+l.toString()+" "+d.length.toString(),null);else{m.pos+=22;l=m.readUInt16LE();s=m.readUInt16LE();m.pos+=l+s;if(g){d=
d.subarray(m.pos,m.pos+f);if(f!==d.length){b("The amount of compressed bytes read was "+d.length.toString()+" instead of "+f.toString()+" for "+n.filename+" in "+a+".",null);break a}d=x(d,h)}else d=d.subarray(m.pos,m.pos+h);h!==d.length?b("The amount of bytes read was "+d.length.toString()+" instead of "+h.toString()+" for "+n.filename+" in "+a+".",null):(n.data=d,b(null,d))}}})}};this.set=function(a,b,e,c){n.filename=a;n.data=b;n.compressed=e;n.date=c};this.error=null;b&&(e=b.readUInt32LE(),33639248!==
e?this.error="Central directory entry has wrong signature at position "+(b.pos-4).toString()+' for file "'+a+'": '+b.data.length.toString():(b.pos+=6,g=b.readUInt16LE(),this.date=p(b.readUInt32LE()),b.readUInt32LE(),f=b.readUInt32LE(),h=b.readUInt32LE(),c=b.readUInt16LE(),d=b.readUInt16LE(),e=b.readUInt16LE(),b.pos+=8,l=b.readUInt32LE(),this.filename=runtime.byteArrayToString(b.data.subarray(b.pos,b.pos+c),"utf8"),this.data=null,b.pos+=c+d+e))}function d(a,b){if(22!==a.length)b("Central directory length should be 22.",
w);else{var c=new core.ByteArray(a),d;d=c.readUInt32LE();101010256!==d?b("Central directory signature is wrong: "+d.toString(),w):(d=c.readUInt16LE(),0!==d?b("Zip files with non-zero disk numbers are not supported.",w):(d=c.readUInt16LE(),0!==d?b("Zip files with non-zero disk numbers are not supported.",w):(d=c.readUInt16LE(),u=c.readUInt16LE(),d!==u?b("Number of entries is inconsistent.",w):(d=c.readUInt32LE(),c=c.readUInt16LE(),c=m-22-d,runtime.read(h,c,m-c,function(a,c){if(a||null===c)b(a,w);else a:{var d=
new core.ByteArray(c),g,m;e=[];for(g=0;g<u;g+=1){m=new l(h,d);if(m.error){b(m.error,w);break a}e[e.length]=m}b(null,w)}})))))}}function q(a,b){var c=null,d,g;for(g=0;g<e.length;g+=1)if(d=e[g],d.filename===a){c=d;break}c?c.data?b(null,c.data):c.load(b):b(a+" not found.",null)}function r(a){var b=new core.ByteArrayWriter("utf8"),e=0;b.appendArray([80,75,3,4,20,0,0,0,0,0]);a.data&&(e=a.data.length);b.appendUInt32LE(n(a.date));b.appendUInt32LE(a.data?f(a.data):0);b.appendUInt32LE(e);b.appendUInt32LE(e);
b.appendUInt16LE(a.filename.length);b.appendUInt16LE(0);b.appendString(a.filename);a.data&&b.appendByteArray(a.data);return b}function c(a,b){var e=new core.ByteArrayWriter("utf8"),c=0;e.appendArray([80,75,1,2,20,0,20,0,0,0,0,0]);a.data&&(c=a.data.length);e.appendUInt32LE(n(a.date));e.appendUInt32LE(a.data?f(a.data):0);e.appendUInt32LE(c);e.appendUInt32LE(c);e.appendUInt16LE(a.filename.length);e.appendArray([0,0,0,0,0,0,0,0,0,0,0,0]);e.appendUInt32LE(b);e.appendString(a.filename);return e}function g(a,
b){if(a===e.length)b(null);else{var c=e[a];null!==c.data?g(a+1,b):c.load(function(e){e?b(e):g(a+1,b)})}}function b(a,b){g(0,function(d){if(d)b(d);else{var g,m,f=new core.ByteArrayWriter("utf8"),h=[0];for(g=0;g<e.length;g+=1)f.appendByteArrayWriter(r(e[g])),h.push(f.getLength());d=f.getLength();for(g=0;g<e.length;g+=1)m=e[g],f.appendByteArrayWriter(c(m,h[g]));g=f.getLength()-d;f.appendArray([80,75,5,6,0,0,0,0]);f.appendUInt16LE(e.length);f.appendUInt16LE(e.length);f.appendUInt32LE(g);f.appendUInt32LE(d);
f.appendArray([0,0]);a(f.getByteArray())}})}function a(a,e){b(function(b){runtime.writeFile(a,b,e)},e)}var e,m,u,x=(new core.RawInflate).inflate,w=this,z=new core.Base64;this.load=q;this.save=function(a,b,c,d){var g,m;for(g=0;g<e.length;g+=1)if(m=e[g],m.filename===a){m.set(a,b,c,d);return}m=new l(h);m.set(a,b,c,d);e.push(m)};this.remove=function(a){var b,c;for(b=0;b<e.length;b+=1)if(c=e[b],c.filename===a)return e.splice(b,1),!0;return!1};this.write=function(b){a(h,b)};this.writeAs=a;this.createByteArray=
b;this.loadContentXmlAsFragments=function(a,b){w.loadAsString(a,function(a,e){if(a)return b.rootElementReady(a);b.rootElementReady(null,e,!0)})};this.loadAsString=function(a,b){q(a,function(a,e){if(a||null===e)return b(a,null);var c=runtime.byteArrayToString(e,"utf8");b(null,c)})};this.loadAsDOM=function(a,b){w.loadAsString(a,function(a,e){if(a||null===e)b(a,null);else{var c=(new DOMParser).parseFromString(e,"text/xml");b(null,c)}})};this.loadAsDataURL=function(a,b,e){q(a,function(a,c){if(a||!c)return e(a,
null);var d=0,g;b||(b=80===c[1]&&78===c[2]&&71===c[3]?"image/png":255===c[0]&&216===c[1]&&255===c[2]?"image/jpeg":71===c[0]&&73===c[1]&&70===c[2]?"image/gif":"");for(g="data:"+b+";base64,";d<c.length;)g+=z.convertUTF8ArrayToBase64(c.subarray(d,Math.min(d+45E3,c.length))),d+=45E3;e(null,g)})};this.getEntries=function(){return e.slice()};m=-1;null===k?e=[]:runtime.getFileSize(h,function(a){m=a;0>m?k("File '"+h+"' cannot be read.",w):runtime.read(h,m-22,22,function(a,b){a||null===k||null===b?k(a,w):
d(b,k)})})};
// Input 16
gui.Avatar=function(h,k){var f=this,p,n,l;this.setColor=function(d){n.style.borderColor=d};this.setImageUrl=function(d){f.isVisible()?n.src=d:l=d};this.isVisible=function(){return"block"===p.style.display};this.show=function(){l&&(n.src=l,l=void 0);p.style.display="block"};this.hide=function(){p.style.display="none"};this.markAsFocussed=function(d){p.className=d?"active":""};this.destroy=function(d){h.removeChild(p);d()};(function(){var d=h.ownerDocument,f=d.documentElement.namespaceURI;p=d.createElementNS(f,
"div");n=d.createElementNS(f,"img");n.width=64;n.height=64;p.appendChild(n);p.style.width="64px";p.style.height="70px";p.style.position="absolute";p.style.top="-80px";p.style.left="-34px";p.style.display=k?"block":"none";p.className="handle";h.appendChild(p)})()};
// Input 17
gui.EditInfoHandle=function(h){var k=[],f,p=h.ownerDocument,n=p.documentElement.namespaceURI;this.setEdits=function(h){k=h;var d,q,r,c;f.innerHTML="";for(h=0;h<k.length;h+=1)d=p.createElementNS(n,"div"),d.className="editInfo",q=p.createElementNS(n,"span"),q.className="editInfoColor",q.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",k[h].memberid),r=p.createElementNS(n,"span"),r.className="editInfoAuthor",r.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",k[h].memberid),
c=p.createElementNS(n,"span"),c.className="editInfoTime",c.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",k[h].memberid),c.innerHTML=k[h].time,d.appendChild(q),d.appendChild(r),d.appendChild(c),f.appendChild(d)};this.show=function(){f.style.display="block"};this.hide=function(){f.style.display="none"};this.destroy=function(l){h.removeChild(f);l()};f=p.createElementNS(n,"div");f.setAttribute("class","editInfoHandle");f.style.display="none";h.appendChild(f)};
// Input 18
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.KeyboardHandler=function(){function h(f,h){h||(h=k.None);return f+":"+h}var k=gui.KeyboardHandler.Modifier,f=null,p={};this.setDefault=function(h){f=h};this.bind=function(f,l,d){f=h(f,l);runtime.assert(!1===p.hasOwnProperty(f),"tried to overwrite the callback handler of key combo: "+f);p[f]=d};this.unbind=function(f,l){var d=h(f,l);delete p[d]};this.reset=function(){f=null;p={}};this.handleEvent=function(n){var l=n.keyCode,d=k.None;n.metaKey&&(d|=k.Meta);n.ctrlKey&&(d|=k.Ctrl);n.altKey&&(d|=k.Alt);
n.shiftKey&&(d|=k.Shift);l=h(l,d);l=p[l];d=!1;l?d=l():null!==f&&(d=f(n));d&&(n.preventDefault?n.preventDefault():n.returnValue=!1)}};gui.KeyboardHandler.Modifier={None:0,Meta:1,Ctrl:2,Alt:4,CtrlAlt:6,Shift:8,MetaShift:9,CtrlShift:10,AltShift:12};
gui.KeyboardHandler.KeyCode={Backspace:8,Tab:9,Clear:12,Enter:13,Ctrl:17,End:35,Home:36,Left:37,Up:38,Right:39,Down:40,Delete:46,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LeftMeta:91,MetaInMozilla:224};(function(){return gui.KeyboardHandler})();
// Input 19
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.Namespaces={namespaceMap:{db:"urn:oasis:names:tc:opendocument:xmlns:database:1.0",dc:"http://purl.org/dc/elements/1.1/",dr3d:"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",draw:"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",chart:"urn:oasis:names:tc:opendocument:xmlns:chart:1.0",fo:"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",form:"urn:oasis:names:tc:opendocument:xmlns:form:1.0",meta:"urn:oasis:names:tc:opendocument:xmlns:meta:1.0",number:"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
office:"urn:oasis:names:tc:opendocument:xmlns:office:1.0",presentation:"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",style:"urn:oasis:names:tc:opendocument:xmlns:style:1.0",svg:"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",table:"urn:oasis:names:tc:opendocument:xmlns:table:1.0",text:"urn:oasis:names:tc:opendocument:xmlns:text:1.0",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},prefixMap:{},dbns:"urn:oasis:names:tc:opendocument:xmlns:database:1.0",
dcns:"http://purl.org/dc/elements/1.1/",dr3dns:"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",drawns:"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",chartns:"urn:oasis:names:tc:opendocument:xmlns:chart:1.0",fons:"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",formns:"urn:oasis:names:tc:opendocument:xmlns:form:1.0",metans:"urn:oasis:names:tc:opendocument:xmlns:meta:1.0",numberns:"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",officens:"urn:oasis:names:tc:opendocument:xmlns:office:1.0",
presentationns:"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",stylens:"urn:oasis:names:tc:opendocument:xmlns:style:1.0",svgns:"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",tablens:"urn:oasis:names:tc:opendocument:xmlns:table:1.0",textns:"urn:oasis:names:tc:opendocument:xmlns:text:1.0",xlinkns:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/XML/1998/namespace"};
(function(){var h=odf.Namespaces.namespaceMap,k=odf.Namespaces.prefixMap,f;for(f in h)h.hasOwnProperty(f)&&(k[h[f]]=f)})();odf.Namespaces.forEachPrefix=function(h){var k=odf.Namespaces.namespaceMap,f;for(f in k)k.hasOwnProperty(f)&&h(f,k[f])};odf.Namespaces.lookupNamespaceURI=function(h){var k=null;odf.Namespaces.namespaceMap.hasOwnProperty(h)&&(k=odf.Namespaces.namespaceMap[h]);return k};odf.Namespaces.lookupPrefix=function(h){var k=odf.Namespaces.prefixMap;return k.hasOwnProperty(h)?k[h]:null};
odf.Namespaces.lookupNamespaceURI.lookupNamespaceURI=odf.Namespaces.lookupNamespaceURI;
// Input 20
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.Namespaces");
odf.OdfUtils=function(){function h(a){return"image"===(a&&a.localName)&&a.namespaceURI===E}function k(a){return null!==a&&a.nodeType===Node.ELEMENT_NODE&&"frame"===a.localName&&a.namespaceURI===E&&"as-char"===a.getAttributeNS(L,"anchor-type")}function f(a){var b;(b="annotation"===(a&&a.localName)&&a.namespaceURI===odf.Namespaces.officens)||(b="div"===(a&&a.localName)&&"annotationWrapper"===a.className);return b}function p(a){return"a"===(a&&a.localName)&&a.namespaceURI===L}function n(a){var b=a&&
a.localName;return("p"===b||"h"===b)&&a.namespaceURI===L}function l(a){for(;a&&!n(a);)a=a.parentNode;return a}function d(a){return/^[ \t\r\n]+$/.test(a)}function q(a){if(null===a||a.nodeType!==Node.ELEMENT_NODE)return!1;var b=a.localName;return/^(span|p|h|a|meta)$/.test(b)&&a.namespaceURI===L||"span"===b&&"annotationHighlight"===a.className}function r(a){var b=a&&a.localName,e=!1;b&&(a=a.namespaceURI,a===L&&(e="s"===b||"tab"===b||"line-break"===b));return e}function c(a){return r(a)||k(a)||f(a)}function g(a){var b=
a&&a.localName,e=!1;b&&(a=a.namespaceURI,a===L&&(e="s"===b));return e}function b(a){for(;null!==a.firstChild&&q(a);)a=a.firstChild;return a}function a(a){for(;null!==a.lastChild&&q(a);)a=a.lastChild;return a}function e(b){for(;!n(b)&&null===b.previousSibling;)b=b.parentNode;return n(b)?null:a(b.previousSibling)}function m(a){for(;!n(a)&&null===a.nextSibling;)a=a.parentNode;return n(a)?null:b(a.nextSibling)}function u(a){for(var b=!1;a;)if(a.nodeType===Node.TEXT_NODE)if(0===a.length)a=e(a);else return!d(a.data.substr(a.length-
1,1));else c(a)?(b=!1===g(a),a=null):a=e(a);return b}function x(a){var e=!1,g;for(a=a&&b(a);a;){g=a.nodeType===Node.TEXT_NODE?a.length:0;if(0<g&&!d(a.data)){e=!0;break}if(c(a)){e=!0;break}a=m(a)}return e}function w(a,b){return d(a.data.substr(b))?!x(m(a)):!1}function z(a,b){var g=a.data,m;if(!d(g[b])||c(a.parentNode))return!1;0<b?d(g[b-1])||(m=!0):u(e(a))&&(m=!0);return!0===m?w(a,b)?!1:!0:!1}function v(a){return(a=/(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px)|(%))/.exec(a))?
{value:parseFloat(a[1]),unit:a[3]}:null}function t(a){return(a=v(a))&&(0>a.value||"%"===a.unit)?null:a}function s(a){return(a=v(a))&&"%"!==a.unit?null:a}function F(a){switch(a.namespaceURI){case odf.Namespaces.drawns:case odf.Namespaces.svgns:case odf.Namespaces.dr3dns:return!1;case odf.Namespaces.textns:switch(a.localName){case "note-body":case "ruby-text":return!1}break;case odf.Namespaces.officens:switch(a.localName){case "annotation":case "binary-data":case "event-listeners":return!1}break;default:switch(a.localName){case "editinfo":return!1}}return!0}
function C(a,b,e){var g=a.startContainer.ownerDocument.createRange(),m;m=H.getNodesInRange(a,function(m){g.selectNodeContents(m);if(r(m.parentNode)||f(m.parentNode))return NodeFilter.FILTER_REJECT;if(m.nodeType===Node.TEXT_NODE){if(b&&H.rangesIntersect(a,g)||H.containsRange(a,g))if(e||Boolean(l(m)&&(!d(m.textContent)||z(m,0))))return NodeFilter.FILTER_ACCEPT}else if(c(m)){if(b&&H.rangesIntersect(a,g)||H.containsRange(a,g))return NodeFilter.FILTER_ACCEPT}else if(F(m)||q(m))return NodeFilter.FILTER_SKIP;
return NodeFilter.FILTER_REJECT});g.detach();return m}function A(a,b){var e=a;if(b<e.childNodes.length-1)e=e.childNodes[b+1];else{for(;!e.nextSibling;)e=e.parentNode;e=e.nextSibling}for(;e.firstChild;)e=e.firstChild;return e}var L=odf.Namespaces.textns,E=odf.Namespaces.drawns,V=odf.Namespaces.xlinkns,B=/^\s*$/,H=new core.DomUtils;this.isImage=h;this.isCharacterFrame=k;this.isInlineRoot=f;this.isTextSpan=function(a){return"span"===(a&&a.localName)&&a.namespaceURI===L};this.isHyperlink=p;this.getHyperlinkTarget=
function(a){return a.getAttributeNS(V,"href")};this.isParagraph=n;this.getParagraphElement=l;this.isWithinTrackedChanges=function(a,b){for(;a&&a!==b;){if(a.namespaceURI===L&&"tracked-changes"===a.localName)return!0;a=a.parentNode}return!1};this.isListItem=function(a){return"list-item"===(a&&a.localName)&&a.namespaceURI===L};this.isLineBreak=function(a){return"line-break"===(a&&a.localName)&&a.namespaceURI===L};this.isODFWhitespace=d;this.isGroupingElement=q;this.isCharacterElement=r;this.isAnchoredAsCharacterElement=
c;this.isSpaceElement=g;this.firstChild=b;this.lastChild=a;this.previousNode=e;this.nextNode=m;this.scanLeftForNonSpace=u;this.lookLeftForCharacter=function(a){var b,g=b=0;a.nodeType===Node.TEXT_NODE&&(g=a.length);0<g?(b=a.data,b=d(b.substr(g-1,1))?1===g?u(e(a))?2:0:d(b.substr(g-2,1))?0:2:1):c(a)&&(b=1);return b};this.lookRightForCharacter=function(a){var b=!1,e=0;a&&a.nodeType===Node.TEXT_NODE&&(e=a.length);0<e?b=!d(a.data.substr(0,1)):c(a)&&(b=!0);return b};this.scanLeftForAnyCharacter=function(b){var g=
!1,m;for(b=b&&a(b);b;){m=b.nodeType===Node.TEXT_NODE?b.length:0;if(0<m&&!d(b.data)){g=!0;break}if(c(b)){g=!0;break}b=e(b)}return g};this.scanRightForAnyCharacter=x;this.isTrailingWhitespace=w;this.isSignificantWhitespace=z;this.isDowngradableSpaceElement=function(a){return a.namespaceURI===L&&"s"===a.localName?u(e(a))&&x(m(a)):!1};this.getFirstNonWhitespaceChild=function(a){for(a=a&&a.firstChild;a&&a.nodeType===Node.TEXT_NODE&&B.test(a.nodeValue);)a=a.nextSibling;return a};this.parseLength=v;this.parseNonNegativeLength=
t;this.parseFoFontSize=function(a){var b;b=(b=v(a))&&(0>=b.value||"%"===b.unit)?null:b;return b||s(a)};this.parseFoLineHeight=function(a){return t(a)||s(a)};this.getImpactedParagraphs=function(a){var b,e,c;b=a.commonAncestorContainer;var d=[],g=[];for(b.nodeType===Node.ELEMENT_NODE&&(d=H.getElementsByTagNameNS(b,L,"p").concat(H.getElementsByTagNameNS(b,L,"h")));b&&!n(b);)b=b.parentNode;b&&d.push(b);e=d.length;for(b=0;b<e;b+=1)c=d[b],H.rangeIntersectsNode(a,c)&&g.push(c);return g};this.isTextContentContainingNode=
F;this.getTextNodes=function(a,b){var e=a.startContainer.ownerDocument.createRange(),c;c=H.getNodesInRange(a,function(c){e.selectNodeContents(c);if(c.nodeType===Node.TEXT_NODE){if(b&&H.rangesIntersect(a,e)||H.containsRange(a,e))return Boolean(l(c)&&(!d(c.textContent)||z(c,0)))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}else if(H.rangesIntersect(a,e)&&F(c))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_REJECT});e.detach();return c};this.getTextElements=C;this.getParagraphElements=function(a){var b=
a.startContainer.ownerDocument.createRange(),e;e=H.getNodesInRange(a,function(e){b.selectNodeContents(e);if(n(e)){if(H.rangesIntersect(a,b))return NodeFilter.FILTER_ACCEPT}else if(F(e)||q(e))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_REJECT});b.detach();return e};this.getImageElements=function(a){var b=a.startContainer.ownerDocument.createRange(),e;e=H.getNodesInRange(a,function(e){b.selectNodeContents(e);return h(e)&&H.containsRange(a,b)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});
b.detach();return e};this.getHyperlinkElements=function(a){var b=[],e=a.cloneRange();a.collapsed&&a.endContainer.nodeType===Node.ELEMENT_NODE&&(a=A(a.endContainer,a.endOffset),a.nodeType===Node.TEXT_NODE&&e.setEnd(a,1));C(e,!0,!1).forEach(function(a){for(a=a.parentNode;!n(a);){if(p(a)&&-1===b.indexOf(a)){b.push(a);break}a=a.parentNode}});e.detach();return b}};
// Input 21
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Server=function(){};ops.Server.prototype.connect=function(h,k){};ops.Server.prototype.networkStatus=function(){};ops.Server.prototype.login=function(h,k,f,p){};ops.Server.prototype.joinSession=function(h,k,f,p){};ops.Server.prototype.leaveSession=function(h,k,f,p){};ops.Server.prototype.getGenesisUrl=function(h){};
// Input 22
xmldom.LSSerializerFilter=function(){};xmldom.LSSerializerFilter.prototype.acceptNode=function(h){};
// Input 23
xmldom.XPathIterator=function(){};xmldom.XPathIterator.prototype.next=function(){};xmldom.XPathIterator.prototype.reset=function(){};
function createXPathSingleton(){function h(c,b,a){return-1!==c&&(c<b||-1===b)&&(c<a||-1===a)}function k(d){for(var b=[],a=0,e=d.length,m;a<e;){var f=d,l=e,n=b,q="",p=[],r=f.indexOf("[",a),k=f.indexOf("/",a),F=f.indexOf("=",a);h(k,r,F)?(q=f.substring(a,k),a=k+1):h(r,k,F)?(q=f.substring(a,r),a=c(f,r,p)):h(F,k,r)?(q=f.substring(a,F),a=F):(q=f.substring(a,l),a=l);n.push({location:q,predicates:p});if(a<e&&"="===d[a]){m=d.substring(a+1,e);if(2<m.length&&("'"===m[0]||'"'===m[0]))m=m.slice(1,m.length-1);
else try{m=parseInt(m,10)}catch(C){}a=e}}return{steps:b,value:m}}function f(){var c=null,b=!1;this.setNode=function(a){c=a};this.reset=function(){b=!1};this.next=function(){var a=b?null:c;b=!0;return a}}function p(c,b,a){this.reset=function(){c.reset()};this.next=function(){for(var e=c.next();e;){e.nodeType===Node.ELEMENT_NODE&&(e=e.getAttributeNodeNS(b,a));if(e)break;e=c.next()}return e}}function n(c,b){var a=c.next(),e=null;this.reset=function(){c.reset();a=c.next();e=null};this.next=function(){for(;a;){if(e)if(b&&
e.firstChild)e=e.firstChild;else{for(;!e.nextSibling&&e!==a;)e=e.parentNode;e===a?a=c.next():e=e.nextSibling}else{do(e=a.firstChild)||(a=c.next());while(a&&!e)}if(e&&e.nodeType===Node.ELEMENT_NODE)return e}return null}}function l(c,b){this.reset=function(){c.reset()};this.next=function(){for(var a=c.next();a&&!b(a);)a=c.next();return a}}function d(c,b,a){b=b.split(":",2);var e=a(b[0]),d=b[1];return new l(c,function(a){return a.localName===d&&a.namespaceURI===e})}function q(c,b,a){var e=new f,d=r(e,
b,a),h=b.value;return void 0===h?new l(c,function(a){e.setNode(a);d.reset();return null!==d.next()}):new l(c,function(a){e.setNode(a);d.reset();return(a=d.next())?a.nodeValue===h:!1})}var r,c;c=function(c,b,a){for(var e=b,d=c.length,f=0;e<d;)"]"===c[e]?(f-=1,0>=f&&a.push(k(c.substring(b,e)))):"["===c[e]&&(0>=f&&(b=e+1),f+=1),e+=1;return e};r=function(c,b,a){var e,m,f,h;for(e=0;e<b.steps.length;e+=1){f=b.steps[e];m=f.location;if(""===m)c=new n(c,!1);else if("@"===m[0]){m=m.substr(1).split(":",2);h=
a(m[0]);if(!h)throw"No namespace associated with the prefix "+m[0];c=new p(c,h,m[1])}else"."!==m&&(c=new n(c,!1),-1!==m.indexOf(":")&&(c=d(c,m,a)));for(m=0;m<f.predicates.length;m+=1)h=f.predicates[m],c=q(c,h,a)}return c};return{getODFElementsWithXPath:function(c,b,a){var e=c.ownerDocument,d=[],h=null;if(e&&"function"===typeof e.evaluate)for(a=e.evaluate(b,c,a,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null),h=a.iterateNext();null!==h;)h.nodeType===Node.ELEMENT_NODE&&d.push(h),h=a.iterateNext();else{d=
new f;d.setNode(c);c=k(b);d=r(d,c,a);c=[];for(a=d.next();a;)c.push(a),a=d.next();d=c}return d}}}xmldom.XPath=createXPathSingleton();
// Input 24
runtime.loadClass("core.DomUtils");
core.Cursor=function(h,k){function f(b){b.parentNode&&(q.push(b.previousSibling),q.push(b.nextSibling),b.parentNode.removeChild(b))}function p(b,a,e){if(a.nodeType===Node.TEXT_NODE){runtime.assert(Boolean(a),"putCursorIntoTextNode: invalid container");var c=a.parentNode;runtime.assert(Boolean(c),"putCursorIntoTextNode: container without parent");runtime.assert(0<=e&&e<=a.length,"putCursorIntoTextNode: offset is out of bounds");0===e?c.insertBefore(b,a):(e!==a.length&&a.splitText(e),c.insertBefore(b,
a.nextSibling))}else a.nodeType===Node.ELEMENT_NODE&&a.insertBefore(b,a.childNodes.item(e));q.push(b.previousSibling);q.push(b.nextSibling)}var n=h.createElementNS("urn:webodf:names:cursor","cursor"),l=h.createElementNS("urn:webodf:names:cursor","anchor"),d,q=[],r=h.createRange(),c,g=new core.DomUtils;this.getNode=function(){return n};this.getAnchorNode=function(){return l.parentNode?l:n};this.getSelectedRange=function(){c?(r.setStartBefore(n),r.collapse(!0)):(r.setStartAfter(d?l:n),r.setEndBefore(d?
n:l));return r};this.setSelectedRange=function(b,a){r&&r!==b&&r.detach();r=b;d=!1!==a;(c=b.collapsed)?(f(l),f(n),p(n,b.startContainer,b.startOffset)):(f(l),f(n),p(d?n:l,b.endContainer,b.endOffset),p(d?l:n,b.startContainer,b.startOffset));q.forEach(g.normalizeTextNodes);q.length=0};this.hasForwardSelection=function(){return d};this.remove=function(){f(n);q.forEach(g.normalizeTextNodes);q.length=0};n.setAttributeNS("urn:webodf:names:cursor","memberId",k);l.setAttributeNS("urn:webodf:names:cursor","memberId",
k)};
// Input 25
runtime.loadClass("core.PositionIterator");core.PositionFilter=function(){};core.PositionFilter.FilterResult={FILTER_ACCEPT:1,FILTER_REJECT:2,FILTER_SKIP:3};core.PositionFilter.prototype.acceptPosition=function(h){};(function(){return core.PositionFilter})();
// Input 26
runtime.loadClass("core.PositionFilter");core.PositionFilterChain=function(){var h={},k=core.PositionFilter.FilterResult.FILTER_ACCEPT,f=core.PositionFilter.FilterResult.FILTER_REJECT;this.acceptPosition=function(p){for(var n in h)if(h.hasOwnProperty(n)&&h[n].acceptPosition(p)===f)return f;return k};this.addFilter=function(f,n){h[f]=n};this.removeFilter=function(f){delete h[f]}};
// Input 27
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.AnnotatableCanvas=function(){};gui.AnnotatableCanvas.prototype.refreshSize=function(){};gui.AnnotatableCanvas.prototype.getZoomLevel=function(){};gui.AnnotatableCanvas.prototype.getSizer=function(){};
gui.AnnotationViewManager=function(h,k,f,p){function n(a){var b=a.node,d=a.end;a=c.createRange();d&&(a.setStart(b,b.childNodes.length),a.setEnd(d,0),d=g.getTextNodes(a,!1),d.forEach(function(a){var d=c.createElement("span"),g=b.getAttributeNS(odf.Namespaces.officens,"name");d.className="annotationHighlight";d.setAttribute("annotation",g);a.parentNode.insertBefore(d,a);d.appendChild(a)}));a.detach()}function l(a){var e=h.getSizer();a?(f.style.display="inline-block",e.style.paddingRight=b.getComputedStyle(f).width):
(f.style.display="none",e.style.paddingRight=0);h.refreshSize()}function d(){r.sort(function(a,b){return a.node.compareDocumentPosition(b.node)===Node.DOCUMENT_POSITION_FOLLOWING?-1:1})}function q(){var a;for(a=0;a<r.length;a+=1){var b=r[a],c=b.node.parentNode,d=c.nextElementSibling,g=d.nextElementSibling,l=c.parentNode,n=0,n=r[r.indexOf(b)-1],q=void 0,b=h.getZoomLevel();c.style.left=(f.getBoundingClientRect().left-l.getBoundingClientRect().left)/b+"px";c.style.width=f.getBoundingClientRect().width/
b+"px";d.style.width=parseFloat(c.style.left)-30+"px";n&&(q=n.node.parentNode.getBoundingClientRect(),20>=(l.getBoundingClientRect().top-q.bottom)/b?c.style.top=Math.abs(l.getBoundingClientRect().top-q.bottom)/b+20+"px":c.style.top="0px");g.style.left=d.getBoundingClientRect().width/b+"px";var d=g.style,l=g.getBoundingClientRect().left/b,n=g.getBoundingClientRect().top/b,q=c.getBoundingClientRect().left/b,k=c.getBoundingClientRect().top/b,p=0,F=0,p=q-l,p=p*p,F=k-n,F=F*F,l=Math.sqrt(p+F);d.width=l+
"px";n=Math.asin((c.getBoundingClientRect().top-g.getBoundingClientRect().top)/(b*parseFloat(g.style.width)));g.style.transform="rotate("+n+"rad)";g.style.MozTransform="rotate("+n+"rad)";g.style.WebkitTransform="rotate("+n+"rad)";g.style.msTransform="rotate("+n+"rad)"}}var r=[],c=k.ownerDocument,g=new odf.OdfUtils,b=runtime.getWindow();runtime.assert(Boolean(b),"Expected to be run in an environment which has a global window, like a browser.");this.rerenderAnnotations=q;this.getMinimumHeightForAnnotationPane=
function(){return"none"!==f.style.display&&0<r.length?(r[r.length-1].node.parentNode.getBoundingClientRect().bottom-f.getBoundingClientRect().top)/h.getZoomLevel()+"px":null};this.addAnnotation=function(a){l(!0);r.push({node:a.node,end:a.end});d();var b=c.createElement("div"),g=c.createElement("div"),f=c.createElement("div"),h=c.createElement("div"),k;k=a.node;b.className="annotationWrapper";k.parentNode.insertBefore(b,k);g.className="annotationNote";g.appendChild(k);p&&(k=c.createElement("div"),
k.className="annotationRemoveButton",g.appendChild(k));f.className="annotationConnector horizontal";h.className="annotationConnector angular";b.appendChild(g);b.appendChild(f);b.appendChild(h);a.end&&n(a);q()};this.forgetAnnotations=function(){for(;r.length;){var a=r[0],b=r.indexOf(a),d=a.node,g=d.parentNode.parentNode;"div"===g.localName&&(g.parentNode.insertBefore(d,g),g.parentNode.removeChild(g));a=a.node.getAttributeNS(odf.Namespaces.officens,"name");a=c.querySelectorAll('span.annotationHighlight[annotation="'+
a+'"]');g=d=void 0;for(d=0;d<a.length;d+=1){for(g=a.item(d);g.firstChild;)g.parentNode.insertBefore(g.firstChild,g);g.parentNode.removeChild(g)}-1!==b&&r.splice(b,1);0===r.length&&l(!1)}}};
// Input 28
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfUtils");runtime.loadClass("xmldom.XPath");
gui.HyperlinkClickHandler=function(h){function k(){h().removeAttributeNS("urn:webodf:names:helper","links")}function f(){h().setAttributeNS("urn:webodf:names:helper","links","inactive")}var p=new odf.OdfUtils,n=xmldom.XPath,l=!1;this.handleClick=function(d){var f=d.target||d.srcElement,k;if(!l||d.ctrlKey||d.metaKey){a:{for(d=f;null!==d;){if(p.isHyperlink(d))break a;if(p.isParagraph(d))break;d=d.parentNode}d=null}d&&(d=p.getHyperlinkTarget(d))&&("#"===d[0]?(d=d.substring(1),f=h(),k=n.getODFElementsWithXPath(f,
"//text:bookmark-start[@text:name='"+d+"']",odf.Namespaces.lookupNamespaceURI),0===k.length&&(k=n.getODFElementsWithXPath(f,"//text:bookmark[@text:name='"+d+"']",odf.Namespaces.lookupNamespaceURI)),0<k.length&&k[0].scrollIntoView(!0)):runtime.getWindow().open(d))}};this.showPointerCursor=k;this.showTextCursor=f;this.setEditing=function(d){(l=d)?f():k()}};
// Input 29
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.Cursor");runtime.loadClass("core.DomUtils");runtime.loadClass("core.PositionIterator");runtime.loadClass("core.PositionFilter");runtime.loadClass("core.LoopWatchDog");runtime.loadClass("odf.OdfUtils");
gui.SelectionMover=function(h,k){function f(){w.setUnfilteredPosition(h.getNode(),0);return w}function p(a,b){var c,e=null;a&&0<a.length&&(c=b?a.item(a.length-1):a.item(0));c&&(e={top:c.top,left:b?c.right:c.left,bottom:c.bottom});return e}function n(a,b,c,e){var d=a.nodeType;c.setStart(a,b);c.collapse(!e);e=p(c.getClientRects(),!0===e);!e&&0<b&&(c.setStart(a,b-1),c.setEnd(a,b),e=p(c.getClientRects(),!0));e||(d===Node.ELEMENT_NODE&&0<b&&a.childNodes.length>=b?e=n(a,b-1,c,!0):a.nodeType===Node.TEXT_NODE&&
0<b?e=n(a,b-1,c,!0):a.previousSibling?e=n(a.previousSibling,a.previousSibling.nodeType===Node.TEXT_NODE?a.previousSibling.textContent.length:a.previousSibling.childNodes.length,c,!0):a.parentNode&&a.parentNode!==k?e=n(a.parentNode,0,c,!1):(c.selectNode(k),e=p(c.getClientRects(),!1)));runtime.assert(Boolean(e),"No visible rectangle found");return e}function l(a,b,c){var e=a,d=f(),g,m=k.ownerDocument.createRange(),l=h.getSelectedRange().cloneRange(),q;for(g=n(d.container(),d.unfilteredDomOffset(),m);0<
e&&c();)e-=1;b?(b=d.container(),d=d.unfilteredDomOffset(),-1===x.comparePoints(l.startContainer,l.startOffset,b,d)?(l.setStart(b,d),q=!1):l.setEnd(b,d)):(l.setStart(d.container(),d.unfilteredDomOffset()),l.collapse(!0));h.setSelectedRange(l,q);d=f();l=n(d.container(),d.unfilteredDomOffset(),m);if(l.top===g.top||void 0===z)z=l.left;runtime.clearTimeout(v);v=runtime.setTimeout(function(){z=void 0},2E3);m.detach();return a-e}function d(a){var b=f();return a.acceptPosition(b)===t&&(b.setUnfilteredPosition(h.getAnchorNode(),
0),a.acceptPosition(b)===t)?!0:!1}function q(a,b,c){for(var e=new core.LoopWatchDog(1E4),d=0,g=0,f=0<=b?1:-1,m=0<=b?a.nextPosition:a.previousPosition;0!==b&&m();)e.check(),g+=f,c.acceptPosition(a)===t&&(b-=f,d+=g,g=0);return d}function r(a,b,c){for(var e=f(),d=new core.LoopWatchDog(1E4),g=0,m=0;0<a&&e.nextPosition();)d.check(),c.acceptPosition(e)===t&&(g+=1,b.acceptPosition(e)===t&&(m+=g,g=0,a-=1));return m}function c(a,b,c){for(var e=f(),d=new core.LoopWatchDog(1E4),g=0,m=0;0<a&&e.previousPosition();)d.check(),
c.acceptPosition(e)===t&&(g+=1,b.acceptPosition(e)===t&&(m+=g,g=0,a-=1));return m}function g(a,b){var c=f();return q(c,a,b)}function b(a,b,c){var e=f(),d=u.getParagraphElement(e.getCurrentNode()),g=0;e.setUnfilteredPosition(a,b);c.acceptPosition(e)!==t&&(g=q(e,-1,c),0===g||d&&d!==u.getParagraphElement(e.getCurrentNode()))&&(e.setUnfilteredPosition(a,b),g=q(e,1,c));return g}function a(a,b){var c=f(),e=0,d=0,g=0>a?-1:1;for(a=Math.abs(a);0<a;){for(var m=b,h=g,l=c,q=l.container(),p=0,r=null,v=void 0,
u=10,x=void 0,w=0,G=void 0,I=void 0,R=void 0,x=void 0,U=k.ownerDocument.createRange(),D=new core.LoopWatchDog(1E4),x=n(q,l.unfilteredDomOffset(),U),G=x.top,I=void 0===z?x.left:z,R=G;!0===(0>h?l.previousPosition():l.nextPosition());)if(D.check(),m.acceptPosition(l)===t&&(p+=1,q=l.container(),x=n(q,l.unfilteredDomOffset(),U),x.top!==G)){if(x.top!==R&&R!==G)break;R=x.top;x=Math.abs(I-x.left);if(null===r||x<u)r=q,v=l.unfilteredDomOffset(),u=x,w=p}null!==r?(l.setUnfilteredPosition(r,v),p=w):p=0;U.detach();
e+=p;if(0===e)break;d+=e;a-=1}return d*g}function e(a,b){var c,e,d,g,m=f(),h=u.getParagraphElement(m.getCurrentNode()),l=0,q=k.ownerDocument.createRange();0>a?(c=m.previousPosition,e=-1):(c=m.nextPosition,e=1);for(d=n(m.container(),m.unfilteredDomOffset(),q);c.call(m);)if(b.acceptPosition(m)===t){if(u.getParagraphElement(m.getCurrentNode())!==h)break;g=n(m.container(),m.unfilteredDomOffset(),q);if(g.bottom!==d.bottom&&(d=g.top>=d.top&&g.bottom<d.bottom||g.top<=d.top&&g.bottom>d.bottom,!d))break;l+=
e;d=g}q.detach();return l}function m(a,b,c){runtime.assert(null!==a,"SelectionMover.countStepsToPosition called with element===null");var e=f(),d=e.container(),g=e.unfilteredDomOffset(),m=0,h=new core.LoopWatchDog(1E4);for(e.setUnfilteredPosition(a,b);c.acceptPosition(e)!==t&&e.previousPosition();)h.check();a=e.container();runtime.assert(Boolean(a),"SelectionMover.countStepsToPosition: positionIterator.container() returned null");b=e.unfilteredDomOffset();for(e.setUnfilteredPosition(d,g);c.acceptPosition(e)!==
t&&e.previousPosition();)h.check();d=x.comparePoints(a,b,e.container(),e.unfilteredDomOffset());if(0>d)for(;e.nextPosition()&&(h.check(),c.acceptPosition(e)===t&&(m+=1),e.container()!==a||e.unfilteredDomOffset()!==b););else if(0<d)for(;e.previousPosition()&&(h.check(),c.acceptPosition(e)!==t||(m-=1,e.container()!==a||e.unfilteredDomOffset()!==b)););return m}var u=new odf.OdfUtils,x=new core.DomUtils,w,z,v,t=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.movePointForward=function(a,b){return l(a,
b||!1,w.nextPosition)};this.movePointBackward=function(a,b){return l(a,b||!1,w.previousPosition)};this.getStepCounter=function(){return{countSteps:g,convertForwardStepsBetweenFilters:r,convertBackwardStepsBetweenFilters:c,countLinesSteps:a,countStepsToLineBoundary:e,countStepsToPosition:m,isPositionWalkable:d,countPositionsToNearestStep:b}};(function(){w=gui.SelectionMover.createPositionIterator(k);var a=k.ownerDocument.createRange();a.setStart(w.container(),w.unfilteredDomOffset());a.collapse(!0);
h.setSelectedRange(a)})()};gui.SelectionMover.createPositionIterator=function(h){var k=new function(){this.acceptNode=function(f){return f&&"urn:webodf:names:cursor"!==f.namespaceURI&&"urn:webodf:names:editinfo"!==f.namespaceURI?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}};return new core.PositionIterator(h,5,k,!1)};(function(){return gui.SelectionMover})();
// Input 30
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
odf.OdfNodeFilter=function(){this.acceptNode=function(h){return"http://www.w3.org/1999/xhtml"===h.namespaceURI?NodeFilter.FILTER_SKIP:h.namespaceURI&&h.namespaceURI.match(/^urn:webodf:/)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}};
// Input 31
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfUtils");runtime.loadClass("xmldom.XPath");runtime.loadClass("core.CSSUnits");odf.StyleTreeNode=function(h){this.derivedStyles={};this.element=h};
odf.Style2CSS=function(){function h(a){var b,c,e,d={};if(!a)return d;for(a=a.firstElementChild;a;){if(c=a.namespaceURI!==m||"style"!==a.localName&&"default-style"!==a.localName?a.namespaceURI===w&&"list-style"===a.localName?"list":a.namespaceURI!==m||"page-layout"!==a.localName&&"default-page-layout"!==a.localName?void 0:"page":a.getAttributeNS(m,"family"))(b=a.getAttributeNS(m,"name"))||(b=""),d.hasOwnProperty(c)?e=d[c]:d[c]=e={},e[b]=a;a=a.nextElementSibling}return d}function k(a,b){if(a.hasOwnProperty(b))return a[b];
var c,e=null;for(c in a)if(a.hasOwnProperty(c)&&(e=k(a[c].derivedStyles,b)))break;return e}function f(a,b,c){var e,d,g;if(!b.hasOwnProperty(a))return null;e=new odf.StyleTreeNode(b[a]);d=e.element.getAttributeNS(m,"parent-style-name");g=null;d&&(g=k(c,d)||f(d,b,c));g?g.derivedStyles[a]=e:c[a]=e;delete b[a];return e}function p(a,b){for(var c in a)a.hasOwnProperty(c)&&f(c,a,b)}function n(a,b,c){var e=[];c=c.derivedStyles;var d;var g=t[a],f;void 0===g?b=null:(f=b?"["+g+'|style-name="'+b+'"]':"","presentation"===
g&&(g="draw",f=b?'[presentation|style-name="'+b+'"]':""),b=g+"|"+s[a].join(f+","+g+"|")+f);null!==b&&e.push(b);for(d in c)c.hasOwnProperty(d)&&(b=n(a,d,c[d]),e=e.concat(b));return e}function l(a,b,c){for(a=a&&a.firstElementChild;a&&(a.namespaceURI!==b||a.localName!==c);)a=a.nextElementSibling;return a}function d(a,b){var c="",e,d,g;for(e=0;e<b.length;e+=1)if(d=b[e],g=a.getAttributeNS(d[0],d[1])){g=g.trim();if(y.hasOwnProperty(d[1])){var f=g.indexOf(" "),m=void 0,h=void 0;-1!==f?(m=g.substring(0,f),
h=g.substring(f)):(m=g,h="");(m=T.parseLength(m))&&"pt"===m.unit&&0.75>m.value&&(g="0.75pt"+h)}d[2]&&(c+=d[2]+":"+g+";")}return c}function q(b){return(b=l(b,m,"text-properties"))?T.parseFoFontSize(b.getAttributeNS(a,"font-size")):null}function r(a,b,c,e){return b+b+c+c+e+e}function c(b,c,e,d){c='text|list[text|style-name="'+c+'"]';var g=e.getAttributeNS(w,"level");e=l(e,m,"list-level-properties");e=l(e,m,"list-level-label-alignment");var f,h;e&&(f=e.getAttributeNS(a,"text-indent"),h=e.getAttributeNS(a,
"margin-left"));f||(f="-0.6cm");e="-"===f.charAt(0)?f.substring(1):"-"+f;for(g=g&&parseInt(g,10);1<g;)c+=" > text|list-item > text|list",g-=1;if(h){g=c+" > text|list-item > *:not(text|list):first-child";g+="{";g=g+("margin-left:"+h+";")+"}";try{b.insertRule(g,b.cssRules.length)}catch(n){runtime.log("cannot load rule: "+g)}}d=c+" > text|list-item > *:not(text|list):first-child:before{"+d+";";d=d+"counter-increment:list;"+("margin-left:"+f+";");d+="width:"+e+";";d+="display:inline-block}";try{b.insertRule(d,
b.cssRules.length)}catch(q){runtime.log("cannot load rule: "+d)}}function g(f,h,k,p){if("list"===h)for(var s=p.element.firstChild,u,t;s;){if(s.namespaceURI===w)if(u=s,"list-level-style-number"===s.localName){var y=u;t=y.getAttributeNS(m,"num-format");var S=y.getAttributeNS(m,"num-suffix")||"",y=y.getAttributeNS(m,"num-prefix")||"",Z={1:"decimal",a:"lower-latin",A:"upper-latin",i:"lower-roman",I:"upper-roman"},W="";y&&(W+=' "'+y+'"');W=Z.hasOwnProperty(t)?W+(" counter(list, "+Z[t]+")"):t?W+(' "'+t+
'"'):W+" ''";t="content:"+W+' "'+S+'"';c(f,k,u,t)}else"list-level-style-image"===s.localName?(t="content: none;",c(f,k,u,t)):"list-level-style-bullet"===s.localName&&(t="content: '"+u.getAttributeNS(w,"bullet-char")+"';",c(f,k,u,t));s=s.nextSibling}else if("page"===h){if(t=p.element,y=S=k="",s=l(t,m,"page-layout-properties"))if(u=t.getAttributeNS(m,"name"),k+=d(s,ea),(S=l(s,m,"background-image"))&&(y=S.getAttributeNS(z,"href"))&&(k=k+("background-image: url('odfkit:"+y+"');")+d(S,C)),"presentation"===
K)for(t=(t=l(t.parentNode.parentNode,e,"master-styles"))&&t.firstElementChild;t;){if(t.namespaceURI===m&&"master-page"===t.localName&&t.getAttributeNS(m,"page-layout-name")===u){y=t.getAttributeNS(m,"name");S="draw|page[draw|master-page-name="+y+"] {"+k+"}";y="office|body, draw|page[draw|master-page-name="+y+"] {"+d(s,ia)+" }";try{f.insertRule(S,f.cssRules.length),f.insertRule(y,f.cssRules.length)}catch(da){throw da;}}t=t.nextElementSibling}else if("text"===K){S="office|text {"+k+"}";y="office|body {width: "+
s.getAttributeNS(a,"page-width")+";}";try{f.insertRule(S,f.cssRules.length),f.insertRule(y,f.cssRules.length)}catch(O){throw O;}}}else{k=n(h,k,p).join(",");s="";if(u=l(p.element,m,"text-properties")){y=u;t=W="";S=1;u=""+d(y,F);Z=y.getAttributeNS(m,"text-underline-style");"solid"===Z&&(W+=" underline");Z=y.getAttributeNS(m,"text-line-through-style");"solid"===Z&&(W+=" line-through");W.length&&(u+="text-decoration:"+W+";");if(W=y.getAttributeNS(m,"font-name")||y.getAttributeNS(a,"font-family"))Z=Y[W],
u+="font-family: "+(Z||W)+";";Z=y.parentNode;if(y=q(Z)){for(;Z;){if(y=q(Z)){if("%"!==y.unit){t="font-size: "+y.value*S+y.unit+";";break}S*=y.value/100}y=Z;W=Z="";Z=null;"default-style"===y.localName?Z=null:(Z=y.getAttributeNS(m,"parent-style-name"),W=y.getAttributeNS(m,"family"),Z=I.getODFElementsWithXPath(P,Z?"//style:*[@style:name='"+Z+"'][@style:family='"+W+"']":"//style:default-style[@style:family='"+W+"']",odf.Namespaces.lookupNamespaceURI)[0])}t||(t="font-size: "+parseFloat(G)*S+R.getUnits(G)+
";");u+=t}s+=u}if(u=l(p.element,m,"paragraph-properties"))t=u,u=""+d(t,A),(S=l(t,m,"background-image"))&&(y=S.getAttributeNS(z,"href"))&&(u=u+("background-image: url('odfkit:"+y+"');")+d(S,C)),(t=t.getAttributeNS(a,"line-height"))&&"normal"!==t&&(t=T.parseFoLineHeight(t),u="%"!==t.unit?u+("line-height: "+t.value+t.unit+";"):u+("line-height: "+t.value/100+";")),s+=u;if(u=l(p.element,m,"graphic-properties"))y=u,u=""+d(y,L),t=y.getAttributeNS(b,"opacity"),S=y.getAttributeNS(b,"fill"),y=y.getAttributeNS(b,
"fill-color"),"solid"===S||"hatch"===S?y&&"none"!==y?(t=isNaN(parseFloat(t))?1:parseFloat(t)/100,S=y.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r),(y=(S=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(S))?{r:parseInt(S[1],16),g:parseInt(S[2],16),b:parseInt(S[3],16)}:null)&&(u+="background-color: rgba("+y.r+","+y.g+","+y.b+","+t+");")):u+="background: none;":"none"===S&&(u+="background: none;"),s+=u;if(u=l(p.element,m,"drawing-page-properties"))t=""+d(u,L),"true"===u.getAttributeNS(v,"background-visible")&&
(t+="background: none;"),s+=t;if(u=l(p.element,m,"table-cell-properties"))u=""+d(u,E),s+=u;if(u=l(p.element,m,"table-row-properties"))u=""+d(u,B),s+=u;if(u=l(p.element,m,"table-column-properties"))u=""+d(u,V),s+=u;if(u=l(p.element,m,"table-properties"))t=u,u=""+d(t,H),t=t.getAttributeNS(x,"border-model"),"collapsing"===t?u+="border-collapse:collapse;":"separating"===t&&(u+="border-collapse:separate;"),s+=u;if(0!==s.length)try{f.insertRule(k+"{"+s+"}",f.cssRules.length)}catch(ca){throw ca;}}for(var ba in p.derivedStyles)p.derivedStyles.hasOwnProperty(ba)&&
g(f,h,ba,p.derivedStyles[ba])}var b=odf.Namespaces.drawns,a=odf.Namespaces.fons,e=odf.Namespaces.officens,m=odf.Namespaces.stylens,u=odf.Namespaces.svgns,x=odf.Namespaces.tablens,w=odf.Namespaces.textns,z=odf.Namespaces.xlinkns,v=odf.Namespaces.presentationns,t={graphic:"draw","drawing-page":"draw",paragraph:"text",presentation:"presentation",ruby:"text",section:"text",table:"table","table-cell":"table","table-column":"table","table-row":"table",text:"text",list:"text",page:"office"},s={graphic:"circle connected control custom-shape ellipse frame g line measure page page-thumbnail path polygon polyline rect regular-polygon".split(" "),
paragraph:"alphabetical-index-entry-template h illustration-index-entry-template index-source-style object-index-entry-template p table-index-entry-template table-of-content-entry-template user-index-entry-template".split(" "),presentation:"caption circle connector control custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),"drawing-page":"caption circle connector control page custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),
ruby:["ruby","ruby-text"],section:"alphabetical-index bibliography illustration-index index-title object-index section table-of-content table-index user-index".split(" "),table:["background","table"],"table-cell":"body covered-table-cell even-columns even-rows first-column first-row last-column last-row odd-columns odd-rows table-cell".split(" "),"table-column":["table-column"],"table-row":["table-row"],text:"a index-entry-chapter index-entry-link-end index-entry-link-start index-entry-page-number index-entry-span index-entry-tab-stop index-entry-text index-title-template linenumbering-configuration list-level-style-number list-level-style-bullet outline-level-style span".split(" "),
list:["list-item"]},F=[[a,"color","color"],[a,"background-color","background-color"],[a,"font-weight","font-weight"],[a,"font-style","font-style"]],C=[[m,"repeat","background-repeat"]],A=[[a,"background-color","background-color"],[a,"text-align","text-align"],[a,"text-indent","text-indent"],[a,"padding","padding"],[a,"padding-left","padding-left"],[a,"padding-right","padding-right"],[a,"padding-top","padding-top"],[a,"padding-bottom","padding-bottom"],[a,"border-left","border-left"],[a,"border-right",
"border-right"],[a,"border-top","border-top"],[a,"border-bottom","border-bottom"],[a,"margin","margin"],[a,"margin-left","margin-left"],[a,"margin-right","margin-right"],[a,"margin-top","margin-top"],[a,"margin-bottom","margin-bottom"],[a,"border","border"]],L=[[a,"background-color","background-color"],[a,"min-height","min-height"],[b,"stroke","border"],[u,"stroke-color","border-color"],[u,"stroke-width","border-width"],[a,"border","border"],[a,"border-left","border-left"],[a,"border-right","border-right"],
[a,"border-top","border-top"],[a,"border-bottom","border-bottom"]],E=[[a,"background-color","background-color"],[a,"border-left","border-left"],[a,"border-right","border-right"],[a,"border-top","border-top"],[a,"border-bottom","border-bottom"],[a,"border","border"]],V=[[m,"column-width","width"]],B=[[m,"row-height","height"],[a,"keep-together",null]],H=[[m,"width","width"],[a,"margin-left","margin-left"],[a,"margin-right","margin-right"],[a,"margin-top","margin-top"],[a,"margin-bottom","margin-bottom"]],
ea=[[a,"background-color","background-color"],[a,"padding","padding"],[a,"padding-left","padding-left"],[a,"padding-right","padding-right"],[a,"padding-top","padding-top"],[a,"padding-bottom","padding-bottom"],[a,"border","border"],[a,"border-left","border-left"],[a,"border-right","border-right"],[a,"border-top","border-top"],[a,"border-bottom","border-bottom"],[a,"margin","margin"],[a,"margin-left","margin-left"],[a,"margin-right","margin-right"],[a,"margin-top","margin-top"],[a,"margin-bottom",
"margin-bottom"]],ia=[[a,"page-width","width"],[a,"page-height","height"]],y={border:!0,"border-left":!0,"border-right":!0,"border-top":!0,"border-bottom":!0,"stroke-width":!0},Y={},T=new odf.OdfUtils,K,P,G,I=xmldom.XPath,R=new core.CSSUnits;this.style2css=function(a,b,c,e,d){for(var f,m,l,n;b.cssRules.length;)b.deleteRule(b.cssRules.length-1);f=null;e&&(f=e.ownerDocument,P=e.parentNode);d&&(f=d.ownerDocument,P=d.parentNode);if(f)for(n in odf.Namespaces.forEachPrefix(function(a,c){m="@namespace "+
a+" url("+c+");";try{b.insertRule(m,b.cssRules.length)}catch(e){}}),Y=c,K=a,G=runtime.getWindow().getComputedStyle(document.body,null).getPropertyValue("font-size")||"12pt",a=h(e),e=h(d),d={},t)if(t.hasOwnProperty(n))for(l in c=d[n]={},p(a[n],c),p(e[n],c),c)c.hasOwnProperty(l)&&g(b,n,l,c[l])}};
// Input 32
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("xmldom.XPath");runtime.loadClass("odf.Namespaces");
odf.StyleInfo=function(){function h(a,b){var c,e,d,g,f,m=0;if(c=A[a.localName])if(d=c[a.namespaceURI])m=d.length;for(c=0;c<m;c+=1)e=d[c],g=e.ns,f=e.localname,(e=a.getAttributeNS(g,f))&&a.setAttributeNS(g,F[g]+f,b+e);for(d=a.firstElementChild;d;)h(d,b),d=d.nextElementSibling}function k(a,b){var c,e,d,g,f,m=0;if(c=A[a.localName])if(d=c[a.namespaceURI])m=d.length;for(c=0;c<m;c+=1)if(e=d[c],g=e.ns,f=e.localname,e=a.getAttributeNS(g,f))e=e.replace(b,""),a.setAttributeNS(g,F[g]+f,e);for(d=a.firstElementChild;d;)k(d,
b),d=d.nextElementSibling}function f(a,b){var c,e,d,g,f,m=0;if(c=A[a.localName])if(d=c[a.namespaceURI])m=d.length;for(c=0;c<m;c+=1)if(g=d[c],e=g.ns,f=g.localname,e=a.getAttributeNS(e,f))b=b||{},g=g.keyname,b.hasOwnProperty(g)?b[g][e]=1:(f={},f[e]=1,b[g]=f);return b}function p(a,b){var c,e;f(a,b);for(c=a.firstChild;c;)c.nodeType===Node.ELEMENT_NODE&&(e=c,p(e,b)),c=c.nextSibling}function n(a,b,c){this.key=a;this.name=b;this.family=c;this.requires={}}function l(a,b,c){var e=a+'"'+b,d=c[e];d||(d=c[e]=
new n(e,a,b));return d}function d(a,b,c){var e,g,f,m,h,n=0;e=a.getAttributeNS(v,"name");m=a.getAttributeNS(v,"family");e&&m&&(b=l(e,m,c));if(b){if(e=A[a.localName])if(f=e[a.namespaceURI])n=f.length;for(e=0;e<n;e+=1)if(m=f[e],g=m.ns,h=m.localname,g=a.getAttributeNS(g,h))m=m.keyname,m=l(g,m,c),b.requires[m.key]=m}for(a=a.firstElementChild;a;)d(a,b,c),a=a.nextElementSibling;return c}function q(a,b){var c=b[a.family];c||(c=b[a.family]={});c[a.name]=1;Object.keys(a.requires).forEach(function(c){q(a.requires[c],
b)})}function r(a,b){var c=d(a,null,{});Object.keys(c).forEach(function(a){a=c[a];var e=b[a.family];e&&e.hasOwnProperty(a.name)&&q(a,b)})}function c(a,b){function e(b){(b=f.getAttributeNS(v,b))&&(a[b]=!0)}var d=["font-name","font-name-asian","font-name-complex"],g,f;for(g=b&&b.firstElementChild;g;)f=g,d.forEach(e),c(a,f),g=g.nextElementSibling}function g(a,b){function c(a){var e=f.getAttributeNS(v,a);e&&b.hasOwnProperty(e)&&f.setAttributeNS(v,"style:"+a,b[e])}var e=["font-name","font-name-asian",
"font-name-complex"],d,f;for(d=a&&a.firstElementChild;d;)f=d,e.forEach(c),g(f,b),d=d.nextElementSibling}var b=odf.Namespaces.chartns,a=odf.Namespaces.dbns,e=odf.Namespaces.dr3dns,m=odf.Namespaces.drawns,u=odf.Namespaces.formns,x=odf.Namespaces.numberns,w=odf.Namespaces.officens,z=odf.Namespaces.presentationns,v=odf.Namespaces.stylens,t=odf.Namespaces.tablens,s=odf.Namespaces.textns,F={"urn:oasis:names:tc:opendocument:xmlns:chart:1.0":"chart:","urn:oasis:names:tc:opendocument:xmlns:database:1.0":"db:",
"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0":"dr3d:","urn:oasis:names:tc:opendocument:xmlns:drawing:1.0":"draw:","urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0":"fo:","urn:oasis:names:tc:opendocument:xmlns:form:1.0":"form:","urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0":"number:","urn:oasis:names:tc:opendocument:xmlns:office:1.0":"office:","urn:oasis:names:tc:opendocument:xmlns:presentation:1.0":"presentation:","urn:oasis:names:tc:opendocument:xmlns:style:1.0":"style:","urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0":"svg:",
"urn:oasis:names:tc:opendocument:xmlns:table:1.0":"table:","urn:oasis:names:tc:opendocument:xmlns:text:1.0":"chart:","http://www.w3.org/XML/1998/namespace":"xml:"},C={text:[{ens:v,en:"tab-stop",ans:v,a:"leader-text-style"},{ens:v,en:"drop-cap",ans:v,a:"style-name"},{ens:s,en:"notes-configuration",ans:s,a:"citation-body-style-name"},{ens:s,en:"notes-configuration",ans:s,a:"citation-style-name"},{ens:s,en:"a",ans:s,a:"style-name"},{ens:s,en:"alphabetical-index",ans:s,a:"style-name"},{ens:s,en:"linenumbering-configuration",
ans:s,a:"style-name"},{ens:s,en:"list-level-style-number",ans:s,a:"style-name"},{ens:s,en:"ruby-text",ans:s,a:"style-name"},{ens:s,en:"span",ans:s,a:"style-name"},{ens:s,en:"a",ans:s,a:"visited-style-name"},{ens:v,en:"text-properties",ans:v,a:"text-line-through-text-style"},{ens:s,en:"alphabetical-index-source",ans:s,a:"main-entry-style-name"},{ens:s,en:"index-entry-bibliography",ans:s,a:"style-name"},{ens:s,en:"index-entry-chapter",ans:s,a:"style-name"},{ens:s,en:"index-entry-link-end",ans:s,a:"style-name"},
{ens:s,en:"index-entry-link-start",ans:s,a:"style-name"},{ens:s,en:"index-entry-page-number",ans:s,a:"style-name"},{ens:s,en:"index-entry-span",ans:s,a:"style-name"},{ens:s,en:"index-entry-tab-stop",ans:s,a:"style-name"},{ens:s,en:"index-entry-text",ans:s,a:"style-name"},{ens:s,en:"index-title-template",ans:s,a:"style-name"},{ens:s,en:"list-level-style-bullet",ans:s,a:"style-name"},{ens:s,en:"outline-level-style",ans:s,a:"style-name"}],paragraph:[{ens:m,en:"caption",ans:m,a:"text-style-name"},{ens:m,
en:"circle",ans:m,a:"text-style-name"},{ens:m,en:"connector",ans:m,a:"text-style-name"},{ens:m,en:"control",ans:m,a:"text-style-name"},{ens:m,en:"custom-shape",ans:m,a:"text-style-name"},{ens:m,en:"ellipse",ans:m,a:"text-style-name"},{ens:m,en:"frame",ans:m,a:"text-style-name"},{ens:m,en:"line",ans:m,a:"text-style-name"},{ens:m,en:"measure",ans:m,a:"text-style-name"},{ens:m,en:"path",ans:m,a:"text-style-name"},{ens:m,en:"polygon",ans:m,a:"text-style-name"},{ens:m,en:"polyline",ans:m,a:"text-style-name"},
{ens:m,en:"rect",ans:m,a:"text-style-name"},{ens:m,en:"regular-polygon",ans:m,a:"text-style-name"},{ens:w,en:"annotation",ans:m,a:"text-style-name"},{ens:u,en:"column",ans:u,a:"text-style-name"},{ens:v,en:"style",ans:v,a:"next-style-name"},{ens:t,en:"body",ans:t,a:"paragraph-style-name"},{ens:t,en:"even-columns",ans:t,a:"paragraph-style-name"},{ens:t,en:"even-rows",ans:t,a:"paragraph-style-name"},{ens:t,en:"first-column",ans:t,a:"paragraph-style-name"},{ens:t,en:"first-row",ans:t,a:"paragraph-style-name"},
{ens:t,en:"last-column",ans:t,a:"paragraph-style-name"},{ens:t,en:"last-row",ans:t,a:"paragraph-style-name"},{ens:t,en:"odd-columns",ans:t,a:"paragraph-style-name"},{ens:t,en:"odd-rows",ans:t,a:"paragraph-style-name"},{ens:s,en:"notes-configuration",ans:s,a:"default-style-name"},{ens:s,en:"alphabetical-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"bibliography-entry-template",ans:s,a:"style-name"},{ens:s,en:"h",ans:s,a:"style-name"},{ens:s,en:"illustration-index-entry-template",ans:s,a:"style-name"},
{ens:s,en:"index-source-style",ans:s,a:"style-name"},{ens:s,en:"object-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"p",ans:s,a:"style-name"},{ens:s,en:"table-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"table-of-content-entry-template",ans:s,a:"style-name"},{ens:s,en:"table-index-entry-template",ans:s,a:"style-name"},{ens:s,en:"user-index-entry-template",ans:s,a:"style-name"},{ens:v,en:"page-layout-properties",ans:v,a:"register-truth-ref-style-name"}],chart:[{ens:b,en:"axis",ans:b,
a:"style-name"},{ens:b,en:"chart",ans:b,a:"style-name"},{ens:b,en:"data-label",ans:b,a:"style-name"},{ens:b,en:"data-point",ans:b,a:"style-name"},{ens:b,en:"equation",ans:b,a:"style-name"},{ens:b,en:"error-indicator",ans:b,a:"style-name"},{ens:b,en:"floor",ans:b,a:"style-name"},{ens:b,en:"footer",ans:b,a:"style-name"},{ens:b,en:"grid",ans:b,a:"style-name"},{ens:b,en:"legend",ans:b,a:"style-name"},{ens:b,en:"mean-value",ans:b,a:"style-name"},{ens:b,en:"plot-area",ans:b,a:"style-name"},{ens:b,en:"regression-curve",
ans:b,a:"style-name"},{ens:b,en:"series",ans:b,a:"style-name"},{ens:b,en:"stock-gain-marker",ans:b,a:"style-name"},{ens:b,en:"stock-loss-marker",ans:b,a:"style-name"},{ens:b,en:"stock-range-line",ans:b,a:"style-name"},{ens:b,en:"subtitle",ans:b,a:"style-name"},{ens:b,en:"title",ans:b,a:"style-name"},{ens:b,en:"wall",ans:b,a:"style-name"}],section:[{ens:s,en:"alphabetical-index",ans:s,a:"style-name"},{ens:s,en:"bibliography",ans:s,a:"style-name"},{ens:s,en:"illustration-index",ans:s,a:"style-name"},
{ens:s,en:"index-title",ans:s,a:"style-name"},{ens:s,en:"object-index",ans:s,a:"style-name"},{ens:s,en:"section",ans:s,a:"style-name"},{ens:s,en:"table-of-content",ans:s,a:"style-name"},{ens:s,en:"table-index",ans:s,a:"style-name"},{ens:s,en:"user-index",ans:s,a:"style-name"}],ruby:[{ens:s,en:"ruby",ans:s,a:"style-name"}],table:[{ens:a,en:"query",ans:a,a:"style-name"},{ens:a,en:"table-representation",ans:a,a:"style-name"},{ens:t,en:"background",ans:t,a:"style-name"},{ens:t,en:"table",ans:t,a:"style-name"}],
"table-column":[{ens:a,en:"column",ans:a,a:"style-name"},{ens:t,en:"table-column",ans:t,a:"style-name"}],"table-row":[{ens:a,en:"query",ans:a,a:"default-row-style-name"},{ens:a,en:"table-representation",ans:a,a:"default-row-style-name"},{ens:t,en:"table-row",ans:t,a:"style-name"}],"table-cell":[{ens:a,en:"column",ans:a,a:"default-cell-style-name"},{ens:t,en:"table-column",ans:t,a:"default-cell-style-name"},{ens:t,en:"table-row",ans:t,a:"default-cell-style-name"},{ens:t,en:"body",ans:t,a:"style-name"},
{ens:t,en:"covered-table-cell",ans:t,a:"style-name"},{ens:t,en:"even-columns",ans:t,a:"style-name"},{ens:t,en:"covered-table-cell",ans:t,a:"style-name"},{ens:t,en:"even-columns",ans:t,a:"style-name"},{ens:t,en:"even-rows",ans:t,a:"style-name"},{ens:t,en:"first-column",ans:t,a:"style-name"},{ens:t,en:"first-row",ans:t,a:"style-name"},{ens:t,en:"last-column",ans:t,a:"style-name"},{ens:t,en:"last-row",ans:t,a:"style-name"},{ens:t,en:"odd-columns",ans:t,a:"style-name"},{ens:t,en:"odd-rows",ans:t,a:"style-name"},
{ens:t,en:"table-cell",ans:t,a:"style-name"}],graphic:[{ens:e,en:"cube",ans:m,a:"style-name"},{ens:e,en:"extrude",ans:m,a:"style-name"},{ens:e,en:"rotate",ans:m,a:"style-name"},{ens:e,en:"scene",ans:m,a:"style-name"},{ens:e,en:"sphere",ans:m,a:"style-name"},{ens:m,en:"caption",ans:m,a:"style-name"},{ens:m,en:"circle",ans:m,a:"style-name"},{ens:m,en:"connector",ans:m,a:"style-name"},{ens:m,en:"control",ans:m,a:"style-name"},{ens:m,en:"custom-shape",ans:m,a:"style-name"},{ens:m,en:"ellipse",ans:m,a:"style-name"},
{ens:m,en:"frame",ans:m,a:"style-name"},{ens:m,en:"g",ans:m,a:"style-name"},{ens:m,en:"line",ans:m,a:"style-name"},{ens:m,en:"measure",ans:m,a:"style-name"},{ens:m,en:"page-thumbnail",ans:m,a:"style-name"},{ens:m,en:"path",ans:m,a:"style-name"},{ens:m,en:"polygon",ans:m,a:"style-name"},{ens:m,en:"polyline",ans:m,a:"style-name"},{ens:m,en:"rect",ans:m,a:"style-name"},{ens:m,en:"regular-polygon",ans:m,a:"style-name"},{ens:w,en:"annotation",ans:m,a:"style-name"}],presentation:[{ens:e,en:"cube",ans:z,
a:"style-name"},{ens:e,en:"extrude",ans:z,a:"style-name"},{ens:e,en:"rotate",ans:z,a:"style-name"},{ens:e,en:"scene",ans:z,a:"style-name"},{ens:e,en:"sphere",ans:z,a:"style-name"},{ens:m,en:"caption",ans:z,a:"style-name"},{ens:m,en:"circle",ans:z,a:"style-name"},{ens:m,en:"connector",ans:z,a:"style-name"},{ens:m,en:"control",ans:z,a:"style-name"},{ens:m,en:"custom-shape",ans:z,a:"style-name"},{ens:m,en:"ellipse",ans:z,a:"style-name"},{ens:m,en:"frame",ans:z,a:"style-name"},{ens:m,en:"g",ans:z,a:"style-name"},
{ens:m,en:"line",ans:z,a:"style-name"},{ens:m,en:"measure",ans:z,a:"style-name"},{ens:m,en:"page-thumbnail",ans:z,a:"style-name"},{ens:m,en:"path",ans:z,a:"style-name"},{ens:m,en:"polygon",ans:z,a:"style-name"},{ens:m,en:"polyline",ans:z,a:"style-name"},{ens:m,en:"rect",ans:z,a:"style-name"},{ens:m,en:"regular-polygon",ans:z,a:"style-name"},{ens:w,en:"annotation",ans:z,a:"style-name"}],"drawing-page":[{ens:m,en:"page",ans:m,a:"style-name"},{ens:z,en:"notes",ans:m,a:"style-name"},{ens:v,en:"handout-master",
ans:m,a:"style-name"},{ens:v,en:"master-page",ans:m,a:"style-name"}],"list-style":[{ens:s,en:"list",ans:s,a:"style-name"},{ens:s,en:"numbered-paragraph",ans:s,a:"style-name"},{ens:s,en:"list-item",ans:s,a:"style-override"},{ens:v,en:"style",ans:v,a:"list-style-name"}],data:[{ens:v,en:"style",ans:v,a:"data-style-name"},{ens:v,en:"style",ans:v,a:"percentage-data-style-name"},{ens:z,en:"date-time-decl",ans:v,a:"data-style-name"},{ens:s,en:"creation-date",ans:v,a:"data-style-name"},{ens:s,en:"creation-time",
ans:v,a:"data-style-name"},{ens:s,en:"database-display",ans:v,a:"data-style-name"},{ens:s,en:"date",ans:v,a:"data-style-name"},{ens:s,en:"editing-duration",ans:v,a:"data-style-name"},{ens:s,en:"expression",ans:v,a:"data-style-name"},{ens:s,en:"meta-field",ans:v,a:"data-style-name"},{ens:s,en:"modification-date",ans:v,a:"data-style-name"},{ens:s,en:"modification-time",ans:v,a:"data-style-name"},{ens:s,en:"print-date",ans:v,a:"data-style-name"},{ens:s,en:"print-time",ans:v,a:"data-style-name"},{ens:s,
en:"table-formula",ans:v,a:"data-style-name"},{ens:s,en:"time",ans:v,a:"data-style-name"},{ens:s,en:"user-defined",ans:v,a:"data-style-name"},{ens:s,en:"user-field-get",ans:v,a:"data-style-name"},{ens:s,en:"user-field-input",ans:v,a:"data-style-name"},{ens:s,en:"variable-get",ans:v,a:"data-style-name"},{ens:s,en:"variable-input",ans:v,a:"data-style-name"},{ens:s,en:"variable-set",ans:v,a:"data-style-name"}],"page-layout":[{ens:z,en:"notes",ans:v,a:"page-layout-name"},{ens:v,en:"handout-master",ans:v,
a:"page-layout-name"},{ens:v,en:"master-page",ans:v,a:"page-layout-name"}]},A,L=xmldom.XPath;this.collectUsedFontFaces=c;this.changeFontFaceNames=g;this.UsedStyleList=function(a,b){var c={};this.uses=function(a){var b=a.localName,e=a.getAttributeNS(m,"name")||a.getAttributeNS(v,"name");a="style"===b?a.getAttributeNS(v,"family"):a.namespaceURI===x?"data":b;return(a=c[a])?0<a[e]:!1};p(a,c);b&&r(b,c)};this.hasDerivedStyles=function(a,b,c){var e=c.getAttributeNS(v,"name");c=c.getAttributeNS(v,"family");
return L.getODFElementsWithXPath(a,"//style:*[@style:parent-style-name='"+e+"'][@style:family='"+c+"']",b).length?!0:!1};this.prefixStyleNames=function(a,b,c){var e;if(a){for(e=a.firstChild;e;){if(e.nodeType===Node.ELEMENT_NODE){var d=e,g=b,f=d.getAttributeNS(m,"name"),l=void 0;f?l=m:(f=d.getAttributeNS(v,"name"))&&(l=v);l&&d.setAttributeNS(l,F[l]+"name",g+f)}e=e.nextSibling}h(a,b);c&&h(c,b)}};this.removePrefixFromStyleNames=function(a,b,c){var e=RegExp("^"+b);if(a){for(b=a.firstChild;b;){if(b.nodeType===
Node.ELEMENT_NODE){var d=b,g=e,f=d.getAttributeNS(m,"name"),h=void 0;f?h=m:(f=d.getAttributeNS(v,"name"))&&(h=v);h&&(f=f.replace(g,""),d.setAttributeNS(h,F[h]+"name",f))}b=b.nextSibling}k(a,e);c&&k(c,e)}};this.determineStylesForNode=f;A=function(){var a,b,c,e,d,g={},f,m,h,l;for(c in C)if(C.hasOwnProperty(c))for(e=C[c],b=e.length,a=0;a<b;a+=1)d=e[a],h=d.en,l=d.ens,g.hasOwnProperty(h)?f=g[h]:g[h]=f={},f.hasOwnProperty(l)?m=f[l]:f[l]=m=[],m.push({ns:d.ans,localname:d.a,keyname:c});return g}()};
// Input 33
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.OdfUtils");
odf.TextSerializer=function(){function h(p){var n="",l=k.filter?k.filter.acceptNode(p):NodeFilter.FILTER_ACCEPT,d=p.nodeType,q;if((l===NodeFilter.FILTER_ACCEPT||l===NodeFilter.FILTER_SKIP)&&f.isTextContentContainingNode(p))for(q=p.firstChild;q;)n+=h(q),q=q.nextSibling;l===NodeFilter.FILTER_ACCEPT&&(d===Node.ELEMENT_NODE&&f.isParagraph(p)?n+="\n":d===Node.TEXT_NODE&&p.textContent&&(n+=p.textContent));return n}var k=this,f=new odf.OdfUtils;this.filter=null;this.writeToString=function(f){if(!f)return"";
f=h(f);"\n"===f[f.length-1]&&(f=f.substr(0,f.length-1));return f}};
// Input 34
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.PositionFilter");runtime.loadClass("odf.OdfUtils");
ops.TextPositionFilter=function(h){function k(h,n,c){var g,b;if(n){if(f.isInlineRoot(n)&&f.isGroupingElement(c))return d;g=f.lookLeftForCharacter(n);if(1===g||2===g&&(f.scanRightForAnyCharacter(c)||f.scanRightForAnyCharacter(f.nextNode(h))))return l}g=null===n&&f.isParagraph(h);b=f.lookRightForCharacter(c);if(g)return b?l:f.scanRightForAnyCharacter(c)?d:l;if(!b)return d;n=n||f.previousNode(h);return f.scanLeftForAnyCharacter(n)?d:l}var f=new odf.OdfUtils,p=Node.ELEMENT_NODE,n=Node.TEXT_NODE,l=core.PositionFilter.FilterResult.FILTER_ACCEPT,
d=core.PositionFilter.FilterResult.FILTER_REJECT;this.acceptPosition=function(q){var r=q.container(),c=r.nodeType,g,b,a;if(c!==p&&c!==n)return d;if(c===n){if(!f.isGroupingElement(r.parentNode)||f.isWithinTrackedChanges(r.parentNode,h()))return d;c=q.unfilteredDomOffset();g=r.data;runtime.assert(c!==g.length,"Unexpected offset.");if(0<c){q=g[c-1];if(!f.isODFWhitespace(q))return l;if(1<c)if(q=g[c-2],!f.isODFWhitespace(q))b=l;else{if(!f.isODFWhitespace(g.substr(0,c)))return d}else a=f.previousNode(r),
f.scanLeftForNonSpace(a)&&(b=l);if(b===l)return f.isTrailingWhitespace(r,c)?d:l;b=g[c];return f.isODFWhitespace(b)?d:f.scanLeftForAnyCharacter(f.previousNode(r))?d:l}a=q.leftNode();b=r;r=r.parentNode;b=k(r,a,b)}else!f.isGroupingElement(r)||f.isWithinTrackedChanges(r,h())?b=d:(a=q.leftNode(),b=q.rightNode(),b=k(r,a,b));return b}};
// Input 35
"function"!==typeof Object.create&&(Object.create=function(h){var k=function(){};k.prototype=h;return new k});
xmldom.LSSerializer=function(){function h(f){var h=f||{},d=function(c){var b={},a;for(a in c)c.hasOwnProperty(a)&&(b[c[a]]=a);return b}(f),q=[h],k=[d],c=0;this.push=function(){c+=1;h=q[c]=Object.create(h);d=k[c]=Object.create(d)};this.pop=function(){q.pop();k.pop();c-=1;h=q[c];d=k[c]};this.getLocalNamespaceDefinitions=function(){return d};this.getQName=function(c){var b=c.namespaceURI,a=0,e;if(!b)return c.localName;if(e=d[b])return e+":"+c.localName;do{e||!c.prefix?(e="ns"+a,a+=1):e=c.prefix;if(h[e]===
b)break;if(!h[e]){h[e]=b;d[b]=e;break}e=null}while(null===e);return e+":"+c.localName}}function k(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos;").replace(/"/g,"&quot;")}function f(h,l){var d="",q=p.filter?p.filter.acceptNode(l):NodeFilter.FILTER_ACCEPT,r;if(q===NodeFilter.FILTER_ACCEPT&&l.nodeType===Node.ELEMENT_NODE){h.push();r=h.getQName(l);var c,g=l.attributes,b,a,e,m="",u;c="<"+r;b=g.length;for(a=0;a<b;a+=1)e=g.item(a),"http://www.w3.org/2000/xmlns/"!==
e.namespaceURI&&(u=p.filter?p.filter.acceptNode(e):NodeFilter.FILTER_ACCEPT,u===NodeFilter.FILTER_ACCEPT&&(u=h.getQName(e),e="string"===typeof e.value?k(e.value):e.value,m+=" "+(u+'="'+e+'"')));b=h.getLocalNamespaceDefinitions();for(a in b)b.hasOwnProperty(a)&&((g=b[a])?"xmlns"!==g&&(c+=" xmlns:"+b[a]+'="'+a+'"'):c+=' xmlns="'+a+'"');d+=c+(m+">")}if(q===NodeFilter.FILTER_ACCEPT||q===NodeFilter.FILTER_SKIP){for(q=l.firstChild;q;)d+=f(h,q),q=q.nextSibling;l.nodeValue&&(d+=k(l.nodeValue))}r&&(d+="</"+
r+">",h.pop());return d}var p=this;this.filter=null;this.writeToString=function(n,l){if(!n)return"";var d=new h(l);return f(d,n)}};
// Input 36
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.OdfNodeFilter");runtime.loadClass("odf.TextSerializer");gui.MimeDataExporter=function(){var h,k;this.exportRangeToDataTransfer=function(f,k){var n=!0,l;l=k.startContainer.ownerDocument.createElement("span");l.appendChild(k.cloneContents());l=f.setData("text/plain",h.writeToString(l));return n&&l};h=new odf.TextSerializer;k=new odf.OdfNodeFilter;h.filter=k};
// Input 37
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.Clipboard=function(h){this.setDataFromRange=function(k,f){var p;p=k.clipboardData;var n=runtime.getWindow();!p&&n&&(p=n.clipboardData);p?(p=h.exportRangeToDataTransfer(p,f),k.preventDefault()):p=!1;return p}};
// Input 38
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.Base64");runtime.loadClass("core.Zip");runtime.loadClass("core.DomUtils");runtime.loadClass("xmldom.LSSerializer");runtime.loadClass("odf.StyleInfo");runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfNodeFilter");
(function(){function h(b,a,c){for(b=b?b.firstChild:null;b;){if(b.localName===c&&b.namespaceURI===a)return b;b=b.nextSibling}return null}function k(b){var a,c=r.length;for(a=0;a<c;a+=1)if("urn:oasis:names:tc:opendocument:xmlns:office:1.0"===b.namespaceURI&&b.localName===r[a])return a;return-1}function f(b,a){var c=new l.UsedStyleList(b,a),d=new odf.OdfNodeFilter;this.acceptNode=function(b){var g=d.acceptNode(b);g===NodeFilter.FILTER_ACCEPT&&b.parentNode===a&&b.nodeType===Node.ELEMENT_NODE&&(g=c.uses(b)?
NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT);return g}}function p(b,a){var c=new f(b,a);this.acceptNode=function(a){var b=c.acceptNode(a);b!==NodeFilter.FILTER_ACCEPT||!a.parentNode||a.parentNode.namespaceURI!==odf.Namespaces.textns||"s"!==a.parentNode.localName&&"tab"!==a.parentNode.localName||(b=NodeFilter.FILTER_REJECT);return b}}function n(b,a){if(a){var c=k(a),d,g=b.firstChild;if(-1!==c){for(;g;){d=k(g);if(-1!==d&&d>c)break;g=g.nextSibling}b.insertBefore(a,g)}}}var l=new odf.StyleInfo,
d=new core.DomUtils,q=odf.Namespaces.stylens,r="meta settings scripts font-face-decls styles automatic-styles master-styles body".split(" "),c=(new Date).getTime()+"_webodf_",g=new core.Base64;odf.ODFElement=function(){};odf.ODFDocumentElement=function(){};odf.ODFDocumentElement.prototype=new odf.ODFElement;odf.ODFDocumentElement.prototype.constructor=odf.ODFDocumentElement;odf.ODFDocumentElement.prototype.fontFaceDecls=null;odf.ODFDocumentElement.prototype.manifest=null;odf.ODFDocumentElement.prototype.settings=
null;odf.ODFDocumentElement.namespaceURI="urn:oasis:names:tc:opendocument:xmlns:office:1.0";odf.ODFDocumentElement.localName="document";odf.OdfPart=function(b,a,c,d){var g=this;this.size=0;this.type=null;this.name=b;this.container=c;this.url=null;this.mimetype=a;this.onstatereadychange=this.document=null;this.EMPTY=0;this.LOADING=1;this.DONE=2;this.state=this.EMPTY;this.data="";this.load=function(){null!==d&&(this.mimetype=a,d.loadAsDataURL(b,a,function(a,b){a&&runtime.log(a);g.url=b;if(g.onchange)g.onchange(g);
if(g.onstatereadychange)g.onstatereadychange(g)}))}};odf.OdfPart.prototype.load=function(){};odf.OdfPart.prototype.getUrl=function(){return this.data?"data:;base64,"+g.toBase64(this.data):null};odf.OdfContainer=function a(e,m){function k(a){for(var c=a.firstChild,e;c;)e=c.nextSibling,c.nodeType===Node.ELEMENT_NODE?k(c):c.nodeType===Node.PROCESSING_INSTRUCTION_NODE&&a.removeChild(c),c=e}function r(a,c){for(var e=a&&a.firstChild;e;)e.nodeType===Node.ELEMENT_NODE&&e.setAttributeNS("urn:webodf:names:scope",
"scope",c),e=e.nextSibling}function w(a){var c={},e;for(a=a.firstChild;a;)a.nodeType===Node.ELEMENT_NODE&&a.namespaceURI===q&&"font-face"===a.localName&&(e=a.getAttributeNS(q,"name"),c[e]=a),a=a.nextSibling;return c}function z(a,c){var e=null,d,g,f;if(a)for(e=a.cloneNode(!0),d=e.firstElementChild;d;)g=d.nextElementSibling,(f=d.getAttributeNS("urn:webodf:names:scope","scope"))&&f!==c&&e.removeChild(d),d=g;return e}function v(a,c){var e,d,g,f=null,m={};if(a)for(c.forEach(function(a){l.collectUsedFontFaces(m,
a)}),f=a.cloneNode(!0),e=f.firstElementChild;e;)d=e.nextElementSibling,g=e.getAttributeNS(q,"name"),m[g]||f.removeChild(e),e=d;return f}function t(a){var c=D.rootElement.ownerDocument,e;if(a){k(a.documentElement);try{e=c.importNode(a.documentElement,!0)}catch(d){}}return e}function s(a){D.state=a;if(D.onchange)D.onchange(D);if(D.onstatereadychange)D.onstatereadychange(D)}function F(a){M=null;D.rootElement=a;a.fontFaceDecls=h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","font-face-decls");
a.styles=h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","styles");a.automaticStyles=h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles");a.masterStyles=h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","master-styles");a.body=h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","body");a.meta=h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","meta")}function C(e){var d=t(e),g=D.rootElement,f;d&&"document-styles"===d.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===
d.namespaceURI?(g.fontFaceDecls=h(d,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","font-face-decls"),n(g,g.fontFaceDecls),f=h(d,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","styles"),g.styles=f||e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","styles"),n(g,g.styles),f=h(d,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles"),g.automaticStyles=f||e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles"),r(g.automaticStyles,
"document-styles"),n(g,g.automaticStyles),d=h(d,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","master-styles"),g.masterStyles=d||e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","master-styles"),n(g,g.masterStyles),l.prefixStyleNames(g.automaticStyles,c,g.masterStyles)):s(a.INVALID)}function A(c){c=t(c);var e,d,g,f;if(c&&"document-content"===c.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===c.namespaceURI){e=D.rootElement;g=h(c,"urn:oasis:names:tc:opendocument:xmlns:office:1.0",
"font-face-decls");if(e.fontFaceDecls&&g){f=e.fontFaceDecls;var m,k,p,v,u={};d=w(f);v=w(g);for(g=g.firstElementChild;g;){m=g.nextElementSibling;if(g.namespaceURI===q&&"font-face"===g.localName)if(k=g.getAttributeNS(q,"name"),d.hasOwnProperty(k)){if(!g.isEqualNode(d[k])){p=k;for(var A=d,H=v,C=0,z=void 0,z=p=p.replace(/\d+$/,"");A.hasOwnProperty(z)||H.hasOwnProperty(z);)C+=1,z=p+C;p=z;g.setAttributeNS(q,"style:name",p);f.appendChild(g);d[p]=g;delete v[k];u[k]=p}}else f.appendChild(g),d[k]=g,delete v[k];
g=m}f=u}else g&&(e.fontFaceDecls=g,n(e,g));d=h(c,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","automatic-styles");r(d,"document-content");f&&l.changeFontFaceNames(d,f);if(e.automaticStyles&&d)for(f=d.firstChild;f;)e.automaticStyles.appendChild(f),f=d.firstChild;else d&&(e.automaticStyles=d,n(e,d));c=h(c,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","body");if(null===c)throw"<office:body/> tag is mising.";e.body=c;n(e,e.body)}else s(a.INVALID)}function L(a){a=t(a);var c;a&&"document-meta"===
a.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===a.namespaceURI&&(c=D.rootElement,c.meta=h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","meta"),n(c,c.meta))}function E(a){a=t(a);var c;a&&"document-settings"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===a.namespaceURI&&(c=D.rootElement,c.settings=h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","settings"),n(c,c.settings))}function V(a){a=t(a);var c;if(a&&"manifest"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"===
a.namespaceURI)for(c=D.rootElement,c.manifest=a,a=c.manifest.firstElementChild;a;)"file-entry"===a.localName&&"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"===a.namespaceURI&&(N[a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","full-path")]=a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","media-type")),a=a.nextElementSibling}function B(c){var e=c.shift();e?J.loadAsDOM(e.path,function(d,g){e.handler(g);d||D.state===a.INVALID||B(c)}):s(a.DONE)}function H(a){var c=
"";odf.Namespaces.forEachPrefix(function(a,e){c+=" xmlns:"+a+'="'+e+'"'});return'<?xml version="1.0" encoding="UTF-8"?><office:'+a+" "+c+' office:version="1.2">'}function ea(){var a=new xmldom.LSSerializer,c=H("document-meta");a.filter=new odf.OdfNodeFilter;c+=a.writeToString(D.rootElement.meta,odf.Namespaces.namespaceMap);return c+"</office:document-meta>"}function ia(a,c){var e=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","manifest:file-entry");e.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0",
"manifest:full-path",a);e.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","manifest:media-type",c);return e}function y(){var a=runtime.parseXML('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2"></manifest:manifest>'),c=h(a,"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0","manifest"),e=new xmldom.LSSerializer,d;for(d in N)N.hasOwnProperty(d)&&c.appendChild(ia(d,N[d]));e.filter=new odf.OdfNodeFilter;return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'+
e.writeToString(a,odf.Namespaces.namespaceMap)}function Y(){var a=new xmldom.LSSerializer,c=H("document-settings");a.filter=new odf.OdfNodeFilter;c+=a.writeToString(D.rootElement.settings,odf.Namespaces.namespaceMap);return c+"</office:document-settings>"}function T(){var a,e,d,g=odf.Namespaces.namespaceMap,m=new xmldom.LSSerializer,h=H("document-styles");e=z(D.rootElement.automaticStyles,"document-styles");d=D.rootElement.masterStyles.cloneNode(!0);a=v(D.rootElement.fontFaceDecls,[d,D.rootElement.styles,
e]);l.removePrefixFromStyleNames(e,c,d);m.filter=new f(d,e);h+=m.writeToString(a,g);h+=m.writeToString(D.rootElement.styles,g);h+=m.writeToString(e,g);h+=m.writeToString(d,g);return h+"</office:document-styles>"}function K(){var a,c,e=odf.Namespaces.namespaceMap,d=new xmldom.LSSerializer,g=H("document-content");c=z(D.rootElement.automaticStyles,"document-content");a=v(D.rootElement.fontFaceDecls,[c]);d.filter=new p(D.rootElement.body,c);g+=d.writeToString(a,e);g+=d.writeToString(c,e);g+=d.writeToString(D.rootElement.body,
e);return g+"</office:document-content>"}function P(c,e){runtime.loadXML(c,function(c,d){if(c)e(c);else{var g=t(d);g&&"document"===g.localName&&"urn:oasis:names:tc:opendocument:xmlns:office:1.0"===g.namespaceURI?(F(g),s(a.DONE)):s(a.INVALID)}})}function G(a,c){var e;e=D.rootElement;var g=e.meta;g||(e.meta=g=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","meta"),n(e,g));e=g;a&&d.mapKeyValObjOntoNode(e,a,odf.Namespaces.lookupNamespaceURI);c&&d.removeKeyElementsFromNode(e,
c,odf.Namespaces.lookupNamespaceURI)}function I(){function c(a,e){var d;e||(e=a);d=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0",e);g[a]=d;g.appendChild(d)}var e=new core.Zip("",null),d=runtime.byteArrayFromString("application/vnd.oasis.opendocument.text","utf8"),g=D.rootElement,f=document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0","text");e.save("mimetype",d,!1,new Date);c("meta");c("settings");c("scripts");c("fontFaceDecls","font-face-decls");
c("styles");c("automaticStyles","automatic-styles");c("masterStyles","master-styles");c("body");g.body.appendChild(f);s(a.DONE);return e}function R(){var a,c=new Date,e=runtime.getWindow();a="WebODF/"+("undefined"!==String(typeof webodf_version)?webodf_version:"FromSource");e&&(a=a+" "+e.navigator.userAgent);G({"meta:generator":a},null);a=runtime.byteArrayFromString(Y(),"utf8");J.save("settings.xml",a,!0,c);a=runtime.byteArrayFromString(ea(),"utf8");J.save("meta.xml",a,!0,c);a=runtime.byteArrayFromString(T(),
"utf8");J.save("styles.xml",a,!0,c);a=runtime.byteArrayFromString(K(),"utf8");J.save("content.xml",a,!0,c);a=runtime.byteArrayFromString(y(),"utf8");J.save("META-INF/manifest.xml",a,!0,c)}function U(a,c){R();J.writeAs(a,function(a){c(a)})}var D=this,J,N={},M;this.onstatereadychange=m;this.state=this.onchange=null;this.setRootElement=F;this.getContentElement=function(){var a;M||(a=D.rootElement.body,M=h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","text")||h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0",
"presentation")||h(a,"urn:oasis:names:tc:opendocument:xmlns:office:1.0","spreadsheet"));if(!M)throw"Could not find content element in <office:body/>.";return M};this.getDocumentType=function(){var a=D.getContentElement();return a&&a.localName};this.getPart=function(a){return new odf.OdfPart(a,N[a],D,J)};this.getPartData=function(a,c){J.load(a,c)};this.setMetadata=G;this.incrementEditingCycles=function(){var a;for(a=(a=D.rootElement.meta)&&a.firstChild;a&&(a.namespaceURI!==odf.Namespaces.metans||"editing-cycles"!==
a.localName);)a=a.nextSibling;for(a=a&&a.firstChild;a&&a.nodeType!==Node.TEXT_NODE;)a=a.nextSibling;a=a?a.data:null;a=a?parseInt(a,10):0;isNaN(a)&&(a=0);G({"meta:editing-cycles":a+1},null)};this.createByteArray=function(a,c){R();J.createByteArray(a,c)};this.saveAs=U;this.save=function(a){U(e,a)};this.getUrl=function(){return e};this.setBlob=function(a,c,e){e=g.convertBase64ToByteArray(e);J.save(a,e,!1,new Date);N.hasOwnProperty(a)&&runtime.log(a+" has been overwritten.");N[a]=c};this.removeBlob=function(a){var c=
J.remove(a);runtime.assert(c,"file is not found: "+a);delete N[a]};this.state=a.LOADING;this.rootElement=function(a){var c=document.createElementNS(a.namespaceURI,a.localName),e;a=new a.Type;for(e in a)a.hasOwnProperty(e)&&(c[e]=a[e]);return c}({Type:odf.ODFDocumentElement,namespaceURI:odf.ODFDocumentElement.namespaceURI,localName:odf.ODFDocumentElement.localName});J=e?new core.Zip(e,function(c,d){J=d;c?P(e,function(e){c&&(J.error=c+"\n"+e,s(a.INVALID))}):B([{path:"styles.xml",handler:C},{path:"content.xml",
handler:A},{path:"meta.xml",handler:L},{path:"settings.xml",handler:E},{path:"META-INF/manifest.xml",handler:V}])}):I()};odf.OdfContainer.EMPTY=0;odf.OdfContainer.LOADING=1;odf.OdfContainer.DONE=2;odf.OdfContainer.INVALID=3;odf.OdfContainer.SAVING=4;odf.OdfContainer.MODIFIED=5;odf.OdfContainer.getContainer=function(a){return new odf.OdfContainer(a,null)};return odf.OdfContainer})();
// Input 39
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.Base64");runtime.loadClass("xmldom.XPath");runtime.loadClass("odf.OdfContainer");
(function(){function h(k,n,l,d,q){var r,c=0,g;for(g in k)if(k.hasOwnProperty(g)){if(c===l){r=g;break}c+=1}r?n.getPartData(k[r].href,function(b,a){if(b)runtime.log(b);else if(a){var c="@font-face { font-family: '"+(k[r].family||r)+"'; src: url(data:application/x-font-ttf;charset=binary;base64,"+f.convertUTF8ArrayToBase64(a)+') format("truetype"); }';try{d.insertRule(c,d.cssRules.length)}catch(g){runtime.log("Problem inserting rule in CSS: "+runtime.toJson(g)+"\nRule: "+c)}}else runtime.log("missing font data for "+
k[r].href);h(k,n,l+1,d,q)}):q&&q()}var k=xmldom.XPath,f=new core.Base64;odf.FontLoader=function(){this.loadFonts=function(f,n){for(var l=f.rootElement.fontFaceDecls;n.cssRules.length;)n.deleteRule(n.cssRules.length-1);if(l){var d={},q,r,c,g;if(l)for(l=k.getODFElementsWithXPath(l,"style:font-face[svg:font-face-src]",odf.Namespaces.lookupNamespaceURI),q=0;q<l.length;q+=1)r=l[q],c=r.getAttributeNS(odf.Namespaces.stylens,"name"),g=r.getAttributeNS(odf.Namespaces.svgns,"font-family"),r=k.getODFElementsWithXPath(r,
"svg:font-face-src/svg:font-face-uri",odf.Namespaces.lookupNamespaceURI),0<r.length&&(r=r[0].getAttributeNS(odf.Namespaces.xlinkns,"href"),d[c]={href:r,family:g});h(d,f,0,n)}}};return odf.FontLoader})();
// Input 40
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("core.Utils");
odf.ObjectNameGenerator=function(h,k){function f(a,b){var c={};this.generateName=function(){var e=b(),d=0,g;do g=a+d,d+=1;while(c[g]||e[g]);c[g]=!0;return g}}function p(){var a={};[h.rootElement.automaticStyles,h.rootElement.styles].forEach(function(b){for(b=b.firstElementChild;b;)b.namespaceURI===n&&"style"===b.localName&&(a[b.getAttributeNS(n,"name")]=!0),b=b.nextElementSibling});return a}var n=odf.Namespaces.stylens,l=odf.Namespaces.drawns,d=odf.Namespaces.xlinkns,q=new core.DomUtils,r=(new core.Utils).hashString(k),
c=null,g=null,b=null,a={},e={};this.generateStyleName=function(){null===c&&(c=new f("auto"+r+"_",function(){return p()}));return c.generateName()};this.generateFrameName=function(){null===g&&(q.getElementsByTagNameNS(h.rootElement.body,l,"frame").forEach(function(b){a[b.getAttributeNS(l,"name")]=!0}),g=new f("fr"+r+"_",function(){return a}));return g.generateName()};this.generateImageName=function(){null===b&&(q.getElementsByTagNameNS(h.rootElement.body,l,"image").forEach(function(a){a=a.getAttributeNS(d,
"href");a=a.substring(9,a.lastIndexOf("."));e[a]=!0}),b=new f("img"+r+"_",function(){return e}));return b.generateName()}};
// Input 41
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.Utils");runtime.loadClass("odf.ObjectNameGenerator");runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfContainer");runtime.loadClass("odf.StyleInfo");runtime.loadClass("odf.OdfUtils");
odf.Formatting=function(){function h(a){return(a=t[a])?v.mergeObjects({},a):{}}function k(a,b,c){for(a=a&&a.firstElementChild;a&&(a.namespaceURI!==b||a.localName!==c);)a=a.nextElementSibling;return a}function f(){for(var b=g.rootElement.fontFaceDecls,c={},d,f,b=b&&b.firstElementChild;b;){if(d=b.getAttributeNS(e,"name"))if((f=b.getAttributeNS(a,"font-family"))||0<b.getElementsByTagNameNS(a,"font-face-uri").length)c[d]=f;b=b.nextElementSibling}return c}function p(a){for(var b=g.rootElement.styles.firstElementChild;b;){if(b.namespaceURI===
e&&"default-style"===b.localName&&b.getAttributeNS(e,"family")===a)return b;b=b.nextElementSibling}return null}function n(a,b,c){var d,f,h;c=c||[g.rootElement.automaticStyles,g.rootElement.styles];for(h=0;h<c.length;h+=1)for(d=c[h],d=d.firstElementChild;d;){f=d.getAttributeNS(e,"name");if(d.namespaceURI===e&&"style"===d.localName&&d.getAttributeNS(e,"family")===b&&f===a||"list-style"===b&&d.namespaceURI===m&&"list-style"===d.localName&&f===a||"data"===b&&d.namespaceURI===u&&f===a)return d;d=d.nextElementSibling}return null}
function l(a){for(var b,c,d,g,f={},m=a.firstElementChild;m;){if(m.namespaceURI===e)for(d=f[m.nodeName]={},c=m.attributes,b=0;b<c.length;b+=1)g=c.item(b),d[g.name]=g.value;m=m.nextElementSibling}c=a.attributes;for(b=0;b<c.length;b+=1)g=c.item(b),f[g.name]=g.value;return f}function d(a,b){for(var c=g.rootElement.styles,d,f={},m=a.getAttributeNS(e,"family"),k=a;k;)d=l(k),f=v.mergeObjects(d,f),k=(d=k.getAttributeNS(e,"parent-style-name"))?n(d,m,[c]):null;if(k=p(m))d=l(k),f=v.mergeObjects(d,f);b&&(d=h(m))&&
(f=v.mergeObjects(d,f));return f}function q(a,c){function e(a){Object.keys(a).forEach(function(b){Object.keys(a[b]).forEach(function(a){m+="|"+b+":"+a+"|"})})}for(var d=a.nodeType===Node.TEXT_NODE?a.parentNode:a,g,f=[],m="",h=!1;d;)!h&&w.isGroupingElement(d)&&(h=!0),(g=b.determineStylesForNode(d))&&f.push(g),d=d.parentNode;h&&(f.forEach(e),c&&(c[m]=f));return h?f:void 0}function r(a){var b={orderedStyles:[]};a.forEach(function(a){Object.keys(a).forEach(function(c){var g=Object.keys(a[c])[0],f,m;(f=
n(g,c))?(m=d(f),b=v.mergeObjects(m,b),m=f.getAttributeNS(e,"display-name")):runtime.log("No style element found for '"+g+"' of family '"+c+"'");b.orderedStyles.push({name:g,family:c,displayName:m})})});return b}function c(a,b){var c=w.parseLength(a),e=b;if(c)switch(c.unit){case "cm":e=c.value;break;case "mm":e=0.1*c.value;break;case "in":e=2.54*c.value;break;case "pt":e=0.035277778*c.value;break;case "pc":case "px":case "em":break;default:runtime.log("Unit identifier: "+c.unit+" is not supported.")}return e}
var g,b=new odf.StyleInfo,a=odf.Namespaces.svgns,e=odf.Namespaces.stylens,m=odf.Namespaces.textns,u=odf.Namespaces.numberns,x=odf.Namespaces.fons,w=new odf.OdfUtils,z=new core.DomUtils,v=new core.Utils,t={paragraph:{"style:paragraph-properties":{"fo:text-align":"left"}}};this.getSystemDefaultStyleAttributes=h;this.setOdfContainer=function(a){g=a};this.getFontMap=f;this.getAvailableParagraphStyles=function(){for(var a=g.rootElement.styles,b,c,d=[],a=a&&a.firstElementChild;a;)"style"===a.localName&&
a.namespaceURI===e&&(b=a.getAttributeNS(e,"family"),"paragraph"===b&&(b=a.getAttributeNS(e,"name"),c=a.getAttributeNS(e,"display-name")||b,b&&c&&d.push({name:b,displayName:c}))),a=a.nextElementSibling;return d};this.isStyleUsed=function(a){var c,e=g.rootElement;c=b.hasDerivedStyles(e,odf.Namespaces.lookupNamespaceURI,a);a=(new b.UsedStyleList(e.styles)).uses(a)||(new b.UsedStyleList(e.automaticStyles)).uses(a)||(new b.UsedStyleList(e.body)).uses(a);return c||a};this.getDefaultStyleElement=p;this.getStyleElement=
n;this.getStyleAttributes=l;this.getInheritedStyleAttributes=d;this.getFirstCommonParentStyleNameOrSelf=function(a){var b=g.rootElement.automaticStyles,c=g.rootElement.styles,d;for(d=n(a,"paragraph",[b]);d;)a=d.getAttributeNS(e,"parent-style-name"),d=n(a,"paragraph",[b]);return(d=n(a,"paragraph",[c]))?a:null};this.hasParagraphStyle=function(a){return Boolean(n(a,"paragraph"))};this.getAppliedStyles=function(a){var b={},c=[];a.forEach(function(a){q(a,b)});Object.keys(b).forEach(function(a){c.push(r(b[a]))});
return c};this.getAppliedStylesForElement=function(a){return(a=q(a))?r(a):void 0};this.updateStyle=function(b,c){var d,m;z.mapObjOntoNode(b,c,odf.Namespaces.lookupNamespaceURI);(d=c["style:text-properties"]&&c["style:text-properties"]["style:font-name"])&&!f().hasOwnProperty(d)&&(m=b.ownerDocument.createElementNS(e,"style:font-face"),m.setAttributeNS(e,"style:name",d),m.setAttributeNS(a,"svg:font-family",d),g.rootElement.fontFaceDecls.appendChild(m))};this.createDerivedStyleObject=function(a,b,c){var e=
n(a,b);runtime.assert(Boolean(e),"No style element found for '"+a+"' of family '"+b+"'");a=e.parentNode===g.rootElement.automaticStyles?l(e):{"style:parent-style-name":a};a["style:family"]=b;v.mergeObjects(a,c);return a};this.getDefaultTabStopDistance=function(){for(var a=p("paragraph"),a=a&&a.firstElementChild,b;a;)a.namespaceURI===e&&"paragraph-properties"===a.localName&&(b=a.getAttributeNS(e,"tab-stop-distance")),a=a.nextElementSibling;b||(b="1.25cm");return w.parseNonNegativeLength(b)};this.getContentSize=
function(a,b){var d,f,m,h,l,q,p,r,v,u,t;a:{var w,K,P;d=n(a,b);runtime.assert("paragraph"===b||"table"===b,"styleFamily has to be either paragraph or table");if(d){w=d.getAttributeNS(e,"master-page-name")||"Standard";for(d=g.rootElement.masterStyles.lastElementChild;d&&d.getAttributeNS(e,"name")!==w;)d=d.previousElementSibling;w=d.getAttributeNS(e,"page-layout-name");K=z.getElementsByTagNameNS(g.rootElement.automaticStyles,e,"page-layout");for(P=0;P<K.length;P+=1)if(d=K[P],d.getAttributeNS(e,"name")===
w)break a}d=null}d||(d=k(g.rootElement.styles,e,"default-page-layout"));if(d=k(d,e,"page-layout-properties"))f=d.getAttributeNS(e,"print-orientation")||"portrait","portrait"===f?(f=21.001,m=29.7):(f=29.7,m=21.001),f=c(d.getAttributeNS(x,"page-width"),f),m=c(d.getAttributeNS(x,"page-height"),m),h=c(d.getAttributeNS(x,"margin"),null),null===h?(h=c(d.getAttributeNS(x,"margin-left"),2),l=c(d.getAttributeNS(x,"margin-right"),2),q=c(d.getAttributeNS(x,"margin-top"),2),p=c(d.getAttributeNS(x,"margin-bottom"),
2)):h=l=q=p=h,r=c(d.getAttributeNS(x,"padding"),null),null===r?(r=c(d.getAttributeNS(x,"padding-left"),0),v=c(d.getAttributeNS(x,"padding-right"),0),u=c(d.getAttributeNS(x,"padding-top"),0),t=c(d.getAttributeNS(x,"padding-bottom"),0)):r=v=u=t=r;return{width:f-h-l-r-v,height:m-q-p-u-t}}};
// Input 42
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfContainer");runtime.loadClass("odf.Formatting");runtime.loadClass("xmldom.XPath");runtime.loadClass("odf.FontLoader");runtime.loadClass("odf.Style2CSS");runtime.loadClass("odf.OdfUtils");runtime.loadClass("gui.AnnotationViewManager");
(function(){function h(){function a(e){c=!0;runtime.setTimeout(function(){try{e()}catch(d){runtime.log(String(d))}c=!1;0<b.length&&a(b.pop())},10)}var b=[],c=!1;this.clearQueue=function(){b.length=0};this.addToQueue=function(e){if(0===b.length&&!c)return a(e);b.push(e)}}function k(a){function b(){for(;0<c.cssRules.length;)c.deleteRule(0);c.insertRule("#shadowContent draw|page {display:none;}",0);c.insertRule("office|presentation draw|page {display:none;}",1);c.insertRule("#shadowContent draw|page:nth-of-type("+
e+") {display:block;}",2);c.insertRule("office|presentation draw|page:nth-of-type("+e+") {display:block;}",3)}var c=a.sheet,e=1;this.showFirstPage=function(){e=1;b()};this.showNextPage=function(){e+=1;b()};this.showPreviousPage=function(){1<e&&(e-=1,b())};this.showPage=function(a){0<a&&(e=a,b())};this.css=a;this.destroy=function(b){a.parentNode.removeChild(a);b()}}function f(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function p(a,b,c){(new odf.Style2CSS).style2css(a.getDocumentType(),c.sheet,
b.getFontMap(),a.rootElement.styles,a.rootElement.automaticStyles)}function n(a,b,c){var e=null;a=a.rootElement.body.getElementsByTagNameNS(A,c+"-decl");c=b.getAttributeNS(A,"use-"+c+"-name");var d;if(c&&0<a.length)for(b=0;b<a.length;b+=1)if(d=a[b],d.getAttributeNS(A,"name")===c){e=d.textContent;break}return e}function l(a,b,c,e){var d=a.ownerDocument;b=a.getElementsByTagNameNS(b,c);for(a=0;a<b.length;a+=1)f(b[a]),e&&(c=b[a],c.appendChild(d.createTextNode(e)))}function d(a,b,c){b.setAttributeNS("urn:webodf:names:helper",
"styleid",a);var e,d=b.getAttributeNS(s,"anchor-type"),g=b.getAttributeNS(v,"x"),f=b.getAttributeNS(v,"y"),m=b.getAttributeNS(v,"width"),h=b.getAttributeNS(v,"height"),l=b.getAttributeNS(x,"min-height"),k=b.getAttributeNS(x,"min-width");if("as-char"===d)e="display: inline-block;";else if(d||g||f)e="position: absolute;";else if(m||h||l||k)e="display: block;";g&&(e+="left: "+g+";");f&&(e+="top: "+f+";");m&&(e+="width: "+m+";");h&&(e+="height: "+h+";");l&&(e+="min-height: "+l+";");k&&(e+="min-width: "+
k+";");e&&(e="draw|"+b.localName+'[webodfhelper|styleid="'+a+'"] {'+e+"}",c.insertRule(e,c.cssRules.length))}function q(a){for(a=a.firstChild;a;){if(a.namespaceURI===w&&"binary-data"===a.localName)return"data:image/png;base64,"+a.textContent.replace(/[\r\n\s]/g,"");a=a.nextSibling}return""}function r(a,b,c,e){function d(b){b&&(b='draw|image[webodfhelper|styleid="'+a+'"] {'+("background-image: url("+b+");")+"}",e.insertRule(b,e.cssRules.length))}function g(a){d(a.url)}c.setAttributeNS("urn:webodf:names:helper",
"styleid",a);var f=c.getAttributeNS(F,"href"),m;if(f)try{m=b.getPart(f),m.onchange=g,m.load()}catch(h){runtime.log("slight problem: "+String(h))}else f=q(c),d(f)}function c(a){var b=a.ownerDocument;B.getElementsByTagNameNS(a,s,"line-break").forEach(function(a){a.hasChildNodes()||a.appendChild(b.createElement("br"))})}function g(a){var b=a.ownerDocument;B.getElementsByTagNameNS(a,s,"s").forEach(function(a){for(var c,e;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(b.createTextNode(" "));e=
parseInt(a.getAttributeNS(s,"c"),10);if(1<e)for(a.removeAttributeNS(s,"c"),c=1;c<e;c+=1)a.parentNode.insertBefore(a.cloneNode(!0),a)})}function b(a){B.getElementsByTagNameNS(a,s,"tab").forEach(function(a){a.textContent="\t"})}function a(a,b){function c(a,e){var f=m.documentElement.namespaceURI;"video/"===e.substr(0,6)?(d=m.createElementNS(f,"video"),d.setAttribute("controls","controls"),g=m.createElementNS(f,"source"),a&&g.setAttribute("src",a),g.setAttribute("type",e),d.appendChild(g),b.parentNode.appendChild(d)):
b.innerHtml="Unrecognised Plugin"}function e(a){c(a.url,a.mimetype)}var d,g,f,m=b.ownerDocument,h;if(f=b.getAttributeNS(F,"href"))try{h=a.getPart(f),h.onchange=e,h.load()}catch(l){runtime.log("slight problem: "+String(l))}else runtime.log("using MP4 data fallback"),f=q(b),c(f,"video/mp4")}function e(a){var b=a.getElementsByTagName("head")[0],c;"undefined"!==String(typeof webodf_css)?(c=a.createElementNS(b.namespaceURI,"style"),c.setAttribute("media","screen, print, handheld, projection"),c.appendChild(a.createTextNode(webodf_css))):
(c=a.createElementNS(b.namespaceURI,"link"),a="webodf.css",runtime.currentDirectory&&(a=runtime.currentDirectory()+"/../"+a),c.setAttribute("href",a),c.setAttribute("rel","stylesheet"));c.setAttribute("type","text/css");b.appendChild(c);return c}function m(a){var b=a.getElementsByTagName("head")[0],c=a.createElementNS(b.namespaceURI,"style"),e="";c.setAttribute("type","text/css");c.setAttribute("media","screen, print, handheld, projection");odf.Namespaces.forEachPrefix(function(a,b){e+="@namespace "+
a+" url("+b+");\n"});e+="@namespace webodfhelper url(urn:webodf:names:helper);\n";c.appendChild(a.createTextNode(e));b.appendChild(c);return c}var u=odf.Namespaces.drawns,x=odf.Namespaces.fons,w=odf.Namespaces.officens,z=odf.Namespaces.stylens,v=odf.Namespaces.svgns,t=odf.Namespaces.tablens,s=odf.Namespaces.textns,F=odf.Namespaces.xlinkns,C=odf.Namespaces.xmlns,A=odf.Namespaces.presentationns,L=runtime.getWindow(),E=xmldom.XPath,V=new odf.OdfUtils,B=new core.DomUtils;odf.OdfCanvas=function(q){function v(a,
b,c){function e(a,b,c,d){ha.addToQueue(function(){r(a,b,c,d)})}var d,g;d=b.getElementsByTagNameNS(u,"image");for(b=0;b<d.length;b+=1)g=d.item(b),e("image"+String(b),a,g,c)}function x(b,c){function e(b,c){ha.addToQueue(function(){a(b,c)})}var d,g,f;g=c.getElementsByTagNameNS(u,"plugin");for(d=0;d<g.length;d+=1)f=g.item(d),e(b,f)}function y(){var a;J.firstChild&&(1<O?(J.style.MozTransformOrigin="center top",J.style.WebkitTransformOrigin="center top",J.style.OTransformOrigin="center top",J.style.msTransformOrigin=
"center top"):(J.style.MozTransformOrigin="left top",J.style.WebkitTransformOrigin="left top",J.style.OTransformOrigin="left top",J.style.msTransformOrigin="left top"),J.style.WebkitTransform="scale("+O+")",J.style.MozTransform="scale("+O+")",J.style.OTransform="scale("+O+")",J.style.msTransform="scale("+O+")",X&&((a=X.getMinimumHeightForAnnotationPane())?J.style.minHeight=a:J.style.removeProperty("min-height")),q.style.width=Math.round(O*J.offsetWidth)+"px",q.style.height=Math.round(O*J.offsetHeight)+
"px")}function F(a){function b(a){return e===a.getAttributeNS(w,"name")}var c=B.getElementsByTagNameNS(a,w,"annotation");a=B.getElementsByTagNameNS(a,w,"annotation-end");var e,d;for(d=0;d<c.length;d+=1)e=c[d].getAttributeNS(w,"name"),X.addAnnotation({node:c[d],end:a.filter(b)[0]||null});X.rerenderAnnotations()}function T(a){M?(N.parentNode||J.appendChild(N),X&&X.forgetAnnotations(),X=new gui.AnnotationViewManager(G,a.body,N,aa),F(a.body),y()):N.parentNode&&(J.removeChild(N),X.forgetAnnotations(),
y())}function K(a){function e(){f(q);q.style.display="inline-block";var m=R.rootElement;q.ownerDocument.importNode(m,!0);U.setOdfContainer(R);var h=R,k=S;(new odf.FontLoader).loadFonts(h,k.sheet);p(R,U,Z);k=R;h=W.sheet;f(q);J=I.createElementNS(q.namespaceURI,"div");J.style.display="inline-block";J.style.background="white";J.appendChild(m);q.appendChild(J);N=I.createElementNS(q.namespaceURI,"div");N.id="annotationsPane";da=I.createElementNS(q.namespaceURI,"div");da.id="shadowContent";da.style.position=
"absolute";da.style.top=0;da.style.left=0;k.getContentElement().appendChild(da);var r=m.body,B,F=[],$;for(B=r.firstElementChild;B&&B!==r;)if(B.namespaceURI===u&&(F[F.length]=B),B.firstElementChild)B=B.firstElementChild;else{for(;B&&B!==r&&!B.nextElementSibling;)B=B.parentNode;B&&B.nextElementSibling&&(B=B.nextElementSibling)}for($=0;$<F.length;$+=1)B=F[$],d("frame"+String($),B,h);F=E.getODFElementsWithXPath(r,".//*[*[@text:anchor-type='paragraph']]",odf.Namespaces.lookupNamespaceURI);for(B=0;B<F.length;B+=
1)r=F[B],r.setAttributeNS&&r.setAttributeNS("urn:webodf:names:helper","containsparagraphanchor",!0);var r=da,Y,D,K;K=0;var G,P,F=k.rootElement.ownerDocument;if((B=m.body.firstElementChild)&&B.namespaceURI===w&&("presentation"===B.localName||"drawing"===B.localName))for(B=B.firstElementChild;B;){$=B.getAttributeNS(u,"master-page-name");if($){for(Y=k.rootElement.masterStyles.firstElementChild;Y&&(Y.getAttributeNS(z,"name")!==$||"master-page"!==Y.localName||Y.namespaceURI!==z);)Y=Y.nextElementSibling;
$=Y}else $=null;if($){Y=B.getAttributeNS("urn:webodf:names:helper","styleid");D=F.createElementNS(u,"draw:page");P=$.firstElementChild;for(G=0;P;)"true"!==P.getAttributeNS(A,"placeholder")&&(K=P.cloneNode(!0),D.appendChild(K),d(Y+"_"+G,K,h)),P=P.nextElementSibling,G+=1;P=G=K=void 0;var O=D.getElementsByTagNameNS(u,"frame");for(K=0;K<O.length;K+=1)G=O[K],(P=G.getAttributeNS(A,"class"))&&!/^(date-time|footer|header|page-number)$/.test(P)&&G.parentNode.removeChild(G);r.appendChild(D);K=String(r.getElementsByTagNameNS(u,
"page").length);l(D,s,"page-number",K);l(D,A,"header",n(k,B,"header"));l(D,A,"footer",n(k,B,"footer"));d(Y,D,h);D.setAttributeNS(u,"draw:master-page-name",$.getAttributeNS(z,"name"))}B=B.nextElementSibling}r=q.namespaceURI;F=m.body.getElementsByTagNameNS(t,"table-cell");for(B=0;B<F.length;B+=1)$=F.item(B),$.hasAttributeNS(t,"number-columns-spanned")&&$.setAttributeNS(r,"colspan",$.getAttributeNS(t,"number-columns-spanned")),$.hasAttributeNS(t,"number-rows-spanned")&&$.setAttributeNS(r,"rowspan",$.getAttributeNS(t,
"number-rows-spanned"));c(m.body);g(m.body);b(m.body);v(k,m.body,h);x(k,m.body);$=m.body;k=q.namespaceURI;B={};var F={},M;Y=L.document.getElementsByTagNameNS(s,"list-style");for(r=0;r<Y.length;r+=1)G=Y.item(r),(P=G.getAttributeNS(z,"name"))&&(F[P]=G);$=$.getElementsByTagNameNS(s,"list");for(r=0;r<$.length;r+=1)if(G=$.item(r),Y=G.getAttributeNS(C,"id")){D=G.getAttributeNS(s,"continue-list");G.setAttributeNS(k,"id",Y);K="text|list#"+Y+" > text|list-item > *:first-child:before {";if(P=G.getAttributeNS(s,
"style-name")){G=F[P];M=V.getFirstNonWhitespaceChild(G);G=void 0;if(M)if("list-level-style-number"===M.localName){G=M.getAttributeNS(z,"num-format");P=M.getAttributeNS(z,"num-suffix")||"";var O="",O={1:"decimal",a:"lower-latin",A:"upper-latin",i:"lower-roman",I:"upper-roman"},X=void 0,X=M.getAttributeNS(z,"num-prefix")||"",X=O.hasOwnProperty(G)?X+(" counter(list, "+O[G]+")"):G?X+("'"+G+"';"):X+" ''";P&&(X+=" '"+P+"'");G=O="content: "+X+";"}else"list-level-style-image"===M.localName?G="content: none;":
"list-level-style-bullet"===M.localName&&(G="content: '"+M.getAttributeNS(s,"bullet-char")+"';");M=G}if(D){for(G=B[D];G;)G=B[G];K+="counter-increment:"+D+";";M?(M=M.replace("list",D),K+=M):K+="content:counter("+D+");"}else D="",M?(M=M.replace("list",Y),K+=M):K+="content: counter("+Y+");",K+="counter-increment:"+Y+";",h.insertRule("text|list#"+Y+" {counter-reset:"+Y+"}",h.cssRules.length);K+="}";B[Y]=D;K&&h.insertRule(K,h.cssRules.length)}J.insertBefore(da,J.firstChild);y();T(m);if(!a&&(m=[R],ca.hasOwnProperty("statereadychange")))for(h=
ca.statereadychange,M=0;M<h.length;M+=1)h[M].apply(null,m)}R.state===odf.OdfContainer.DONE?e():(runtime.log("WARNING: refreshOdf called but ODF was not DONE."),ba=runtime.setTimeout(function la(){R.state===odf.OdfContainer.DONE?e():(runtime.log("will be back later..."),ba=runtime.setTimeout(la,500))},100))}function P(a){ha.clearQueue();q.innerHTML=runtime.tr("Loading")+" "+a+"...";q.removeAttribute("style");R=new odf.OdfContainer(a,function(a){R=a;K(!1)})}runtime.assert(null!==q&&void 0!==q,"odf.OdfCanvas constructor needs DOM element");
runtime.assert(null!==q.ownerDocument&&void 0!==q.ownerDocument,"odf.OdfCanvas constructor needs DOM");var G=this,I=q.ownerDocument,R,U=new odf.Formatting,D,J=null,N=null,M=!1,aa=!1,X=null,fa,S,Z,W,da,O=1,ca={},ba,ha=new h;this.refreshCSS=function(){p(R,U,Z);y()};this.refreshSize=function(){y()};this.odfContainer=function(){return R};this.setOdfContainer=function(a,b){R=a;K(!0===b)};this.load=this.load=P;this.save=function(a){R.save(a)};this.addListener=function(a,b){switch(a){case "click":var c=
q,e=a;c.addEventListener?c.addEventListener(e,b,!1):c.attachEvent?c.attachEvent("on"+e,b):c["on"+e]=b;break;default:c=ca.hasOwnProperty(a)?ca[a]:ca[a]=[],b&&-1===c.indexOf(b)&&c.push(b)}};this.getFormatting=function(){return U};this.getAnnotationViewManager=function(){return X};this.refreshAnnotations=function(){T(R.rootElement)};this.rerenderAnnotations=function(){X&&(X.rerenderAnnotations(),y())};this.getSizer=function(){return J};this.enableAnnotations=function(a,b){a!==M&&(M=a,aa=b,R&&T(R.rootElement))};
this.addAnnotation=function(a){X&&(X.addAnnotation(a),y())};this.forgetAnnotations=function(){X&&(X.forgetAnnotations(),y())};this.setZoomLevel=function(a){O=a;y()};this.getZoomLevel=function(){return O};this.fitToContainingElement=function(a,b){var c=q.offsetHeight/O;O=a/(q.offsetWidth/O);b/c<O&&(O=b/c);y()};this.fitToWidth=function(a){O=a/(q.offsetWidth/O);y()};this.fitSmart=function(a,b){var c,e;c=q.offsetWidth/O;e=q.offsetHeight/O;c=a/c;void 0!==b&&b/e<c&&(c=b/e);O=Math.min(1,c);y()};this.fitToHeight=
function(a){O=a/(q.offsetHeight/O);y()};this.showFirstPage=function(){D.showFirstPage()};this.showNextPage=function(){D.showNextPage()};this.showPreviousPage=function(){D.showPreviousPage()};this.showPage=function(a){D.showPage(a);y()};this.getElement=function(){return q};this.addCssForFrameWithImage=function(a){var b=a.getAttributeNS(u,"name"),c=a.firstElementChild;d(b,a,W.sheet);c&&r(b+"img",R,c,W.sheet)};this.destroy=function(a){var b=I.getElementsByTagName("head")[0];runtime.clearTimeout(ba);
N&&N.parentNode&&N.parentNode.removeChild(N);J&&(q.removeChild(J),J=null);b.removeChild(fa);b.removeChild(S);b.removeChild(Z);b.removeChild(W);D.destroy(a)};fa=e(I);D=new k(m(I));S=m(I);Z=m(I);W=m(I)}})();
// Input 43
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("core.LoopWatchDog");runtime.loadClass("odf.Namespaces");
odf.TextStyleApplicator=function(h,k,f){function p(c){function d(b,a){return"object"===typeof b&&"object"===typeof a?Object.keys(b).every(function(c){return d(b[c],a[c])}):b===a}this.isStyleApplied=function(b){b=k.getAppliedStylesForElement(b);return d(c,b)}}function n(c){var d={};this.applyStyleToContainer=function(b){var a;a=b.getAttributeNS(q,"style-name");var e=b.ownerDocument;a=a||"";if(!d.hasOwnProperty(a)){var m=a,l;l=a?k.createDerivedStyleObject(a,"text",c):c;e=e.createElementNS(r,"style:style");
k.updateStyle(e,l);e.setAttributeNS(r,"style:name",h.generateStyleName());e.setAttributeNS(r,"style:family","text");e.setAttributeNS("urn:webodf:names:scope","scope","document-content");f.appendChild(e);d[m]=e}a=d[a].getAttributeNS(r,"name");b.setAttributeNS(q,"text:style-name",a)}}function l(c,g){var b=c.ownerDocument,a=c.parentNode,e,f,h=new core.LoopWatchDog(1E4);f=[];"span"!==a.localName||a.namespaceURI!==q?(e=b.createElementNS(q,"text:span"),a.insertBefore(e,c),a=!1):(c.previousSibling&&!d.rangeContainsNode(g,
a.firstChild)?(e=a.cloneNode(!1),a.parentNode.insertBefore(e,a.nextSibling)):e=a,a=!0);f.push(c);for(b=c.nextSibling;b&&d.rangeContainsNode(g,b);)h.check(),f.push(b),b=b.nextSibling;f.forEach(function(a){a.parentNode!==e&&e.appendChild(a)});if(b&&a)for(f=e.cloneNode(!1),e.parentNode.insertBefore(f,e.nextSibling);b;)h.check(),a=b.nextSibling,f.appendChild(b),b=a;return e}var d=new core.DomUtils,q=odf.Namespaces.textns,r=odf.Namespaces.stylens;this.applyStyle=function(c,d,b){var a={},e,f,h,k;runtime.assert(b&&
b.hasOwnProperty("style:text-properties"),"applyStyle without any text properties");a["style:text-properties"]=b["style:text-properties"];h=new n(a);k=new p(a);c.forEach(function(a){e=k.isStyleApplied(a);!1===e&&(f=l(a,d),h.applyStyleToContainer(f))})}};
// Input 44
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfUtils");
gui.StyleHelper=function(h){function k(f,d,h){var k=!0,c;for(c=0;c<f.length&&!(k=f[c]["style:text-properties"],k=!k||k[d]!==h);c+=1);return!k}function f(f,d,k){function r(){a=!0;(g=h.getDefaultStyleElement("paragraph"))||(g=null)}var c,g;f=p.getParagraphElements(f);for(var b={},a=!1;0<f.length;){(c=f[0].getAttributeNS(n,"style-name"))?b[c]||(g=h.getStyleElement(c,"paragraph"),b[c]=!0,g||a||r()):a?g=void 0:r();if(void 0!==g&&(c=null===g?h.getSystemDefaultStyleAttributes("paragraph"):h.getInheritedStyleAttributes(g,
!0),(c=c["style:paragraph-properties"])&&-1===k.indexOf(c[d])))return!1;f.pop()}return!0}var p=new odf.OdfUtils,n=odf.Namespaces.textns;this.getAppliedStyles=function(f){var d;f.collapsed?(d=f.startContainer,d.hasChildNodes()&&f.startOffset<d.childNodes.length&&(d=d.childNodes.item(f.startOffset)),f=[d]):f=p.getTextNodes(f,!0);return h.getAppliedStyles(f)};this.isBold=function(f){return k(f,"fo:font-weight","bold")};this.isItalic=function(f){return k(f,"fo:font-style","italic")};this.hasUnderline=
function(f){return k(f,"style:text-underline-style","solid")};this.hasStrikeThrough=function(f){return k(f,"style:text-line-through-style","solid")};this.isAlignedLeft=function(h){return f(h,"fo:text-align",["left","start"])};this.isAlignedCenter=function(h){return f(h,"fo:text-align",["center"])};this.isAlignedRight=function(h){return f(h,"fo:text-align",["right","end"])};this.isAlignedJustified=function(h){return f(h,"fo:text-align",["justify"])}};
// Input 45
core.RawDeflate=function(){function h(){this.dl=this.fc=0}function k(){this.extra_bits=this.static_tree=this.dyn_tree=null;this.max_code=this.max_length=this.elems=this.extra_base=0}function f(a,b,c,e){this.good_length=a;this.max_lazy=b;this.nice_length=c;this.max_chain=e}function p(){this.next=null;this.len=0;this.ptr=[];this.ptr.length=n;this.off=0}var n=8192,l,d,q,r,c=null,g,b,a,e,m,u,x,w,z,v,t,s,F,C,A,L,E,V,B,H,ea,ia,y,Y,T,K,P,G,I,R,U,D,J,N,M,aa,X,fa,S,Z,W,da,O,ca,ba,ha,Q,$,ka,la,ta,ua=[0,0,0,
0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ma=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],La=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ya=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],oa;oa=[new f(0,0,0,0),new f(4,4,8,4),new f(4,5,16,8),new f(4,6,32,32),new f(4,4,16,16),new f(8,16,32,32),new f(8,16,128,128),new f(8,32,128,256),new f(32,128,258,1024),new f(32,258,258,4096)];var pa=function(a){c[b+g++]=a;if(b+g===n){var e;if(0!==g){null!==l?(a=l,l=l.next):a=new p;
a.next=null;a.len=a.off=0;null===d?d=q=a:q=q.next=a;a.len=g-b;for(e=0;e<a.len;e++)a.ptr[e]=c[b+e];g=b=0}}},qa=function(a){a&=65535;b+g<n-2?(c[b+g++]=a&255,c[b+g++]=a>>>8):(pa(a&255),pa(a>>>8))},ra=function(){t=(t<<5^e[E+3-1]&255)&8191;s=x[32768+t];x[E&32767]=s;x[32768+t]=E},ga=function(a,b){z>16-b?(w|=a<<z,qa(w),w=a>>16-z,z+=b-16):(w|=a<<z,z+=b)},ja=function(a,b){ga(b[a].fc,b[a].dl)},za=function(a,b,c){return a[b].fc<a[c].fc||a[b].fc===a[c].fc&&X[b]<=X[c]},Aa=function(a,b,c){var e;for(e=0;e<c&&ta<
la.length;e++)a[b+e]=la.charCodeAt(ta++)&255;return e},va=function(){var a,b,c=65536-H-E;if(-1===c)c--;else if(65274<=E){for(a=0;32768>a;a++)e[a]=e[a+32768];V-=32768;E-=32768;v-=32768;for(a=0;8192>a;a++)b=x[32768+a],x[32768+a]=32768<=b?b-32768:0;for(a=0;32768>a;a++)b=x[a],x[a]=32768<=b?b-32768:0;c+=32768}B||(a=Aa(e,E+H,c),0>=a?B=!0:H+=a)},Ba=function(a){var b=ea,c=E,d,g=L,f=32506<E?E-32506:0,m=E+258,h=e[c+g-1],k=e[c+g];L>=Y&&(b>>=2);do if(d=a,e[d+g]===k&&e[d+g-1]===h&&e[d]===e[c]&&e[++d]===e[c+1]){c+=
2;d++;do++c;while(e[c]===e[++d]&&e[++c]===e[++d]&&e[++c]===e[++d]&&e[++c]===e[++d]&&e[++c]===e[++d]&&e[++c]===e[++d]&&e[++c]===e[++d]&&e[++c]===e[++d]&&c<m);d=258-(m-c);c=m-258;if(d>g){V=a;g=d;if(258<=d)break;h=e[c+g-1];k=e[c+g]}a=x[a&32767]}while(a>f&&0!==--b);return g},na=function(a,b){u[O++]=b;0===a?T[b].fc++:(a--,T[fa[b]+256+1].fc++,K[(256>a?S[a]:S[256+(a>>7)])&255].fc++,m[ca++]=a,ha|=Q);Q<<=1;0===(O&7)&&(da[ba++]=ha,ha=0,Q=1);if(2<y&&0===(O&4095)){var c=8*O,e=E-v,d;for(d=0;30>d;d++)c+=K[d].fc*
(5+ma[d]);c>>=3;if(ca<parseInt(O/2,10)&&c<parseInt(e/2,10))return!0}return 8191===O||8192===ca},wa=function(a,b){for(var c=N[b],e=b<<1;e<=M;){e<M&&za(a,N[e+1],N[e])&&e++;if(za(a,c,N[e]))break;N[b]=N[e];b=e;e<<=1}N[b]=c},Ca=function(a,b){var c=0;do c|=a&1,a>>=1,c<<=1;while(0<--b);return c>>1},Da=function(a,b){var c=[];c.length=16;var e=0,d;for(d=1;15>=d;d++)e=e+J[d-1]<<1,c[d]=e;for(e=0;e<=b;e++)d=a[e].dl,0!==d&&(a[e].fc=Ca(c[d]++,d))},xa=function(a){var b=a.dyn_tree,c=a.static_tree,e=a.elems,d,g=-1,
f=e;M=0;aa=573;for(d=0;d<e;d++)0!==b[d].fc?(N[++M]=g=d,X[d]=0):b[d].dl=0;for(;2>M;)d=N[++M]=2>g?++g:0,b[d].fc=1,X[d]=0,$--,null!==c&&(ka-=c[d].dl);a.max_code=g;for(d=M>>1;1<=d;d--)wa(b,d);do d=N[1],N[1]=N[M--],wa(b,1),c=N[1],N[--aa]=d,N[--aa]=c,b[f].fc=b[d].fc+b[c].fc,X[f]=X[d]>X[c]+1?X[d]:X[c]+1,b[d].dl=b[c].dl=f,N[1]=f++,wa(b,1);while(2<=M);N[--aa]=N[1];f=a.dyn_tree;d=a.extra_bits;var e=a.extra_base,c=a.max_code,m=a.max_length,h=a.static_tree,k,l,q,n,r=0;for(l=0;15>=l;l++)J[l]=0;f[N[aa]].dl=0;for(a=
aa+1;573>a;a++)k=N[a],l=f[f[k].dl].dl+1,l>m&&(l=m,r++),f[k].dl=l,k>c||(J[l]++,q=0,k>=e&&(q=d[k-e]),n=f[k].fc,$+=n*(l+q),null!==h&&(ka+=n*(h[k].dl+q)));if(0!==r){do{for(l=m-1;0===J[l];)l--;J[l]--;J[l+1]+=2;J[m]--;r-=2}while(0<r);for(l=m;0!==l;l--)for(k=J[l];0!==k;)d=N[--a],d>c||(f[d].dl!==l&&($+=(l-f[d].dl)*f[d].fc,f[d].fc=l),k--)}Da(b,g)},Ea=function(a,b){var c,e=-1,d,g=a[0].dl,f=0,m=7,h=4;0===g&&(m=138,h=3);a[b+1].dl=65535;for(c=0;c<=b;c++)d=g,g=a[c+1].dl,++f<m&&d===g||(f<h?I[d].fc+=f:0!==d?(d!==
e&&I[d].fc++,I[16].fc++):10>=f?I[17].fc++:I[18].fc++,f=0,e=d,0===g?(m=138,h=3):d===g?(m=6,h=3):(m=7,h=4))},Fa=function(){8<z?qa(w):0<z&&pa(w);z=w=0},Ga=function(a,b){var c,e=0,d=0,g=0,f=0,h,k;if(0!==O){do 0===(e&7)&&(f=da[g++]),c=u[e++]&255,0===(f&1)?ja(c,a):(h=fa[c],ja(h+256+1,a),k=ua[h],0!==k&&(c-=Z[h],ga(c,k)),c=m[d++],h=(256>c?S[c]:S[256+(c>>7)])&255,ja(h,b),k=ma[h],0!==k&&(c-=W[h],ga(c,k))),f>>=1;while(e<O)}ja(256,a)},Ha=function(a,b){var c,e=-1,d,g=a[0].dl,f=0,m=7,h=4;0===g&&(m=138,h=3);for(c=
0;c<=b;c++)if(d=g,g=a[c+1].dl,!(++f<m&&d===g)){if(f<h){do ja(d,I);while(0!==--f)}else 0!==d?(d!==e&&(ja(d,I),f--),ja(16,I),ga(f-3,2)):10>=f?(ja(17,I),ga(f-3,3)):(ja(18,I),ga(f-11,7));f=0;e=d;0===g?(m=138,h=3):d===g?(m=6,h=3):(m=7,h=4)}},Ia=function(){var a;for(a=0;286>a;a++)T[a].fc=0;for(a=0;30>a;a++)K[a].fc=0;for(a=0;19>a;a++)I[a].fc=0;T[256].fc=1;ha=O=ca=ba=$=ka=0;Q=1},sa=function(a){var b,c,d,g;g=E-v;da[ba]=ha;xa(R);xa(U);Ea(T,R.max_code);Ea(K,U.max_code);xa(D);for(d=18;3<=d&&0===I[ya[d]].dl;d--);
$+=3*(d+1)+14;b=$+3+7>>3;c=ka+3+7>>3;c<=b&&(b=c);if(g+4<=b&&0<=v)for(ga(0+a,3),Fa(),qa(g),qa(~g),d=0;d<g;d++)pa(e[v+d]);else if(c===b)ga(2+a,3),Ga(P,G);else{ga(4+a,3);g=R.max_code+1;b=U.max_code+1;d+=1;ga(g-257,5);ga(b-1,5);ga(d-4,4);for(c=0;c<d;c++)ga(I[ya[c]].dl,3);Ha(T,g-1);Ha(K,b-1);Ga(T,K)}Ia();0!==a&&Fa()},Ja=function(a,e,f){var m,h,k;for(m=0;null!==d&&m<f;){h=f-m;h>d.len&&(h=d.len);for(k=0;k<h;k++)a[e+m+k]=d.ptr[d.off+k];d.off+=h;d.len-=h;m+=h;0===d.len&&(h=d,d=d.next,h.next=l,l=h)}if(m===
f)return m;if(b<g){h=f-m;h>g-b&&(h=g-b);for(k=0;k<h;k++)a[e+m+k]=c[b+k];b+=h;m+=h;g===b&&(g=b=0)}return m},Ka=function(c,f,m){var h;if(!r){if(!B){z=w=0;var k,l;if(0===G[0].dl){R.dyn_tree=T;R.static_tree=P;R.extra_bits=ua;R.extra_base=257;R.elems=286;R.max_length=15;R.max_code=0;U.dyn_tree=K;U.static_tree=G;U.extra_bits=ma;U.extra_base=0;U.elems=30;U.max_length=15;U.max_code=0;D.dyn_tree=I;D.static_tree=null;D.extra_bits=La;D.extra_base=0;D.elems=19;D.max_length=7;for(l=k=D.max_code=0;28>l;l++)for(Z[l]=
k,h=0;h<1<<ua[l];h++)fa[k++]=l;fa[k-1]=l;for(l=k=0;16>l;l++)for(W[l]=k,h=0;h<1<<ma[l];h++)S[k++]=l;for(k>>=7;30>l;l++)for(W[l]=k<<7,h=0;h<1<<ma[l]-7;h++)S[256+k++]=l;for(h=0;15>=h;h++)J[h]=0;for(h=0;143>=h;)P[h++].dl=8,J[8]++;for(;255>=h;)P[h++].dl=9,J[9]++;for(;279>=h;)P[h++].dl=7,J[7]++;for(;287>=h;)P[h++].dl=8,J[8]++;Da(P,287);for(h=0;30>h;h++)G[h].dl=5,G[h].fc=Ca(h,5);Ia()}for(h=0;8192>h;h++)x[32768+h]=0;ia=oa[y].max_lazy;Y=oa[y].good_length;ea=oa[y].max_chain;v=E=0;H=Aa(e,0,65536);if(0>=H)B=
!0,H=0;else{for(B=!1;262>H&&!B;)va();for(h=t=0;2>h;h++)t=(t<<5^e[h]&255)&8191}d=null;b=g=0;3>=y?(L=2,A=0):(A=2,C=0);a=!1}r=!0;if(0===H)return a=!0,0}h=Ja(c,f,m);if(h===m)return m;if(a)return h;if(3>=y)for(;0!==H&&null===d;){ra();0!==s&&32506>=E-s&&(A=Ba(s),A>H&&(A=H));if(3<=A)if(l=na(E-V,A-3),H-=A,A<=ia){A--;do E++,ra();while(0!==--A);E++}else E+=A,A=0,t=e[E]&255,t=(t<<5^e[E+1]&255)&8191;else l=na(0,e[E]&255),H--,E++;l&&(sa(0),v=E);for(;262>H&&!B;)va()}else for(;0!==H&&null===d;){ra();L=A;F=V;A=2;
0!==s&&L<ia&&32506>=E-s&&(A=Ba(s),A>H&&(A=H),3===A&&4096<E-V&&A--);if(3<=L&&A<=L){l=na(E-1-F,L-3);H-=L-1;L-=2;do E++,ra();while(0!==--L);C=0;A=2;E++;l&&(sa(0),v=E)}else 0!==C?na(0,e[E-1]&255)&&(sa(0),v=E):C=1,E++,H--;for(;262>H&&!B;)va()}0===H&&(0!==C&&na(0,e[E-1]&255),sa(1),a=!0);return h+Ja(c,h+f,m-h)};this.deflate=function(a,b){var g,f;la=a;ta=0;"undefined"===String(typeof b)&&(b=6);(g=b)?1>g?g=1:9<g&&(g=9):g=6;y=g;B=r=!1;if(null===c){l=d=q=null;c=[];c.length=n;e=[];e.length=65536;m=[];m.length=
8192;u=[];u.length=32832;x=[];x.length=65536;T=[];T.length=573;for(g=0;573>g;g++)T[g]=new h;K=[];K.length=61;for(g=0;61>g;g++)K[g]=new h;P=[];P.length=288;for(g=0;288>g;g++)P[g]=new h;G=[];G.length=30;for(g=0;30>g;g++)G[g]=new h;I=[];I.length=39;for(g=0;39>g;g++)I[g]=new h;R=new k;U=new k;D=new k;J=[];J.length=16;N=[];N.length=573;X=[];X.length=573;fa=[];fa.length=256;S=[];S.length=512;Z=[];Z.length=29;W=[];W.length=30;da=[];da.length=1024}var p=Array(1024),v=[],t=[];for(g=Ka(p,0,p.length);0<g;){t.length=
g;for(f=0;f<g;f++)t[f]=String.fromCharCode(p[f]);v[v.length]=t.join("");g=Ka(p,0,p.length)}la="";return v.join("")}};
// Input 46
runtime.loadClass("odf.Namespaces");
gui.ImageSelector=function(h){function k(){var d=h.getSizer(),f,k;f=n.createElement("div");f.id="imageSelector";f.style.borderWidth="1px";d.appendChild(f);p.forEach(function(c){k=n.createElement("div");k.className=c;f.appendChild(k)});return f}var f=odf.Namespaces.svgns,p="topLeft topRight bottomRight bottomLeft topMiddle rightMiddle bottomMiddle leftMiddle".split(" "),n=h.getElement().ownerDocument,l=!1;this.select=function(d){var q,p,c=n.getElementById("imageSelector");c||(c=k());l=!0;q=c.parentNode;
p=d.getBoundingClientRect();var g=q.getBoundingClientRect(),b=h.getZoomLevel();q=(p.left-g.left)/b-1;p=(p.top-g.top)/b-1;c.style.display="block";c.style.left=q+"px";c.style.top=p+"px";c.style.width=d.getAttributeNS(f,"width");c.style.height=d.getAttributeNS(f,"height")};this.clearSelection=function(){var d;l&&(d=n.getElementById("imageSelector"))&&(d.style.display="none");l=!1};this.isSelectorElement=function(d){var f=n.getElementById("imageSelector");return f?d===f||d.parentNode===f:!1}};
// Input 47
runtime.loadClass("odf.OdfCanvas");
odf.CommandLineTools=function(){this.roundTrip=function(h,k,f){return new odf.OdfContainer(h,function(p){if(p.state===odf.OdfContainer.INVALID)return f("Document "+h+" is invalid.");p.state===odf.OdfContainer.DONE?p.saveAs(k,function(h){f(h)}):f("Document was not completely loaded.")})};this.render=function(h,k,f){for(k=k.getElementsByTagName("body")[0];k.firstChild;)k.removeChild(k.firstChild);k=new odf.OdfCanvas(k);k.addListener("statereadychange",function(h){f(h)});k.load(h)}};
// Input 48
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Member=function(h,k){var f={};this.getMemberId=function(){return h};this.getProperties=function(){return f};this.setProperties=function(h){Object.keys(h).forEach(function(k){f[k]=h[k]})};this.removeProperties=function(h){delete h.fullName;delete h.color;delete h.imageUrl;Object.keys(h).forEach(function(h){f.hasOwnProperty(h)&&delete f[h]})};runtime.assert(Boolean(h),"No memberId was supplied!");k.fullName||(k.fullName=runtime.tr("Unknown Author"));k.color||(k.color="black");k.imageUrl||(k.imageUrl=
"avatar-joe.png");f=k};
// Input 49
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("core.PositionFilter");runtime.loadClass("odf.OdfUtils");
(function(){function h(f,h,n){function l(a,b){function c(a){for(var b=0;a&&a.previousSibling;)b+=1,a=a.previousSibling;return b}this.steps=a;this.node=b;this.setIteratorPosition=function(a){a.setUnfilteredPosition(b.parentNode,c(b));do if(h.acceptPosition(a)===u)break;while(a.nextPosition())}}function d(a){return a.nodeType===Node.ELEMENT_NODE&&a.getAttributeNS(c,"nodeId")}function q(a){var b=k;a.setAttributeNS(c,"nodeId",b.toString());k+=1;return b}function r(a,e){var g,m=null;for(a=a.childNodes[e]||
a;!m&&a&&a!==f;)(g=d(a))&&(m=b[g])&&m.node!==a&&(runtime.log("Cloned node detected. Creating new bookmark"),m=null,a.removeAttributeNS(c,"nodeId")),a=a.parentNode;return m}var c="urn:webodf:names:steps",g={},b={},a=new odf.OdfUtils,e=new core.DomUtils,m,u=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.updateCache=function(c,e,f,m){var h;0===f&&a.isParagraph(e)?(h=!0,m||(c+=1)):e.hasChildNodes()&&e.childNodes[f]&&(e=e.childNodes[f],(h=a.isParagraph(e))&&(c+=1));h&&(f=d(e)||q(e),(m=b[f])?m.node===
e?m.steps=c:(runtime.log("Cloned node detected. Creating new bookmark"),f=q(e),m=b[f]=new l(c,e)):m=b[f]=new l(c,e),f=m,c=Math.ceil(f.steps/n)*n,e=g[c],!e||f.steps>e.steps)&&(g[c]=f)};this.setToClosestStep=function(a,b){for(var c=Math.floor(a/n)*n,e;!e&&0!==c;)e=g[c],c-=n;e=e||m;e.setIteratorPosition(b);return e.steps};this.setToClosestDomPoint=function(a,b,c){var e;if(a===f&&0===b)e=m;else if(a===f&&b===f.childNodes.length)e=Object.keys(g).map(function(a){return g[a]}).reduce(function(a,b){return b.steps>
a.steps?b:a},m);else if(e=r(a,b),!e)for(c.setUnfilteredPosition(a,b);!e&&c.previousNode();)e=r(c.container(),c.unfilteredDomOffset());e=e||m;e.setIteratorPosition(c);return e.steps};this.updateCacheAtPoint=function(a,c){var m={};Object.keys(b).map(function(a){return b[a]}).filter(function(b){return b.steps>a}).forEach(function(a){var h=Math.ceil(a.steps/n)*n,k,l;if(e.containsNode(f,a.node)){if(c(a),k=Math.ceil(a.steps/n)*n,l=m[k],!l||a.steps>l.steps)m[k]=a}else delete b[d(a.node)];g[h]===a&&delete g[h]});
Object.keys(m).forEach(function(a){g[a]=m[a]})};m=new function(a,b){this.steps=a;this.node=b;this.setIteratorPosition=function(a){a.setUnfilteredPosition(b,0);do if(h.acceptPosition(a)===u)break;while(a.nextPosition())}}(0,f)}var k=0;ops.StepsTranslator=function(f,k,n,l){function d(){var a=f();a!==r&&(runtime.log("Undo detected. Resetting steps cache"),r=a,c=new h(r,n,l),b=k(r))}function q(b,c){if(!c||n.acceptPosition(b)===a)return!0;for(;b.previousPosition();)if(n.acceptPosition(b)===a){if(c(0,b.container(),
b.unfilteredDomOffset()))return!0;break}for(;b.nextPosition();)if(n.acceptPosition(b)===a){if(c(1,b.container(),b.unfilteredDomOffset()))return!0;break}return!1}var r=f(),c=new h(r,n,l),g=new core.DomUtils,b=k(f()),a=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.convertStepsToDomPoint=function(e){var g,f;0>e&&(runtime.log("warn","Requested steps were negative ("+e+")"),e=0);d();for(g=c.setToClosestStep(e,b);g<e&&b.nextPosition();)(f=n.acceptPosition(b)===a)&&(g+=1),c.updateCache(g,b.container(),
b.unfilteredDomOffset(),f);g!==e&&runtime.log("warn","Requested "+e+" steps but only "+g+" are available");return{node:b.container(),offset:b.unfilteredDomOffset()}};this.convertDomPointToSteps=function(e,f,h){var k;d();g.containsNode(r,e)||(f=0>g.comparePoints(r,0,e,f),e=r,f=f?0:r.childNodes.length);b.setUnfilteredPosition(e,f);q(b,h)||b.setUnfilteredPosition(e,f);h=b.container();f=b.unfilteredDomOffset();e=c.setToClosestDomPoint(h,f,b);if(0>g.comparePoints(b.container(),b.unfilteredDomOffset(),
h,f))return 0<e?e-1:e;for(;(b.container()!==h||b.unfilteredDomOffset()!==f)&&b.nextPosition();)(k=n.acceptPosition(b)===a)&&(e+=1),c.updateCache(e,b.container(),b.unfilteredDomOffset(),k);return e+0};this.prime=function(){var e,g;d();for(e=c.setToClosestStep(0,b);b.nextPosition();)(g=n.acceptPosition(b)===a)&&(e+=1),c.updateCache(e,b.container(),b.unfilteredDomOffset(),g)};this.handleStepsInserted=function(a){d();c.updateCacheAtPoint(a.position,function(b){b.steps+=a.length})};this.handleStepsRemoved=
function(a){d();c.updateCacheAtPoint(a.position,function(b){b.steps-=a.length;0>b.steps&&(b.steps=0)})}};ops.StepsTranslator.PREVIOUS_STEP=0;ops.StepsTranslator.NEXT_STEP=1;return ops.StepsTranslator})();
// Input 50
xmldom.RNG={};
xmldom.RelaxNGParser=function(){function h(c,d){this.message=function(){d&&(c+=1===d.nodeType?" Element ":" Node ",c+=d.nodeName,d.nodeValue&&(c+=" with value '"+d.nodeValue+"'"),c+=".");return c}}function k(c){if(2>=c.e.length)return c;var d={name:c.name,e:c.e.slice(0,2)};return k({name:c.name,e:[d].concat(c.e.slice(2))})}function f(c){c=c.split(":",2);var d="",b;1===c.length?c=["",c[0]]:d=c[0];for(b in q)q[b]===d&&(c[0]=b);return c}function p(c,d){for(var b=0,a,e,h=c.name;c.e&&b<c.e.length;)if(a=c.e[b],
"ref"===a.name){e=d[a.a.name];if(!e)throw a.a.name+" was not defined.";a=c.e.slice(b+1);c.e=c.e.slice(0,b);c.e=c.e.concat(e.e);c.e=c.e.concat(a)}else b+=1,p(a,d);a=c.e;"choice"!==h||a&&a[1]&&"empty"!==a[1].name||(a&&a[0]&&"empty"!==a[0].name?(a[1]=a[0],a[0]={name:"empty"}):(delete c.e,c.name="empty"));if("group"===h||"interleave"===h)"empty"===a[0].name?"empty"===a[1].name?(delete c.e,c.name="empty"):(h=c.name=a[1].name,c.names=a[1].names,a=c.e=a[1].e):"empty"===a[1].name&&(h=c.name=a[0].name,c.names=
a[0].names,a=c.e=a[0].e);"oneOrMore"===h&&"empty"===a[0].name&&(delete c.e,c.name="empty");if("attribute"===h){e=c.names?c.names.length:0;for(var k,l=[],q=[],b=0;b<e;b+=1)k=f(c.names[b]),q[b]=k[0],l[b]=k[1];c.localnames=l;c.namespaces=q}"interleave"===h&&("interleave"===a[0].name?c.e="interleave"===a[1].name?a[0].e.concat(a[1].e):[a[1]].concat(a[0].e):"interleave"===a[1].name&&(c.e=[a[0]].concat(a[1].e)))}function n(c,d){for(var b=0,a;c.e&&b<c.e.length;)a=c.e[b],"elementref"===a.name?(a.id=a.id||
0,c.e[b]=d[a.id]):"element"!==a.name&&n(a,d),b+=1}var l=this,d,q={"http://www.w3.org/XML/1998/namespace":"xml"},r;r=function(c,d,b){var a=[],e,h,l=c.localName,n=[];e=c.attributes;var p=l,z=n,v={},t,s;for(t=0;e&&t<e.length;t+=1)if(s=e.item(t),s.namespaceURI)"http://www.w3.org/2000/xmlns/"===s.namespaceURI&&(q[s.value]=s.localName);else{"name"!==s.localName||"element"!==p&&"attribute"!==p||z.push(s.value);if("name"===s.localName||"combine"===s.localName||"type"===s.localName){var F=s,C;C=s.value;C=
C.replace(/^\s\s*/,"");for(var A=/\s/,L=C.length-1;A.test(C.charAt(L));)L-=1;C=C.slice(0,L+1);F.value=C}v[s.localName]=s.value}e=v;e.combine=e.combine||void 0;c=c.firstChild;p=a;z=n;for(v="";c;){if(c.nodeType===Node.ELEMENT_NODE&&"http://relaxng.org/ns/structure/1.0"===c.namespaceURI){if(t=r(c,d,p))"name"===t.name?z.push(q[t.a.ns]+":"+t.text):"choice"===t.name&&t.names&&t.names.length&&(z=z.concat(t.names),delete t.names),p.push(t)}else c.nodeType===Node.TEXT_NODE&&(v+=c.nodeValue);c=c.nextSibling}c=
v;"value"!==l&&"param"!==l&&(c=/^\s*([\s\S]*\S)?\s*$/.exec(c)[1]);"value"===l&&void 0===e.type&&(e.type="token",e.datatypeLibrary="");"attribute"!==l&&"element"!==l||void 0===e.name||(h=f(e.name),a=[{name:"name",text:h[1],a:{ns:h[0]}}].concat(a),delete e.name);"name"===l||"nsName"===l||"value"===l?void 0===e.ns&&(e.ns=""):delete e.ns;"name"===l&&(h=f(c),e.ns=h[0],c=h[1]);1<a.length&&("define"===l||"oneOrMore"===l||"zeroOrMore"===l||"optional"===l||"list"===l||"mixed"===l)&&(a=[{name:"group",e:k({name:"group",
e:a}).e}]);2<a.length&&"element"===l&&(a=[a[0]].concat({name:"group",e:k({name:"group",e:a.slice(1)}).e}));1===a.length&&"attribute"===l&&a.push({name:"text",text:c});1!==a.length||"choice"!==l&&"group"!==l&&"interleave"!==l?2<a.length&&("choice"===l||"group"===l||"interleave"===l)&&(a=k({name:l,e:a}).e):(l=a[0].name,n=a[0].names,e=a[0].a,c=a[0].text,a=a[0].e);"mixed"===l&&(l="interleave",a=[a[0],{name:"text"}]);"optional"===l&&(l="choice",a=[a[0],{name:"empty"}]);"zeroOrMore"===l&&(l="choice",a=
[{name:"oneOrMore",e:[a[0]]},{name:"empty"}]);if("define"===l&&e.combine){a:{p=e.combine;z=e.name;v=a;for(t=0;b&&t<b.length;t+=1)if(s=b[t],"define"===s.name&&s.a&&s.a.name===z){s.e=[{name:p,e:s.e.concat(v)}];b=s;break a}b=null}if(b)return null}b={name:l};a&&0<a.length&&(b.e=a);for(h in e)if(e.hasOwnProperty(h)){b.a=e;break}void 0!==c&&(b.text=c);n&&0<n.length&&(b.names=n);"element"===l&&(b.id=d.length,d.push(b),b={name:"elementref",id:b.id});return b};this.parseRelaxNGDOM=function(c,g){var b=[],a=
r(c&&c.documentElement,b,void 0),e,f,k={};for(e=0;e<a.e.length;e+=1)f=a.e[e],"define"===f.name?k[f.a.name]=f:"start"===f.name&&(d=f);if(!d)return[new h("No Relax NG start element was found.")];p(d,k);for(e in k)k.hasOwnProperty(e)&&p(k[e],k);for(e=0;e<b.length;e+=1)p(b[e],k);g&&(l.rootPattern=g(d.e[0],b));n(d,b);for(e=0;e<b.length;e+=1)n(b[e],b);l.start=d;l.elements=b;l.nsmap=q;return null}};
// Input 51
runtime.loadClass("core.Cursor");runtime.loadClass("core.EventNotifier");runtime.loadClass("gui.SelectionMover");
ops.OdtCursor=function(h,k){var f=this,p={},n,l,d,q=new core.EventNotifier([ops.OdtCursor.signalCursorUpdated]);this.removeFromOdtDocument=function(){d.remove()};this.move=function(d,c){var g=0;0<d?g=l.movePointForward(d,c):0>=d&&(g=-l.movePointBackward(-d,c));q.emit(ops.OdtCursor.signalCursorUpdated,f);return g};this.subscribe=function(d,c){q.subscribe(d,c)};this.unsubscribe=function(d,c){q.unsubscribe(d,c)};this.getStepCounter=function(){return l.getStepCounter()};this.getMemberId=function(){return h};
this.getNode=function(){return d.getNode()};this.getAnchorNode=function(){return d.getAnchorNode()};this.getSelectedRange=function(){return d.getSelectedRange()};this.setSelectedRange=function(h,c){d.setSelectedRange(h,c);q.emit(ops.OdtCursor.signalCursorUpdated,f)};this.hasForwardSelection=function(){return d.hasForwardSelection()};this.getOdtDocument=function(){return k};this.getSelectionType=function(){return n};this.setSelectionType=function(d){p.hasOwnProperty(d)?n=d:runtime.log("Invalid selection type: "+
d)};this.resetSelectionType=function(){f.setSelectionType(ops.OdtCursor.RangeSelection)};d=new core.Cursor(k.getDOM(),h);l=new gui.SelectionMover(d,k.getRootNode());p[ops.OdtCursor.RangeSelection]=!0;p[ops.OdtCursor.RegionSelection]=!0;f.resetSelectionType()};ops.OdtCursor.RangeSelection="Range";ops.OdtCursor.RegionSelection="Region";ops.OdtCursor.signalCursorUpdated="cursorUpdated";(function(){return ops.OdtCursor})();
// Input 52
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.EventNotifier");runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");runtime.loadClass("odf.Namespaces");runtime.loadClass("gui.SelectionMover");runtime.loadClass("core.PositionFilterChain");runtime.loadClass("ops.StepsTranslator");runtime.loadClass("ops.TextPositionFilter");runtime.loadClass("ops.Member");
ops.OdtDocument=function(h){function k(){var a=h.odfContainer().getContentElement(),b=a&&a.localName;runtime.assert("text"===b,"Unsupported content element type '"+b+"' for OdtDocument");return a}function f(){return k().ownerDocument}function p(a){for(;a&&!(a.namespaceURI===odf.Namespaces.officens&&"text"===a.localName||a.namespaceURI===odf.Namespaces.officens&&"annotation"===a.localName);)a=a.parentNode;return a}function n(a){this.acceptPosition=function(c){c=c.container();var e;e="string"===typeof a?
b[a].getNode():a;return p(c)===p(e)?m:u}}function l(a){var b=gui.SelectionMover.createPositionIterator(k());a=w.convertStepsToDomPoint(a);b.setUnfilteredPosition(a.node,a.offset);return b}function d(a,b){return h.getFormatting().getStyleElement(a,b)}function q(a){return d(a,"paragraph")}var r=this,c,g,b={},a={},e=new core.EventNotifier([ops.OdtDocument.signalMemberAdded,ops.OdtDocument.signalMemberUpdated,ops.OdtDocument.signalMemberRemoved,ops.OdtDocument.signalCursorAdded,ops.OdtDocument.signalCursorRemoved,
ops.OdtDocument.signalCursorMoved,ops.OdtDocument.signalParagraphChanged,ops.OdtDocument.signalParagraphStyleModified,ops.OdtDocument.signalCommonStyleCreated,ops.OdtDocument.signalCommonStyleDeleted,ops.OdtDocument.signalTableAdded,ops.OdtDocument.signalOperationExecuted,ops.OdtDocument.signalUndoStackChanged,ops.OdtDocument.signalStepsInserted,ops.OdtDocument.signalStepsRemoved]),m=core.PositionFilter.FilterResult.FILTER_ACCEPT,u=core.PositionFilter.FilterResult.FILTER_REJECT,x,w,z;this.getDOM=
f;this.getRootElement=p;this.getIteratorAtPosition=l;this.convertDomPointToCursorStep=function(a,b,c){return w.convertDomPointToSteps(a,b,c)};this.convertDomToCursorRange=function(a,b){var c,e;c=b&&b(a.anchorNode,a.anchorOffset);c=w.convertDomPointToSteps(a.anchorNode,a.anchorOffset,c);b||a.anchorNode!==a.focusNode||a.anchorOffset!==a.focusOffset?(e=b&&b(a.focusNode,a.focusOffset),e=w.convertDomPointToSteps(a.focusNode,a.focusOffset,e)):e=c;return{position:c,length:e-c}};this.convertCursorToDomRange=
function(a,b){var c=f().createRange(),e,d;e=w.convertStepsToDomPoint(a);b?(d=w.convertStepsToDomPoint(a+b),0<b?(c.setStart(e.node,e.offset),c.setEnd(d.node,d.offset)):(c.setStart(d.node,d.offset),c.setEnd(e.node,e.offset))):c.setStart(e.node,e.offset);return c};this.getStyleElement=d;this.upgradeWhitespacesAtPosition=function(a){a=l(a);var b,e,d;a.previousPosition();a.previousPosition();for(d=-1;1>=d;d+=1){b=a.container();e=a.unfilteredDomOffset();if(b.nodeType===Node.TEXT_NODE&&" "===b.data[e]&&
c.isSignificantWhitespace(b,e)){runtime.assert(" "===b.data[e],"upgradeWhitespaceToElement: textNode.data[offset] should be a literal space");var g=b.ownerDocument.createElementNS(odf.Namespaces.textns,"text:s");g.appendChild(b.ownerDocument.createTextNode(" "));b.deleteData(e,1);0<e&&(b=b.splitText(e));b.parentNode.insertBefore(g,b);b=g;a.moveToEndOfNode(b)}a.nextPosition()}};this.downgradeWhitespacesAtPosition=function(a){var b=l(a),e;a=b.container();for(b=b.unfilteredDomOffset();!c.isSpaceElement(a)&&
a.childNodes[b];)a=a.childNodes[b],b=0;a.nodeType===Node.TEXT_NODE&&(a=a.parentNode);c.isDowngradableSpaceElement(a)&&(b=a.firstChild,e=a.lastChild,g.mergeIntoParent(a),e!==b&&g.normalizeTextNodes(e),g.normalizeTextNodes(b))};this.getParagraphStyleElement=q;this.getParagraphElement=function(a){return c.getParagraphElement(a)};this.getParagraphStyleAttributes=function(a){return(a=q(a))?h.getFormatting().getInheritedStyleAttributes(a):null};this.getTextNodeAtStep=function(a,c){var e=l(a),d=e.container(),
g,h=0,m=null;d.nodeType===Node.TEXT_NODE?(g=d,h=e.unfilteredDomOffset(),0<g.length&&(0<h&&(g=g.splitText(h)),g.parentNode.insertBefore(f().createTextNode(""),g),g=g.previousSibling,h=0)):(g=f().createTextNode(""),h=0,d.insertBefore(g,e.rightNode()));if(c){if(b[c]&&r.getCursorPosition(c)===a){for(m=b[c].getNode();m.nextSibling&&"cursor"===m.nextSibling.localName;)m.parentNode.insertBefore(m.nextSibling,m);0<g.length&&g.nextSibling!==m&&(g=f().createTextNode(""),h=0);m.parentNode.insertBefore(g,m)}}else for(;g.nextSibling&&
"cursor"===g.nextSibling.localName;)g.parentNode.insertBefore(g.nextSibling,g);for(;g.previousSibling&&g.previousSibling.nodeType===Node.TEXT_NODE;)g.previousSibling.appendData(g.data),h=g.previousSibling.length,g=g.previousSibling,g.parentNode.removeChild(g.nextSibling);for(;g.nextSibling&&g.nextSibling.nodeType===Node.TEXT_NODE;)g.appendData(g.nextSibling.data),g.parentNode.removeChild(g.nextSibling);return{textNode:g,offset:h}};this.fixCursorPositions=function(){var a=new core.PositionFilterChain;
a.addFilter("BaseFilter",x);Object.keys(b).forEach(function(c){var e=b[c],d=e.getStepCounter(),g,f,h=!1;a.addFilter("RootFilter",r.createRootFilter(c));c=d.countStepsToPosition(e.getAnchorNode(),0,a);d.isPositionWalkable(a)?0===c&&(h=!0,e.move(0)):(h=!0,g=d.countPositionsToNearestStep(e.getNode(),0,a),f=d.countPositionsToNearestStep(e.getAnchorNode(),0,a),e.move(g),0!==c&&(0<f&&(c+=1),0<g&&(c-=1),d=d.countSteps(c,a),e.move(d),e.move(-d,!0)));h&&r.emit(ops.OdtDocument.signalCursorMoved,e);a.removeFilter("RootFilter")})};
this.getDistanceFromCursor=function(a,c,e){a=b[a];var d,g;runtime.assert(null!==c&&void 0!==c,"OdtDocument.getDistanceFromCursor called without node");a&&(d=w.convertDomPointToSteps(a.getNode(),0),g=w.convertDomPointToSteps(c,e));return g-d};this.getCursorPosition=function(a){return(a=b[a])?w.convertDomPointToSteps(a.getNode(),0):0};this.getCursorSelection=function(a){a=b[a];var c=0,e=0;a&&(c=w.convertDomPointToSteps(a.getNode(),0),e=w.convertDomPointToSteps(a.getAnchorNode(),0));return{position:e,
length:c-e}};this.getPositionFilter=function(){return x};this.getOdfCanvas=function(){return h};this.getRootNode=k;this.addMember=function(b){runtime.assert(void 0===a[b.getMemberId()],"This member already exists");a[b.getMemberId()]=b};this.getMember=function(b){return a.hasOwnProperty(b)?a[b]:null};this.removeMember=function(b){delete a[b]};this.getCursor=function(a){return b[a]};this.getCursors=function(){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(b[c]);return a};this.addCursor=function(a){runtime.assert(Boolean(a),
"OdtDocument::addCursor without cursor");var c=a.getStepCounter().countSteps(1,x),e=a.getMemberId();runtime.assert("string"===typeof e,"OdtDocument::addCursor has cursor without memberid");runtime.assert(!b[e],"OdtDocument::addCursor is adding a duplicate cursor with memberid "+e);a.move(c);b[e]=a};this.removeCursor=function(a){var c=b[a];return c?(c.removeFromOdtDocument(),delete b[a],r.emit(ops.OdtDocument.signalCursorRemoved,a),!0):!1};this.moveCursor=function(a,c,e,d){a=b[a];c=r.convertCursorToDomRange(c,
e);a&&c&&(a.setSelectedRange(c,0<=e),a.setSelectionType(d||ops.OdtCursor.RangeSelection))};this.getFormatting=function(){return h.getFormatting()};this.emit=function(a,b){e.emit(a,b)};this.subscribe=function(a,b){e.subscribe(a,b)};this.unsubscribe=function(a,b){e.unsubscribe(a,b)};this.createRootFilter=function(a){return new n(a)};this.close=function(a){a()};this.destroy=function(a){a()};x=new ops.TextPositionFilter(k);c=new odf.OdfUtils;g=new core.DomUtils;w=new ops.StepsTranslator(k,gui.SelectionMover.createPositionIterator,
x,500);e.subscribe(ops.OdtDocument.signalStepsInserted,w.handleStepsInserted);e.subscribe(ops.OdtDocument.signalStepsRemoved,w.handleStepsRemoved);e.subscribe(ops.OdtDocument.signalOperationExecuted,function(a){var b=a.spec(),c=b.memberid,b=(new Date(b.timestamp)).toISOString(),e=h.odfContainer();a.isEdit&&(c=r.getMember(c).getProperties().fullName,e.setMetadata({"dc:creator":c,"dc:date":b},null),z||(e.incrementEditingCycles(),e.setMetadata(null,["meta:editing-duration","meta:document-statistic"])),
z=a)})};ops.OdtDocument.signalMemberAdded="member/added";ops.OdtDocument.signalMemberUpdated="member/updated";ops.OdtDocument.signalMemberRemoved="member/removed";ops.OdtDocument.signalCursorAdded="cursor/added";ops.OdtDocument.signalCursorRemoved="cursor/removed";ops.OdtDocument.signalCursorMoved="cursor/moved";ops.OdtDocument.signalParagraphChanged="paragraph/changed";ops.OdtDocument.signalTableAdded="table/added";ops.OdtDocument.signalCommonStyleCreated="style/created";
ops.OdtDocument.signalCommonStyleDeleted="style/deleted";ops.OdtDocument.signalParagraphStyleModified="paragraphstyle/modified";ops.OdtDocument.signalOperationExecuted="operation/executed";ops.OdtDocument.signalUndoStackChanged="undo/changed";ops.OdtDocument.signalStepsInserted="steps/inserted";ops.OdtDocument.signalStepsRemoved="steps/removed";(function(){return ops.OdtDocument})();
// Input 53
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.Operation=function(){};ops.Operation.prototype.init=function(h){};ops.Operation.prototype.execute=function(h){};ops.Operation.prototype.spec=function(){};
// Input 54
runtime.loadClass("xmldom.RelaxNGParser");
xmldom.RelaxNG=function(){function h(a){return function(){var b;return function(){void 0===b&&(b=a());return b}}()}function k(a,b){return function(){var c={},e=0;return function(d){var g=d.hash||d.toString();if(c.hasOwnProperty(g))return c[g];c[g]=d=b(d);d.hash=a+e.toString();e+=1;return d}}()}function f(a){return function(){var b={};return function(c){var e,d;if(b.hasOwnProperty(c.localName)){if(d=b[c.localName],e=d[c.namespaceURI],void 0!==e)return e}else b[c.localName]=d={};return d[c.namespaceURI]=
e=a(c)}}()}function p(a,b,c){return function(){var e={},d=0;return function(g,f){var h=b&&b(g,f),m;if(void 0!==h)return h;m=g.hash||g.toString();h=f.hash||f.toString();if(e.hasOwnProperty(m)){if(m=e[m],m.hasOwnProperty(h))return m[h]}else e[m]=m={};m[h]=h=c(g,f);h.hash=a+d.toString();d+=1;return h}}()}function n(a,b){"choice"===b.p1.type?n(a,b.p1):a[b.p1.hash]=b.p1;"choice"===b.p2.type?n(a,b.p2):a[b.p2.hash]=b.p2}function l(a,b){return{type:"element",nc:a,nullable:!1,textDeriv:function(){return C},
startTagOpenDeriv:function(c){return a.contains(c)?e(b,A):C},attDeriv:function(){return C},startTagCloseDeriv:function(){return this}}}function d(){return{type:"list",nullable:!1,hash:"list",textDeriv:function(){return A}}}function q(a,b,e,d){if(b===C)return C;if(d>=e.length)return b;0===d&&(d=0);for(var g=e.item(d);g.namespaceURI===c;){d+=1;if(d>=e.length)return b;g=e.item(d)}return g=q(a,b.attDeriv(a,e.item(d)),e,d+1)}function r(a,b,c){c.e[0].a?(a.push(c.e[0].text),b.push(c.e[0].a.ns)):r(a,b,c.e[0]);
c.e[1].a?(a.push(c.e[1].text),b.push(c.e[1].a.ns)):r(a,b,c.e[1])}var c="http://www.w3.org/2000/xmlns/",g,b,a,e,m,u,x,w,z,v,t,s,F,C={type:"notAllowed",nullable:!1,hash:"notAllowed",nc:void 0,p:void 0,p1:void 0,p2:void 0,textDeriv:function(){return C},startTagOpenDeriv:function(){return C},attDeriv:function(){return C},startTagCloseDeriv:function(){return C},endTagDeriv:function(){return C}},A={type:"empty",nullable:!0,hash:"empty",nc:void 0,p:void 0,p1:void 0,p2:void 0,textDeriv:function(){return C},
startTagOpenDeriv:function(){return C},attDeriv:function(){return C},startTagCloseDeriv:function(){return A},endTagDeriv:function(){return C}},L={type:"text",nullable:!0,hash:"text",nc:void 0,p:void 0,p1:void 0,p2:void 0,textDeriv:function(){return L},startTagOpenDeriv:function(){return C},attDeriv:function(){return C},startTagCloseDeriv:function(){return L},endTagDeriv:function(){return C}};g=p("choice",function(a,b){if(a===C)return b;if(b===C||a===b)return a},function(a,b){var c={},e;n(c,{p1:a,
p2:b});b=a=void 0;for(e in c)c.hasOwnProperty(e)&&(void 0===a?a=c[e]:b=void 0===b?c[e]:g(b,c[e]));return function(a,b){return{type:"choice",nullable:a.nullable||b.nullable,hash:void 0,nc:void 0,p:void 0,p1:a,p2:b,textDeriv:function(c,e){return g(a.textDeriv(c,e),b.textDeriv(c,e))},startTagOpenDeriv:f(function(c){return g(a.startTagOpenDeriv(c),b.startTagOpenDeriv(c))}),attDeriv:function(c,e){return g(a.attDeriv(c,e),b.attDeriv(c,e))},startTagCloseDeriv:h(function(){return g(a.startTagCloseDeriv(),
b.startTagCloseDeriv())}),endTagDeriv:h(function(){return g(a.endTagDeriv(),b.endTagDeriv())})}}(a,b)});b=function(a,b,c){return function(){var e={},d=0;return function(g,f){var h=b&&b(g,f),m,l;if(void 0!==h)return h;m=g.hash||g.toString();h=f.hash||f.toString();m<h&&(l=m,m=h,h=l,l=g,g=f,f=l);if(e.hasOwnProperty(m)){if(m=e[m],m.hasOwnProperty(h))return m[h]}else e[m]=m={};m[h]=h=c(g,f);h.hash=a+d.toString();d+=1;return h}}()}("interleave",function(a,b){if(a===C||b===C)return C;if(a===A)return b;if(b===
A)return a},function(a,c){return{type:"interleave",nullable:a.nullable&&c.nullable,hash:void 0,p1:a,p2:c,textDeriv:function(e,d){return g(b(a.textDeriv(e,d),c),b(a,c.textDeriv(e,d)))},startTagOpenDeriv:f(function(e){return g(t(function(a){return b(a,c)},a.startTagOpenDeriv(e)),t(function(c){return b(a,c)},c.startTagOpenDeriv(e)))}),attDeriv:function(e,d){return g(b(a.attDeriv(e,d),c),b(a,c.attDeriv(e,d)))},startTagCloseDeriv:h(function(){return b(a.startTagCloseDeriv(),c.startTagCloseDeriv())}),endTagDeriv:void 0}});
a=p("group",function(a,b){if(a===C||b===C)return C;if(a===A)return b;if(b===A)return a},function(b,c){return{type:"group",p1:b,p2:c,nullable:b.nullable&&c.nullable,textDeriv:function(e,d){var f=a(b.textDeriv(e,d),c);return b.nullable?g(f,c.textDeriv(e,d)):f},startTagOpenDeriv:function(e){var d=t(function(b){return a(b,c)},b.startTagOpenDeriv(e));return b.nullable?g(d,c.startTagOpenDeriv(e)):d},attDeriv:function(e,d){return g(a(b.attDeriv(e,d),c),a(b,c.attDeriv(e,d)))},startTagCloseDeriv:h(function(){return a(b.startTagCloseDeriv(),
c.startTagCloseDeriv())})}});e=p("after",function(a,b){if(a===C||b===C)return C},function(a,b){return{type:"after",p1:a,p2:b,nullable:!1,textDeriv:function(c,d){return e(a.textDeriv(c,d),b)},startTagOpenDeriv:f(function(c){return t(function(a){return e(a,b)},a.startTagOpenDeriv(c))}),attDeriv:function(c,d){return e(a.attDeriv(c,d),b)},startTagCloseDeriv:h(function(){return e(a.startTagCloseDeriv(),b)}),endTagDeriv:h(function(){return a.nullable?b:C})}});m=k("oneormore",function(b){return b===C?C:
{type:"oneOrMore",p:b,nullable:b.nullable,textDeriv:function(c,e){return a(b.textDeriv(c,e),g(this,A))},startTagOpenDeriv:function(c){var e=this;return t(function(b){return a(b,g(e,A))},b.startTagOpenDeriv(c))},attDeriv:function(c,e){return a(b.attDeriv(c,e),g(this,A))},startTagCloseDeriv:h(function(){return m(b.startTagCloseDeriv())})}});x=p("attribute",void 0,function(a,b){return{type:"attribute",nullable:!1,hash:void 0,nc:a,p:b,p1:void 0,p2:void 0,textDeriv:void 0,startTagOpenDeriv:void 0,attDeriv:function(c,
e){return a.contains(e)&&(b.nullable&&/^\s+$/.test(e.nodeValue)||b.textDeriv(c,e.nodeValue).nullable)?A:C},startTagCloseDeriv:function(){return C},endTagDeriv:void 0}});u=k("value",function(a){return{type:"value",nullable:!1,value:a,textDeriv:function(b,c){return c===a?A:C},attDeriv:function(){return C},startTagCloseDeriv:function(){return this}}});z=k("data",function(a){return{type:"data",nullable:!1,dataType:a,textDeriv:function(){return A},attDeriv:function(){return C},startTagCloseDeriv:function(){return this}}});
t=function V(a,b){return"after"===b.type?e(b.p1,a(b.p2)):"choice"===b.type?g(V(a,b.p1),V(a,b.p2)):b};s=function(a,b,c){var e=c.currentNode;b=b.startTagOpenDeriv(e);b=q(a,b,e.attributes,0);var d=b=b.startTagCloseDeriv(),e=c.currentNode;b=c.firstChild();for(var f=[],h;b;)b.nodeType===Node.ELEMENT_NODE?f.push(b):b.nodeType!==Node.TEXT_NODE||/^\s*$/.test(b.nodeValue)||f.push(b.nodeValue),b=c.nextSibling();0===f.length&&(f=[""]);h=d;for(d=0;h!==C&&d<f.length;d+=1)b=f[d],"string"===typeof b?h=/^\s*$/.test(b)?
g(h,h.textDeriv(a,b)):h.textDeriv(a,b):(c.currentNode=b,h=s(a,h,c));c.currentNode=e;return b=h.endTagDeriv()};w=function(a){var b,c,e;if("name"===a.name)b=a.text,c=a.a.ns,a={name:b,ns:c,hash:"{"+c+"}"+b,contains:function(a){return a.namespaceURI===c&&a.localName===b}};else if("choice"===a.name){b=[];c=[];r(b,c,a);a="";for(e=0;e<b.length;e+=1)a+="{"+c[e]+"}"+b[e]+",";a={hash:a,contains:function(a){var e;for(e=0;e<b.length;e+=1)if(b[e]===a.localName&&c[e]===a.namespaceURI)return!0;return!1}}}else a=
{hash:"anyName",contains:function(){return!0}};return a};v=function B(c,e){var f,h;if("elementref"===c.name){f=c.id||0;c=e[f];if(void 0!==c.name){var k=c;f=e[k.id]={hash:"element"+k.id.toString()};k=l(w(k.e[0]),v(k.e[1],e));for(h in k)k.hasOwnProperty(h)&&(f[h]=k[h]);return f}return c}switch(c.name){case "empty":return A;case "notAllowed":return C;case "text":return L;case "choice":return g(B(c.e[0],e),B(c.e[1],e));case "interleave":f=B(c.e[0],e);for(h=1;h<c.e.length;h+=1)f=b(f,B(c.e[h],e));return f;
case "group":return a(B(c.e[0],e),B(c.e[1],e));case "oneOrMore":return m(B(c.e[0],e));case "attribute":return x(w(c.e[0]),B(c.e[1],e));case "value":return u(c.text);case "data":return f=c.a&&c.a.type,void 0===f&&(f=""),z(f);case "list":return d()}throw"No support for "+c.name;};this.makePattern=function(a,b){var c={},e;for(e in b)b.hasOwnProperty(e)&&(c[e]=b[e]);return e=v(a,c)};this.validate=function(a,b){var c;a.currentNode=a.root;c=s(null,F,a);c.nullable?b(null):(runtime.log("Error in Relax NG validation: "+
c),b(["Error in Relax NG validation: "+c]))};this.init=function(a){F=a}};
// Input 55
runtime.loadClass("xmldom.RelaxNGParser");
xmldom.RelaxNG2=function(){function h(d,f){this.message=function(){f&&(d+=f.nodeType===Node.ELEMENT_NODE?" Element ":" Node ",d+=f.nodeName,f.nodeValue&&(d+=" with value '"+f.nodeValue+"'"),d+=".");return d}}function k(d,f,h,c){return"empty"===d.name?null:n(d,f,h,c)}function f(d,f){if(2!==d.e.length)throw"Element with wrong # of elements: "+d.e.length;for(var n=f.currentNode,c=n?n.nodeType:0,g=null;c>Node.ELEMENT_NODE;){if(c!==Node.COMMENT_NODE&&(c!==Node.TEXT_NODE||!/^\s+$/.test(f.currentNode.nodeValue)))return[new h("Not allowed node of type "+
c+".")];c=(n=f.nextSibling())?n.nodeType:0}if(!n)return[new h("Missing element "+d.names)];if(d.names&&-1===d.names.indexOf(l[n.namespaceURI]+":"+n.localName))return[new h("Found "+n.nodeName+" instead of "+d.names+".",n)];if(f.firstChild()){for(g=k(d.e[1],f,n);f.nextSibling();)if(c=f.currentNode.nodeType,!(f.currentNode&&f.currentNode.nodeType===Node.TEXT_NODE&&/^\s+$/.test(f.currentNode.nodeValue)||c===Node.COMMENT_NODE))return[new h("Spurious content.",f.currentNode)];if(f.parentNode()!==n)return[new h("Implementation error.")]}else g=
k(d.e[1],f,n);f.nextSibling();return g}var p,n,l;n=function(d,l,p,c){var g=d.name,b=null;if("text"===g)a:{for(var a=(d=l.currentNode)?d.nodeType:0;d!==p&&3!==a;){if(1===a){b=[new h("Element not allowed here.",d)];break a}a=(d=l.nextSibling())?d.nodeType:0}l.nextSibling();b=null}else if("data"===g)b=null;else if("value"===g)c!==d.text&&(b=[new h("Wrong value, should be '"+d.text+"', not '"+c+"'",p)]);else if("list"===g)b=null;else if("attribute"===g)a:{if(2!==d.e.length)throw"Attribute with wrong # of elements: "+
d.e.length;g=d.localnames.length;for(b=0;b<g;b+=1){c=p.getAttributeNS(d.namespaces[b],d.localnames[b]);""!==c||p.hasAttributeNS(d.namespaces[b],d.localnames[b])||(c=void 0);if(void 0!==a&&void 0!==c){b=[new h("Attribute defined too often.",p)];break a}a=c}b=void 0===a?[new h("Attribute not found: "+d.names,p)]:k(d.e[1],l,p,a)}else if("element"===g)b=f(d,l);else if("oneOrMore"===g){c=0;do a=l.currentNode,g=n(d.e[0],l,p),c+=1;while(!g&&a!==l.currentNode);1<c?(l.currentNode=a,b=null):b=g}else if("choice"===
g){if(2!==d.e.length)throw"Choice with wrong # of options: "+d.e.length;a=l.currentNode;if("empty"===d.e[0].name){if(g=n(d.e[1],l,p,c))l.currentNode=a;b=null}else{if(g=k(d.e[0],l,p,c))l.currentNode=a,g=n(d.e[1],l,p,c);b=g}}else if("group"===g){if(2!==d.e.length)throw"Group with wrong # of members: "+d.e.length;b=n(d.e[0],l,p)||n(d.e[1],l,p)}else if("interleave"===g)a:{a=d.e.length;c=[a];for(var e=a,m,u,x,w;0<e;){m=0;u=l.currentNode;for(b=0;b<a;b+=1)x=l.currentNode,!0!==c[b]&&c[b]!==x&&(w=d.e[b],(g=
n(w,l,p))?(l.currentNode=x,void 0===c[b]&&(c[b]=!1)):x===l.currentNode||"oneOrMore"===w.name||"choice"===w.name&&("oneOrMore"===w.e[0].name||"oneOrMore"===w.e[1].name)?(m+=1,c[b]=x):(m+=1,c[b]=!0));if(u===l.currentNode&&m===e){b=null;break a}if(0===m){for(b=0;b<a;b+=1)if(!1===c[b]){b=[new h("Interleave does not match.",p)];break a}b=null;break a}for(b=e=0;b<a;b+=1)!0!==c[b]&&(e+=1)}b=null}else throw g+" not allowed in nonEmptyPattern.";return b};this.validate=function(d,f){d.currentNode=d.root;var h=
k(p.e[0],d,d.root);f(h)};this.init=function(d,f){p=d;l=f}};
// Input 56
runtime.loadClass("core.DomUtils");runtime.loadClass("gui.Avatar");runtime.loadClass("ops.OdtCursor");
gui.Caret=function(h,k,f){function p(c){g&&r.parentNode&&(!b||c)&&(c&&void 0!==a&&runtime.clearTimeout(a),b=!0,d.style.opacity=c||"0"===d.style.opacity?"1":"0",a=runtime.setTimeout(function(){b=!1;p(!1)},500))}function n(a,b){var c=a.getBoundingClientRect(),e=0,d=0;c&&b&&(e=Math.max(c.top,b.top),d=Math.min(c.bottom,b.bottom));return d-e}function l(){var a;a=h.getSelectedRange().cloneRange();var b=h.getNode(),g,f=null;b.previousSibling&&(g=b.previousSibling.nodeType===Node.TEXT_NODE?b.previousSibling.textContent.length:
b.previousSibling.childNodes.length,a.setStart(b.previousSibling,0<g?g-1:0),a.setEnd(b.previousSibling,g),(g=a.getBoundingClientRect())&&g.height&&(f=g));b.nextSibling&&(a.setStart(b.nextSibling,0),a.setEnd(b.nextSibling,0<(b.nextSibling.nodeType===Node.TEXT_NODE?b.nextSibling.textContent.length:b.nextSibling.childNodes.length)?1:0),(g=a.getBoundingClientRect())&&g.height&&(!f||n(b,g)>n(b,f))&&(f=g));a=f;b=h.getOdtDocument().getOdfCanvas().getZoomLevel();c&&h.getSelectionType()===ops.OdtCursor.RangeSelection?
d.style.visibility="visible":d.style.visibility="hidden";a?(d.style.top="0",f=e.getBoundingClientRect(d),8>a.height&&(a={top:a.top-(8-a.height)/2,height:8}),d.style.height=e.adaptRangeDifferenceToZoomLevel(a.height,b)+"px",d.style.top=e.adaptRangeDifferenceToZoomLevel(a.top-f.top,b)+"px"):(d.style.height="1em",d.style.top="5%")}var d,q,r,c=!0,g=!1,b=!1,a,e=new core.DomUtils;this.handleUpdate=l;this.refreshCursorBlinking=function(){f||h.getSelectedRange().collapsed?(g=!0,p(!0)):(g=!1,d.style.opacity=
"0")};this.setFocus=function(){g=!0;q.markAsFocussed(!0);p(!0)};this.removeFocus=function(){g=!1;q.markAsFocussed(!1);d.style.opacity="1"};this.show=function(){c=!0;l();q.markAsFocussed(!0)};this.hide=function(){c=!1;l();q.markAsFocussed(!1)};this.setAvatarImageUrl=function(a){q.setImageUrl(a)};this.setColor=function(a){d.style.borderColor=a;q.setColor(a)};this.getCursor=function(){return h};this.getFocusElement=function(){return d};this.toggleHandleVisibility=function(){q.isVisible()?q.hide():q.show()};
this.showHandle=function(){q.show()};this.hideHandle=function(){q.hide()};this.ensureVisible=function(){var a,b,c,e,g=h.getOdtDocument().getOdfCanvas().getElement().parentNode,f;c=g.offsetWidth-g.clientWidth+5;e=g.offsetHeight-g.clientHeight+5;f=d.getBoundingClientRect();a=f.left-c;b=f.top-e;c=f.right+c;e=f.bottom+e;f=g.getBoundingClientRect();b<f.top?g.scrollTop-=f.top-b:e>f.bottom&&(g.scrollTop+=e-f.bottom);a<f.left?g.scrollLeft-=f.left-a:c>f.right&&(g.scrollLeft+=c-f.right);l()};this.destroy=function(b){runtime.clearTimeout(a);
q.destroy(function(a){a?b(a):(r.removeChild(d),b())})};(function(){var a=h.getOdtDocument().getDOM();d=a.createElementNS(a.documentElement.namespaceURI,"span");d.className="caret";d.style.top="5%";r=h.getNode();r.appendChild(d);q=new gui.Avatar(r,k);l()})()};
// Input 57
gui.EventManager=function(h){function k(){var a=this,b=[];this.filters=[];this.handlers=[];this.handleEvent=function(c){-1===b.indexOf(c)&&(b.push(c),a.filters.every(function(a){return a(c)})&&a.handlers.forEach(function(a){a(c)}),runtime.setTimeout(function(){b.splice(b.indexOf(c),1)},0))}}function f(a){var b=a.scrollX,c=a.scrollY;this.restore=function(){a.scrollX===b&&a.scrollY===c||a.scrollTo(b,c)}}function p(a){var b=a.scrollTop,c=a.scrollLeft;this.restore=function(){if(a.scrollTop!==b||a.scrollLeft!==
c)a.scrollTop=b,a.scrollLeft=c}}function n(a,b,d){var g="on"+b,f=!1;a.attachEvent&&(f=a.attachEvent(g,d));!f&&a.addEventListener&&(a.addEventListener(b,d,!1),f=!0);f&&!c[b]||!a.hasOwnProperty(g)||(a[g]=d)}function l(c,d){var f=b[c]||null,l;!f&&d&&(l=h.getOdfCanvas().getElement(),f=b[c]=new k,g[c]&&(n(r,c,f.handleEvent),n(a,c,f.handleEvent)),n(l,c,f.handleEvent));return f}function d(){return h.getDOM().activeElement===a}function q(a){for(var b=[];a;)(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight)&&
b.push(new p(a)),a=a.parentNode;b.push(new f(r));return b}var r=runtime.getWindow(),c={beforecut:!0,beforepaste:!0},g={mousedown:!0,mouseup:!0,focus:!0},b={},a;this.addFilter=function(a,b){l(a,!0).filters.push(b)};this.subscribe=function(a,b){l(a,!0).handlers.push(b)};this.unsubscribe=function(a,b){var c=l(a,!1),d=c&&c.handlers.indexOf(b);c&&-1!==d&&c.handlers.splice(d,1)};this.hasFocus=d;this.focus=function(){var b;d()||(b=q(a),a.focus(),b.forEach(function(a){a.restore()}))};this.getEventTrap=function(){return a};
this.blur=function(){d()&&a.blur()};(function(){var b=h.getOdfCanvas().getElement(),c=b.ownerDocument;runtime.assert(Boolean(r),"EventManager requires a window object to operate correctly");a=c.createElement("div");a.id="eventTrap";b.appendChild(a)})()};
// Input 58
runtime.loadClass("core.Async");runtime.loadClass("core.DomUtils");runtime.loadClass("core.EventNotifier");runtime.loadClass("core.ScheduledTask");runtime.loadClass("ops.OdtDocument");runtime.loadClass("ops.OdtCursor");
(function(){function h(f,h){function k(c){r=c.which&&String.fromCharCode(c.which)===q;q=void 0;return!1===r}function l(c){r&&h(c.data);r=!1}function d(c){q=c.data;r=!1}var q,r=!1;this.destroy=function(c){f.unsubscribe("textInput",l);f.unsubscribe("compositionend",d);f.unsubscribe("keypress",k);c()};f.subscribe("textInput",l);f.subscribe("compositionend",d);f.addFilter("keypress",k)}function k(f,h){function k(c){q&&c.data&&h(c.data);q=!1;r.cancel()}function l(c){c.data||(q=!0,r.trigger())}function d(){q=
!1;r.cancel()}var q=!1,r;this.destroy=function(c){f.unsubscribe("textInput",k);f.unsubscribe("compositionend",l);f.unsubscribe("compositionstart",l);r.destroy(c)};(function(){f.subscribe("textInput",k);f.subscribe("compositionend",l);f.subscribe("compositionstart",d);r=new core.ScheduledTask(function(){q=!1},0)})()}gui.InputMethodEditor=function(f,p,n){function l(){var c;z&&(z=!1,c=a.getNode(),c.removeAttributeNS(b,"composing"),t.emit(gui.InputMethodEditor.signalCompositionEnd,{data:v}),v="")}function d(a){z=
!0;v+=a;w.trigger()}function q(){var b=g.getSelection(),c,d=e.ownerDocument;l();for(u.containsNode(p.getOdfCanvas().getElement(),e)||p.getOdfCanvas().getElement().appendChild(e);1<e.childNodes.length;)e.removeChild(e.firstChild);c=e.firstChild;if(!c||c.nodeType!==Node.TEXT_NODE){for(;e.firstChild;)e.removeChild(e.firstChild);c=e.appendChild(d.createTextNode(""))}a&&a.getSelectedRange().collapsed?c.deleteData(0,c.length):c.replaceData(0,c.length,x);n.focus();b.collapse(e.firstChild,0);b.extend&&b.extend(e,
e.childNodes.length)}function r(){var c=a.getNode();w.cancel();c.setAttributeNS(b,"composing","true");z||t.emit(gui.InputMethodEditor.signalCompositionStart,{data:""})}function c(a){d(a.data)}var g=runtime.getWindow(),b="urn:webodf:names:cursor",a=null,e=n.getEventTrap(),m=new core.Async,u=new core.DomUtils,x="b",w,z=!1,v="",t=new core.EventNotifier([gui.InputMethodEditor.signalCompositionStart,gui.InputMethodEditor.signalCompositionEnd]),s=[],F;this.subscribe=t.subscribe;this.unsubscribe=t.unsubscribe;
this.registerCursor=function(b){var c;b.getMemberId()===f&&(c=n.hasFocus(),a=b,a.subscribe(ops.OdtCursor.signalCursorUpdated,q),b=a.getNode(),b.insertBefore(e,b.firstChild),c&&q())};this.removeCursor=function(b){a&&b===f&&(b=n.hasFocus(),a.unsubscribe(ops.OdtCursor.signalCursorUpdated,q),a=null,p.getOdfCanvas().getElement().appendChild(e),b&&q())};this.destroy=function(a){n.unsubscribe("compositionstart",r);n.unsubscribe("compositionend",c);n.unsubscribe("keypress",l);m.destroyAll(F,a)};(function(){n.subscribe("compositionstart",
r);n.subscribe("compositionend",c);n.subscribe("keypress",l);s.push(new h(n,d));s.push(new k(n,d));F=s.map(function(a){return a.destroy});e.setAttribute("contenteditable","true");e.setAttribute("tabindex",-1);w=new core.ScheduledTask(q,1);F.push(w.destroy)})()};gui.InputMethodEditor.signalCompositionStart="input/compositionstart";gui.InputMethodEditor.signalCompositionEnd="input/compositionend";return gui.InputMethodEditor})();
// Input 59
runtime.loadClass("gui.SelectionMover");gui.ShadowCursor=function(h){var k=h.getDOM().createRange(),f=!0;this.removeFromOdtDocument=function(){};this.getMemberId=function(){return gui.ShadowCursor.ShadowCursorMemberId};this.getSelectedRange=function(){return k};this.setSelectedRange=function(h,n){k=h;f=!1!==n};this.hasForwardSelection=function(){return f};this.getOdtDocument=function(){return h};this.getSelectionType=function(){return ops.OdtCursor.RangeSelection};k.setStart(h.getRootNode(),0)};
gui.ShadowCursor.ShadowCursorMemberId="";(function(){return gui.ShadowCursor})();
// Input 60
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.UndoManager=function(){};gui.UndoManager.prototype.subscribe=function(h,k){};gui.UndoManager.prototype.unsubscribe=function(h,k){};gui.UndoManager.prototype.setOdtDocument=function(h){};gui.UndoManager.prototype.saveInitialState=function(){};gui.UndoManager.prototype.resetInitialState=function(){};gui.UndoManager.prototype.setPlaybackFunction=function(h){};gui.UndoManager.prototype.hasUndoStates=function(){};gui.UndoManager.prototype.hasRedoStates=function(){};
gui.UndoManager.prototype.moveForward=function(h){};gui.UndoManager.prototype.moveBackward=function(h){};gui.UndoManager.prototype.onOperationExecuted=function(h){};gui.UndoManager.signalUndoStackChanged="undoStackChanged";gui.UndoManager.signalUndoStateCreated="undoStateCreated";gui.UndoManager.signalUndoStateModified="undoStateModified";(function(){return gui.UndoManager})();
// Input 61
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.UndoStateRules=function(){function h(f){return f.spec().optype}function k(f){return f.isEdit}this.getOpType=h;this.isEditOperation=k;this.isPartOfOperationSet=function(f,p){if(f.isEdit){if(0===p.length)return!0;var n;if(n=p[p.length-1].isEdit)a:{n=p.filter(k);var l=h(f),d;b:switch(l){case "RemoveText":case "InsertText":d=!0;break b;default:d=!1}if(d&&l===h(n[0])){if(1===n.length){n=!0;break a}l=n[n.length-2].spec().position;n=n[n.length-1].spec().position;d=f.spec().position;if(n===d-(n-l)){n=
!0;break a}}n=!1}return n}return!0}};
// Input 62
/*

 Copyright (C) 2012 KO GmbH <aditya.bhatt@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.EditInfo=function(h,k){function f(){var f=[],d;for(d in n)n.hasOwnProperty(d)&&f.push({memberid:d,time:n[d].time});f.sort(function(d,f){return d.time-f.time});return f}var p,n={};this.getNode=function(){return p};this.getOdtDocument=function(){return k};this.getEdits=function(){return n};this.getSortedEdits=function(){return f()};this.addEdit=function(f,d){n[f]={time:d}};this.clearEdits=function(){n={}};this.destroy=function(f){h.parentNode&&h.removeChild(p);f()};p=k.getDOM().createElementNS("urn:webodf:names:editinfo",
"editinfo");h.insertBefore(p,h.firstChild)};
// Input 63
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");
ops.OpAddAnnotation=function(){function h(d,f,c){var g=d.getTextNodeAtStep(c,k);g&&(d=g.textNode,c=d.parentNode,g.offset!==d.length&&d.splitText(g.offset),c.insertBefore(f,d.nextSibling),0===d.length&&c.removeChild(d))}var k,f,p,n,l,d;this.init=function(d){k=d.memberid;f=parseInt(d.timestamp,10);p=parseInt(d.position,10);n=parseInt(d.length,10)||0;l=d.name};this.isEdit=!0;this.execute=function(q){var r={},c=q.getCursor(k),g,b;b=new core.DomUtils;d=q.getDOM();var a=new Date(f),e,m,u,x;g=d.createElementNS(odf.Namespaces.officens,
"office:annotation");g.setAttributeNS(odf.Namespaces.officens,"office:name",l);e=d.createElementNS(odf.Namespaces.dcns,"dc:creator");e.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",k);e.textContent=q.getMember(k).getProperties().fullName;m=d.createElementNS(odf.Namespaces.dcns,"dc:date");m.appendChild(d.createTextNode(a.toISOString()));a=d.createElementNS(odf.Namespaces.textns,"text:list");u=d.createElementNS(odf.Namespaces.textns,"text:list-item");x=d.createElementNS(odf.Namespaces.textns,
"text:p");u.appendChild(x);a.appendChild(u);g.appendChild(e);g.appendChild(m);g.appendChild(a);r.node=g;if(!r.node)return!1;if(n){g=d.createElementNS(odf.Namespaces.officens,"office:annotation-end");g.setAttributeNS(odf.Namespaces.officens,"office:name",l);r.end=g;if(!r.end)return!1;h(q,r.end,p+n)}h(q,r.node,p);q.emit(ops.OdtDocument.signalStepsInserted,{position:p,length:n});c&&(g=d.createRange(),b=b.getElementsByTagNameNS(r.node,odf.Namespaces.textns,"p")[0],g.selectNodeContents(b),c.setSelectedRange(g),
q.emit(ops.OdtDocument.signalCursorMoved,c));q.getOdfCanvas().addAnnotation(r);q.fixCursorPositions();return!0};this.spec=function(){return{optype:"AddAnnotation",memberid:k,timestamp:f,position:p,length:n,name:l}}};
// Input 64
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpAddCursor=function(){var h,k;this.init=function(f){h=f.memberid;k=f.timestamp};this.isEdit=!1;this.execute=function(f){var k=f.getCursor(h);if(k)return!1;k=new ops.OdtCursor(h,f);f.addCursor(k);f.emit(ops.OdtDocument.signalCursorAdded,k);return!0};this.spec=function(){return{optype:"AddCursor",memberid:h,timestamp:k}}};
// Input 65
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.Member");ops.OpAddMember=function(){var h,k,f;this.init=function(p){h=p.memberid;k=parseInt(p.timestamp,10);f=p.setProperties};this.isEdit=!1;this.execute=function(k){if(k.getMember(h))return!1;var n=new ops.Member(h,f);k.addMember(n);k.emit(ops.OdtDocument.signalMemberAdded,n);return!0};this.spec=function(){return{optype:"AddMember",memberid:h,timestamp:k,setProperties:f}}};
// Input 66
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");
ops.OpAddStyle=function(){var h,k,f,p,n,l,d=odf.Namespaces.stylens;this.init=function(d){h=d.memberid;k=d.timestamp;f=d.styleName;p=d.styleFamily;n="true"===d.isAutomaticStyle||!0===d.isAutomaticStyle;l=d.setProperties};this.isEdit=!0;this.execute=function(h){var k=h.getOdfCanvas().odfContainer(),c=h.getFormatting(),g=h.getDOM().createElementNS(d,"style:style");if(!g)return!1;l&&c.updateStyle(g,l);g.setAttributeNS(d,"style:family",p);g.setAttributeNS(d,"style:name",f);n?k.rootElement.automaticStyles.appendChild(g):
k.rootElement.styles.appendChild(g);h.getOdfCanvas().refreshCSS();n||h.emit(ops.OdtDocument.signalCommonStyleCreated,{name:f,family:p});return!0};this.spec=function(){return{optype:"AddStyle",memberid:h,timestamp:k,styleName:f,styleFamily:p,isAutomaticStyle:n,setProperties:l}}};
// Input 67
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");runtime.loadClass("odf.TextStyleApplicator");
ops.OpApplyDirectStyling=function(){function h(f,c,g){var b=f.getOdfCanvas().odfContainer(),a=q.splitBoundaries(c),e=d.getTextNodes(c,!1);c={startContainer:c.startContainer,startOffset:c.startOffset,endContainer:c.endContainer,endOffset:c.endOffset};(new odf.TextStyleApplicator(new odf.ObjectNameGenerator(b,k),f.getFormatting(),b.rootElement.automaticStyles)).applyStyle(e,c,g);a.forEach(q.normalizeTextNodes)}var k,f,p,n,l,d=new odf.OdfUtils,q=new core.DomUtils;this.init=function(d){k=d.memberid;f=
d.timestamp;p=parseInt(d.position,10);n=parseInt(d.length,10);l=d.setProperties};this.isEdit=!0;this.execute=function(q){var c=q.convertCursorToDomRange(p,n),g=d.getImpactedParagraphs(c);h(q,c,l);c.detach();q.getOdfCanvas().refreshCSS();q.fixCursorPositions();g.forEach(function(b){q.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:b,memberId:k,timeStamp:f})});q.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"ApplyDirectStyling",memberid:k,timestamp:f,
position:p,length:n,setProperties:l}}};
// Input 68
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: http://gitorious.org/webodf/webodf/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");
ops.OpApplyHyperlink=function(){function h(d){for(;d;){if(q.isHyperlink(d))return!0;d=d.parentNode}return!1}var k,f,p,n,l,d=new core.DomUtils,q=new odf.OdfUtils;this.init=function(d){k=d.memberid;f=d.timestamp;p=d.position;n=d.length;l=d.hyperlink};this.isEdit=!0;this.execute=function(r){var c=r.getDOM(),g=r.convertCursorToDomRange(p,n),b=d.splitBoundaries(g),a=[],e=q.getTextNodes(g,!1);if(0===e.length)return!1;e.forEach(function(b){var e=q.getParagraphElement(b);runtime.assert(!1===h(b),"The given range should not contain any link.");
var d=l,f=c.createElementNS(odf.Namespaces.textns,"text:a");f.setAttributeNS(odf.Namespaces.xlinkns,"xlink:type","simple");f.setAttributeNS(odf.Namespaces.xlinkns,"xlink:href",d);b.parentNode.insertBefore(f,b);f.appendChild(b);-1===a.indexOf(e)&&a.push(e)});b.forEach(d.normalizeTextNodes);g.detach();r.getOdfCanvas().refreshSize();r.getOdfCanvas().rerenderAnnotations();a.forEach(function(a){r.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:a,memberId:k,timeStamp:f})});return!0};this.spec=
function(){return{optype:"ApplyHyperlink",memberid:k,timestamp:f,position:p,length:n,hyperlink:l}}};
// Input 69
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpInsertImage=function(){var h,k,f,p,n,l,d,q,r=odf.Namespaces.drawns,c=odf.Namespaces.svgns,g=odf.Namespaces.textns,b=odf.Namespaces.xlinkns;this.init=function(a){h=a.memberid;k=a.timestamp;f=a.position;p=a.filename;n=a.frameWidth;l=a.frameHeight;d=a.frameStyleName;q=a.frameName};this.isEdit=!0;this.execute=function(a){var e=a.getOdfCanvas(),m=a.getTextNodeAtStep(f,h),u,x;if(!m)return!1;u=m.textNode;x=a.getParagraphElement(u);var m=m.offset!==u.length?u.splitText(m.offset):u.nextSibling,w=a.getDOM(),
z=w.createElementNS(r,"draw:image"),w=w.createElementNS(r,"draw:frame");z.setAttributeNS(b,"xlink:href",p);z.setAttributeNS(b,"xlink:type","simple");z.setAttributeNS(b,"xlink:show","embed");z.setAttributeNS(b,"xlink:actuate","onLoad");w.setAttributeNS(r,"draw:style-name",d);w.setAttributeNS(r,"draw:name",q);w.setAttributeNS(g,"text:anchor-type","as-char");w.setAttributeNS(c,"svg:width",n);w.setAttributeNS(c,"svg:height",l);w.appendChild(z);u.parentNode.insertBefore(w,m);a.emit(ops.OdtDocument.signalStepsInserted,
{position:f,length:1});0===u.length&&u.parentNode.removeChild(u);e.addCssForFrameWithImage(w);e.refreshCSS();a.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:x,memberId:h,timeStamp:k});e.rerenderAnnotations();return!0};this.spec=function(){return{optype:"InsertImage",memberid:h,timestamp:k,filename:p,position:f,frameWidth:n,frameHeight:l,frameStyleName:d,frameName:q}}};
// Input 70
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpInsertTable=function(){function h(d,b){var a;if(1===c.length)a=c[0];else if(3===c.length)switch(d){case 0:a=c[0];break;case p-1:a=c[2];break;default:a=c[1]}else a=c[d];if(1===a.length)return a[0];if(3===a.length)switch(b){case 0:return a[0];case n-1:return a[2];default:return a[1]}return a[b]}var k,f,p,n,l,d,q,r,c;this.init=function(g){k=g.memberid;f=g.timestamp;l=g.position;p=g.initialRows;n=g.initialColumns;d=g.tableName;q=g.tableStyleName;r=g.tableColumnStyleName;c=g.tableCellStyleMatrix};
this.isEdit=!0;this.execute=function(c){var b=c.getTextNodeAtStep(l),a=c.getRootNode();if(b){var e=c.getDOM(),m=e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table"),u=e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table-column"),x,w,z,v;q&&m.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:style-name",q);d&&m.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:name",d);u.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0",
"table:number-columns-repeated",n);r&&u.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:style-name",r);m.appendChild(u);for(z=0;z<p;z+=1){u=e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table-row");for(v=0;v<n;v+=1)x=e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:table-cell"),(w=h(z,v))&&x.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0","table:style-name",w),w=e.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",
"text:p"),x.appendChild(w),u.appendChild(x);m.appendChild(u)}b=c.getParagraphElement(b.textNode);a.insertBefore(m,b.nextSibling);c.emit(ops.OdtDocument.signalStepsInserted,{position:l,length:n*p+1});c.getOdfCanvas().refreshSize();c.emit(ops.OdtDocument.signalTableAdded,{tableElement:m,memberId:k,timeStamp:f});c.getOdfCanvas().rerenderAnnotations();return!0}return!1};this.spec=function(){return{optype:"InsertTable",memberid:k,timestamp:f,position:l,initialRows:p,initialColumns:n,tableName:d,tableStyleName:q,
tableColumnStyleName:r,tableCellStyleMatrix:c}}};
// Input 71
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpInsertText=function(){var h,k,f,p,n;this.init=function(l){h=l.memberid;k=l.timestamp;f=l.position;p=l.text;n="true"===l.moveCursor||!0===l.moveCursor};this.isEdit=!0;this.execute=function(l){var d,q,r,c=null,g=l.getDOM(),b,a=0,e,m=l.getCursor(h),u;l.upgradeWhitespacesAtPosition(f);if(d=l.getTextNodeAtStep(f)){q=d.textNode;c=q.nextSibling;r=q.parentNode;b=l.getParagraphElement(q);for(u=0;u<p.length;u+=1)if(" "===p[u]&&(0===u||u===p.length-1||" "===p[u-1])||"\t"===p[u])0===a?(d.offset!==q.length&&
(c=q.splitText(d.offset)),0<u&&q.appendData(p.substring(0,u))):a<u&&(a=p.substring(a,u),r.insertBefore(g.createTextNode(a),c)),a=u+1,e=" "===p[u]?"text:s":"text:tab",e=g.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",e),e.appendChild(g.createTextNode(p[u])),r.insertBefore(e,c);0===a?q.insertData(d.offset,p):a<p.length&&(d=p.substring(a),r.insertBefore(g.createTextNode(d),c));r=q.parentNode;c=q.nextSibling;r.removeChild(q);r.insertBefore(q,c);0===q.length&&q.parentNode.removeChild(q);
l.emit(ops.OdtDocument.signalStepsInserted,{position:f,length:p.length});m&&n&&(l.moveCursor(h,f+p.length,0),l.emit(ops.OdtDocument.signalCursorMoved,m));0<f&&(1<f&&l.downgradeWhitespacesAtPosition(f-2),l.downgradeWhitespacesAtPosition(f-1));l.downgradeWhitespacesAtPosition(f);l.downgradeWhitespacesAtPosition(f+p.length-1);l.downgradeWhitespacesAtPosition(f+p.length);l.getOdfCanvas().refreshSize();l.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:b,memberId:h,timeStamp:k});l.getOdfCanvas().rerenderAnnotations();
return!0}return!1};this.spec=function(){return{optype:"InsertText",memberid:h,timestamp:k,position:f,text:p,moveCursor:n}}};
// Input 72
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpMoveCursor=function(){var h,k,f,p,n;this.init=function(l){h=l.memberid;k=l.timestamp;f=l.position;p=l.length||0;n=l.selectionType||ops.OdtCursor.RangeSelection};this.isEdit=!1;this.execute=function(l){var d=l.getCursor(h),k;if(!d)return!1;k=l.convertCursorToDomRange(f,p);d.setSelectedRange(k,0<=p);d.setSelectionType(n);l.emit(ops.OdtDocument.signalCursorMoved,d);return!0};this.spec=function(){return{optype:"MoveCursor",memberid:h,timestamp:k,position:f,length:p,selectionType:n}}};
// Input 73
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");runtime.loadClass("core.DomUtils");
ops.OpRemoveAnnotation=function(){var h,k,f,p,n;this.init=function(l){h=l.memberid;k=l.timestamp;f=parseInt(l.position,10);p=parseInt(l.length,10);n=new core.DomUtils};this.isEdit=!0;this.execute=function(h){for(var d=h.getIteratorAtPosition(f).container(),k,r,c;d.namespaceURI!==odf.Namespaces.officens||"annotation"!==d.localName;)d=d.parentNode;if(null===d)return!1;(k=d.getAttributeNS(odf.Namespaces.officens,"name"))&&(r=n.getElementsByTagNameNS(h.getRootNode(),odf.Namespaces.officens,"annotation-end").filter(function(c){return k===
c.getAttributeNS(odf.Namespaces.officens,"name")})[0]||null);h.getOdfCanvas().forgetAnnotations();for(c=n.getElementsByTagNameNS(d,"urn:webodf:names:cursor","cursor");c.length;)d.parentNode.insertBefore(c.pop(),d);d.parentNode.removeChild(d);r&&r.parentNode.removeChild(r);h.emit(ops.OdtDocument.signalStepsRemoved,{position:0<f?f-1:f,length:p});h.fixCursorPositions();h.getOdfCanvas().refreshAnnotations();return!0};this.spec=function(){return{optype:"RemoveAnnotation",memberid:h,timestamp:k,position:f,
length:p}}};
// Input 74
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveBlob=function(){var h,k,f;this.init=function(p){h=p.memberid;k=p.timestamp;f=p.filename};this.isEdit=!0;this.execute=function(h){h.getOdfCanvas().odfContainer().removeBlob(f);return!0};this.spec=function(){return{optype:"RemoveBlob",memberid:h,timestamp:k,filename:f}}};
// Input 75
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveCursor=function(){var h,k;this.init=function(f){h=f.memberid;k=f.timestamp};this.isEdit=!1;this.execute=function(f){return f.removeCursor(h)?!0:!1};this.spec=function(){return{optype:"RemoveCursor",memberid:h,timestamp:k}}};
// Input 76
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: http://gitorious.org/webodf/webodf/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");
ops.OpRemoveHyperlink=function(){var h,k,f,p,n=new core.DomUtils,l=new odf.OdfUtils;this.init=function(d){h=d.memberid;k=d.timestamp;f=d.position;p=d.length};this.isEdit=!0;this.execute=function(d){var q=d.convertCursorToDomRange(f,p),r=l.getHyperlinkElements(q);runtime.assert(1===r.length,"The given range should only contain a single link.");r=n.mergeIntoParent(r[0]);q.detach();d.getOdfCanvas().refreshSize();d.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:l.getParagraphElement(r),
memberId:h,timeStamp:k});d.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"RemoveHyperlink",memberid:h,timestamp:k,position:f,length:p}}};
// Input 77
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.Member");ops.OpRemoveMember=function(){var h,k;this.init=function(f){h=f.memberid;k=parseInt(f.timestamp,10)};this.isEdit=!1;this.execute=function(f){if(!f.getMember(h))return!1;f.removeMember(h);f.emit(ops.OdtDocument.signalMemberRemoved,h);return!0};this.spec=function(){return{optype:"RemoveMember",memberid:h,timestamp:k}}};
// Input 78
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpRemoveStyle=function(){var h,k,f,p;this.init=function(n){h=n.memberid;k=n.timestamp;f=n.styleName;p=n.styleFamily};this.isEdit=!0;this.execute=function(h){var k=h.getStyleElement(f,p);if(!k)return!1;k.parentNode.removeChild(k);h.getOdfCanvas().refreshCSS();h.emit(ops.OdtDocument.signalCommonStyleDeleted,{name:f,family:p});return!0};this.spec=function(){return{optype:"RemoveStyle",memberid:h,timestamp:k,styleName:f,styleFamily:p}}};
// Input 79
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.OdfUtils");runtime.loadClass("core.DomUtils");
ops.OpRemoveText=function(){function h(f){function c(a){return q.hasOwnProperty(a.namespaceURI)||"br"===a.localName&&l.isLineBreak(a.parentNode)||a.nodeType===Node.TEXT_NODE&&q.hasOwnProperty(a.parentNode.namespaceURI)}function g(a){if(l.isCharacterElement(a))return!1;if(a.nodeType===Node.TEXT_NODE)return 0===a.textContent.length;for(a=a.firstChild;a;){if(q.hasOwnProperty(a.namespaceURI)||!g(a))return!1;a=a.nextSibling}return!0}function b(a){var e;a.nodeType===Node.TEXT_NODE?(e=a.parentNode,e.removeChild(a)):
e=d.removeUnwantedNodes(a,c);return!l.isParagraph(e)&&e!==f&&g(e)?b(e):e}this.isEmpty=g;this.mergeChildrenIntoParent=b}var k,f,p,n,l,d,q={};this.init=function(h){runtime.assert(0<=h.length,"OpRemoveText only supports positive lengths");k=h.memberid;f=h.timestamp;p=parseInt(h.position,10);n=parseInt(h.length,10);l=new odf.OdfUtils;d=new core.DomUtils;q[odf.Namespaces.dbns]=!0;q[odf.Namespaces.dcns]=!0;q[odf.Namespaces.dr3dns]=!0;q[odf.Namespaces.drawns]=!0;q[odf.Namespaces.chartns]=!0;q[odf.Namespaces.formns]=
!0;q[odf.Namespaces.numberns]=!0;q[odf.Namespaces.officens]=!0;q[odf.Namespaces.presentationns]=!0;q[odf.Namespaces.stylens]=!0;q[odf.Namespaces.svgns]=!0;q[odf.Namespaces.tablens]=!0;q[odf.Namespaces.textns]=!0};this.isEdit=!0;this.execute=function(q){var c,g,b,a,e=q.getCursor(k),m=new h(q.getRootNode());q.upgradeWhitespacesAtPosition(p);q.upgradeWhitespacesAtPosition(p+n);g=q.convertCursorToDomRange(p,n);d.splitBoundaries(g);c=q.getParagraphElement(g.startContainer);b=l.getTextElements(g,!1,!0);
a=l.getParagraphElements(g);g.detach();b.forEach(function(a){m.mergeChildrenIntoParent(a)});g=a.reduce(function(a,b){var c,e=!1,d=a,f=b,g,h=null;m.isEmpty(a)&&(e=!0,b.parentNode!==a.parentNode&&(g=b.parentNode,a.parentNode.insertBefore(b,a.nextSibling)),f=a,d=b,h=d.getElementsByTagNameNS("urn:webodf:names:editinfo","editinfo")[0]||d.firstChild);for(;f.hasChildNodes();)c=e?f.lastChild:f.firstChild,f.removeChild(c),"editinfo"!==c.localName&&d.insertBefore(c,h);g&&m.isEmpty(g)&&m.mergeChildrenIntoParent(g);
m.mergeChildrenIntoParent(f);return d});q.emit(ops.OdtDocument.signalStepsRemoved,{position:p,length:n});q.downgradeWhitespacesAtPosition(p);q.fixCursorPositions();q.getOdfCanvas().refreshSize();q.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:g||c,memberId:k,timeStamp:f});e&&(e.resetSelectionType(),q.emit(ops.OdtDocument.signalCursorMoved,e));q.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"RemoveText",memberid:k,timestamp:f,position:p,length:n}}};
// Input 80
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpSetBlob=function(){var h,k,f,p,n;this.init=function(l){h=l.memberid;k=l.timestamp;f=l.filename;p=l.mimetype;n=l.content};this.isEdit=!0;this.execute=function(h){h.getOdfCanvas().odfContainer().setBlob(f,p,n);return!0};this.spec=function(){return{optype:"SetBlob",memberid:h,timestamp:k,filename:f,mimetype:p,content:n}}};
// Input 81
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpSetParagraphStyle=function(){var h,k,f,p;this.init=function(n){h=n.memberid;k=n.timestamp;f=n.position;p=n.styleName};this.isEdit=!0;this.execute=function(n){var l;l=n.getIteratorAtPosition(f);return(l=n.getParagraphElement(l.container()))?(""!==p?l.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0","text:style-name",p):l.removeAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0","style-name"),n.getOdfCanvas().refreshSize(),n.emit(ops.OdtDocument.signalParagraphChanged,
{paragraphElement:l,timeStamp:k,memberId:h}),n.getOdfCanvas().rerenderAnnotations(),!0):!1};this.spec=function(){return{optype:"SetParagraphStyle",memberid:h,timestamp:k,position:f,styleName:p}}};
// Input 82
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpSplitParagraph=function(){var h,k,f,p,n;this.init=function(l){h=l.memberid;k=l.timestamp;f=l.position;p="true"===l.moveCursor||!0===l.moveCursor;n=new odf.OdfUtils};this.isEdit=!0;this.execute=function(l){var d,q,r,c,g,b,a,e=l.getCursor(h);l.upgradeWhitespacesAtPosition(f);d=l.getTextNodeAtStep(f);if(!d)return!1;q=l.getParagraphElement(d.textNode);if(!q)return!1;r=n.isListItem(q.parentNode)?q.parentNode:q;0===d.offset?(a=d.textNode.previousSibling,b=null):(a=d.textNode,b=d.offset>=d.textNode.length?
null:d.textNode.splitText(d.offset));for(c=d.textNode;c!==r;){c=c.parentNode;g=c.cloneNode(!1);b&&g.appendChild(b);if(a)for(;a&&a.nextSibling;)g.appendChild(a.nextSibling);else for(;c.firstChild;)g.appendChild(c.firstChild);c.parentNode.insertBefore(g,c.nextSibling);a=c;b=g}n.isListItem(b)&&(b=b.childNodes[0]);0===d.textNode.length&&d.textNode.parentNode.removeChild(d.textNode);l.emit(ops.OdtDocument.signalStepsInserted,{position:f,length:1});e&&p&&(l.moveCursor(h,f+1,0),l.emit(ops.OdtDocument.signalCursorMoved,
e));l.fixCursorPositions();l.getOdfCanvas().refreshSize();l.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:q,memberId:h,timeStamp:k});l.emit(ops.OdtDocument.signalParagraphChanged,{paragraphElement:b,memberId:h,timeStamp:k});l.getOdfCanvas().rerenderAnnotations();return!0};this.spec=function(){return{optype:"SplitParagraph",memberid:h,timestamp:k,position:f,moveCursor:p}}};
// Input 83
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.Member");runtime.loadClass("xmldom.XPath");
ops.OpUpdateMember=function(){function h(){var d="//dc:creator[@editinfo:memberid='"+k+"']",d=xmldom.XPath.getODFElementsWithXPath(l.getRootNode(),d,function(d){return"editinfo"===d?"urn:webodf:names:editinfo":odf.Namespaces.lookupNamespaceURI(d)}),f;for(f=0;f<d.length;f+=1)d[f].textContent=p.fullName}var k,f,p,n,l;this.init=function(d){k=d.memberid;f=parseInt(d.timestamp,10);p=d.setProperties;n=d.removedProperties};this.isEdit=!1;this.execute=function(d){l=d;var f=d.getMember(k);if(!f)return!1;n&&
f.removeProperties(n);p&&(f.setProperties(p),p.fullName&&h());d.emit(ops.OdtDocument.signalMemberUpdated,f);return!0};this.spec=function(){return{optype:"UpdateMember",memberid:k,timestamp:f,setProperties:p,removedProperties:n}}};
// Input 84
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OpUpdateMetadata=function(){var h,k,f,p;this.init=function(n){h=n.memberid;k=parseInt(n.timestamp,10);f=n.setProperties;p=n.removedProperties};this.isEdit=!0;this.execute=function(h){h=h.getOdfCanvas().odfContainer();var k=[],d=["dc:date","dc:creator","meta:editing-cycles"];f&&d.forEach(function(d){if(f[d])return!1});p&&(d.forEach(function(d){if(-1!==k.indexOf(d))return!1}),k=p.attributes.split(","));h.setMetadata(f,k);return!0};this.spec=function(){return{optype:"UpdateMetadata",memberid:h,timestamp:k,
setProperties:f,removedProperties:p}}};
// Input 85
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("odf.Namespaces");
ops.OpUpdateParagraphStyle=function(){function h(d,f){var c,g,b=f?f.split(","):[];for(c=0;c<b.length;c+=1)g=b[c].split(":"),d.removeAttributeNS(odf.Namespaces.lookupNamespaceURI(g[0]),g[1])}var k,f,p,n,l,d=odf.Namespaces.stylens;this.init=function(d){k=d.memberid;f=d.timestamp;p=d.styleName;n=d.setProperties;l=d.removedProperties};this.isEdit=!0;this.execute=function(f){var k=f.getFormatting(),c,g,b;return(c=""!==p?f.getParagraphStyleElement(p):k.getDefaultStyleElement("paragraph"))?(g=c.getElementsByTagNameNS(d,
"paragraph-properties")[0],b=c.getElementsByTagNameNS(d,"text-properties")[0],n&&k.updateStyle(c,n),l&&(l["style:paragraph-properties"]&&(h(g,l["style:paragraph-properties"].attributes),0===g.attributes.length&&c.removeChild(g)),l["style:text-properties"]&&(h(b,l["style:text-properties"].attributes),0===b.attributes.length&&c.removeChild(b)),h(c,l.attributes)),f.getOdfCanvas().refreshCSS(),f.emit(ops.OdtDocument.signalParagraphStyleModified,p),f.getOdfCanvas().rerenderAnnotations(),!0):!1};this.spec=
function(){return{optype:"UpdateParagraphStyle",memberid:k,timestamp:f,styleName:p,setProperties:n,removedProperties:l}}};
// Input 86
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.OpAddMember");runtime.loadClass("ops.OpUpdateMember");runtime.loadClass("ops.OpRemoveMember");runtime.loadClass("ops.OpAddCursor");runtime.loadClass("ops.OpApplyDirectStyling");runtime.loadClass("ops.OpRemoveCursor");runtime.loadClass("ops.OpMoveCursor");runtime.loadClass("ops.OpSetBlob");runtime.loadClass("ops.OpRemoveBlob");runtime.loadClass("ops.OpInsertImage");runtime.loadClass("ops.OpInsertTable");runtime.loadClass("ops.OpInsertText");runtime.loadClass("ops.OpRemoveText");
runtime.loadClass("ops.OpSplitParagraph");runtime.loadClass("ops.OpSetParagraphStyle");runtime.loadClass("ops.OpUpdateParagraphStyle");runtime.loadClass("ops.OpAddStyle");runtime.loadClass("ops.OpRemoveStyle");runtime.loadClass("ops.OpAddAnnotation");runtime.loadClass("ops.OpRemoveAnnotation");runtime.loadClass("ops.OpUpdateMetadata");runtime.loadClass("ops.OpApplyHyperlink");runtime.loadClass("ops.OpRemoveHyperlink");
ops.OperationFactory=function(){function h(f){return function(){return new f}}var k;this.register=function(f,h){k[f]=h};this.create=function(f){var h=null,n=k[f.optype];n&&(h=n(f),h.init(f));return h};k={AddMember:h(ops.OpAddMember),UpdateMember:h(ops.OpUpdateMember),RemoveMember:h(ops.OpRemoveMember),AddCursor:h(ops.OpAddCursor),ApplyDirectStyling:h(ops.OpApplyDirectStyling),SetBlob:h(ops.OpSetBlob),RemoveBlob:h(ops.OpRemoveBlob),InsertImage:h(ops.OpInsertImage),InsertTable:h(ops.OpInsertTable),
InsertText:h(ops.OpInsertText),RemoveText:h(ops.OpRemoveText),SplitParagraph:h(ops.OpSplitParagraph),SetParagraphStyle:h(ops.OpSetParagraphStyle),UpdateParagraphStyle:h(ops.OpUpdateParagraphStyle),AddStyle:h(ops.OpAddStyle),RemoveStyle:h(ops.OpRemoveStyle),MoveCursor:h(ops.OpMoveCursor),RemoveCursor:h(ops.OpRemoveCursor),AddAnnotation:h(ops.OpAddAnnotation),RemoveAnnotation:h(ops.OpRemoveAnnotation),UpdateMetadata:h(ops.OpUpdateMetadata),ApplyHyperlink:h(ops.OpApplyHyperlink),RemoveHyperlink:h(ops.OpRemoveHyperlink)}};
// Input 87
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OperationRouter=function(){};ops.OperationRouter.prototype.setOperationFactory=function(h){};ops.OperationRouter.prototype.setPlaybackFunction=function(h){};ops.OperationRouter.prototype.push=function(h){};ops.OperationRouter.prototype.close=function(h){};ops.OperationRouter.prototype.subscribe=function(h,k){};ops.OperationRouter.prototype.unsubscribe=function(h,k){};ops.OperationRouter.prototype.hasLocalUnsyncedOps=function(){};ops.OperationRouter.prototype.hasSessionHostConnection=function(){};
// Input 88
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.OperationTransformMatrix=function(){function h(b){b.position+=b.length;b.length*=-1}function k(b){var a=0>b.length;a&&h(b);return a}function f(b,a){var c=[];b&&["style:parent-style-name","style:next-style-name"].forEach(function(d){b[d]===a&&c.push(d)});return c}function p(b,a){b&&["style:parent-style-name","style:next-style-name"].forEach(function(c){b[c]===a&&delete b[c]})}function n(b){var a={};Object.keys(b).forEach(function(c){a[c]="object"===typeof b[c]?n(b[c]):b[c]});return a}function l(b,
a,c,d){var f,g,h=!1,k=!1,l,n,p=d&&d.attributes?d.attributes.split(","):[];b&&(c||0<p.length)&&Object.keys(b).forEach(function(a){f=b[a];"object"!==typeof f&&(l=c&&c[a],void 0!==l?(delete b[a],k=!0,l===f&&(delete c[a],h=!0)):p&&-1!==p.indexOf(a)&&(delete b[a],k=!0))});if(a&&a.attributes&&(c||0<p.length)){n=a.attributes.split(",");for(d=0;d<n.length;d+=1)if(g=n[d],c&&void 0!==c[g]||p&&-1!==p.indexOf(g))n.splice(d,1),d-=1,k=!0;0<n.length?a.attributes=n.join(","):delete a.attributes}return{majorChanged:h,
minorChanged:k}}function d(b){for(var a in b)if(b.hasOwnProperty(a))return!0;return!1}function q(b){for(var a in b)if(b.hasOwnProperty(a)&&("attributes"!==a||0<b.attributes.length))return!0;return!1}function r(b,a,c){var f=b.setProperties?b.setProperties[c]:null,g=b.removedProperties?b.removedProperties[c]:null,h=a.setProperties?a.setProperties[c]:null,k=a.removedProperties?a.removedProperties[c]:null,n;n=l(f,g,h,k);f&&!d(f)&&delete b.setProperties[c];g&&!q(g)&&delete b.removedProperties[c];h&&!d(h)&&
delete a.setProperties[c];k&&!q(k)&&delete a.removedProperties[c];return n}function c(b,a){return{opSpecsA:[b],opSpecsB:[a]}}var g={AddCursor:{AddCursor:c,AddMember:c,AddStyle:c,ApplyDirectStyling:c,InsertText:c,MoveCursor:c,RemoveCursor:c,RemoveMember:c,RemoveStyle:c,RemoveText:c,SetParagraphStyle:c,SplitParagraph:c,UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},AddMember:{AddStyle:c,InsertText:c,MoveCursor:c,RemoveCursor:c,RemoveStyle:c,RemoveText:c,SetParagraphStyle:c,SplitParagraph:c,
UpdateMetadata:c,UpdateParagraphStyle:c},AddStyle:{AddStyle:c,ApplyDirectStyling:c,InsertText:c,MoveCursor:c,RemoveCursor:c,RemoveMember:c,RemoveStyle:function(b,a){var c,d=[b],g=[a];b.styleFamily===a.styleFamily&&(c=f(b.setProperties,a.styleName),0<c.length&&(c={optype:"UpdateParagraphStyle",memberid:a.memberid,timestamp:a.timestamp,styleName:b.styleName,removedProperties:{attributes:c.join(",")}},g.unshift(c)),p(b.setProperties,a.styleName));return{opSpecsA:d,opSpecsB:g}},RemoveText:c,SetParagraphStyle:c,
SplitParagraph:c,UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},ApplyDirectStyling:{ApplyDirectStyling:function(b,a,c){var f,g,h,k,l,p,q,s;k=[b];h=[a];if(!(b.position+b.length<=a.position||b.position>=a.position+a.length)){f=c?b:a;g=c?a:b;if(b.position!==a.position||b.length!==a.length)p=n(f),q=n(g);a=r(g,f,"style:text-properties");if(a.majorChanged||a.minorChanged)h=[],b=[],k=f.position+f.length,l=g.position+g.length,g.position<f.position?a.minorChanged&&(s=n(q),s.length=f.position-g.position,
b.push(s),g.position=f.position,g.length=l-g.position):f.position<g.position&&a.majorChanged&&(s=n(p),s.length=g.position-f.position,h.push(s),f.position=g.position,f.length=k-f.position),l>k?a.minorChanged&&(p=q,p.position=k,p.length=l-k,b.push(p),g.length=k-g.position):k>l&&a.majorChanged&&(p.position=l,p.length=k-l,h.push(p),f.length=l-f.position),f.setProperties&&d(f.setProperties)&&h.push(f),g.setProperties&&d(g.setProperties)&&b.push(g),c?(k=h,h=b):k=b}return{opSpecsA:k,opSpecsB:h}},InsertText:function(b,
a){a.position<=b.position?b.position+=a.text.length:a.position<=b.position+b.length&&(b.length+=a.text.length);return{opSpecsA:[b],opSpecsB:[a]}},MoveCursor:c,RemoveCursor:c,RemoveStyle:c,RemoveText:function(b,a){var c=b.position+b.length,d=a.position+a.length,f=[b],g=[a];d<=b.position?b.position-=a.length:a.position<c&&(b.position<a.position?b.length=d<c?b.length-a.length:a.position-b.position:(b.position=a.position,d<c?b.length=c-d:f=[]));return{opSpecsA:f,opSpecsB:g}},SetParagraphStyle:c,SplitParagraph:function(b,
a){a.position<b.position?b.position+=1:a.position<b.position+b.length&&(b.length+=1);return{opSpecsA:[b],opSpecsB:[a]}},UpdateMetadata:c,UpdateParagraphStyle:c},InsertText:{InsertText:function(b,a,c){b.position<a.position?a.position+=b.text.length:b.position>a.position?b.position+=a.text.length:c?a.position+=b.text.length:b.position+=a.text.length;return{opSpecsA:[b],opSpecsB:[a]}},MoveCursor:function(b,a){var c=k(a);b.position<a.position?a.position+=b.text.length:b.position<a.position+a.length&&
(a.length+=b.text.length);c&&h(a);return{opSpecsA:[b],opSpecsB:[a]}},RemoveCursor:c,RemoveMember:c,RemoveStyle:c,RemoveText:function(b,a){var c;c=a.position+a.length;var d=[b],f=[a];c<=b.position?b.position-=a.length:b.position<=a.position?a.position+=b.text.length:(a.length=b.position-a.position,c={optype:"RemoveText",memberid:a.memberid,timestamp:a.timestamp,position:b.position+b.text.length,length:c-b.position},f.unshift(c),b.position=a.position);return{opSpecsA:d,opSpecsB:f}},SplitParagraph:function(b,
a,c){if(b.position<a.position)a.position+=b.text.length;else if(b.position>a.position)b.position+=1;else return c?a.position+=b.text.length:b.position+=1,null;return{opSpecsA:[b],opSpecsB:[a]}},UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},MoveCursor:{MoveCursor:c,RemoveCursor:function(b,a){return{opSpecsA:b.memberid===a.memberid?[]:[b],opSpecsB:[a]}},RemoveMember:c,RemoveStyle:c,RemoveText:function(b,a){var c=k(b),d=b.position+b.length,f=a.position+a.length;f<=b.position?b.position-=a.length:
a.position<d&&(b.position<a.position?b.length=f<d?b.length-a.length:a.position-b.position:(b.position=a.position,b.length=f<d?d-f:0));c&&h(b);return{opSpecsA:[b],opSpecsB:[a]}},SetParagraphStyle:c,SplitParagraph:function(b,a){var c=k(b);a.position<b.position?b.position+=1:a.position<b.position+b.length&&(b.length+=1);c&&h(b);return{opSpecsA:[b],opSpecsB:[a]}},UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},RemoveCursor:{RemoveCursor:function(b,a){var c=b.memberid===a.memberid;return{opSpecsA:c?
[]:[b],opSpecsB:c?[]:[a]}},RemoveMember:c,RemoveStyle:c,RemoveText:c,SetParagraphStyle:c,SplitParagraph:c,UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},RemoveMember:{RemoveStyle:c,RemoveText:c,SetParagraphStyle:c,SplitParagraph:c,UpdateMetadata:c,UpdateParagraphStyle:c},RemoveStyle:{RemoveStyle:function(b,a){var c=b.styleName===a.styleName&&b.styleFamily===a.styleFamily;return{opSpecsA:c?[]:[b],opSpecsB:c?[]:[a]}},RemoveText:c,SetParagraphStyle:function(b,a){var c,d=[b],f=[a];"paragraph"===
b.styleFamily&&b.styleName===a.styleName&&(c={optype:"SetParagraphStyle",memberid:b.memberid,timestamp:b.timestamp,position:a.position,styleName:""},d.unshift(c),a.styleName="");return{opSpecsA:d,opSpecsB:f}},SplitParagraph:c,UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:function(b,a){var c,d=[b],g=[a];"paragraph"===b.styleFamily&&(c=f(a.setProperties,b.styleName),0<c.length&&(c={optype:"UpdateParagraphStyle",memberid:b.memberid,timestamp:b.timestamp,styleName:a.styleName,removedProperties:{attributes:c.join(",")}},
d.unshift(c)),b.styleName===a.styleName?g=[]:p(a.setProperties,b.styleName));return{opSpecsA:d,opSpecsB:g}}},RemoveText:{RemoveText:function(b,a){var c=b.position+b.length,d=a.position+a.length,f=[b],g=[a];d<=b.position?b.position-=a.length:c<=a.position?a.position-=b.length:a.position<c&&(b.position<a.position?(b.length=d<c?b.length-a.length:a.position-b.position,c<d?(a.position=b.position,a.length=d-c):g=[]):(c<d?a.length-=b.length:a.position<b.position?a.length=b.position-a.position:g=[],d<c?(b.position=
a.position,b.length=c-d):f=[]));return{opSpecsA:f,opSpecsB:g}},SplitParagraph:function(b,a){var c=b.position+b.length,d=[b],f=[a];a.position<=b.position?b.position+=1:a.position<c&&(b.length=a.position-b.position,c={optype:"RemoveText",memberid:b.memberid,timestamp:b.timestamp,position:a.position+1,length:c-a.position},d.unshift(c));b.position+b.length<=a.position?a.position-=b.length:b.position<a.position&&(a.position=b.position);return{opSpecsA:d,opSpecsB:f}},UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},
SetParagraphStyle:{UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},SplitParagraph:{SplitParagraph:function(b,a,c){b.position<a.position?a.position+=1:b.position>a.position?b.position+=1:b.position===a.position&&(c?a.position+=1:b.position+=1);return{opSpecsA:[b],opSpecsB:[a]}},UpdateMember:c,UpdateMetadata:c,UpdateParagraphStyle:c},UpdateMember:{UpdateMetadata:c,UpdateParagraphStyle:c},UpdateMetadata:{UpdateMetadata:function(b,a,c){var f,g=[b],h=[a];f=c?b:a;b=c?a:b;l(b.setProperties||null,
b.removedProperties||null,f.setProperties||null,f.removedProperties||null);f.setProperties&&d(f.setProperties)||f.removedProperties&&q(f.removedProperties)||(c?g=[]:h=[]);b.setProperties&&d(b.setProperties)||b.removedProperties&&q(b.removedProperties)||(c?h=[]:g=[]);return{opSpecsA:g,opSpecsB:h}},UpdateParagraphStyle:c},UpdateParagraphStyle:{UpdateParagraphStyle:function(b,a,c){var f,g=[b],h=[a];b.styleName===a.styleName&&(f=c?b:a,b=c?a:b,r(b,f,"style:paragraph-properties"),r(b,f,"style:text-properties"),
l(b.setProperties||null,b.removedProperties||null,f.setProperties||null,f.removedProperties||null),f.setProperties&&d(f.setProperties)||f.removedProperties&&q(f.removedProperties)||(c?g=[]:h=[]),b.setProperties&&d(b.setProperties)||b.removedProperties&&q(b.removedProperties)||(c?h=[]:g=[]));return{opSpecsA:g,opSpecsB:h}}}};this.passUnchanged=c;this.extendTransformations=function(b){Object.keys(b).forEach(function(a){var c=b[a],d,f=g.hasOwnProperty(a);runtime.log((f?"Extending":"Adding")+" map for optypeA: "+
a);f||(g[a]={});d=g[a];Object.keys(c).forEach(function(b){var f=d.hasOwnProperty(b);runtime.assert(a<=b,"Wrong order:"+a+", "+b);runtime.log("  "+(f?"Overwriting":"Adding")+" entry for optypeB: "+b);d[b]=c[b]})})};this.transformOpspecVsOpspec=function(b,a){var c=b.optype<=a.optype,d;runtime.log("Crosstransforming:");runtime.log(runtime.toJson(b));runtime.log(runtime.toJson(a));c||(d=b,b=a,a=d);(d=(d=g[b.optype])&&d[a.optype])?(d=d(b,a,!c),c||null===d||(d={opSpecsA:d.opSpecsB,opSpecsB:d.opSpecsA})):
d=null;runtime.log("result:");d?(runtime.log(runtime.toJson(d.opSpecsA)),runtime.log(runtime.toJson(d.opSpecsB))):runtime.log("null");return d}};
// Input 89
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.OperationFactory");runtime.loadClass("ops.OperationTransformMatrix");
ops.OperationTransformer=function(){function h(h){var k=[];h.forEach(function(d){k.push(f.create(d))});return k}function k(f,h){for(var d,q,r=[],c=[];0<f.length&&h;){d=f.shift();d=p.transformOpspecVsOpspec(d,h);if(!d)return null;r=r.concat(d.opSpecsA);if(0===d.opSpecsB.length){r=r.concat(f);h=null;break}for(;1<d.opSpecsB.length;){q=k(f,d.opSpecsB.shift());if(!q)return null;c=c.concat(q.opSpecsB);f=q.opSpecsA}h=d.opSpecsB.pop()}h&&c.push(h);return{opSpecsA:r,opSpecsB:c}}var f,p=new ops.OperationTransformMatrix;
this.setOperationFactory=function(h){f=h};this.getOperationTransformMatrix=function(){return p};this.transform=function(f,l){for(var d,p=[];0<l.length;){d=k(f,l.shift());if(!d)return null;f=d.opSpecsA;p=p.concat(d.opSpecsB)}return{opsA:h(f),opsB:h(p)}}};
// Input 90
/*

 Copyright (C) 2012 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
ops.TrivialOperationRouter=function(){var h,k;this.setOperationFactory=function(f){h=f};this.setPlaybackFunction=function(f){k=f};this.push=function(f){f.forEach(function(f){f=f.spec();f.timestamp=(new Date).getTime();f=h.create(f);k(f)})};this.close=function(f){f()};this.subscribe=function(f,h){};this.unsubscribe=function(f,h){};this.hasLocalUnsyncedOps=function(){return!1};this.hasSessionHostConnection=function(){return!0}};
// Input 91
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.EditInfo");runtime.loadClass("gui.EditInfoHandle");
gui.EditInfoMarker=function(h,k){function f(c,b){return runtime.setTimeout(function(){d.style.opacity=c},b)}var p=this,n,l,d,q,r,c;this.addEdit=function(g,b){var a=Date.now()-b;h.addEdit(g,b);l.setEdits(h.getSortedEdits());d.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",g);runtime.clearTimeout(r);runtime.clearTimeout(c);1E4>a?(q=f(1,0),r=f(0.5,1E4-a),c=f(0.2,2E4-a)):1E4<=a&&2E4>a?(q=f(0.5,0),c=f(0.2,2E4-a)):q=f(0.2,0)};this.getEdits=function(){return h.getEdits()};this.clearEdits=
function(){h.clearEdits();l.setEdits([]);d.hasAttributeNS("urn:webodf:names:editinfo","editinfo:memberid")&&d.removeAttributeNS("urn:webodf:names:editinfo","editinfo:memberid")};this.getEditInfo=function(){return h};this.show=function(){d.style.display="block"};this.hide=function(){p.hideHandle();d.style.display="none"};this.showHandle=function(){l.show()};this.hideHandle=function(){l.hide()};this.destroy=function(f){runtime.clearTimeout(q);runtime.clearTimeout(r);runtime.clearTimeout(c);n.removeChild(d);
l.destroy(function(b){b?f(b):h.destroy(f)})};(function(){var c=h.getOdtDocument().getDOM();d=c.createElementNS(c.documentElement.namespaceURI,"div");d.setAttribute("class","editInfoMarker");d.onmouseover=function(){p.showHandle()};d.onmouseout=function(){p.hideHandle()};n=h.getNode();n.appendChild(d);l=new gui.EditInfoHandle(n);k||p.hide()})()};
// Input 92
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
gui.PlainTextPasteboard=function(h,k){function f(f,h){f.init(h);return f}this.createPasteOps=function(p){var n=h.getCursorPosition(k),l=n,d=[];p.replace(/\r/g,"").split("\n").forEach(function(h){d.push(f(new ops.OpSplitParagraph,{memberid:k,position:l,moveCursor:!0}));l+=1;d.push(f(new ops.OpInsertText,{memberid:k,position:l,text:h,moveCursor:!0}));l+=h.length});d.push(f(new ops.OpRemoveText,{memberid:k,position:n,length:1}));return d}};
// Input 93
gui.SelectionView=function(h){};gui.SelectionView.prototype.rerender=function(){};gui.SelectionView.prototype.show=function(){};gui.SelectionView.prototype.hide=function(){};gui.SelectionView.prototype.visible=function(){};gui.SelectionView.prototype.destroy=function(h){};
// Input 94
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("gui.SelectionView");
gui.SelectionViewManager=function(h){function k(){return Object.keys(f).map(function(h){return f[h]})}var f={};this.getSelectionView=function(h){return f.hasOwnProperty(h)?f[h]:null};this.getSelectionViews=k;this.removeSelectionView=function(h){f.hasOwnProperty(h)&&(f[h].destroy(function(){}),delete f[h])};this.hideSelectionView=function(h){f.hasOwnProperty(h)&&f[h].hide()};this.showSelectionView=function(h){f.hasOwnProperty(h)&&f[h].show()};this.rerenderSelectionViews=function(){Object.keys(f).forEach(function(h){f[h].visible()&&
f[h].rerender()})};this.registerCursor=function(k,n){var l=k.getMemberId(),d=new h(k);n?d.show():d.hide();return f[l]=d};this.destroy=function(f){var h=k();(function d(k,r){r?f(r):k<h.length?h[k].destroy(function(c){d(k+1,c)}):f()})(0,void 0)}};
// Input 95
runtime.loadClass("core.DomUtils");runtime.loadClass("odf.OdfUtils");runtime.loadClass("odf.OdfNodeFilter");runtime.loadClass("gui.SelectionMover");
gui.SvgSelectionView=function(h){function k(){var b=a.getRootNode();e!==b&&(e=b,m=e.parentNode.parentNode.parentNode,m.appendChild(x),x.setAttribute("class","selectionOverlay"),x.appendChild(w))}function f(a){t=a;x.style.display=!0===a?"block":"none"}function p(b){var c=v.getBoundingClientRect(m),d=a.getOdfCanvas().getZoomLevel(),e={};e.top=v.adaptRangeDifferenceToZoomLevel(b.top-c.top,d);e.left=v.adaptRangeDifferenceToZoomLevel(b.left-c.left,d);e.bottom=v.adaptRangeDifferenceToZoomLevel(b.bottom-
c.top,d);e.right=v.adaptRangeDifferenceToZoomLevel(b.right-c.left,d);e.width=v.adaptRangeDifferenceToZoomLevel(b.width,d);e.height=v.adaptRangeDifferenceToZoomLevel(b.height,d);return e}function n(a){a=a.getBoundingClientRect();return Boolean(a&&0!==a.height)}function l(a){var b=z.getTextElements(a,!0,!1),c=a.cloneRange(),d=a.cloneRange();a=a.cloneRange();if(!b.length)return null;var e;a:{e=0;var f=b[e],g=c.startContainer===f?c.startOffset:0,h=g;c.setStart(f,g);for(c.setEnd(f,h);!n(c);){if(f.nodeType===
Node.ELEMENT_NODE&&h<f.childNodes.length)h=f.childNodes.length;else if(f.nodeType===Node.TEXT_NODE&&h<f.length)h+=1;else if(b[e])f=b[e],e+=1,g=h=0;else{e=!1;break a}c.setStart(f,g);c.setEnd(f,h)}e=!0}if(!e)return null;a:{e=b.length-1;f=b[e];h=g=d.endContainer===f?d.endOffset:f.length||f.childNodes.length;d.setStart(f,g);for(d.setEnd(f,h);!n(d);){if(f.nodeType===Node.ELEMENT_NODE&&0<g)g=0;else if(f.nodeType===Node.TEXT_NODE&&0<g)g-=1;else if(b[e])f=b[e],e-=1,g=h=f.length||f.childNodes.length;else{b=
!1;break a}d.setStart(f,g);d.setEnd(f,h)}b=!0}if(!b)return null;a.setStart(c.startContainer,c.startOffset);a.setEnd(d.endContainer,d.endOffset);return{firstRange:c,lastRange:d,fillerRange:a}}function d(a,b){var c={};c.top=Math.min(a.top,b.top);c.left=Math.min(a.left,b.left);c.right=Math.max(a.right,b.right);c.bottom=Math.max(a.bottom,b.bottom);c.width=c.right-c.left;c.height=c.bottom-c.top;return c}function q(a,b){b&&0<b.width&&0<b.height&&(a=a?d(a,b):b);return a}function r(b){function c(a){s.setUnfilteredPosition(a,
0);return w.acceptNode(a)===F&&t.acceptPosition(s)===F?F:C}function d(a){var b=null;c(a)===F&&(b=v.getBoundingClientRect(a));return b}var e=b.commonAncestorContainer,f=b.startContainer,g=b.endContainer,h=b.startOffset,k=b.endOffset,l,m,n=null,p,r=u.createRange(),t,w=new odf.OdfNodeFilter,x;if(f===e||g===e)return r=b.cloneRange(),n=r.getBoundingClientRect(),r.detach(),n;for(b=f;b.parentNode!==e;)b=b.parentNode;for(m=g;m.parentNode!==e;)m=m.parentNode;t=a.createRootFilter(f);for(e=b.nextSibling;e&&
e!==m;)p=d(e),n=q(n,p),e=e.nextSibling;if(z.isParagraph(b))n=q(n,v.getBoundingClientRect(b));else if(b.nodeType===Node.TEXT_NODE)e=b,r.setStart(e,h),r.setEnd(e,e===m?k:e.length),p=r.getBoundingClientRect(),n=q(n,p);else for(x=u.createTreeWalker(b,NodeFilter.SHOW_TEXT,c,!1),e=x.currentNode=f;e&&e!==g;)r.setStart(e,h),r.setEnd(e,e.length),p=r.getBoundingClientRect(),n=q(n,p),l=e,h=0,e=x.nextNode();l||(l=f);if(z.isParagraph(m))n=q(n,v.getBoundingClientRect(m));else if(m.nodeType===Node.TEXT_NODE)e=m,
r.setStart(e,e===b?h:0),r.setEnd(e,k),p=r.getBoundingClientRect(),n=q(n,p);else for(x=u.createTreeWalker(m,NodeFilter.SHOW_TEXT,c,!1),e=x.currentNode=g;e&&e!==l;)if(r.setStart(e,0),r.setEnd(e,k),p=r.getBoundingClientRect(),n=q(n,p),e=x.previousNode())k=e.length;return n}function c(a,b){var c=a.getBoundingClientRect(),d={width:0};d.top=c.top;d.bottom=c.bottom;d.height=c.height;d.left=d.right=b?c.right:c.left;return d}function g(){k();if(h.getSelectionType()===ops.OdtCursor.RangeSelection){f(!0);var a=
h.getSelectedRange(),b=l(a),e,g,m,n,q,t,s;if(a.collapsed||!b)f(!1);else{f(!0);a=b.firstRange;e=b.lastRange;b=b.fillerRange;g=p(c(a,!1));n=p(c(e,!0));m=(m=r(b))?p(m):d(g,n);q=m.left;m=g.left+Math.max(0,m.width-(g.left-m.left));t=Math.min(g.top,n.top);s=n.top+n.height;g=[{x:g.left,y:t+g.height},{x:g.left,y:t},{x:m,y:t},{x:m,y:s-n.height},{x:n.right,y:s-n.height},{x:n.right,y:s},{x:q,y:s},{x:q,y:t+g.height},{x:g.left,y:t+g.height}];n="";for(q=0;q<g.length;q+=1)n+=g[q].x+","+g[q].y+" ";w.setAttribute("points",
n);a.detach();e.detach();b.detach()}}else f(!1)}function b(a){a===h&&g()}var a=h.getOdtDocument(),e,m,u=a.getDOM(),x=u.createElementNS("http://www.w3.org/2000/svg","svg"),w=u.createElementNS("http://www.w3.org/2000/svg","polygon"),z=new odf.OdfUtils,v=new core.DomUtils,t=!0,s=gui.SelectionMover.createPositionIterator(a.getRootNode()),F=NodeFilter.FILTER_ACCEPT,C=NodeFilter.FILTER_REJECT;this.show=this.rerender=g;this.hide=function(){f(!1)};this.visible=function(){return t};this.destroy=function(a){m.removeChild(x);
h.getOdtDocument().unsubscribe(ops.OdtDocument.signalCursorMoved,b);a()};(function(){var a=h.getMemberId();k();x.setAttributeNS("urn:webodf:names:editinfo","editinfo:memberid",a);h.getOdtDocument().subscribe(ops.OdtDocument.signalCursorMoved,b)})()};
// Input 96
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.DomUtils");runtime.loadClass("gui.UndoManager");runtime.loadClass("gui.UndoStateRules");
gui.TrivialUndoManager=function(h){function k(){u.emit(gui.UndoManager.signalUndoStackChanged,{undoAvailable:d.hasUndoStates(),redoAvailable:d.hasRedoStates()})}function f(){a!==c&&a!==e[e.length-1]&&e.push(a)}function p(a){var b=a.previousSibling||a.nextSibling;a.parentNode.removeChild(a);q.normalizeTextNodes(b)}function n(a){return Object.keys(a).map(function(b){return a[b]})}function l(a){function c(a){var b=a.spec();if(f[b.memberid])switch(b.optype){case "AddCursor":d[b.memberid]||(d[b.memberid]=
a,delete f[b.memberid],g-=1);break;case "MoveCursor":e[b.memberid]||(e[b.memberid]=a)}}var d={},e={},f={},g,h=a.pop();b.getCursors().forEach(function(a){f[a.getMemberId()]=!0});for(g=Object.keys(f).length;h&&0<g;)h.reverse(),h.forEach(c),h=a.pop();return n(d).concat(n(e))}var d=this,q=new core.DomUtils,r,c=[],g,b,a=[],e=[],m=[],u=new core.EventNotifier([gui.UndoManager.signalUndoStackChanged,gui.UndoManager.signalUndoStateCreated,gui.UndoManager.signalUndoStateModified,gui.TrivialUndoManager.signalDocumentRootReplaced]),
x=h||new gui.UndoStateRules;this.subscribe=function(a,b){u.subscribe(a,b)};this.unsubscribe=function(a,b){u.unsubscribe(a,b)};this.hasUndoStates=function(){return 0<e.length};this.hasRedoStates=function(){return 0<m.length};this.setOdtDocument=function(a){b=a};this.resetInitialState=function(){e.length=0;m.length=0;c.length=0;a.length=0;r=null;k()};this.saveInitialState=function(){var d=b.getOdfCanvas().odfContainer(),g=b.getOdfCanvas().getAnnotationViewManager();g&&g.forgetAnnotations();r=d.rootElement.cloneNode(!0);
b.getOdfCanvas().refreshAnnotations();d=r;q.getElementsByTagNameNS(d,"urn:webodf:names:cursor","cursor").forEach(p);q.getElementsByTagNameNS(d,"urn:webodf:names:cursor","anchor").forEach(p);f();e.unshift(c);a=c=l(e);e.length=0;m.length=0;k()};this.setPlaybackFunction=function(a){g=a};this.onOperationExecuted=function(b){m.length=0;x.isEditOperation(b)&&a===c||!x.isPartOfOperationSet(b,a)?(f(),a=[b],e.push(a),u.emit(gui.UndoManager.signalUndoStateCreated,{operations:a}),k()):(a.push(b),u.emit(gui.UndoManager.signalUndoStateModified,
{operations:a}))};this.moveForward=function(b){for(var c=0,d;b&&m.length;)d=m.pop(),e.push(d),d.forEach(g),b-=1,c+=1;c&&(a=e[e.length-1],k());return c};this.moveBackward=function(d){for(var f=b.getOdfCanvas(),h=f.odfContainer(),l=0;d&&e.length;)m.push(e.pop()),d-=1,l+=1;l&&(h.setRootElement(r.cloneNode(!0)),f.setOdfContainer(h,!0),u.emit(gui.TrivialUndoManager.signalDocumentRootReplaced,{}),b.getCursors().forEach(function(a){b.removeCursor(a.getMemberId())}),c.forEach(g),e.forEach(function(a){a.forEach(g)}),
f.refreshCSS(),a=e[e.length-1]||c,k());return l}};gui.TrivialUndoManager.signalDocumentRootReplaced="documentRootReplaced";(function(){return gui.TrivialUndoManager})();
// Input 97
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("ops.TrivialOperationRouter");runtime.loadClass("ops.OperationFactory");runtime.loadClass("ops.OdtDocument");
ops.Session=function(h){var k=new ops.OperationFactory,f=new ops.OdtDocument(h),p=null;this.setOperationFactory=function(f){k=f;p&&p.setOperationFactory(k)};this.setOperationRouter=function(h){p=h;h.setPlaybackFunction(function(h){return h.execute(f)?(f.emit(ops.OdtDocument.signalOperationExecuted,h),!0):!1});h.setOperationFactory(k)};this.getOperationFactory=function(){return k};this.getOdtDocument=function(){return f};this.enqueue=function(f){p.push(f)};this.close=function(h){p.close(function(k){k?
h(k):f.close(h)})};this.destroy=function(h){f.destroy(h)};this.setOperationRouter(new ops.TrivialOperationRouter)};
// Input 98
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is part of WebODF.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.EventNotifier");runtime.loadClass("core.PositionFilter");runtime.loadClass("ops.Session");runtime.loadClass("ops.OpAddAnnotation");runtime.loadClass("ops.OpRemoveAnnotation");runtime.loadClass("gui.SelectionMover");
gui.AnnotationController=function(h,k){function f(){var f=d.getCursor(k),f=f&&f.getNode(),b=!1;if(f){a:{for(b=d.getRootNode();f&&f!==b;){if(f.namespaceURI===c&&"annotation"===f.localName){f=!0;break a}f=f.parentNode}f=!1}b=!f}b!==q&&(q=b,r.emit(gui.AnnotationController.annotatableChanged,q))}function p(c){c.getMemberId()===k&&f()}function n(c){c===k&&f()}function l(c){c.getMemberId()===k&&f()}var d=h.getOdtDocument(),q=!1,r=new core.EventNotifier([gui.AnnotationController.annotatableChanged]),c=odf.Namespaces.officens;
this.isAnnotatable=function(){return q};this.addAnnotation=function(){var c=new ops.OpAddAnnotation,b=d.getCursorSelection(k),a=b.length,b=b.position;q&&(b=0<=a?b:b+a,a=Math.abs(a),c.init({memberid:k,position:b,length:a,name:k+Date.now()}),h.enqueue([c]))};this.removeAnnotation=function(c){var b,a;b=d.convertDomPointToCursorStep(c,0)+1;a=d.convertDomPointToCursorStep(c,c.childNodes.length);c=new ops.OpRemoveAnnotation;c.init({memberid:k,position:b,length:a-b});a=new ops.OpMoveCursor;a.init({memberid:k,
position:0<b?b-1:b,length:0});h.enqueue([c,a])};this.subscribe=function(c,b){r.subscribe(c,b)};this.unsubscribe=function(c,b){r.unsubscribe(c,b)};this.destroy=function(c){d.unsubscribe(ops.OdtDocument.signalCursorAdded,p);d.unsubscribe(ops.OdtDocument.signalCursorRemoved,n);d.unsubscribe(ops.OdtDocument.signalCursorMoved,l);c()};d.subscribe(ops.OdtDocument.signalCursorAdded,p);d.subscribe(ops.OdtDocument.signalCursorRemoved,n);d.subscribe(ops.OdtDocument.signalCursorMoved,l);f()};
gui.AnnotationController.annotatableChanged="annotatable/changed";(function(){return gui.AnnotationController})();
// Input 99
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.EventNotifier");runtime.loadClass("core.Utils");runtime.loadClass("odf.OdfUtils");runtime.loadClass("ops.OpAddStyle");runtime.loadClass("ops.OpSetParagraphStyle");runtime.loadClass("gui.StyleHelper");
gui.DirectParagraphStyler=function(h,k,f){function p(){function a(b,d,e){b!==d&&(void 0===c&&(c={}),c[e]=d);return d}var b=m.getCursor(k),b=b&&b.getSelectedRange(),c;v=a(v,b?w.isAlignedLeft(b):!1,"isAlignedLeft");t=a(t,b?w.isAlignedCenter(b):!1,"isAlignedCenter");s=a(s,b?w.isAlignedRight(b):!1,"isAlignedRight");F=a(F,b?w.isAlignedJustified(b):!1,"isAlignedJustified");c&&z.emit(gui.DirectParagraphStyler.paragraphStylingChanged,c)}function n(a){a.getMemberId()===k&&p()}function l(a){a===k&&p()}function d(a){a.getMemberId()===
k&&p()}function q(){p()}function r(a){var b=m.getCursor(k);b&&m.getParagraphElement(b.getNode())===a.paragraphElement&&p()}function c(a){return a===ops.StepsTranslator.NEXT_STEP}function g(a){var b=m.getCursor(k).getSelectedRange(),b=x.getParagraphElements(b),d=m.getFormatting();b.forEach(function(b){var e=m.convertDomPointToCursorStep(b,0,c),g=b.getAttributeNS(odf.Namespaces.textns,"style-name");b=f.generateStyleName();var l;g&&(l=d.createDerivedStyleObject(g,"paragraph",{}));l=a(l||{});g=new ops.OpAddStyle;
g.init({memberid:k,styleName:b,styleFamily:"paragraph",isAutomaticStyle:!0,setProperties:l});l=new ops.OpSetParagraphStyle;l.init({memberid:k,styleName:b,position:e});h.enqueue([g,l])})}function b(a){g(function(b){return u.mergeObjects(b,a)})}function a(a){b({"style:paragraph-properties":{"fo:text-align":a}})}function e(a,b){var c=m.getFormatting().getDefaultTabStopDistance(),d=b["style:paragraph-properties"],d=(d=d&&d["fo:margin-left"])&&x.parseLength(d);return u.mergeObjects(b,{"style:paragraph-properties":{"fo:margin-left":d&&
d.unit===c.unit?d.value+a*c.value+d.unit:a*c.value+c.unit}})}var m=h.getOdtDocument(),u=new core.Utils,x=new odf.OdfUtils,w=new gui.StyleHelper(m.getFormatting()),z=new core.EventNotifier([gui.DirectParagraphStyler.paragraphStylingChanged]),v,t,s,F;this.isAlignedLeft=function(){return v};this.isAlignedCenter=function(){return t};this.isAlignedRight=function(){return s};this.isAlignedJustified=function(){return F};this.alignParagraphLeft=function(){a("left");return!0};this.alignParagraphCenter=function(){a("center");
return!0};this.alignParagraphRight=function(){a("right");return!0};this.alignParagraphJustified=function(){a("justify");return!0};this.indent=function(){g(e.bind(null,1));return!0};this.outdent=function(){g(e.bind(null,-1));return!0};this.subscribe=function(a,b){z.subscribe(a,b)};this.unsubscribe=function(a,b){z.unsubscribe(a,b)};this.destroy=function(a){m.unsubscribe(ops.OdtDocument.signalCursorAdded,n);m.unsubscribe(ops.OdtDocument.signalCursorRemoved,l);m.unsubscribe(ops.OdtDocument.signalCursorMoved,
d);m.unsubscribe(ops.OdtDocument.signalParagraphStyleModified,q);m.unsubscribe(ops.OdtDocument.signalParagraphChanged,r);a()};m.subscribe(ops.OdtDocument.signalCursorAdded,n);m.subscribe(ops.OdtDocument.signalCursorRemoved,l);m.subscribe(ops.OdtDocument.signalCursorMoved,d);m.subscribe(ops.OdtDocument.signalParagraphStyleModified,q);m.subscribe(ops.OdtDocument.signalParagraphChanged,r);p()};gui.DirectParagraphStyler.paragraphStylingChanged="paragraphStyling/changed";(function(){return gui.DirectParagraphStyler})();
// Input 100
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.EventNotifier");runtime.loadClass("core.Utils");runtime.loadClass("ops.OpApplyDirectStyling");runtime.loadClass("gui.StyleHelper");
gui.DirectTextStyler=function(h,k){function f(a,b){for(var c=0,d=b[c];d&&a;)a=a[d],c+=1,d=b[c];return b.length===c?a:void 0}function p(a,b){var c=f(a[0],b);return a.every(function(a){return c===f(a,b)})?c:void 0}function n(){var a=t.getCursor(k),a=(a=a&&a.getSelectedRange())&&s.getAppliedStyles(a)||[];a[0]&&C&&(a[0]=v.mergeObjects(a[0],C));return a}function l(){function a(b,d,e){b!==d&&(void 0===c&&(c={}),c[e]=d);return d}var b,c;A=n();L=a(L,A?s.isBold(A):!1,"isBold");E=a(E,A?s.isItalic(A):!1,"isItalic");
V=a(V,A?s.hasUnderline(A):!1,"hasUnderline");B=a(B,A?s.hasStrikeThrough(A):!1,"hasStrikeThrough");b=A&&p(A,["style:text-properties","fo:font-size"]);H=a(H,b&&parseFloat(b),"fontSize");ea=a(ea,A&&p(A,["style:text-properties","style:font-name"]),"fontName");c&&F.emit(gui.DirectTextStyler.textStylingChanged,c)}function d(a){a.getMemberId()===k&&l()}function q(a){a===k&&l()}function r(a){a.getMemberId()===k&&l()}function c(){l()}function g(a){var b=t.getCursor(k);b&&t.getParagraphElement(b.getNode())===
a.paragraphElement&&l()}function b(a,b){var c=t.getCursor(k);if(!c)return!1;c=s.getAppliedStyles(c.getSelectedRange());b(!a(c));return!0}function a(a){var b=t.getCursorSelection(k),c={"style:text-properties":a};0!==b.length?(a=new ops.OpApplyDirectStyling,a.init({memberid:k,position:b.position,length:b.length,setProperties:c}),h.enqueue([a])):(C=v.mergeObjects(C||{},c),l())}function e(b,c){var d={};d[b]=c;a(d)}function m(a){a=a.spec();C&&a.memberid===k&&"SplitParagraph"!==a.optype&&(C=null,l())}function u(a){e("fo:font-weight",
a?"bold":"normal")}function x(a){e("fo:font-style",a?"italic":"normal")}function w(a){e("style:text-underline-style",a?"solid":"none")}function z(a){e("style:text-line-through-style",a?"solid":"none")}var v=new core.Utils,t=h.getOdtDocument(),s=new gui.StyleHelper(t.getFormatting()),F=new core.EventNotifier([gui.DirectTextStyler.textStylingChanged]),C,A=[],L=!1,E=!1,V=!1,B=!1,H,ea;this.formatTextSelection=a;this.createCursorStyleOp=function(a,b){var c=null;C&&(c=new ops.OpApplyDirectStyling,c.init({memberid:k,
position:a,length:b,setProperties:C}),C=null,l());return c};this.setBold=u;this.setItalic=x;this.setHasUnderline=w;this.setHasStrikethrough=z;this.setFontSize=function(a){e("fo:font-size",a+"pt")};this.setFontName=function(a){e("style:font-name",a)};this.getAppliedStyles=function(){return A};this.toggleBold=b.bind(this,s.isBold,u);this.toggleItalic=b.bind(this,s.isItalic,x);this.toggleUnderline=b.bind(this,s.hasUnderline,w);this.toggleStrikethrough=b.bind(this,s.hasStrikeThrough,z);this.isBold=function(){return L};
this.isItalic=function(){return E};this.hasUnderline=function(){return V};this.hasStrikeThrough=function(){return B};this.fontSize=function(){return H};this.fontName=function(){return ea};this.subscribe=function(a,b){F.subscribe(a,b)};this.unsubscribe=function(a,b){F.unsubscribe(a,b)};this.destroy=function(a){t.unsubscribe(ops.OdtDocument.signalCursorAdded,d);t.unsubscribe(ops.OdtDocument.signalCursorRemoved,q);t.unsubscribe(ops.OdtDocument.signalCursorMoved,r);t.unsubscribe(ops.OdtDocument.signalParagraphStyleModified,
c);t.unsubscribe(ops.OdtDocument.signalParagraphChanged,g);t.unsubscribe(ops.OdtDocument.signalOperationExecuted,m);a()};t.subscribe(ops.OdtDocument.signalCursorAdded,d);t.subscribe(ops.OdtDocument.signalCursorRemoved,q);t.subscribe(ops.OdtDocument.signalCursorMoved,r);t.subscribe(ops.OdtDocument.signalParagraphStyleModified,c);t.subscribe(ops.OdtDocument.signalParagraphChanged,g);t.subscribe(ops.OdtDocument.signalOperationExecuted,m);l()};gui.DirectTextStyler.textStylingChanged="textStyling/changed";
(function(){return gui.DirectTextStyler})();
// Input 101
runtime.loadClass("odf.OdfUtils");
gui.HyperlinkController=function(h,k){var f=new odf.OdfUtils,p=h.getOdtDocument();this.addHyperlink=function(f,l){var d=p.getCursorSelection(k),q=new ops.OpApplyHyperlink,r=[];if(0===d.length||l)l=l||f,q=new ops.OpInsertText,q.init({memberid:k,position:d.position,text:l}),d.length=l.length,r.push(q);q=new ops.OpApplyHyperlink;q.init({memberid:k,position:d.position,length:d.length,hyperlink:f});r.push(q);h.enqueue(r)};this.removeHyperlinks=function(){var n=gui.SelectionMover.createPositionIterator(p.getRootNode()),l=
p.getCursor(k).getSelectedRange(),d=f.getHyperlinkElements(l),q=l.collapsed&&1===d.length,r=p.getDOM().createRange(),c=[],g,b;0!==d.length&&(d.forEach(function(a){r.selectNodeContents(a);g=p.convertDomToCursorRange({anchorNode:r.startContainer,anchorOffset:r.startOffset,focusNode:r.endContainer,focusOffset:r.endOffset});b=new ops.OpRemoveHyperlink;b.init({memberid:k,position:g.position,length:g.length});c.push(b)}),q||(q=d[0],-1===l.comparePoint(q,0)&&(r.setStart(q,0),r.setEnd(l.startContainer,l.startOffset),
g=p.convertDomToCursorRange({anchorNode:r.startContainer,anchorOffset:r.startOffset,focusNode:r.endContainer,focusOffset:r.endOffset}),0<g.length&&(b=new ops.OpApplyHyperlink,b.init({memberid:k,position:g.position,length:g.length,hyperlink:f.getHyperlinkTarget(q)}),c.push(b))),d=d[d.length-1],n.moveToEndOfNode(d),n=n.unfilteredDomOffset(),1===l.comparePoint(d,n)&&(r.setStart(l.endContainer,l.endOffset),r.setEnd(d,n),g=p.convertDomToCursorRange({anchorNode:r.startContainer,anchorOffset:r.startOffset,
focusNode:r.endContainer,focusOffset:r.endOffset}),0<g.length&&(b=new ops.OpApplyHyperlink,b.init({memberid:k,position:g.position,length:g.length,hyperlink:f.getHyperlinkTarget(d)}),c.push(b)))),h.enqueue(c),r.detach())}};
// Input 102
runtime.loadClass("odf.Namespaces");runtime.loadClass("odf.ObjectNameGenerator");
gui.ImageManager=function(h,k,f){var p={"image/gif":".gif","image/jpeg":".jpg","image/png":".png"},n=odf.Namespaces.textns,l=h.getOdtDocument(),d=l.getFormatting(),q={};this.insertImage=function(r,c,g,b){var a;runtime.assert(0<g&&0<b,"Both width and height of the image should be greater than 0px.");a=l.getParagraphElement(l.getCursor(k).getNode()).getAttributeNS(n,"style-name");q.hasOwnProperty(a)||(q[a]=d.getContentSize(a,"paragraph"));a=q[a];g*=0.0264583333333334;b*=0.0264583333333334;var e=1,m=
1;g>a.width&&(e=a.width/g);b>a.height&&(m=a.height/b);e=Math.min(e,m);a=g*e;g=b*e;m=l.getOdfCanvas().odfContainer().rootElement.styles;b=r.toLowerCase();var e=p.hasOwnProperty(b)?p[b]:null,u;b=[];runtime.assert(null!==e,"Image type is not supported: "+r);e="Pictures/"+f.generateImageName()+e;u=new ops.OpSetBlob;u.init({memberid:k,filename:e,mimetype:r,content:c});b.push(u);d.getStyleElement("Graphics","graphic",[m])||(r=new ops.OpAddStyle,r.init({memberid:k,styleName:"Graphics",styleFamily:"graphic",
isAutomaticStyle:!1,setProperties:{"style:graphic-properties":{"text:anchor-type":"paragraph","svg:x":"0cm","svg:y":"0cm","style:wrap":"dynamic","style:number-wrapped-paragraphs":"no-limit","style:wrap-contour":"false","style:vertical-pos":"top","style:vertical-rel":"paragraph","style:horizontal-pos":"center","style:horizontal-rel":"paragraph"}}}),b.push(r));r=f.generateStyleName();c=new ops.OpAddStyle;c.init({memberid:k,styleName:r,styleFamily:"graphic",isAutomaticStyle:!0,setProperties:{"style:parent-style-name":"Graphics",
"style:graphic-properties":{"style:vertical-pos":"top","style:vertical-rel":"baseline","style:horizontal-pos":"center","style:horizontal-rel":"paragraph","fo:background-color":"transparent","style:background-transparency":"100%","style:shadow":"none","style:mirror":"none","fo:clip":"rect(0cm, 0cm, 0cm, 0cm)","draw:luminance":"0%","draw:contrast":"0%","draw:red":"0%","draw:green":"0%","draw:blue":"0%","draw:gamma":"100%","draw:color-inversion":"false","draw:image-opacity":"100%","draw:color-mode":"standard"}}});
b.push(c);u=new ops.OpInsertImage;u.init({memberid:k,position:l.getCursorPosition(k),filename:e,frameWidth:a+"cm",frameHeight:g+"cm",frameStyleName:r,frameName:f.generateFrameName()});b.push(u);h.enqueue(b)}};
// Input 103
runtime.loadClass("core.DomUtils");runtime.loadClass("core.PositionFilterChain");runtime.loadClass("gui.SelectionMover");runtime.loadClass("odf.OdfUtils");runtime.loadClass("ops.OdtCursor");runtime.loadClass("ops.OpMoveCursor");runtime.loadClass("ops.Session");runtime.loadClass("ops.StepsTranslator");
gui.SelectionController=function(h,k){function f(a){return function(b){var c=a(b);return function(b,d){return a(d)===c}}}function p(a,b){return b?{anchorNode:a.startContainer,anchorOffset:a.startOffset,focusNode:a.endContainer,focusOffset:a.endOffset}:{anchorNode:a.endContainer,anchorOffset:a.endOffset,focusNode:a.startContainer,focusOffset:a.startOffset}}function n(a,b,c){var d=new ops.OpMoveCursor;d.init({memberid:k,position:a,length:b||0,selectionType:c});return d}function l(a){var b=/[A-Za-z0-9]/,
c=gui.SelectionMover.createPositionIterator(e.getRootNode()),d;for(c.setUnfilteredPosition(a.startContainer,a.startOffset);c.previousPosition();){d=c.getCurrentNode();if(d.nodeType===Node.TEXT_NODE){if(d=d.data[c.unfilteredDomOffset()],!b.test(d))break}else if(!u.isTextSpan(d))break;a.setStart(c.container(),c.unfilteredDomOffset())}c.setUnfilteredPosition(a.endContainer,a.endOffset);do if(d=c.getCurrentNode(),d.nodeType===Node.TEXT_NODE){if(d=d.data[c.unfilteredDomOffset()],!b.test(d))break}else if(!u.isTextSpan(d))break;
while(c.nextPosition());a.setEnd(c.container(),c.unfilteredDomOffset())}function d(a){var b=e.getParagraphElement(a.startContainer),c=e.getParagraphElement(a.endContainer);b&&a.setStart(b,0);c&&(u.isParagraph(a.endContainer)&&0===a.endOffset?a.setEndBefore(c):a.setEnd(c,c.childNodes.length))}function q(a){var b=e.getCursorSelection(k),c=e.getCursor(k).getStepCounter();0!==a&&(a=0<a?c.convertForwardStepsBetweenFilters(a,w,x):-c.convertBackwardStepsBetweenFilters(-a,w,x),a=b.length+a,h.enqueue([n(b.position,
a)]))}function r(a){var b=e.getCursorPosition(k),c=e.getCursor(k).getStepCounter();0!==a&&(a=0<a?c.convertForwardStepsBetweenFilters(a,w,x):-c.convertBackwardStepsBetweenFilters(-a,w,x),h.enqueue([n(b+a,0)]))}function c(a,b){var c=e.getParagraphElement(e.getCursor(k).getNode());runtime.assert(Boolean(c),"SelectionController: Cursor outside paragraph");c=e.getCursor(k).getStepCounter().countLinesSteps(a,w);b?q(c):r(c)}function g(a,b){var c=e.getCursor(k).getStepCounter().countStepsToLineBoundary(a,
w);b?q(c):r(c)}function b(a,b){var c=e.getCursor(k),d=b(c.getNode()),c=p(c.getSelectedRange(),c.hasForwardSelection());runtime.assert(Boolean(d),"SelectionController: Cursor outside root");0>a?(c.focusNode=d,c.focusOffset=0):(c.focusNode=d,c.focusOffset=d.childNodes.length);d=e.convertDomToCursorRange(c,f(b));h.enqueue([n(d.position,d.length)])}function a(a){var b=e.getCursor(k),b=e.getRootElement(b.getNode());runtime.assert(Boolean(b),"SelectionController: Cursor outside root");a=0>a?e.convertDomPointToCursorStep(b,
0,function(a){return a===ops.StepsTranslator.NEXT_STEP}):e.convertDomPointToCursorStep(b,b.childNodes.length);h.enqueue([n(a,0)]);return!0}var e=h.getOdtDocument(),m=new core.DomUtils,u=new odf.OdfUtils,x=e.getPositionFilter(),w=new core.PositionFilterChain;w.addFilter("BaseFilter",x);w.addFilter("RootFilter",e.createRootFilter(k));this.selectionToRange=function(a){var b=0<=m.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset),c=a.focusNode.ownerDocument.createRange();b?(c.setStart(a.anchorNode,
a.anchorOffset),c.setEnd(a.focusNode,a.focusOffset)):(c.setStart(a.focusNode,a.focusOffset),c.setEnd(a.anchorNode,a.anchorOffset));return{range:c,hasForwardSelection:b}};this.rangeToSelection=p;this.selectImage=function(a){a=e.getDistanceFromCursor(k,a,0);var b=null!==a?a+1:null,c;if(b||a)c=e.getCursorPosition(k),a=n(c+a,b-a,ops.OdtCursor.RegionSelection),h.enqueue([a])};this.expandToWordBoundaries=l;this.expandToParagraphBoundaries=d;this.selectRange=function(a,b,c){var g=e.getOdfCanvas().getElement(),
q;q=m.containsNode(g,a.startContainer);g=m.containsNode(g,a.endContainer);if(q||g)if(q&&g&&(2===c?l(a):3<=c&&d(a)),a=p(a,b),b=e.convertDomToCursorRange(a,f(u.getParagraphElement)),a=e.getCursorSelection(k),b.position!==a.position||b.length!==a.length)a=n(b.position,b.length,ops.OdtCursor.RangeSelection),h.enqueue([a])};this.moveCursorToLeft=function(){r(-1);return!0};this.moveCursorToRight=function(){r(1);return!0};this.extendSelectionToLeft=function(){q(-1);return!0};this.extendSelectionToRight=
function(){q(1);return!0};this.moveCursorUp=function(){c(-1,!1);return!0};this.moveCursorDown=function(){c(1,!1);return!0};this.extendSelectionUp=function(){c(-1,!0);return!0};this.extendSelectionDown=function(){c(1,!0);return!0};this.moveCursorToLineStart=function(){g(-1,!1);return!0};this.moveCursorToLineEnd=function(){g(1,!1);return!0};this.extendSelectionToLineStart=function(){g(-1,!0);return!0};this.extendSelectionToLineEnd=function(){g(1,!0);return!0};this.extendSelectionToParagraphStart=function(){b(-1,
e.getParagraphElement);return!0};this.extendSelectionToParagraphEnd=function(){b(1,e.getParagraphElement);return!0};this.moveCursorToDocumentStart=function(){a(-1);return!0};this.moveCursorToDocumentEnd=function(){a(1);return!0};this.extendSelectionToDocumentStart=function(){b(-1,e.getRootElement);return!0};this.extendSelectionToDocumentEnd=function(){b(1,e.getRootElement);return!0};this.extendSelectionToEntireDocument=function(){var a=e.getCursor(k),a=e.getRootElement(a.getNode());runtime.assert(Boolean(a),
"SelectionController: Cursor outside root");a=e.convertDomToCursorRange({anchorNode:a,anchorOffset:0,focusNode:a,focusOffset:a.childNodes.length},f(e.getRootElement));h.enqueue([n(a.position,a.length)]);return!0}};
// Input 104
/*

 Copyright (C) 2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("core.PositionFilter");
gui.TextManipulator=function(h,k,f){function p(d){var c=new ops.OpRemoveText;c.init({memberid:k,position:d.position,length:d.length});return c}function n(d){0>d.length&&(d.position+=d.length,d.length=-d.length);return d}function l(f,c){var g=new core.PositionFilterChain,b=gui.SelectionMover.createPositionIterator(d.getRootElement(f)),a=c?b.nextPosition:b.previousPosition;g.addFilter("BaseFilter",d.getPositionFilter());g.addFilter("RootFilter",d.createRootFilter(k));for(b.setUnfilteredPosition(f,0);a();)if(g.acceptPosition(b)===
q)return!0;return!1}var d=h.getOdtDocument(),q=core.PositionFilter.FilterResult.FILTER_ACCEPT;this.enqueueParagraphSplittingOps=function(){var f=n(d.getCursorSelection(k)),c,g=[];0<f.length&&(c=p(f),g.push(c));c=new ops.OpSplitParagraph;c.init({memberid:k,position:f.position,moveCursor:!0});g.push(c);h.enqueue(g);return!0};this.removeTextByBackspaceKey=function(){var f=d.getCursor(k),c=n(d.getCursorSelection(k)),g=null;0===c.length?l(f.getNode(),!1)&&(g=new ops.OpRemoveText,g.init({memberid:k,position:c.position-
1,length:1}),h.enqueue([g])):(g=p(c),h.enqueue([g]));return null!==g};this.removeTextByDeleteKey=function(){var f=d.getCursor(k),c=n(d.getCursorSelection(k)),g=null;0===c.length?l(f.getNode(),!0)&&(g=new ops.OpRemoveText,g.init({memberid:k,position:c.position,length:1}),h.enqueue([g])):(g=p(c),h.enqueue([g]));return null!==g};this.removeCurrentSelection=function(){var f=n(d.getCursorSelection(k));0!==f.length&&(f=p(f),h.enqueue([f]));return!0};this.insertText=function(l){var c=n(d.getCursorSelection(k)),
g,b=[];0<c.length&&(g=p(c),b.push(g));g=new ops.OpInsertText;g.init({memberid:k,position:c.position,text:l,moveCursor:!0});b.push(g);f&&(l=f(c.position,l.length))&&b.push(l);h.enqueue(b)}};(function(){return gui.TextManipulator})();
// Input 105
runtime.loadClass("core.DomUtils");runtime.loadClass("core.Async");runtime.loadClass("core.ScheduledTask");runtime.loadClass("odf.OdfUtils");runtime.loadClass("odf.ObjectNameGenerator");runtime.loadClass("ops.OdtCursor");runtime.loadClass("ops.OpAddCursor");runtime.loadClass("ops.OpRemoveCursor");runtime.loadClass("gui.MimeDataExporter");runtime.loadClass("gui.Clipboard");runtime.loadClass("gui.DirectTextStyler");runtime.loadClass("gui.DirectParagraphStyler");runtime.loadClass("gui.KeyboardHandler");
runtime.loadClass("gui.HyperlinkClickHandler");runtime.loadClass("gui.HyperlinkController");runtime.loadClass("gui.ImageManager");runtime.loadClass("gui.ImageSelector");runtime.loadClass("gui.SelectionController");runtime.loadClass("gui.TextManipulator");runtime.loadClass("gui.AnnotationController");runtime.loadClass("gui.EventManager");runtime.loadClass("gui.PlainTextPasteboard");runtime.loadClass("gui.InputMethodEditor");
gui.SessionController=function(){var h=core.PositionFilter.FilterResult.FILTER_ACCEPT;gui.SessionController=function(k,f,p,n){function l(){var a=E.getCursor(f);if(a&&a.getSelectionType()===ops.OdtCursor.RegionSelection&&(a=H.getImageElements(a.getSelectedRange())[0])){fa.select(a.parentNode);return}fa.clearSelection()}function d(a){var b=E.getCursor(f).getSelectedRange();b.collapsed?a.preventDefault():ia.setDataFromRange(a,b)?aa.removeCurrentSelection():runtime.log("Cut operation failed")}function q(){return!1!==
E.getCursor(f).getSelectedRange().collapsed}function r(a){var b=E.getCursor(f).getSelectedRange();b.collapsed?a.preventDefault():ia.setDataFromRange(a,b)||runtime.log("Copy operation failed")}function c(a){var b;L.clipboardData&&L.clipboardData.getData?b=L.clipboardData.getData("Text"):a.clipboardData&&a.clipboardData.getData&&(b=a.clipboardData.getData("text/plain"));b&&(aa.removeCurrentSelection(),k.enqueue(da.createPasteOps(b)));a.preventDefault?a.preventDefault():a.returnValue=!1}function g(){return!1}
function b(a){if(U)U.onOperationExecuted(a)}function a(a){E.emit(ops.OdtDocument.signalUndoStackChanged,a)}function e(){return U?(U.moveBackward(1),W.trigger(),!0):!1}function m(){return U?(U.moveForward(1),W.trigger(),!0):!1}function u(){var a=L.getSelection(),b=0<a.rangeCount&&Q.selectionToRange(a);K&&b&&(G=!0,fa.clearSelection(),S.setUnfilteredPosition(a.focusNode,a.focusOffset),I.acceptPosition(S)===h&&(2===ca?Q.expandToWordBoundaries(b.range):3<=ca&&Q.expandToParagraphBoundaries(b.range),p.setSelectedRange(b.range,
b.hasForwardSelection),E.emit(ops.OdtDocument.signalCursorMoved,p)))}function x(a){var b=a.target||a.srcElement,c=E.getCursor(f);if(K=b&&B.containsNode(E.getOdfCanvas().getElement(),b))G=!1,I=E.createRootFilter(b),ca=a.detail,c&&a.shiftKey?L.getSelection().collapse(c.getAnchorNode(),0):(a=L.getSelection(),b=c.getSelectedRange(),D.blur(),a.extend?c.hasForwardSelection()?(a.collapse(b.startContainer,b.startOffset),a.extend(b.endContainer,b.endOffset)):(a.collapse(b.endContainer,b.endOffset),a.extend(b.startContainer,
b.startOffset)):(a.removeAllRanges(),a.addRange(b.cloneRange()))),1<ca&&u()}function w(a){var b=a.target||a.srcElement,c=a.detail,d=a.clientX,e=a.clientY;Z.processRequests();H.isImage(b)&&H.isCharacterFrame(b.parentNode)?(Q.selectImage(b.parentNode),D.focus()):K&&!fa.isSelectorElement(b)&&(G?(Q.selectRange(p.getSelectedRange(),p.hasForwardSelection(),a.detail),D.focus()):R=runtime.setTimeout(function(){var a;a=(a=L.getSelection())?{anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,
focusOffset:a.focusOffset}:null;var b;if(!a.anchorNode&&!a.focusNode){var f=E.getDOM();b=null;f.caretRangeFromPoint?(f=f.caretRangeFromPoint(d,e),b={container:f.startContainer,offset:f.startOffset}):f.caretPositionFromPoint&&(f=f.caretPositionFromPoint(d,e))&&f.offsetNode&&(b={container:f.offsetNode,offset:f.offset});b&&(a.anchorNode=b.container,a.anchorOffset=b.offset,a.focusNode=a.anchorNode,a.focusOffset=a.anchorOffset)}a.anchorNode&&a.focusNode&&(a=Q.selectionToRange(a),Q.selectRange(a.range,
a.hasForwardSelection,c));D.focus()},0));ca=0;G=K=!1}function z(a){var b=E.getCursor(f).getSelectedRange();b.collapsed||ea.exportRangeToDataTransfer(a.dataTransfer,b)}function v(){K&&D.focus();ca=0;G=K=!1}function t(a){w(a)}function s(a){var b=a.target||a.srcElement,c=null;"annotationRemoveButton"===b.className?(c=B.getElementsByTagNameNS(b.parentNode,odf.Namespaces.officens,"annotation")[0],J.removeAnnotation(c)):w(a)}function F(a){(a=a.data)&&aa.insertText(a)}function C(a){return function(){a();
return!0}}function A(a){return function(b){return E.getCursor(f).getSelectionType()===ops.OdtCursor.RangeSelection?a(b):!0}}var L=runtime.getWindow(),E=k.getOdtDocument(),V=new core.Async,B=new core.DomUtils,H=new odf.OdfUtils,ea=new gui.MimeDataExporter,ia=new gui.Clipboard(ea),y=new gui.KeyboardHandler,Y=new gui.KeyboardHandler,T=new gui.KeyboardHandler,K=!1,P=new odf.ObjectNameGenerator(E.getOdfCanvas().odfContainer(),f),G=!1,I=null,R,U=null,D=new gui.EventManager(E),J=new gui.AnnotationController(k,
f),N=new gui.DirectTextStyler(k,f),M=n&&n.directParagraphStylingEnabled?new gui.DirectParagraphStyler(k,f,P):null,aa=new gui.TextManipulator(k,f,N.createCursorStyleOp),X=new gui.ImageManager(k,f,P),fa=new gui.ImageSelector(E.getOdfCanvas()),S=gui.SelectionMover.createPositionIterator(E.getRootNode()),Z,W,da=new gui.PlainTextPasteboard(E,f),O=new gui.InputMethodEditor(f,E,D),ca=0,ba=new gui.HyperlinkClickHandler(E.getRootNode),ha=new gui.HyperlinkController(k,f),Q=new gui.SelectionController(k,f);
runtime.assert(null!==L,"Expected to be run in an environment which has a global window, like a browser.");this.startEditing=function(){var a;E.getOdfCanvas().getElement().classList.add("virtualSelections");O.subscribe(gui.InputMethodEditor.signalCompositionStart,aa.removeCurrentSelection);O.subscribe(gui.InputMethodEditor.signalCompositionEnd,F);D.subscribe("keydown",y.handleEvent);D.subscribe("keypress",Y.handleEvent);D.subscribe("keyup",T.handleEvent);D.subscribe("beforecut",q);D.subscribe("cut",
d);D.subscribe("copy",r);D.subscribe("beforepaste",g);D.subscribe("paste",c);D.subscribe("mousedown",x);D.subscribe("mousemove",Z.trigger);D.subscribe("mouseup",s);D.subscribe("contextmenu",t);D.subscribe("dragstart",z);D.subscribe("dragend",v);E.subscribe(ops.OdtDocument.signalOperationExecuted,W.trigger);E.subscribe(ops.OdtDocument.signalOperationExecuted,b);E.subscribe(ops.OdtDocument.signalCursorAdded,O.registerCursor);E.subscribe(ops.OdtDocument.signalCursorRemoved,O.removeCursor);a=new ops.OpAddCursor;
a.init({memberid:f});k.enqueue([a]);U&&U.saveInitialState();ba.setEditing(!0)};this.endEditing=function(){var a;a=new ops.OpRemoveCursor;a.init({memberid:f});k.enqueue([a]);U&&U.resetInitialState();E.unsubscribe(ops.OdtDocument.signalCursorAdded,O.registerCursor);E.unsubscribe(ops.OdtDocument.signalCursorRemoved,O.removeCursor);E.unsubscribe(ops.OdtDocument.signalOperationExecuted,b);E.unsubscribe(ops.OdtDocument.signalOperationExecuted,W.trigger);O.unsubscribe(gui.InputMethodEditor.signalCompositionStart,
aa.removeCurrentSelection);O.unsubscribe(gui.InputMethodEditor.signalCompositionEnd,F);D.unsubscribe("keydown",y.handleEvent);D.unsubscribe("keypress",Y.handleEvent);D.unsubscribe("keyup",T.handleEvent);D.unsubscribe("cut",d);D.unsubscribe("beforecut",q);D.unsubscribe("copy",r);D.unsubscribe("paste",c);D.unsubscribe("beforepaste",g);D.unsubscribe("mousemove",Z.trigger);D.unsubscribe("mousedown",x);D.unsubscribe("mouseup",s);D.unsubscribe("contextmenu",t);D.unsubscribe("dragstart",z);D.unsubscribe("dragend",
v);E.getOdfCanvas().getElement().classList.remove("virtualSelections");ba.setEditing(!1)};this.getInputMemberId=function(){return f};this.getSession=function(){return k};this.setUndoManager=function(b){U&&U.unsubscribe(gui.UndoManager.signalUndoStackChanged,a);if(U=b)U.setOdtDocument(E),U.setPlaybackFunction(function(a){a.execute(E)}),U.subscribe(gui.UndoManager.signalUndoStackChanged,a)};this.getUndoManager=function(){return U};this.getAnnotationController=function(){return J};this.getDirectTextStyler=
function(){return N};this.getDirectParagraphStyler=function(){return M};this.getHyperlinkController=function(){return ha};this.getImageManager=function(){return X};this.getSelectionController=function(){return Q};this.getTextManipulator=function(){return aa};this.getEventManager=function(){return D};this.getKeyboardHandlers=function(){return{keydown:y,keypress:Y}};this.destroy=function(a){var b=[Z.destroy,N.destroy,O.destroy];runtime.clearTimeout(R);M&&b.push(M.destroy);V.destroyAll(b,a)};(function(){var a=
-1!==L.navigator.appVersion.toLowerCase().indexOf("mac"),b=gui.KeyboardHandler.Modifier,c=gui.KeyboardHandler.KeyCode;Z=new core.ScheduledTask(u,0);W=new core.ScheduledTask(l,0);y.bind(c.Tab,b.None,A(function(){aa.insertText("\t");return!0}));y.bind(c.Left,b.None,A(Q.moveCursorToLeft));y.bind(c.Right,b.None,A(Q.moveCursorToRight));y.bind(c.Up,b.None,A(Q.moveCursorUp));y.bind(c.Down,b.None,A(Q.moveCursorDown));y.bind(c.Backspace,b.None,C(aa.removeTextByBackspaceKey));y.bind(c.Delete,b.None,aa.removeTextByDeleteKey);
y.bind(c.Left,b.Shift,A(Q.extendSelectionToLeft));y.bind(c.Right,b.Shift,A(Q.extendSelectionToRight));y.bind(c.Up,b.Shift,A(Q.extendSelectionUp));y.bind(c.Down,b.Shift,A(Q.extendSelectionDown));y.bind(c.Home,b.None,A(Q.moveCursorToLineStart));y.bind(c.End,b.None,A(Q.moveCursorToLineEnd));y.bind(c.Home,b.Ctrl,A(Q.moveCursorToDocumentStart));y.bind(c.End,b.Ctrl,A(Q.moveCursorToDocumentEnd));y.bind(c.Home,b.Shift,A(Q.extendSelectionToLineStart));y.bind(c.End,b.Shift,A(Q.extendSelectionToLineEnd));y.bind(c.Up,
b.CtrlShift,A(Q.extendSelectionToParagraphStart));y.bind(c.Down,b.CtrlShift,A(Q.extendSelectionToParagraphEnd));y.bind(c.Home,b.CtrlShift,A(Q.extendSelectionToDocumentStart));y.bind(c.End,b.CtrlShift,A(Q.extendSelectionToDocumentEnd));a?(y.bind(c.Clear,b.None,aa.removeCurrentSelection),y.bind(c.Left,b.Meta,A(Q.moveCursorToLineStart)),y.bind(c.Right,b.Meta,A(Q.moveCursorToLineEnd)),y.bind(c.Home,b.Meta,A(Q.moveCursorToDocumentStart)),y.bind(c.End,b.Meta,A(Q.moveCursorToDocumentEnd)),y.bind(c.Left,
b.MetaShift,A(Q.extendSelectionToLineStart)),y.bind(c.Right,b.MetaShift,A(Q.extendSelectionToLineEnd)),y.bind(c.Up,b.AltShift,A(Q.extendSelectionToParagraphStart)),y.bind(c.Down,b.AltShift,A(Q.extendSelectionToParagraphEnd)),y.bind(c.Up,b.MetaShift,A(Q.extendSelectionToDocumentStart)),y.bind(c.Down,b.MetaShift,A(Q.extendSelectionToDocumentEnd)),y.bind(c.A,b.Meta,A(Q.extendSelectionToEntireDocument)),y.bind(c.B,b.Meta,A(N.toggleBold)),y.bind(c.I,b.Meta,A(N.toggleItalic)),y.bind(c.U,b.Meta,A(N.toggleUnderline)),
M&&(y.bind(c.L,b.MetaShift,A(M.alignParagraphLeft)),y.bind(c.E,b.MetaShift,A(M.alignParagraphCenter)),y.bind(c.R,b.MetaShift,A(M.alignParagraphRight)),y.bind(c.J,b.MetaShift,A(M.alignParagraphJustified))),J&&y.bind(c.C,b.MetaShift,J.addAnnotation),y.bind(c.Z,b.Meta,e),y.bind(c.Z,b.MetaShift,m),y.bind(c.LeftMeta,b.Meta,ba.showPointerCursor),T.bind(c.LeftMeta,b.None,ba.showTextCursor),y.bind(c.MetaInMozilla,b.Meta,ba.showPointerCursor),T.bind(c.MetaInMozilla,b.None,ba.showTextCursor)):(y.bind(c.A,b.Ctrl,
A(Q.extendSelectionToEntireDocument)),y.bind(c.B,b.Ctrl,A(N.toggleBold)),y.bind(c.I,b.Ctrl,A(N.toggleItalic)),y.bind(c.U,b.Ctrl,A(N.toggleUnderline)),M&&(y.bind(c.L,b.CtrlShift,A(M.alignParagraphLeft)),y.bind(c.E,b.CtrlShift,A(M.alignParagraphCenter)),y.bind(c.R,b.CtrlShift,A(M.alignParagraphRight)),y.bind(c.J,b.CtrlShift,A(M.alignParagraphJustified))),J&&y.bind(c.C,b.CtrlAlt,J.addAnnotation),y.bind(c.Z,b.Ctrl,e),y.bind(c.Z,b.CtrlShift,m),y.bind(c.Ctrl,b.Ctrl,ba.showPointerCursor),T.bind(c.Ctrl,b.None,
ba.showTextCursor));Y.setDefault(A(function(a){var b;b=null===a.which||void 0===a.which?String.fromCharCode(a.keyCode):0!==a.which&&0!==a.charCode?String.fromCharCode(a.which):null;return!b||a.altKey||a.ctrlKey||a.metaKey?!1:(aa.insertText(b),!0)}));Y.bind(c.Enter,b.None,A(aa.enqueueParagraphSplittingOps));D.subscribe("click",ba.handleClick)})()};return gui.SessionController}();
// Input 106
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("gui.Caret");
gui.CaretManager=function(h){function k(b){return a.hasOwnProperty(b)?a[b]:null}function f(){return Object.keys(a).map(function(b){return a[b]})}function p(b){b===h.getInputMemberId()&&h.getSession().getOdtDocument().getOdfCanvas().getElement().removeAttribute("tabindex");delete a[b]}function n(a){a=a.getMemberId();a===h.getInputMemberId()&&(a=k(a))&&a.refreshCursorBlinking()}function l(){var a=k(h.getInputMemberId());u=!1;a&&a.ensureVisible()}function d(){var a=k(h.getInputMemberId());a&&(a.handleUpdate(),
u||(u=!0,m=runtime.setTimeout(l,50)))}function q(a){a.memberId===h.getInputMemberId()&&d()}function r(){var a=k(h.getInputMemberId());a&&a.setFocus()}function c(){var a=k(h.getInputMemberId());a&&a.removeFocus()}function g(){var a=k(h.getInputMemberId());a&&a.show()}function b(){var a=k(h.getInputMemberId());a&&a.hide()}var a={},e=runtime.getWindow(),m,u=!1;this.registerCursor=function(b,c,e){var f=b.getMemberId();c=new gui.Caret(b,c,e);a[f]=c;f===h.getInputMemberId()?(runtime.log("Starting to track input on new cursor of "+
f),b.subscribe(ops.OdtCursor.signalCursorUpdated,d),h.getEventManager().focus()):b.subscribe(ops.OdtCursor.signalCursorUpdated,c.handleUpdate);return c};this.getCaret=k;this.getCarets=f;this.destroy=function(d){var k=h.getSession().getOdtDocument(),l=h.getEventManager(),u=f();runtime.clearTimeout(m);k.unsubscribe(ops.OdtDocument.signalParagraphChanged,q);k.unsubscribe(ops.OdtDocument.signalCursorMoved,n);k.unsubscribe(ops.OdtDocument.signalCursorRemoved,p);l.unsubscribe("focus",r);l.unsubscribe("blur",
c);e.removeEventListener("focus",g,!1);e.removeEventListener("blur",b,!1);(function s(a,b){b?d(b):a<u.length?u[a].destroy(function(b){s(a+1,b)}):d()})(0,void 0);a={}};(function(){var a=h.getSession().getOdtDocument(),d=h.getEventManager();a.subscribe(ops.OdtDocument.signalParagraphChanged,q);a.subscribe(ops.OdtDocument.signalCursorMoved,n);a.subscribe(ops.OdtDocument.signalCursorRemoved,p);d.subscribe("focus",r);d.subscribe("blur",c);e.addEventListener("focus",g,!1);e.addEventListener("blur",b,!1)})()};
// Input 107
/*

 Copyright (C) 2012-2013 KO GmbH <copyright@kogmbh.com>

 @licstart
 The JavaScript code in this page is free software: you can redistribute it
 and/or modify it under the terms of the GNU Affero General Public License
 (GNU AGPL) as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.  The code is distributed
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 FITNESS FOR A PARTICULAR PURPOSE.  See the GNU AGPL for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this code.  If not, see <http://www.gnu.org/licenses/>.

 As additional permission under GNU AGPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.

 As a special exception to the AGPL, any HTML file which merely makes function
 calls to this code, and for that purpose includes it by reference shall be
 deemed a separate work for copyright law purposes. In addition, the copyright
 holders of this code give you permission to combine this code with free
 software libraries that are released under the GNU LGPL. You may copy and
 distribute such a system following the terms of the GNU AGPL for this code
 and the LGPL for the libraries. If you modify this code, you may extend this
 exception to your version of the code, but you are not obligated to do so.
 If you do not wish to do so, delete this exception statement from your
 version.

 This license applies to this entire compilation.
 @licend
 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
runtime.loadClass("gui.Caret");runtime.loadClass("ops.EditInfo");runtime.loadClass("gui.EditInfoMarker");gui.SessionViewOptions=function(){this.caretBlinksOnRangeSelect=this.caretAvatarsInitiallyVisible=this.editInfoMarkersInitiallyVisible=!0};
gui.SessionView=function(){return function(h,k,f,p,n){function l(a,b,c){function d(b,c,e){c=b+'[editinfo|memberid="'+a+'"]'+e+c;a:{var f=u.firstChild;for(b=b+'[editinfo|memberid="'+a+'"]'+e+"{";f;){if(f.nodeType===Node.TEXT_NODE&&0===f.data.indexOf(b)){b=f;break a}f=f.nextSibling}b=null}b?b.data=c:u.appendChild(document.createTextNode(c))}d("div.editInfoMarker","{ background-color: "+c+"; }","");d("span.editInfoColor","{ background-color: "+c+"; }","");d("span.editInfoAuthor",'{ content: "'+b+'"; }',
":before");d("dc|creator","{ background-color: "+c+"; }","");d(".selectionOverlay","{ fill: "+c+"; stroke: "+c+";}","")}function d(a){var b,c;for(c in w)w.hasOwnProperty(c)&&(b=w[c],a?b.show():b.hide())}function q(a){p.getCarets().forEach(function(b){a?b.showHandle():b.hideHandle()})}function r(a){var b=a.getMemberId();a=a.getProperties();l(b,a.fullName,a.color);k===b&&l("","",a.color)}function c(a){var b=a.getMemberId(),c=f.getOdtDocument().getMember(b).getProperties();p.registerCursor(a,v,t);n.registerCursor(a,
!0);if(a=p.getCaret(b))a.setAvatarImageUrl(c.imageUrl),a.setColor(c.color);runtime.log("+++ View here +++ eagerly created an Caret for '"+b+"'! +++")}function g(a){a=a.getMemberId();var b=n.getSelectionView(k),c=n.getSelectionView(gui.ShadowCursor.ShadowCursorMemberId),d=p.getCaret(k);a===k?(c.hide(),b&&b.show(),d&&d.show()):a===gui.ShadowCursor.ShadowCursorMemberId&&(c.show(),b&&b.hide(),d&&d.hide())}function b(a){n.removeSelectionView(a)}function a(a){var b=a.paragraphElement,c=a.memberId;a=a.timeStamp;
var d,e="",g=b.getElementsByTagNameNS(x,"editinfo")[0];g?(e=g.getAttributeNS(x,"id"),d=w[e]):(e=Math.random().toString(),d=new ops.EditInfo(b,f.getOdtDocument()),d=new gui.EditInfoMarker(d,z),g=b.getElementsByTagNameNS(x,"editinfo")[0],g.setAttributeNS(x,"id",e),w[e]=d);d.addEdit(c,new Date(a))}function e(){F=!0}function m(){s=runtime.getWindow().setInterval(function(){F&&(n.rerenderSelectionViews(),F=!1)},200)}var u,x="urn:webodf:names:editinfo",w={},z=void 0!==h.editInfoMarkersInitiallyVisible?
Boolean(h.editInfoMarkersInitiallyVisible):!0,v=void 0!==h.caretAvatarsInitiallyVisible?Boolean(h.caretAvatarsInitiallyVisible):!0,t=void 0!==h.caretBlinksOnRangeSelect?Boolean(h.caretBlinksOnRangeSelect):!0,s,F=!1;this.showEditInfoMarkers=function(){z||(z=!0,d(z))};this.hideEditInfoMarkers=function(){z&&(z=!1,d(z))};this.showCaretAvatars=function(){v||(v=!0,q(v))};this.hideCaretAvatars=function(){v&&(v=!1,q(v))};this.getSession=function(){return f};this.getCaret=function(a){return p.getCaret(a)};
this.destroy=function(d){var h=f.getOdtDocument(),k=Object.keys(w).map(function(a){return w[a]});h.unsubscribe(ops.OdtDocument.signalMemberAdded,r);h.unsubscribe(ops.OdtDocument.signalMemberUpdated,r);h.unsubscribe(ops.OdtDocument.signalCursorAdded,c);h.unsubscribe(ops.OdtDocument.signalCursorRemoved,b);h.unsubscribe(ops.OdtDocument.signalParagraphChanged,a);h.unsubscribe(ops.OdtDocument.signalCursorMoved,g);h.unsubscribe(ops.OdtDocument.signalParagraphChanged,e);h.unsubscribe(ops.OdtDocument.signalTableAdded,
e);h.unsubscribe(ops.OdtDocument.signalParagraphStyleModified,e);runtime.getWindow().clearInterval(s);u.parentNode.removeChild(u);(function V(a,b){b?d(b):a<k.length?k[a].destroy(function(b){V(a+1,b)}):d()})(0,void 0)};(function(){var d=f.getOdtDocument(),h=document.getElementsByTagName("head")[0];d.subscribe(ops.OdtDocument.signalMemberAdded,r);d.subscribe(ops.OdtDocument.signalMemberUpdated,r);d.subscribe(ops.OdtDocument.signalCursorAdded,c);d.subscribe(ops.OdtDocument.signalCursorRemoved,b);d.subscribe(ops.OdtDocument.signalParagraphChanged,
a);d.subscribe(ops.OdtDocument.signalCursorMoved,g);m();d.subscribe(ops.OdtDocument.signalParagraphChanged,e);d.subscribe(ops.OdtDocument.signalTableAdded,e);d.subscribe(ops.OdtDocument.signalParagraphStyleModified,e);u=document.createElementNS(h.namespaceURI,"style");u.type="text/css";u.media="screen, print, handheld, projection";u.appendChild(document.createTextNode("@namespace editinfo url(urn:webodf:names:editinfo);"));u.appendChild(document.createTextNode("@namespace dc url(http://purl.org/dc/elements/1.1/);"));
h.appendChild(u)})()}}();
// Input 108
var webodf_css="@namespace draw url(urn:oasis:names:tc:opendocument:xmlns:drawing:1.0);\n@namespace fo url(urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0);\n@namespace office url(urn:oasis:names:tc:opendocument:xmlns:office:1.0);\n@namespace presentation url(urn:oasis:names:tc:opendocument:xmlns:presentation:1.0);\n@namespace style url(urn:oasis:names:tc:opendocument:xmlns:style:1.0);\n@namespace svg url(urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0);\n@namespace table url(urn:oasis:names:tc:opendocument:xmlns:table:1.0);\n@namespace text url(urn:oasis:names:tc:opendocument:xmlns:text:1.0);\n@namespace webodfhelper url(urn:webodf:names:helper);\n@namespace cursor url(urn:webodf:names:cursor);\n@namespace editinfo url(urn:webodf:names:editinfo);\n@namespace annotation url(urn:webodf:names:annotation);\n@namespace dc url(http://purl.org/dc/elements/1.1/);\n@namespace svgns url(http://www.w3.org/2000/svg);\n\noffice|document > *, office|document-content > * {\n  display: none;\n}\noffice|body, office|document {\n  display: inline-block;\n  position: relative;\n}\n\ntext|p, text|h {\n  display: block;\n  padding: 0;\n  margin: 0;\n  line-height: normal;\n  position: relative;\n  min-height: 1.3em; /* prevent empty paragraphs and headings from collapsing if they are empty */\n}\n*[webodfhelper|containsparagraphanchor] {\n  position: relative;\n}\ntext|s {\n    white-space: pre;\n}\ntext|tab {\n  display: inline;\n  white-space: pre;\n}\ntext|tracked-changes {\n  /*Consumers that do not support change tracking, should ignore changes.*/\n  display: none;\n}\noffice|binary-data {\n  display: none;\n}\noffice|text {\n  display: block;\n  text-align: left;\n  overflow: visible;\n  word-wrap: break-word;\n}\n\noffice|text::selection {\n  /** Let's not draw selection highlight that overflows into the office|text\n   * node when selecting content across several paragraphs\n   */\n  background: transparent;\n}\n\n.virtualSelections office|document *::selection {\n  background: transparent;\n}\n.virtualSelections office|document *::-moz-selection {\n  background: transparent;\n}\n\noffice|text * draw|text-box {\n/** only for text documents */\n    display: block;\n    border: 1px solid #d3d3d3;\n}\noffice|spreadsheet {\n  display: block;\n  border-collapse: collapse;\n  empty-cells: show;\n  font-family: sans-serif;\n  font-size: 10pt;\n  text-align: left;\n  page-break-inside: avoid;\n  overflow: hidden;\n}\noffice|presentation {\n  display: inline-block;\n  text-align: left;\n}\n#shadowContent {\n  display: inline-block;\n  text-align: left;\n}\ndraw|page {\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\npresentation|notes, presentation|footer-decl, presentation|date-time-decl {\n    display: none;\n}\n@media print {\n  draw|page {\n    border: 1pt solid black;\n    page-break-inside: avoid;\n  }\n  presentation|notes {\n    /*TODO*/\n  }\n}\noffice|spreadsheet text|p {\n  border: 0px;\n  padding: 1px;\n  margin: 0px;\n}\noffice|spreadsheet table|table {\n  margin: 3px;\n}\noffice|spreadsheet table|table:after {\n  /* show sheet name the end of the sheet */\n  /*content: attr(table|name);*/ /* gives parsing error in opera */\n}\noffice|spreadsheet table|table-row {\n  counter-increment: row;\n}\noffice|spreadsheet table|table-row:before {\n  width: 3em;\n  background: #cccccc;\n  border: 1px solid black;\n  text-align: center;\n  content: counter(row);\n  display: table-cell;\n}\noffice|spreadsheet table|table-cell {\n  border: 1px solid #cccccc;\n}\ntable|table {\n  display: table;\n}\ndraw|frame table|table {\n  width: 100%;\n  height: 100%;\n  background: white;\n}\ntable|table-header-rows {\n  display: table-header-group;\n}\ntable|table-row {\n  display: table-row;\n}\ntable|table-column {\n  display: table-column;\n}\ntable|table-cell {\n  width: 0.889in;\n  display: table-cell;\n  word-break: break-all; /* prevent long words from extending out the table cell */\n}\ndraw|frame {\n  display: block;\n}\ndraw|image {\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  -moz-background-size: 100% 100%;\n}\n/* only show the first image in frame */\ndraw|frame > draw|image:nth-of-type(n+2) {\n  display: none;\n}\ntext|list:before {\n    display: none;\n    content:\"\";\n}\ntext|list {\n    counter-reset: list;\n}\ntext|list-item {\n    display: block;\n}\ntext|number {\n    display:none;\n}\n\ntext|a {\n    color: blue;\n    text-decoration: underline;\n    cursor: pointer;\n}\noffice|text[webodfhelper|links=\"inactive\"] text|a {\n    cursor: text;\n}\ntext|note-citation {\n    vertical-align: super;\n    font-size: smaller;\n}\ntext|note-body {\n    display: none;\n}\ntext|note:hover text|note-citation {\n    background: #dddddd;\n}\ntext|note:hover text|note-body {\n    display: block;\n    left:1em;\n    max-width: 80%;\n    position: absolute;\n    background: #ffffaa;\n}\nsvg|title, svg|desc {\n    display: none;\n}\nvideo {\n    width: 100%;\n    height: 100%\n}\n\n/* below set up the cursor */\ncursor|cursor {\n    display: inline;\n    width: 0;\n    height: 1em;\n    /* making the position relative enables the avatar to use\n       the cursor as reference for its absolute position */\n    position: relative;\n    z-index: 1;\n}\n\ncursor|cursor > .caret {\n    /* IMPORTANT: when changing these values ensure DEFAULT_CARET_TOP and DEFAULT_CARET_HEIGHT\n        in Caret.js remain in sync */\n    display: inline;\n    position: absolute;\n    top: 5%; /* push down the caret; 0px can do the job, 5% looks better, 10% is a bit over */\n    height: 1em;\n    border-left: 2px solid black;\n    outline: none;\n}\n\ncursor|cursor > .handle {\n    padding: 3px;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    border: none !important;\n    border-radius: 5px;\n    opacity: 0.3;\n}\n\ncursor|cursor > .handle > img {\n    border-radius: 5px;\n}\n\ncursor|cursor > .handle.active {\n    opacity: 0.8;\n}\n\ncursor|cursor > .handle:after {\n    content: ' ';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 43%;\n}\n\n/** Input Method Editor input pane & behaviours */\n/* not within a cursor */\n#eventTrap {\n    height: 1px;\n    margin: auto 0;\n    display: block;\n    position: absolute;\n    left: -10000px;\n    width: 1px;\n    outline: none;\n}\n\n/* within a cursor */\ncursor|cursor > #eventTrap {\n    display: inline-block;\n    position: static;\n    left: 0;\n    margin-right: -1px; /* Hide the content editable's own caret */\n    color: rgba(255, 255, 255, 0); /** additionally hide the blinking caret by setting the colour to fully transparent */\n    overflow: hidden; /* The overflow visibility is used to hide and show characters being entered */\n    height: 1px;\n    width: 1px; /* marginRight + width must equal 0 so chrome & FF don't think the element takes up space */\n}\n\ncursor|cursor[cursor|composing=\"true\"] > #eventTrap {\n    color: inherit; /* make colour non-transparent again to show the entered text */\n    overflow: visible; /* The overflow visibility is used to hide and show characters being entered */\n    height: auto;\n    width: auto;\n}\n\ncursor|cursor[cursor|composing=\"true\"] {\n    display: inline-block;\n    width: auto;\n    height: inherit;\n}\n\ncursor|cursor[cursor|composing=\"true\"] > .caret {\n    /* during composition, the caret should be pushed along by the composition text, inline with the text */\n    position: static;\n    /* as it is now part of an inline-block, it will no longer need correct to top or height values to align properly */\n    height: auto !important;\n    top: auto !important;\n}\n\n.editInfoMarker {\n    position: absolute;\n    width: 10px;\n    height: 100%;\n    left: -20px;\n    opacity: 0.8;\n    top: 0;\n    border-radius: 5px;\n    background-color: transparent;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n}\n.editInfoMarker:hover {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);\n}\n\n.editInfoHandle {\n    position: absolute;\n    background-color: black;\n    padding: 5px;\n    border-radius: 5px;\n    opacity: 0.8;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    bottom: 100%;\n    margin-bottom: 10px;\n    z-index: 3;\n    left: -25px;\n}\n.editInfoHandle:after {\n    content: ' ';\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: black transparent transparent transparent;\n\n    top: 100%;\n    left: 5px;\n}\n.editInfo {\n    font-family: sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    color: white;\n    width: 100%;\n    height: 12pt;\n}\n.editInfoColor {\n    float: left;\n    width: 10pt;\n    height: 10pt;\n    border: 1px solid white;\n}\n.editInfoAuthor {\n    float: left;\n    margin-left: 5pt;\n    font-size: 10pt;\n    text-align: left;\n    height: 12pt;\n    line-height: 12pt;\n}\n.editInfoTime {\n    float: right;\n    margin-left: 30pt;\n    font-size: 8pt;\n    font-style: italic;\n    color: yellow;\n    height: 12pt;\n    line-height: 12pt;\n}\n\n.annotationWrapper {\n    display: inline;\n    position: relative;\n}\n\n.annotationRemoveButton:before {\n    content: '\u00d7';\n    color: white;\n    padding: 5px;\n    line-height: 1em;\n}\n\n.annotationRemoveButton {\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    background-color: black;\n    box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);\n    position: absolute;\n    top: -10px;\n    left: -10px;\n    z-index: 3;\n    text-align: center;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: none;\n    font-size: 15px;\n}\n.annotationRemoveButton:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);\n}\n\n.annotationNote {\n    width: 4cm;\n    position: absolute;\n    display: inline;\n    z-index: 10;\n}\n.annotationNote > office|annotation {\n    display: block;\n    text-align: left;\n}\n\n.annotationConnector {\n    position: absolute;\n    display: inline;\n    z-index: 2;\n    border-top: 1px dashed brown;\n}\n.annotationConnector.angular {\n    -moz-transform-origin: left top;\n    -webkit-transform-origin: left top;\n    -ms-transform-origin: left top;\n    transform-origin: left top;\n}\n.annotationConnector.horizontal {\n    left: 0;\n}\n.annotationConnector.horizontal:before {\n    content: '';\n    display: inline;\n    position: absolute;\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 8.7px 5px 0 5px;\n    border-color: brown transparent transparent transparent;\n    top: -1px;\n    left: -5px;\n}\n\noffice|annotation {\n    width: 100%;\n    height: 100%;\n    display: none;\n    background: rgb(198, 238, 184);\n    background: -moz-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -webkit-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -o-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: -ms-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    background: linear-gradient(180deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);\n    box-shadow: 0 3px 4px -3px #ccc;\n}\n\noffice|annotation > dc|creator {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    color: white;\n    background-color: brown;\n    padding: 4px;\n}\noffice|annotation > dc|date {\n    display: block;\n    font-size: 10pt;\n    font-weight: normal;\n    font-style: normal;\n    font-family: sans-serif;\n    border: 4px solid transparent;\n}\noffice|annotation > text|list {\n    display: block;\n    padding: 5px;\n}\n\n/* This is very temporary CSS. This must go once\n * we start bundling webodf-default ODF styles for annotations.\n */\noffice|annotation text|p {\n    font-size: 10pt;\n    color: black;\n    font-weight: normal;\n    font-style: normal;\n    text-decoration: none;\n    font-family: sans-serif;\n}\n\ndc|*::selection {\n    background: transparent;\n}\ndc|*::-moz-selection {\n    background: transparent;\n}\n\n#annotationsPane {\n    background-color: #EAEAEA;\n    width: 4cm;\n    height: 100%;\n    display: none;\n    position: absolute;\n    outline: 1px solid #ccc;\n}\n\n.annotationHighlight {\n    background-color: yellow;\n    position: relative;\n}\n\n.selectionOverlay {\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 15;\n}\n.selectionOverlay > polygon {\n    fill-opacity: 0.3;\n    stroke-opacity: 0.8;\n    stroke-width: 1;\n    fill-rule: evenodd;\n}\n\n#imageSelector {\n    display: none;\n    position: absolute;\n    border-style: solid;\n    border-color: black;\n}\n\n#imageSelector > div {\n    width: 5px;\n    height: 5px;\n    display: block;\n    position: absolute;\n    border: 1px solid black;\n    background-color: #ffffff;\n}\n\n#imageSelector > .topLeft {\n    top: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topRight {\n    top: -4px;\n    right: -4px;\n}\n\n#imageSelector > .bottomRight {\n    right: -4px;\n    bottom: -4px;\n}\n\n#imageSelector > .bottomLeft {\n    bottom: -4px;\n    left: -4px;\n}\n\n#imageSelector > .topMiddle {\n    top: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .rightMiddle {\n    top: 50%;\n    right: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n\n#imageSelector > .bottomMiddle {\n    bottom: -4px;\n    left: 50%;\n    margin-left: -2.5px; /* half of the width defined in #imageSelector > div */\n}\n\n#imageSelector > .leftMiddle {\n    top: 50%;\n    left: -4px;\n    margin-top: -2.5px; /* half of the height defined in #imageSelector > div */\n}\n";
