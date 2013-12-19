set(file "/home/aurigadl/Descargas/build/downloads/jsdoc_toolkit-2.4.0.zip")
message(STATUS "verifying file...
     file='${file}'")
set(expect_value "a8f78f5ecd24b54501147b2af341a231")
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
