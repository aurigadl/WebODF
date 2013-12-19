set(file "/home/aurigadl/Descargas/build/downloads/dojo-release-1.8.1-src.tar.gz")
message(STATUS "verifying file...
     file='${file}'")
set(expect_value "9b80b9a736b81c336accd832f3c3aea2")
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
