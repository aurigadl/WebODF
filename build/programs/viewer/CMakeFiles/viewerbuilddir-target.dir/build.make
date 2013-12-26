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

# Utility rule file for viewerbuilddir-target.

# Include the progress variables for this target.
include programs/viewer/CMakeFiles/viewerbuilddir-target.dir/progress.make

programs/viewer/CMakeFiles/viewerbuilddir-target: viewer

viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/texture.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/toolbarButton-download.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/toolbarButton-fullscreen.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/toolbarButton-menuArrows.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/toolbarButton-pageDown.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/toolbarButton-pageUp.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/toolbarButton-zoomIn.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/toolbarButton-zoomOut.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/nlnet.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/images/kogmbh.png
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/viewer.css
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/example.local.css
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/index.html
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/PluginLoader.js
viewer: /home/aurigadl/Descargas/webodf/programs/viewer/ODFViewerPlugin.js
	$(CMAKE_COMMAND) -E cmake_progress_report /home/aurigadl/Descargas/build/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --blue --bold "Generating ../../viewer"
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E remove_directory /home/aurigadl/Descargas/build/viewer
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E make_directory /home/aurigadl/Descargas/build/viewer
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E copy_directory /home/aurigadl/Descargas/webodf/programs/viewer/images /home/aurigadl/Descargas/build/viewer/images
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E copy /home/aurigadl/Descargas/webodf/programs/viewer/viewer.css /home/aurigadl/Descargas/build/viewer/viewer.css
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E copy /home/aurigadl/Descargas/webodf/programs/viewer/example.local.css /home/aurigadl/Descargas/build/viewer/example.local.css
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E copy /home/aurigadl/Descargas/build/programs/viewer/../../webodf/webodf.js /home/aurigadl/Descargas/build/viewer/webodf.js
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E copy /home/aurigadl/Descargas/build/programs/viewer/viewer-minimized.js /home/aurigadl/Descargas/build/viewer/viewer.js
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E copy /home/aurigadl/Descargas/webodf/programs/viewer/index.html /home/aurigadl/Descargas/build/viewer/index.html
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E copy /home/aurigadl/Descargas/webodf/programs/viewer/ODFViewerPlugin.js /home/aurigadl/Descargas/build/viewer/ODFViewerPlugin.js
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E copy /home/aurigadl/Descargas/webodf/programs/viewer/PluginLoader.js /home/aurigadl/Descargas/build/viewer/PluginLoader.js
	cd /home/aurigadl/Descargas/build/programs/viewer && /usr/bin/cmake -E copy /home/aurigadl/Descargas/webodf/AGPL-3.0.txt /home/aurigadl/Descargas/build/viewer

viewerbuilddir-target: programs/viewer/CMakeFiles/viewerbuilddir-target
viewerbuilddir-target: viewer
viewerbuilddir-target: programs/viewer/CMakeFiles/viewerbuilddir-target.dir/build.make
.PHONY : viewerbuilddir-target

# Rule to build all files generated by this target.
programs/viewer/CMakeFiles/viewerbuilddir-target.dir/build: viewerbuilddir-target
.PHONY : programs/viewer/CMakeFiles/viewerbuilddir-target.dir/build

programs/viewer/CMakeFiles/viewerbuilddir-target.dir/clean:
	cd /home/aurigadl/Descargas/build/programs/viewer && $(CMAKE_COMMAND) -P CMakeFiles/viewerbuilddir-target.dir/cmake_clean.cmake
.PHONY : programs/viewer/CMakeFiles/viewerbuilddir-target.dir/clean

programs/viewer/CMakeFiles/viewerbuilddir-target.dir/depend:
	cd /home/aurigadl/Descargas/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/aurigadl/Descargas/webodf /home/aurigadl/Descargas/webodf/programs/viewer /home/aurigadl/Descargas/build /home/aurigadl/Descargas/build/programs/viewer /home/aurigadl/Descargas/build/programs/viewer/CMakeFiles/viewerbuilddir-target.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : programs/viewer/CMakeFiles/viewerbuilddir-target.dir/depend
