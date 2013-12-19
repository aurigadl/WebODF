# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := libuv
DEFS_Debug := \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D_GNU_SOURCE' \
	'-DHAVE_CONFIG_H' \
	'-DDEBUG' \
	'-D_DEBUG'

# Flags passed to all source files.
CFLAGS_Debug := \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-pthread \
	-m32 \
	-g \
	--std=gnu89 \
	-pedantic \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-Wstrict-aliasing \
	-g \
	-O0

# Flags passed to only C files.
CFLAGS_C_Debug :=

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-fno-rtti \
	-fno-exceptions

INCS_Debug := \
	-I$(srcdir)/deps/uv/include \
	-I$(srcdir)/deps/uv/include/uv-private \
	-I$(srcdir)/deps/uv/src

DEFS_Release := \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D_GNU_SOURCE' \
	'-DHAVE_CONFIG_H'

# Flags passed to all source files.
CFLAGS_Release := \
	-pthread \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-pthread \
	-m32 \
	-g \
	--std=gnu89 \
	-pedantic \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-Wstrict-aliasing \
	-O2 \
	-fno-strict-aliasing \
	-fno-tree-vrp

# Flags passed to only C files.
CFLAGS_C_Release :=

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-fno-rtti \
	-fno-exceptions

INCS_Release := \
	-I$(srcdir)/deps/uv/include \
	-I$(srcdir)/deps/uv/include/uv-private \
	-I$(srcdir)/deps/uv/src

OBJS := \
	$(obj).target/$(TARGET)/deps/uv/src/fs-poll.o \
	$(obj).target/$(TARGET)/deps/uv/src/inet.o \
	$(obj).target/$(TARGET)/deps/uv/src/uv-common.o \
	$(obj).target/$(TARGET)/deps/uv/src/version.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/async.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/core.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/dl.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/error.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/fs.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/getaddrinfo.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/loop.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/loop-watcher.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/pipe.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/poll.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/process.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/signal.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/stream.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/tcp.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/thread.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/threadpool.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/timer.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/tty.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/udp.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/proctitle.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/linux-core.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/linux-inotify.o \
	$(obj).target/$(TARGET)/deps/uv/src/unix/linux-syscalls.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-pthread \
	-rdynamic \
	-m32

LDFLAGS_Release := \
	-pthread \
	-rdynamic \
	-m32

LIBS :=

$(obj).target/deps/uv/libuv.a: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(obj).target/deps/uv/libuv.a: LIBS := $(LIBS)
$(obj).target/deps/uv/libuv.a: TOOLSET := $(TOOLSET)
$(obj).target/deps/uv/libuv.a: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,alink)

all_deps += $(obj).target/deps/uv/libuv.a
# Add target alias
.PHONY: libuv
libuv: $(obj).target/deps/uv/libuv.a

# Add target alias to "all" target.
.PHONY: all
all: libuv

# Add target alias
.PHONY: libuv
libuv: $(builddir)/libuv.a

# Copy this to the static library output path.
$(builddir)/libuv.a: TOOLSET := $(TOOLSET)
$(builddir)/libuv.a: $(obj).target/deps/uv/libuv.a FORCE_DO_CMD
	$(call do_cmd,copy)

all_deps += $(builddir)/libuv.a
# Short alias for building this static library.
.PHONY: libuv.a
libuv.a: $(obj).target/deps/uv/libuv.a $(builddir)/libuv.a

# Add static library to "all" target.
.PHONY: all
all: $(builddir)/libuv.a

