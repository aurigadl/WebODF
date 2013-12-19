message(STATUS "downloading...
     src='http://siliconforks.com/jscoverage/download/jscoverage-0.5.1.tar.bz2'
     dst='/home/aurigadl/Descargas/build/downloads/jscoverage-0.5.1.tar.bz2'
     timeout='none'")




file(DOWNLOAD
  "http://siliconforks.com/jscoverage/download/jscoverage-0.5.1.tar.bz2"
  "/home/aurigadl/Descargas/build/downloads/jscoverage-0.5.1.tar.bz2"
  SHOW_PROGRESS
  EXPECTED_HASH;MD5=a70d79a6759367fbcc0bcc18d6866ff3
  # no TIMEOUT
  STATUS status
  LOG log)

list(GET status 0 status_code)
list(GET status 1 status_string)

if(NOT status_code EQUAL 0)
  message(FATAL_ERROR "error: downloading 'http://siliconforks.com/jscoverage/download/jscoverage-0.5.1.tar.bz2' failed
  status_code: ${status_code}
  status_string: ${status_string}
  log: ${log}
")
endif()

message(STATUS "downloading... done")
