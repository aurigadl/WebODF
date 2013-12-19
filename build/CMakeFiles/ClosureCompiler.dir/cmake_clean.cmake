FILE(REMOVE_RECURSE
  "CMakeFiles/ClosureCompiler"
  "CMakeFiles/ClosureCompiler-complete"
  "ClosureCompiler-prefix/src/ClosureCompiler-stamp/ClosureCompiler-install"
  "ClosureCompiler-prefix/src/ClosureCompiler-stamp/ClosureCompiler-mkdir"
  "ClosureCompiler-prefix/src/ClosureCompiler-stamp/ClosureCompiler-download"
  "ClosureCompiler-prefix/src/ClosureCompiler-stamp/ClosureCompiler-update"
  "ClosureCompiler-prefix/src/ClosureCompiler-stamp/ClosureCompiler-patch"
  "ClosureCompiler-prefix/src/ClosureCompiler-stamp/ClosureCompiler-configure"
  "ClosureCompiler-prefix/src/ClosureCompiler-stamp/ClosureCompiler-build"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/ClosureCompiler.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
