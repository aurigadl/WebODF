FILE(REMOVE_RECURSE
  "CMakeFiles/JsDoc"
  "CMakeFiles/JsDoc-complete"
  "JsDoc-prefix/src/JsDoc-stamp/JsDoc-install"
  "JsDoc-prefix/src/JsDoc-stamp/JsDoc-mkdir"
  "JsDoc-prefix/src/JsDoc-stamp/JsDoc-download"
  "JsDoc-prefix/src/JsDoc-stamp/JsDoc-update"
  "JsDoc-prefix/src/JsDoc-stamp/JsDoc-patch"
  "JsDoc-prefix/src/JsDoc-stamp/JsDoc-configure"
  "JsDoc-prefix/src/JsDoc-stamp/JsDoc-build"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/JsDoc.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
