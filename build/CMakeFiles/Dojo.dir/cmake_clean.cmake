FILE(REMOVE_RECURSE
  "CMakeFiles/Dojo"
  "CMakeFiles/Dojo-complete"
  "Dojo-prefix/src/Dojo-stamp/Dojo-install"
  "Dojo-prefix/src/Dojo-stamp/Dojo-mkdir"
  "Dojo-prefix/src/Dojo-stamp/Dojo-download"
  "Dojo-prefix/src/Dojo-stamp/Dojo-update"
  "Dojo-prefix/src/Dojo-stamp/Dojo-patch"
  "Dojo-prefix/src/Dojo-stamp/Dojo-configure"
  "Dojo-prefix/src/Dojo-stamp/Dojo-build"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/Dojo.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
