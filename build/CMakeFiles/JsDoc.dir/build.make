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

# Utility rule file for JsDoc.

# Include the progress variables for this target.
include CMakeFiles/JsDoc.dir/progress.make

CMakeFiles/JsDoc: CMakeFiles/JsDoc-complete

CMakeFiles/JsDoc-complete: JsDoc-prefix/src/JsDoc-stamp/JsDoc-install
CMakeFiles/JsDoc-complete: JsDoc-prefix/src/JsDoc-stamp/JsDoc-mkdir
CMakeFiles/JsDoc-complete: JsDoc-prefix/src/JsDoc-stamp/JsDoc-download
CMakeFiles/JsDoc-complete: JsDoc-prefix/src/JsDoc-stamp/JsDoc-update
CMakeFiles/JsDoc-complete: JsDoc-prefix/src/JsDoc-stamp/JsDoc-patch
CMakeFiles/JsDoc-complete: JsDoc-prefix/src/JsDoc-stamp/JsDoc-configure
CMakeFiles/JsDoc-complete: JsDoc-prefix/src/JsDoc-stamp/JsDoc-build
CMakeFiles/JsDoc-complete: JsDoc-prefix/src/JsDoc-stamp/JsDoc-install
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Completed 'JsDoc'"
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/CMakeFiles
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/CMakeFiles/JsDoc-complete
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/JsDoc-done

JsDoc-prefix/src/JsDoc-stamp/JsDoc-install: JsDoc-prefix/src/JsDoc-stamp/JsDoc-build
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_2)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No install step for 'JsDoc'"
	cd /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-build && /usr/bin/cmake -E touch /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/JsDoc-install

JsDoc-prefix/src/JsDoc-stamp/JsDoc-mkdir:
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_3)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Creating directories for 'JsDoc'"
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-build
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/JsDoc-prefix
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/JsDoc-prefix/tmp
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp
	/usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/downloads
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/JsDoc-mkdir

JsDoc-prefix/src/JsDoc-stamp/JsDoc-download: JsDoc-prefix/src/JsDoc-stamp/JsDoc-urlinfo.txt
JsDoc-prefix/src/JsDoc-stamp/JsDoc-download: JsDoc-prefix/src/JsDoc-stamp/JsDoc-mkdir
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_4)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Performing download step (download, verify and extract) for 'JsDoc'"
	cd /home/aurigadl/Descargas/build/JsDoc-prefix/src && /usr/bin/cmake -P /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/download-JsDoc.cmake
	cd /home/aurigadl/Descargas/build/JsDoc-prefix/src && /usr/bin/cmake -P /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/verify-JsDoc.cmake
	cd /home/aurigadl/Descargas/build/JsDoc-prefix/src && /usr/bin/cmake -P /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/extract-JsDoc.cmake
	cd /home/aurigadl/Descargas/build/JsDoc-prefix/src && /usr/bin/cmake -E touch /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/JsDoc-download

JsDoc-prefix/src/JsDoc-stamp/JsDoc-update: JsDoc-prefix/src/JsDoc-stamp/JsDoc-download
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_5)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No update step for 'JsDoc'"
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/JsDoc-update

JsDoc-prefix/src/JsDoc-stamp/JsDoc-patch: JsDoc-prefix/src/JsDoc-stamp/JsDoc-download
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_6)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No patch step for 'JsDoc'"
	/usr/bin/cmake -E touch /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/JsDoc-patch

JsDoc-prefix/src/JsDoc-stamp/JsDoc-configure: JsDoc-prefix/tmp/JsDoc-cfgcmd.txt
JsDoc-prefix/src/JsDoc-stamp/JsDoc-configure: JsDoc-prefix/src/JsDoc-stamp/JsDoc-update
JsDoc-prefix/src/JsDoc-stamp/JsDoc-configure: JsDoc-prefix/src/JsDoc-stamp/JsDoc-patch
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_7)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No configure step for 'JsDoc'"
	cd /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-build && /usr/bin/cmake -E touch /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/JsDoc-configure

JsDoc-prefix/src/JsDoc-stamp/JsDoc-build: JsDoc-prefix/src/JsDoc-stamp/JsDoc-configure
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_8)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "No build step for 'JsDoc'"
	cd /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-build && /usr/bin/cmake -E touch /home/aurigadl/Descargas/build/JsDoc-prefix/src/JsDoc-stamp/JsDoc-build

JsDoc: CMakeFiles/JsDoc
JsDoc: CMakeFiles/JsDoc-complete
JsDoc: JsDoc-prefix/src/JsDoc-stamp/JsDoc-install
JsDoc: JsDoc-prefix/src/JsDoc-stamp/JsDoc-mkdir
JsDoc: JsDoc-prefix/src/JsDoc-stamp/JsDoc-download
JsDoc: JsDoc-prefix/src/JsDoc-stamp/JsDoc-update
JsDoc: JsDoc-prefix/src/JsDoc-stamp/JsDoc-patch
JsDoc: JsDoc-prefix/src/JsDoc-stamp/JsDoc-configure
JsDoc: JsDoc-prefix/src/JsDoc-stamp/JsDoc-build
JsDoc: CMakeFiles/JsDoc.dir/build.make
.PHONY : JsDoc

# Rule to build all files generated by this target.
CMakeFiles/JsDoc.dir/build: JsDoc
.PHONY : CMakeFiles/JsDoc.dir/build

CMakeFiles/JsDoc.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/JsDoc.dir/cmake_clean.cmake
.PHONY : CMakeFiles/JsDoc.dir/clean

CMakeFiles/JsDoc.dir/depend:
	cd /home/aurigadl/Descargas/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build/CMakeFiles/JsDoc.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/JsDoc.dir/depend

