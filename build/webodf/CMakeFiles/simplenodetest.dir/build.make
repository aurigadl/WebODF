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

# Utility rule file for simplenodetest.

# Include the progress variables for this target.
include webodf/CMakeFiles/simplenodetest.dir/progress.make

webodf/CMakeFiles/simplenodetest:
	cd /home/aurigadl/Descargas/webodf/webodf/tests && /home/aurigadl/Descargas/build/NodeJS-prefix/bin/node /home/aurigadl/Descargas/build/webodf/simplecompiled.js

simplenodetest: webodf/CMakeFiles/simplenodetest
simplenodetest: webodf/CMakeFiles/simplenodetest.dir/build.make
.PHONY : simplenodetest

# Rule to build all files generated by this target.
webodf/CMakeFiles/simplenodetest.dir/build: simplenodetest
.PHONY : webodf/CMakeFiles/simplenodetest.dir/build

webodf/CMakeFiles/simplenodetest.dir/clean:
	cd /home/aurigadl/Descargas/build/webodf && $(CMAKE_COMMAND) -P CMakeFiles/simplenodetest.dir/cmake_clean.cmake
.PHONY : webodf/CMakeFiles/simplenodetest.dir/clean

webodf/CMakeFiles/simplenodetest.dir/depend:
	cd /home/aurigadl/Descargas/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/webodf/webodf /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build/webodf /home/aurigadl/Descargas/build/webodf/CMakeFiles/simplenodetest.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : webodf/CMakeFiles/simplenodetest.dir/depend
