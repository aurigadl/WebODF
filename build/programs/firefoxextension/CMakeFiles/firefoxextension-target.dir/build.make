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

# Utility rule file for firefoxextension-target.

# Include the progress variables for this target.
include programs/firefoxextension/CMakeFiles/firefoxextension-target.dir/progress.make

programs/firefoxextension/CMakeFiles/firefoxextension-target: webodf-0.4.2-1661-g0d936d4.xpi

webodf-0.4.2-1661-g0d936d4.xpi: /home/aurigadl/Descargas/webodf/programs/firefoxextension/makeViewerHtml.js
webodf-0.4.2-1661-g0d936d4.xpi: /home/aurigadl/Descargas/webodf/programs/firefoxextension/packextension.js
webodf-0.4.2-1661-g0d936d4.xpi: /home/aurigadl/Descargas/webodf/programs/firefoxextension/bootstrap.js
webodf-0.4.2-1661-g0d936d4.xpi: /home/aurigadl/Descargas/webodf/programs/firefoxextension/chrome.manifest
webodf-0.4.2-1661-g0d936d4.xpi: /home/aurigadl/Descargas/webodf/programs/firefoxextension/skin/default/icon.png
webodf-0.4.2-1661-g0d936d4.xpi: /home/aurigadl/Descargas/webodf/programs/firefoxextension/components/OdfStreamConverter.js
webodf-0.4.2-1661-g0d936d4.xpi: /home/aurigadl/Descargas/webodf/programs/firefoxextension/content/web/viewer.html.in
webodf-0.4.2-1661-g0d936d4.xpi: programs/firefoxextension/install.rdf
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating ../../webodf-0.4.2-1661-g0d936d4.xpi"
	cd /home/aurigadl/Descargas/webodf/programs/firefoxextension && /usr/bin/cmake -E remove_directory /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4
	cd /home/aurigadl/Descargas/webodf/programs/firefoxextension && /usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4/content/web
	cd /home/aurigadl/Descargas/webodf/programs/firefoxextension && /usr/bin/cmake -E copy /home/aurigadl/Descargas/build/programs/firefoxextension/install.rdf /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4
	cd /home/aurigadl/Descargas/webodf/programs/firefoxextension && /home/aurigadl/Descargas/build/NodeJS-prefix/bin/node ../../webodf/lib/runtime.js makeViewerHtml.js /home/aurigadl/Descargas/build/programs/firefoxextension/../../webodf/webodf.js /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4/content/web/viewer.html
	cd /home/aurigadl/Descargas/webodf/programs/firefoxextension && /home/aurigadl/Descargas/build/NodeJS-prefix/bin/node ../../webodf/lib/runtime.js packextension.js /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4 bootstrap.js chrome.manifest skin/default/icon.png components/OdfStreamConverter.js
	cd /home/aurigadl/Descargas/webodf/programs/firefoxextension && /home/aurigadl/Descargas/build/NodeJS-prefix/bin/node ../../webodf/lib/runtime.js /home/aurigadl/Descargas/webodf/programs/firefoxextension/../../webodf/tools/zipdir.js /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4 /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4.xpi notopdir

firefoxextension-target: programs/firefoxextension/CMakeFiles/firefoxextension-target
firefoxextension-target: webodf-0.4.2-1661-g0d936d4.xpi
firefoxextension-target: programs/firefoxextension/CMakeFiles/firefoxextension-target.dir/build.make
.PHONY : firefoxextension-target

# Rule to build all files generated by this target.
programs/firefoxextension/CMakeFiles/firefoxextension-target.dir/build: firefoxextension-target
.PHONY : programs/firefoxextension/CMakeFiles/firefoxextension-target.dir/build

programs/firefoxextension/CMakeFiles/firefoxextension-target.dir/clean:
	cd /home/aurigadl/Descargas/build/programs/firefoxextension && $(CMAKE_COMMAND) -P CMakeFiles/firefoxextension-target.dir/cmake_clean.cmake
.PHONY : programs/firefoxextension/CMakeFiles/firefoxextension-target.dir/clean

programs/firefoxextension/CMakeFiles/firefoxextension-target.dir/depend:
	cd /home/aurigadl/Descargas/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/webodf/programs/firefoxextension /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build/programs/firefoxextension /home/aurigadl/Descargas/build/programs/firefoxextension/CMakeFiles/firefoxextension-target.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : programs/firefoxextension/CMakeFiles/firefoxextension-target.dir/depend

