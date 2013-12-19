message(STATUS "downloading...
     src='http://download.dojotoolkit.org/release-1.8.1/dojo-release-1.8.1-src.tar.gz'
     dst='/home/aurigadl/Descargas/build/downloads/dojo-release-1.8.1-src.tar.gz'
     timeout='none'")




file(DOWNLOAD
  "http://download.dojotoolkit.org/release-1.8.1/dojo-release-1.8.1-src.tar.gz"
  "/home/aurigadl/Descargas/build/downloads/dojo-release-1.8.1-src.tar.gz"
  SHOW_PROGRESS
  EXPECTED_HASH;MD5=9b80b9a736b81c336accd832f3c3aea2
  # no TIMEOUT
  STATUS status
  LOG log)

list(GET status 0 status_code)
list(GET status 1 status_string)

if(NOT status_code EQUAL 0)
  message(FATAL_ERROR "error: downloading 'http://download.dojotoolkit.org/release-1.8.1/dojo-release-1.8.1-src.tar.gz' failed
  status_code: ${status_code}
  status_string: ${status_string}
  log: ${log}
")
endif()

message(STATUS "downloading... done")
