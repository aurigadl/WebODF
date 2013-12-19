message(STATUS "downloading...
     src='http://jsdoc-toolkit.googlecode.com/files/jsdoc_toolkit-2.4.0.zip'
     dst='/home/aurigadl/Descargas/build/downloads/jsdoc_toolkit-2.4.0.zip'
     timeout='none'")




file(DOWNLOAD
  "http://jsdoc-toolkit.googlecode.com/files/jsdoc_toolkit-2.4.0.zip"
  "/home/aurigadl/Descargas/build/downloads/jsdoc_toolkit-2.4.0.zip"
  SHOW_PROGRESS
  EXPECTED_HASH;MD5=a8f78f5ecd24b54501147b2af341a231
  # no TIMEOUT
  STATUS status
  LOG log)

list(GET status 0 status_code)
list(GET status 1 status_string)

if(NOT status_code EQUAL 0)
  message(FATAL_ERROR "error: downloading 'http://jsdoc-toolkit.googlecode.com/files/jsdoc_toolkit-2.4.0.zip' failed
  status_code: ${status_code}
  status_string: ${status_string}
  log: ${log}
")
endif()

message(STATUS "downloading... done")
