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

# Utility rule file for zip.

# Include the progress variables for this target.
include CMakeFiles/zip.dir/progress.make

CMakeFiles/zip: webodf-0.4.2-1661-g0d936d4.zip

webodf-0.4.2-1661-g0d936d4.zip:
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating webodf-0.4.2-1661-g0d936d4.zip"
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E remove_directory /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E copy /home/aurigadl/Descargas/webodf/AGPL-3.0.txt /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E copy /home/aurigadl/Descargas/webodf/programs/viewer/README-viewer.odt /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4/README.odt
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E copy_directory /home/aurigadl/Descargas/build/viewer /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4/viewer
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E copy_directory /home/aurigadl/Descargas/build/programs/editor /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4/editor
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E remove_directory /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4/editor/dojo-deps
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E copy_directory /home/aurigadl/Descargas/build/programs/benchmark /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4/benchmark
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E copy /home/aurigadl/Descargas/webodf/programs/wordpressplugin/readme.txt /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4/wordpressplugin-readme.txt
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E copy /home/aurigadl/Descargas/build/webodf-wordpress-0.4.2-1661-g0d936d4.zip /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4
	cd /home/aurigadl/Descargas/webodf && /usr/bin/cmake -E copy /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4.xpi /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4
	cd /home/aurigadl/Descargas/webodf && /home/aurigadl/Descargas/build/NodeJS-prefix/bin/node webodf/lib/runtime.js /home/aurigadl/Descargas/webodf/webodf/tools/zipdir.js /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4 /home/aurigadl/Descargas/build/webodf-0.4.2-1661-g0d936d4.zip

zip: CMakeFiles/zip
zip: webodf-0.4.2-1661-g0d936d4.zip
zip: CMakeFiles/zip.dir/build.make
.PHONY : zip

# Rule to build all files generated by this target.
CMakeFiles/zip.dir/build: zip
.PHONY : CMakeFiles/zip.dir/build

CMakeFiles/zip.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/zip.dir/cmake_clean.cmake
.PHONY : CMakeFiles/zip.dir/clean

CMakeFiles/zip.dir/depend:
	cd /home/aurigadl/Descargas/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build/CMakeFiles/zip.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/zip.dir/depend

