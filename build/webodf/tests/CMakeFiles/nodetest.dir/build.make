# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 2.8

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list

# Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/aurigadl/Descargas/webodf

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/aurigadl/Descargas/build

# Utility rule file for nodetest.

# Include the progress variables for this target.
include webodf/tests/CMakeFiles/nodetest.dir/progress.make

webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/manifest.json
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/tests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/tests.html
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/utf8.txt
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/xmldom/LSSerializerTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/xmldom/XPathTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/TransformationTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/SessionTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/OdtCursorTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/OdtDocumentTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/StepsTranslatorTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/OperationTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/TransformerTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/odf/OdfContainerTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/odf/ObjectNameGeneratorTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/odf/StyleInfoTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/odf/OdfUtilsTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/odf/FormattingTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/odf/TextStyleApplicatorTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/gui/StyleHelperTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/gui/UndoStateRulesTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/gui/SelectionMoverTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/gui/TrivialUndoManagerTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/core/DomUtilsTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/core/CursorTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/core/ZipTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/core/PositionIteratorTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/core/Base64Tests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/core/RuntimeTests.js
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/test_odt/settings.xml
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/test_odt/content.xml
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/test_odt/styles.xml
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/test_odt/meta.xml
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/operationtests.xml
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/transformationtests.xml
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/allowedpositions.xml
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/failingtests.xml
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/ops/transformertests.xml
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/core/hi-compressed.zip
webodf/tests/CMakeFiles/nodetest: webodf/tests/_nodetest/core/hi-uncompressed.zip
	cd /home/aurigadl/Descargas/build/webodf/tests/_nodetest && /home/aurigadl/Descargas/build/NodeJS-prefix/bin/node /home/aurigadl/Descargas/webodf/webodf/lib/runtime.js ./tests.js

webodf/tests/_nodetest/manifest.json: /home/aurigadl/Descargas/webodf/webodf/tests/manifest.json
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/manifest.json"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/manifest.json /home/aurigadl/Descargas/build/webodf/tests/_nodetest/manifest.json

webodf/tests/_nodetest/tests.js: /home/aurigadl/Descargas/webodf/webodf/tests/tests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_2)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/tests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/tests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/tests.js

webodf/tests/_nodetest/tests.html: /home/aurigadl/Descargas/webodf/webodf/tests/tests.html
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_3)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/tests.html"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/tests.html /home/aurigadl/Descargas/build/webodf/tests/_nodetest/tests.html

webodf/tests/_nodetest/utf8.txt: /home/aurigadl/Descargas/webodf/webodf/tests/utf8.txt
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_4)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/utf8.txt"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/utf8.txt /home/aurigadl/Descargas/build/webodf/tests/_nodetest/utf8.txt

webodf/tests/_nodetest/xmldom/LSSerializerTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/xmldom/LSSerializerTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_5)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/xmldom/LSSerializerTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/xmldom//LSSerializerTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/xmldom//LSSerializerTests.js

webodf/tests/_nodetest/xmldom/XPathTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/xmldom/XPathTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_6)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/xmldom/XPathTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/xmldom//XPathTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/xmldom//XPathTests.js

webodf/tests/_nodetest/ops/TransformationTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/ops/TransformationTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_7)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/TransformationTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//TransformationTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//TransformationTests.js

webodf/tests/_nodetest/ops/SessionTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/ops/SessionTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_8)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/SessionTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//SessionTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//SessionTests.js

webodf/tests/_nodetest/ops/OdtCursorTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/ops/OdtCursorTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_9)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/OdtCursorTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//OdtCursorTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//OdtCursorTests.js

webodf/tests/_nodetest/ops/OdtDocumentTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/ops/OdtDocumentTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_10)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/OdtDocumentTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//OdtDocumentTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//OdtDocumentTests.js

webodf/tests/_nodetest/ops/StepsTranslatorTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/ops/StepsTranslatorTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_11)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/StepsTranslatorTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//StepsTranslatorTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//StepsTranslatorTests.js

webodf/tests/_nodetest/ops/OperationTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/ops/OperationTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_12)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/OperationTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//OperationTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//OperationTests.js

webodf/tests/_nodetest/ops/TransformerTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/ops/TransformerTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_13)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/TransformerTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//TransformerTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//TransformerTests.js

webodf/tests/_nodetest/odf/OdfContainerTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/odf/OdfContainerTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_14)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/odf/OdfContainerTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/odf//OdfContainerTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/odf//OdfContainerTests.js

webodf/tests/_nodetest/odf/ObjectNameGeneratorTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/odf/ObjectNameGeneratorTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_15)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/odf/ObjectNameGeneratorTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/odf//ObjectNameGeneratorTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/odf//ObjectNameGeneratorTests.js

webodf/tests/_nodetest/odf/StyleInfoTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/odf/StyleInfoTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_16)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/odf/StyleInfoTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/odf//StyleInfoTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/odf//StyleInfoTests.js

webodf/tests/_nodetest/odf/OdfUtilsTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/odf/OdfUtilsTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_17)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/odf/OdfUtilsTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/odf//OdfUtilsTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/odf//OdfUtilsTests.js

