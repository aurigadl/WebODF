FILE(REMOVE_RECURSE
  "CMakeFiles/instrumented"
  "instrumented/index.html"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/instrumented.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
