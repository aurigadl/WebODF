FILE(REMOVE_RECURSE
  "CMakeFiles/NodeJS"
  "CMakeFiles/NodeJS-complete"
  "NodeJS-prefix/src/NodeJS-stamp/NodeJS-install"
  "NodeJS-prefix/src/NodeJS-stamp/NodeJS-mkdir"
  "NodeJS-prefix/src/NodeJS-stamp/NodeJS-download"
  "NodeJS-prefix/src/NodeJS-stamp/NodeJS-update"
  "NodeJS-prefix/src/NodeJS-stamp/NodeJS-patch"
  "NodeJS-prefix/src/NodeJS-stamp/NodeJS-configure"
  "NodeJS-prefix/src/NodeJS-stamp/NodeJS-build"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/NodeJS.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