webodf/tests/_nodetest/odf/FormattingTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/odf/FormattingTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_18)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/odf/FormattingTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/odf//FormattingTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/odf//FormattingTests.js

webodf/tests/_nodetest/odf/TextStyleApplicatorTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/odf/TextStyleApplicatorTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_19)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/odf/TextStyleApplicatorTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/odf//TextStyleApplicatorTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/odf//TextStyleApplicatorTests.js

webodf/tests/_nodetest/gui/StyleHelperTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/gui/StyleHelperTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_20)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/gui/StyleHelperTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/gui//StyleHelperTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/gui//StyleHelperTests.js

webodf/tests/_nodetest/gui/UndoStateRulesTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/gui/UndoStateRulesTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_21)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/gui/UndoStateRulesTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/gui//UndoStateRulesTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/gui//UndoStateRulesTests.js

webodf/tests/_nodetest/gui/SelectionMoverTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/gui/SelectionMoverTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_22)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/gui/SelectionMoverTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/gui//SelectionMoverTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/gui//SelectionMoverTests.js

webodf/tests/_nodetest/gui/TrivialUndoManagerTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/gui/TrivialUndoManagerTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_23)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/gui/TrivialUndoManagerTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/gui//TrivialUndoManagerTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/gui//TrivialUndoManagerTests.js

webodf/tests/_nodetest/core/DomUtilsTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/core/DomUtilsTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_24)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/core/DomUtilsTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/core//DomUtilsTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/core//DomUtilsTests.js

webodf/tests/_nodetest/core/CursorTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/core/CursorTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_25)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/core/CursorTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/core//CursorTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/core//CursorTests.js

webodf/tests/_nodetest/core/ZipTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/core/ZipTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_26)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/core/ZipTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/core//ZipTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/core//ZipTests.js

webodf/tests/_nodetest/core/PositionIteratorTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/core/PositionIteratorTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_27)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/core/PositionIteratorTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/core//PositionIteratorTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/core//PositionIteratorTests.js

webodf/tests/_nodetest/core/Base64Tests.js: /home/aurigadl/Descargas/webodf/webodf/tests/core/Base64Tests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_28)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/core/Base64Tests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/core//Base64Tests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/core//Base64Tests.js

webodf/tests/_nodetest/core/RuntimeTests.js: /home/aurigadl/Descargas/webodf/webodf/tests/core/RuntimeTests.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_29)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/core/RuntimeTests.js"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/core//RuntimeTests.js /home/aurigadl/Descargas/build/webodf/tests/_nodetest/core//RuntimeTests.js

webodf/tests/_nodetest/test_odt/settings.xml: /home/aurigadl/Descargas/webodf/webodf/tests/test_odt/settings.xml
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_30)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/test_odt/settings.xml"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/test_odt//settings.xml /home/aurigadl/Descargas/build/webodf/tests/_nodetest/test_odt//settings.xml

webodf/tests/_nodetest/test_odt/content.xml: /home/aurigadl/Descargas/webodf/webodf/tests/test_odt/content.xml
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_31)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/test_odt/content.xml"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/test_odt//content.xml /home/aurigadl/Descargas/build/webodf/tests/_nodetest/test_odt//content.xml

webodf/tests/_nodetest/test_odt/styles.xml: /home/aurigadl/Descargas/webodf/webodf/tests/test_odt/styles.xml
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_32)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/test_odt/styles.xml"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/test_odt//styles.xml /home/aurigadl/Descargas/build/webodf/tests/_nodetest/test_odt//styles.xml

webodf/tests/_nodetest/test_odt/meta.xml: /home/aurigadl/Descargas/webodf/webodf/tests/test_odt/meta.xml
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_33)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/test_odt/meta.xml"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/test_odt//meta.xml /home/aurigadl/Descargas/build/webodf/tests/_nodetest/test_odt//meta.xml

webodf/tests/_nodetest/ops/operationtests.xml: /home/aurigadl/Descargas/webodf/webodf/tests/ops/operationtests.xml
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_34)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/operationtests.xml"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//operationtests.xml /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//operationtests.xml

webodf/tests/_nodetest/ops/transformationtests.xml: /home/aurigadl/Descargas/webodf/webodf/tests/ops/transformationtests.xml
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_35)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/transformationtests.xml"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//transformationtests.xml /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//transformationtests.xml

webodf/tests/_nodetest/ops/allowedpositions.xml: /home/aurigadl/Descargas/webodf/webodf/tests/ops/allowedpositions.xml
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_36)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/allowedpositions.xml"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//allowedpositions.xml /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//allowedpositions.xml

webodf/tests/_nodetest/ops/failingtests.xml: /home/aurigadl/Descargas/webodf/webodf/tests/ops/failingtests.xml
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_37)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/failingtests.xml"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//failingtests.xml /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//failingtests.xml

webodf/tests/_nodetest/ops/transformertests.xml: /home/aurigadl/Descargas/webodf/webodf/tests/ops/transformertests.xml
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_38)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/ops/transformertests.xml"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/ops//transformertests.xml /home/aurigadl/Descargas/build/webodf/tests/_nodetest/ops//transformertests.xml

