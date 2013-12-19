set(file "/home/aurigadl/Descargas/build/downloads/compiler-20130823.tar.gz")
message(STATUS "verifying file...
     file='${file}'")
set(expect_value "105db24c4676e23f2495adfdea3159bc")
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
