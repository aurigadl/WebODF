FILE(REMOVE_RECURSE
  "CMakeFiles/html-benchmark"
  "benchmark.js-target"
  "1page.odt"
  "10pages.odt"
  "100pages.odt"
  "1000pages.odt"
  "index.html"
)

# Per-language clean rules from dependency scanning.
FOREACH(lang)
  INCLUDE(CMakeFiles/html-benchmark.dir/cmake_clean_${lang}.cmake OPTIONAL)
ENDFOREACH(lang)