webodf/tests/_nodetest/core/hi-compressed.zip: /home/aurigadl/Descargas/webodf/webodf/tests/core/hi-compressed.zip
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_39)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/core/hi-compressed.zip"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/core//hi-compressed.zip /home/aurigadl/Descargas/build/webodf/tests/_nodetest/core//hi-compressed.zip

webodf/tests/_nodetest/core/hi-uncompressed.zip: /home/aurigadl/Descargas/webodf/webodf/tests/core/hi-uncompressed.zip
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_40)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating _nodetest/core/hi-uncompressed.zip"
	cd /home/aurigadl/Descargas/build/webodf/tests && /usr/bin/cmake -E copy_if_different /home/aurigadl/Descargas/webodf/webodf/tests/core//hi-uncompressed.zip /home/aurigadl/Descargas/build/webodf/tests/_nodetest/core//hi-uncompressed.zip

nodetest: webodf/tests/CMakeFiles/nodetest
nodetest: webodf/tests/_nodetest/manifest.json
nodetest: webodf/tests/_nodetest/tests.js
nodetest: webodf/tests/_nodetest/tests.html
nodetest: webodf/tests/_nodetest/utf8.txt
nodetest: webodf/tests/_nodetest/xmldom/LSSerializerTests.js
nodetest: webodf/tests/_nodetest/xmldom/XPathTests.js
nodetest: webodf/tests/_nodetest/ops/TransformationTests.js
nodetest: webodf/tests/_nodetest/ops/SessionTests.js
nodetest: webodf/tests/_nodetest/ops/OdtCursorTests.js
nodetest: webodf/tests/_nodetest/ops/OdtDocumentTests.js
nodetest: webodf/tests/_nodetest/ops/StepsTranslatorTests.js
nodetest: webodf/tests/_nodetest/ops/OperationTests.js
nodetest: webodf/tests/_nodetest/ops/TransformerTests.js
nodetest: webodf/tests/_nodetest/odf/OdfContainerTests.js
nodetest: webodf/tests/_nodetest/odf/ObjectNameGeneratorTests.js
nodetest: webodf/tests/_nodetest/odf/StyleInfoTests.js
nodetest: webodf/tests/_nodetest/odf/OdfUtilsTests.js
nodetest: webodf/tests/_nodetest/odf/FormattingTests.js
nodetest: webodf/tests/_nodetest/odf/TextStyleApplicatorTests.js
nodetest: webodf/tests/_nodetest/gui/StyleHelperTests.js
nodetest: webodf/tests/_nodetest/gui/UndoStateRulesTests.js
nodetest: webodf/tests/_nodetest/gui/SelectionMoverTests.js
nodetest: webodf/tests/_nodetest/gui/TrivialUndoManagerTests.js
nodetest: webodf/tests/_nodetest/core/DomUtilsTests.js
nodetest: webodf/tests/_nodetest/core/CursorTests.js
nodetest: webodf/tests/_nodetest/core/ZipTests.js
nodetest: webodf/tests/_nodetest/core/PositionIteratorTests.js
nodetest: webodf/tests/_nodetest/core/Base64Tests.js
nodetest: webodf/tests/_nodetest/core/RuntimeTests.js
nodetest: webodf/tests/_nodetest/test_odt/settings.xml
nodetest: webodf/tests/_nodetest/test_odt/content.xml
nodetest: webodf/tests/_nodetest/test_odt/styles.xml
nodetest: webodf/tests/_nodetest/test_odt/meta.xml
nodetest: webodf/tests/_nodetest/ops/operationtests.xml
nodetest: webodf/tests/_nodetest/ops/transformationtests.xml
nodetest: webodf/tests/_nodetest/ops/allowedpositions.xml
nodetest: webodf/tests/_nodetest/ops/failingtests.xml
nodetest: webodf/tests/_nodetest/ops/transformertests.xml
nodetest: webodf/tests/_nodetest/core/hi-compressed.zip
nodetest: webodf/tests/_nodetest/core/hi-uncompressed.zip
nodetest: webodf/tests/CMakeFiles/nodetest.dir/build.make
.PHONY : nodetest

# Rule to build all files generated by this target.
webodf/tests/CMakeFiles/nodetest.dir/build: nodetest
.PHONY : webodf/tests/CMakeFiles/nodetest.dir/build

webodf/tests/CMakeFiles/nodetest.dir/clean:
	cd /home/aurigadl/Descargas/build/webodf/tests && $(CMAKE_COMMAND) -P CMakeFiles/nodetest.dir/cmake_clean.cmake
.PHONY : webodf/tests/CMakeFiles/nodetest.dir/clean

webodf/tests/CMakeFiles/nodetest.dir/depend:
	cd /home/aurigadl/Descargas/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/webodf/webodf/tests /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build/webodf/tests /home/aurigadl/Descargas/build/webodf/tests/CMakeFiles/nodetest.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : webodf/tests/CMakeFiles/nodetest.dir/depend
