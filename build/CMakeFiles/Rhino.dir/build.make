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

# Utility rule file for Rhino.

# Include the progress variables for this target.
include CMakeFiles/Rhino.dir/progress.make

CMakeFiles/Rhino: CMakeFiles/Rhino-complete

CMakeFiles/Rhino-complete: Rhino-prefix/src/Rhino-stamp/Rhino-install
CMakeFiles/Rhino-complete: Rhino-prefix/src/Rhino-stamp/Rhino-mkdir
CMakeFiles/Rhino-complete: Rhino-prefix/src/Rhino-stamp/Rhino-download
CMakeFiles/Rhino-complete: Rhino-prefix/src/Rhino-stamp/Rhino-update
CMakeFiles/Rhino-complete: Rhino-prefix/src/Rhino-stamp/Rhino-patch
CMakeFiles/Rhino-complete: Rhino-prefix/src/Rhino-stamp/Rhino-configure
CMakeFiles/Rhino-complete: Rhino-prefix/src/Rhino-stamp/Rhino-build
CMakeFiles/Rhino-complete: Rhino-prefix/src/Rhino-stamp/Rhino-install
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Completed 'Rhino'"
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/CMakeFiles
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/CMakeFiles/Rhino-complete
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/Rhino-done

Rhino-prefix/src/Rhino-stamp/Rhino-install: Rhino-prefix/src/Rhino-stamp/Rhino-build
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_2)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No install step for 'Rhino'"
	cd /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-build && /usr/bin/cmake -E touch /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/Rhino-install

Rhino-prefix/src/Rhino-stamp/Rhino-mkdir:
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_3)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Creating directories for 'Rhino'"
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-build
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/Rhino-prefix
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/Rhino-prefix/tmp
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/downloads
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/Rhino-mkdir

Rhino-prefix/src/Rhino-stamp/Rhino-download: Rhino-prefix/src/Rhino-stamp/Rhino-urlinfo.txt
Rhino-prefix/src/Rhino-stamp/Rhino-download: Rhino-prefix/src/Rhino-stamp/Rhino-mkdir
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_4)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Performing download step (download, verify and extract) for 'Rhino'"
	cd /home/aurigadl/Descargas/build/Rhino-prefix/src && /usr/bin/cmake -P /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/download-Rhino.cmake
	cd /home/aurigadl/Descargas/build/Rhino-prefix/src && /usr/bin/cmake -P /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/verify-Rhino.cmake
	cd /home/aurigadl/Descargas/build/Rhino-prefix/src && /usr/bin/cmake -P /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/extract-Rhino.cmake
	cd /home/aurigadl/Descargas/build/Rhino-prefix/src && /usr/bin/cmake -E touch /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/Rhino-download

Rhino-prefix/src/Rhino-stamp/Rhino-update: Rhino-prefix/src/Rhino-stamp/Rhino-download
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_5)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No update step for 'Rhino'"
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/Rhino-update

Rhino-prefix/src/Rhino-stamp/Rhino-patch: Rhino-prefix/src/Rhino-stamp/Rhino-download
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_6)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No patch step for 'Rhino'"
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/Rhino-patch

Rhino-prefix/src/Rhino-stamp/Rhino-configure: Rhino-prefix/tmp/Rhino-cfgcmd.txt
Rhino-prefix/src/Rhino-stamp/Rhino-configure: Rhino-prefix/src/Rhino-stamp/Rhino-update
Rhino-prefix/src/Rhino-stamp/Rhino-configure: Rhino-prefix/src/Rhino-stamp/Rhino-patch
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_7)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No configure step for 'Rhino'"
	cd /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-build && /usr/bin/cmake -E touch /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/Rhino-configure

Rhino-prefix/src/Rhino-stamp/Rhino-build: Rhino-prefix/src/Rhino-stamp/Rhino-configure
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_8)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No build step for 'Rhino'"
	cd /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-build && /usr/bin/cmake -E touch /home/aurigadl/Descargas/build/Rhino-prefix/src/Rhino-stamp/Rhino-build

Rhino: CMakeFiles/Rhino
Rhino: CMakeFiles/Rhino-complete
Rhino: Rhino-prefix/src/Rhino-stamp/Rhino-install
Rhino: Rhino-prefix/src/Rhino-stamp/Rhino-mkdir
Rhino: Rhino-prefix/src/Rhino-stamp/Rhino-download
Rhino: Rhino-prefix/src/Rhino-stamp/Rhino-update
Rhino: Rhino-prefix/src/Rhino-stamp/Rhino-patch
Rhino: Rhino-prefix/src/Rhino-stamp/Rhino-configure
Rhino: Rhino-prefix/src/Rhino-stamp/Rhino-build
Rhino: CMakeFiles/Rhino.dir/build.make
.PHONY : Rhino

# Rule to build all files generated by this target.
CMakeFiles/Rhino.dir/build: Rhino
.PHONY : CMakeFiles/Rhino.dir/build

CMakeFiles/Rhino.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/Rhino.dir/cmake_clean.cmake
.PHONY : CMakeFiles/Rhino.dir/clean

CMakeFiles/Rhino.dir/depend:
	cd /home/aurigadl/Descargas/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build/CMakeFiles/Rhino.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/Rhino.dir/depend

