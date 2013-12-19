FILE(REMOVE_RECURSE
  "CMakeFiles/typecheck-target"
  "typecheck.js"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/typecheck-target.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
