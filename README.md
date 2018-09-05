# guld-git-cli

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-git-cli) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-git-cli/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/cli/guld-git-cli.html)

[![node package manager](https://img.shields.io/npm/v/guld-git-cli.svg)](https://www.npmjs.com/package/guld-git-cli) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-git-cli.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-git-cli?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-guld-git-cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-guld-git-cli/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-cli/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-cli) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-cli/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-cli?type=dev)

Guld standardized CLI for git.

### Install

##### Node

```sh
npm i -g guld-git-cli
```

### Usage

##### CLI

```sh
guld-git --help

  Usage: guld-git [options] [command]

  Guld standardized CLI for git.

  Options:

    -V, --version                   output the version number
    -C --cwd <dir>                  Set current working directory before running.
    -h, --help                      output usage information

  Commands:

    path                            Blocktree path resolution tools.
    config                          Configuration manager for git config files.
    host                            Configuration manager for git hosts.
    remote                          Manage git remotes the guld way.
    add [options] [file]            Add files to the git working directory.
    init                            Create an empty Git repository or reinitialize an existing one.
    clone [url] [directory]         Clone a repository into a new directory.
    remove|delete [options] <file>  Remove files from the git working directory.
    log [options] [fromRef]         List commits from the given ref backwards.
    status [file]                   Get the status of a file in the working directory.
    commit [message]                Stores the current contents of the index in a new commit along with a log message from the user describing the changes.
    fetch [remote] [branch]         Download objects and refs from another repository.
    push [remote] [branch]          Update remote refs along with associated objects.
    pull [remote] [branch]          Fetch from and integrate with another repository or a local branch.

```

### License

MIT Copyright isysd
