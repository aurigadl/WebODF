FILE(REMOVE_RECURSE
  "CMakeFiles/syntaxcheck"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/syntaxcheck.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
