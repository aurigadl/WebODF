FILE(REMOVE_RECURSE
  "CMakeFiles/manifest.json-target"
  "manifest.json"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/manifest.json-target.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
