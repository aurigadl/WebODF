message(STATUS "downloading...
     src='http://nodejs.org/dist/v0.10.20/node-v0.10.20.tar.gz'
     dst='/home/aurigadl/Descargas/build/downloads/node-v0.10.20.tar.gz'
     timeout='none'")




file(DOWNLOAD
  "http://nodejs.org/dist/v0.10.20/node-v0.10.20.tar.gz"
  "/home/aurigadl/Descargas/build/downloads/node-v0.10.20.tar.gz"
  SHOW_PROGRESS
  EXPECTED_HASH;MD5=784e7d7a8e29dfec88ddb2e72a895407
  # no TIMEOUT
  STATUS status
  LOG log)

list(GET status 0 status_code)
list(GET status 1 status_string)

if(NOT status_code EQUAL 0)
  message(FATAL_ERROR "error: downloading 'http://nodejs.org/dist/v0.10.20/node-v0.10.20.tar.gz' failed
  status_code: ${status_code}
  status_string: ${status_string}
  log: ${log}
")
endif()

message(STATUS "downloading... done")
