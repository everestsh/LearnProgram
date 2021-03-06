## The Shell

- Basic usage
    - prompt
    - `~` (short for “home”)
    - `$` tells you that you are not the root user
    - execute a program (with arguments)
        - `date` · `echo` · `which`
    - argument: escape just the relevant characters with `\`
    - **environment variable**
        - `$PATH`
        - `:`-separated list of directories in `$PATH`
- Navigating in the shell
    - `/` · `cd` · `.` · `..` · `ls`
    - `mkdir` · `cp` · `mv` · `man`
    - `cat` · `tail`
- Connecting programs
    - redirection is `< file` and `> file`
    - use `>>` to append to a file
    - `|` operator lets you “chain” programs
- A versatile and powerful tool
    - `sudo`, lets you “do” something “as su” (short for “super user”, or “root”)
    - `find` 
    - `tee` - duplicate standard input
- More info & Exercises
    - `echo $SHELL`
    - `touch` & `man`
    - `#!/bin/sh` - ["shebang line(Unix)"](https://en.wikipedia.org/wiki/Shebang_(Unix))
    - the `sh` interpreter
    - `chmod`
    - [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/)
    - `|` & `>`
