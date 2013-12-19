FILE(REMOVE_RECURSE
  "CMakeFiles/Rhino"
  "CMakeFiles/Rhino-complete"
  "Rhino-prefix/src/Rhino-stamp/Rhino-install"
  "Rhino-prefix/src/Rhino-stamp/Rhino-mkdir"
  "Rhino-prefix/src/Rhino-stamp/Rhino-download"
  "Rhino-prefix/src/Rhino-stamp/Rhino-update"
  "Rhino-prefix/src/Rhino-stamp/Rhino-patch"
  "Rhino-prefix/src/Rhino-stamp/Rhino-configure"
  "Rhino-prefix/src/Rhino-stamp/Rhino-build"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/Rhino.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
