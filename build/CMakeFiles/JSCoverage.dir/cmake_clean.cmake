FILE(REMOVE_RECURSE
  "CMakeFiles/JSCoverage"
  "CMakeFiles/JSCoverage-complete"
  "JSCoverage-prefix/src/JSCoverage-stamp/JSCoverage-install"
  "JSCoverage-prefix/src/JSCoverage-stamp/JSCoverage-mkdir"
  "JSCoverage-prefix/src/JSCoverage-stamp/JSCoverage-download"
  "JSCoverage-prefix/src/JSCoverage-stamp/JSCoverage-update"
  "JSCoverage-prefix/src/JSCoverage-stamp/JSCoverage-patch"
  "JSCoverage-prefix/src/JSCoverage-stamp/JSCoverage-configure"
  "JSCoverage-prefix/src/JSCoverage-stamp/JSCoverage-build"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/JSCoverage.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
