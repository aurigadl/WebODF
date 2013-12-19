set(file "/home/aurigadl/Descargas/build/downloads/jscoverage-0.5.1.tar.bz2")
message(STATUS "verifying file...
     file='${file}'")
set(expect_value "a70d79a6759367fbcc0bcc18d6866ff3")
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
