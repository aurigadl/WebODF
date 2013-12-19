set(file "/home/aurigadl/Descargas/build/downloads/node-v0.10.20.tar.gz")
message(STATUS "verifying file...
     file='${file}'")
set(expect_value "784e7d7a8e29dfec88ddb2e72a895407")
file(MD5 "${file}" actual_value)
if("${actual_value}" STREQUAL "${expect_value}")
  message(STATUS "verifying file... done")
else()
  message(FATAL_ERROR "error: MD5 hash of
  ${file}
does not match expected value
  expected: ${expect_value}
    actual: ${actual_value}
")
endif()
