message(STATUS "downloading...
     src='http://dl.google.com/closure-compiler/compiler-20130823.tar.gz'
     dst='/home/aurigadl/Descargas/build/downloads/compiler-20130823.tar.gz'
     timeout='none'")




file(DOWNLOAD
  "http://dl.google.com/closure-compiler/compiler-20130823.tar.gz"
  "/home/aurigadl/Descargas/build/downloads/compiler-20130823.tar.gz"
  SHOW_PROGRESS
  EXPECTED_HASH;MD5=105db24c4676e23f2495adfdea3159bc
  # no TIMEOUT
  STATUS status
  LOG log)

list(GET status 0 status_code)
list(GET status 1 status_string)

if(NOT status_code EQUAL 0)
  message(FATAL_ERROR "error: downloading 'http://dl.google.com/closure-compiler/compiler-20130823.tar.gz' failed
  status_code: ${status_code}
  status_string: ${status_string}
  log: ${log}
")
endif()

message(STATUS "downloading... done")
