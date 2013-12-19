message(STATUS "downloading...
     src='http://ftp.mozilla.org/pub/js/rhino1_7R3.zip'
     dst='/home/aurigadl/Descargas/build/downloads/rhino1_7R3.zip'
     timeout='none'")




file(DOWNLOAD
  "http://ftp.mozilla.org/pub/js/rhino1_7R3.zip"
  "/home/aurigadl/Descargas/build/downloads/rhino1_7R3.zip"
  SHOW_PROGRESS
  EXPECTED_HASH;MD5=99d94103662a8d0b571e247a77432ac5
  # no TIMEOUT
  STATUS status
  LOG log)

list(GET status 0 status_code)
list(GET status 1 status_string)

if(NOT status_code EQUAL 0)
  message(FATAL_ERROR "error: downloading 'http://ftp.mozilla.org/pub/js/rhino1_7R3.zip' failed
  status_code: ${status_code}
  status_string: ${status_string}
  log: ${log}
")
endif()

message(STATUS "downloading... done")
