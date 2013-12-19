set(file "/home/aurigadl/Descargas/build/downloads/rhino1_7R3.zip")
message(STATUS "verifying file...
     file='${file}'")
set(expect_value "99d94103662a8d0b571e247a77432ac5")
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
