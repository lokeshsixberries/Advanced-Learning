| **Command**                                             | **Description**                                              |
|---------------------------------------------------------|--------------------------------------------------------------|
| `git init`                                             | Initialize a new Git repository                              |
| `git clone <repo-url>`                                | Clone a repository into a new directory                      |
| `git add <file>`                                      | Add a file to the staging area                              |
| `git commit -m "message"`                             | Commit changes with a message                               |
| `git status`                                          | Show the working tree status                                |
| `git diff`                                            | Show changes between commits, commit and working tree, etc. |
| `git log`                                             | Show commit logs                                            |
| `git show <commit>`                                  | Show details of a specific commit                           |
| `git branch`                                          | List, create, or delete branches                            |
| `git branch <branch-name>`                            | Create a new branch                                         |
| `git checkout <branch-name>`                           | Switch to a specified branch                                |
| `git checkout -b <branch-name>`                        | Create and switch to a new branch                           |
| `git merge <branch-name>`                              | Merge a branch into the current branch                      |
| `git rebase <branch-name>`                             | Reapply commits on top of another base tip                  |
| `git reset <file>`                                    | Unstage a file                                               |
| `git reset --hard`                                    | Reset the index and working directory to match the latest commit |
| `git revert <commit>`                                 | Create a new commit that undoes changes from a previous commit |
| `git tag <tag-name>`                                  | Create a new tag                                            |
| `git fetch`                                           | Download objects and refs from another repository           |
| `git pull`                                            | Fetch from a remote repository and merge                    |
| `git push`                                            | Update remote refs along with associated objects            |
| `git remote`                                          | Manage set of tracked repositories                           |
| `git remote add <name> <url>`                         | Add a new remote repository                                 |
| `git remote remove <name>`                            | Remove a remote repository                                  |
| `git remote -v`                                       | Show remote repositories                                    |
| `git stash`                                           | Stash the changes in a dirty working directory              |
| `git stash pop`                                       | Apply the changes from the most recent stash                |
| `git stash apply <stash>`                             | Apply a stash to the working directory                      |
| `git stash drop <stash>`                              | Remove a stash from the list                                |
| `git cherry-pick <commit>`                            | Apply the changes introduced by some existing commits       |
| `git config`                                          | Get and set repository or global options                    |
| `git config --global user.name "Your Name"`            | Set the global username for Git                             |
| `git config --global user.email "your.email@example.com"` | Set the global email for Git                             |
| `git log --graph`                                     | Show the commit history as a graph                           |
| `git log --oneline`                                   | Show the commit history in a simplified one-line format     |
| `git log --stat`                                      | Show the commit history with file changes statistics        |
| `git commit --amend`                                  | Modify the last commit                                      |
| `git rm <file>`                                       | Remove a file from the working directory and the index      |
| `git mv <old-name> <new-name>`                         | Rename a file                                               |
| `git tag -d <tag-name>`                               | Delete a tag                                                |
| `git reflog`                                          | Show the reference logs                                     |
| `git describe`                                       | Describe the current commit using the most recent tag       |
| `git clean -f`                                        | Remove untracked files from the working directory           |
| `git blame <file>`                                    | Show what revision and author last modified each line of a file |
| `git shortlog`                                        | Summarize 'git log' output in a short format                 |
| `git submodule`                                       | Initialize, update, or inspect submodules                   |
| `git diff --cached`                                  | Show changes between the index and the last commit          |
| `git ls-files`                                        | Show information about files in the index                   |
| `git archive`                                         | Create an archive of files from a named tree                 |
| `git tag -a <tag-name> -m "message"`                   | Create an annotated tag                                     |
| `git branch -d <branch-name>`                         | Delete a branch                                             |
| `git branch -D <branch-name>`                         | Force delete a branch                                       |
| `git checkout -- <file>`                              | Discard changes in the working directory                    |
| `git reflog expire --expire=<date> --all-ref`          | Expire reflog entries older than a specified date            |
| `git fetch --all`                                    | Fetch all remotes                                           |
| `git pull --rebase`                                  | Rebase the current branch on top of the upstream branch      |
| `git push --force`                                   | Force push to a remote repository                           |
| `git diff --name-only`                               | Show only names of changed files                            |
| `git diff --name-status`                             | Show names and status of changed files                      |
| `git commit -a`                                      | Commit all changes to tracked files                         |
| `git commit -v`                                      | Show the diff of changes being committed                    |
| `git reflog show <ref>`                               | Show the reflog for a specific reference                    |
| `git diff <commit1> <commit2>`                        | Show changes between two commits                            |
| `git log --pretty=format:"%h %s"`                     | Customize the format of `git log` output                     |
| `git log --pretty=format:"%h %s" --graph`             | Show a graph of commits with a custom format                |
| `git merge --no-ff <branch-name>`                     | Merge with no fast-forward                                    |
| `git merge --squash <branch-name>`                    | Squash commits from a branch into a single commit           |
| `git log --graph --decorate --all`                    | Show a decorated commit graph for all branches              |
| `git stash list`                                     | List all stashes                                            |
| `git stash show <stash>`                              | Show changes in a stash                                     |
| `git log --author="Author Name"`                       | Filter commits by author                                    |
| `git log --since="2 weeks ago"`                        | Show commits since a specific time                          |
| `git log --until="yesterday"`                         | Show commits until a specific time                          |
| `git diff --stat`                                    | Show statistics of changes made in a commit                 |
| `git pull --no-rebase`                               | Pull from the remote repository without rebasing             |
| `git push --tags`                                    | Push all tags to a remote repository                        |
| `git config --list`                                  | List all configuration settings                             |
| `git config --global core.editor <editor>`            | Set the default text editor                                 |
| `git config --global core.autocrlf <true|false>`      | Set automatic line ending handling                          |
| `git config --global alias.<alias-name> <command>`     | Create a shortcut for a command                             |
| `git reset --soft <commit>`                           | Reset index but keep working directory changes              |
| `git reset --mixed <commit>`                          | Reset index and working directory to match a commit         |
| `git reset --hard <commit>`                           | Reset index and working directory to match a commit         |
| `git branch --merged`                                | List branches that have been merged                         |
| `git branch --no-merged`                              | List branches that have not been merged                     |
| `git log -p`                                          | Show the patch introduced by each commit                    |
| `git show-branch`                                    | Show branches and their commits                             |
| `git remote show <remote>`                            | Show information about a remote                             |
| `git remote rename <old-name> <new-name>`              | Rename a remote repository                                  |
| `git stash branch <branch-name> [<stash>]`            | Create a branch from a stash                                |
| `git rebase -i <commit>`                              | Interactively rebase commits                                |
| `git status -s`                                      | Show a short status of the working tree                     |
| `git commit --dry-run`                               | Show what would be committed without actually committing    |
| `git reflog expire --expire=<date> --all`             | Expire reflog entries older than the specified date         |
| `git add -p`                                          | Interactively select parts of a file to add to the index     |
| `git add --ignore-errors`                             | Add files to the index, ignoring any errors                 |
| `git diff --staged`                                   | Show changes between the index and the last commit          |
| `git log --pretty=format:"%h %s" --abbrev-commit`     | Show abbreviated commit hashes and messages                |
| `git log --pretty=format:"%h %s" --reverse`           | Show commits in reverse order                              |
| `git diff --check`                                    | Check for whitespace errors                                |
| `git ls-tree <tree-ish>`                              | List the contents of a tree object                          |
| `git cat-file -t <object>`                            | Show the type of an object                                 |
| `git cat-file -p <object>`                            | Pretty-print the contents of an object                     |
| `git reflog expire --expire=now --all-ref`             | Expire all reflog entries immediately                       |
| `git log --walk-reflogs`                               | Show reflog entries in the log                             |
| `git log --no-decorate`                               | Show log entries without ref names                          |
| `git log --no-merges`                                 | Show log entries excluding merges                           |
| `git log --merges`                                    | Show only merge commits                                    |
| `git branch -r`                                       | List remote-tracking branches                              |
| `git branch -a`                                       | List all branches (local and remote)                        |
| `git remote prune <remote>`                           | Remove stale remote-tracking branches                       |
| `git remote update`                                  | Update all remote-tracking branches                        |
| `git fetch <remote>`                                 | Fetch from a specific remote                                |
| `git config --global alias.co checkout`                | Create an alias for `git checkout`                          |
| `git config --global alias.br branch`                  | Create an alias for `git branch`                            |
| `git config --global alias.ci commit`                  | Create an alias for `git commit`                            |
| `git config --global alias.st status`                 | Create an alias for `git status`                            |
| `git commit --only <file>`                            | Commit changes only in specified files                      |
| `git log --follow <file>`                             | Follow a file across renames                                |
| `git log --find-renames`                              | Detect renames in log output                                |
| `git diff --word-diff`                                | Show word-by-word differences                              |
| `git status --ignored`                               | Show ignored files as well as tracked files                 |
| `git archive --format=zip --output=<file.zip>`        | Create a zip archive of the repository                      |
| `git svn clone <url>`                                 | Clone a Subversion repository                               |
| `git svn rebase`                                      | Rebase local changes on top of upstream                     |
| `git rebase --exec "<command>"`                        | Run a command after each commit in a rebase                 |
| `git cherry-pick --no-commit <commit>`                 | Apply changes from a commit without committing              |
| `git worktree add <path> <branch>`                     | Add a worktree at a specified path                           |
| `git worktree remove <path>`                          | Remove a worktree                                          |
| `git worktree list`                                  | List all worktrees                                         |
| `git describe --tags`                                | Describe the current commit using the nearest tag           |
| `git reflog delete`                                  | Delete reflog entries                                      |
| `git stash branch <branch> [<stash>]`                 | Create a branch from a stash                                |
| `git gc --prune=<date>`                               | Run garbage collection and prune objects older than a date  |
| `git update-index --assume-unchanged <file>`           | Mark a file as assumed unchanged                            |
| `git update-index --no-assume-unchanged <file>`        | Undo assume unchanged marking                              |
| `git rev-list <commit>`                               | List commit objects reachable from a commit                 |
| `git describe --contains <commit>`                    | Describe the commit using the nearest tag that contains it  |
| `git rerere`                                          | Record and replay resolved conflicts                       |
| `git notes`                                          | Add or view notes attached to commits                       |
| `git filter-branch`                                  | Rewrite branches and filter history                         |
| `git clean -d`                                       | Remove untracked directories in addition to untracked files  |
| `git clean -f -x`                                    | Remove all untracked files, including ignored files         |
| `git filter-repo`                                    | Replace `git filter-branch` with a faster alternative       |
| `git merge --strategy-option=theirs`                  | Merge using the "theirs" strategy option                    |
| `git merge --strategy-option=ours`                    | Merge using the "ours" strategy option                      |
| `git rebase --interactive`                            | Interactively rebase commits                                |
| `git update-ref <ref> <old-value> <new-value>`         | Update a reference                                          |
| `git branch --set-upstream-to=<remote/branch>`         | Set upstream branch for the current branch                 |
| `git reflog delete --expire=now --all`                 | Immediately expire all reflog entries                      |
| `git stash create [<message>]`                         | Create a stash with a custom message                        |
| `git stash branch <branch> [<stash>]`                  | Create a new branch from a stash                            |
| `git stash drop <stash>`                               | Remove a stash                                              |
| `git stash pop`                                       | Apply the latest stash and remove it from the list           |
| `git stash show -p`                                   | Show the contents of a stash in patch format                 |
| `git rebase --onto <newbase> <upstream> <branch>`       | Rebase a branch onto a new base                              |
| `git rev-parse <ref>`                                 | Parse a reference and print its value                        |
| `git ls-tree -r <commit>`                             | List the contents of a tree object recursively               |
| `git show-ref`                                        | Show references and their SHA-1 values                      |
| `git config --global core.pager <pager>`               | Set the default pager for Git commands                      |
| `git cat-file -e <object>`                            | Check if an object exists and is valid                       |
| `git grep <pattern>`                                  | Search for a pattern in the repository                       |
| `git diff --ignore-space-change`                      | Ignore changes in whitespace when comparing                  |
| `git diff --ignore-all-space`                         | Ignore all white space when comparing                        |
| `git diff --ignore-blank-lines`                       | Ignore changes where lines are only whitespace               |
| `git diff --word-diff-regex=<regex>`                   | Show word differences using a custom regex                   |
| `git commit --only <file>`                            | Commit changes only for the specified file                   |
| `git blame --line-porcelain <file>`                    | Show detailed blame information                              |
| `git diff --stat`                                    | Show the number of insertions and deletions per file         |
| `git describe --abbrev=8`                             | Describe the commit with an abbreviated hash length of 8     |
| `git worktree add <path> <branch>`                     | Add a new worktree for a specified branch                    |
| `git worktree remove <path>`                          | Remove a worktree at a specified path                         |
| `git fetch --prune`                                  | Remove remote-tracking references that no longer exist       |
| `git log --format=format:"%h %s %b"`                   | Custom log format with abbreviated hash, subject, and body   |
| `git log --format=format:"%an %s"`                     | Custom log format with author name and subject               |
| `git commit --verbose`                                | Show the diff of changes being committed                     |
| `git commit --quiet`                                 | Suppress output except errors                                |
| `git cherry-pick --continue`                           | Continue a cherry-pick operation after resolving conflicts   |
| `git cherry-pick --abort`                              | Abort a cherry-pick operation                               |
| `git cherry-pick --skip`                               | Skip the current commit in a cherry-pick operation          |
| `git log --no-renames`                                | Show logs excluding renamed files                           |
| `git log --no-merges`                                 | Show logs excluding merge commits                           |
| `git log --merges`                                    | Show only merge commits                                    |
| `git diff --patience`                                | Use the patience algorithm for diff                          |
| `git diff --histogram`                               | Use the histogram algorithm for diff                         |
| `git reflog show --date=iso`                          | Show reflog with ISO date format                            |
| `git reset --mixed <commit>`                          | Reset index and working directory to a specified commit     |
| `git config --global alias.lg "log --oneline --graph --all"` | Create a custom alias for a log command            |
| `git config --global alias.co checkout`                | Create a custom alias for checkout                           |
| `git config --global alias.br branch`                  | Create a custom alias for branch                             |
| `git config --global alias.ci commit`                  | Create a custom alias for commit                             |
| `git config --global alias.st status`                 | Create a custom alias for status                             |
| `git config --global core.editor <editor>`             | Set a global editor for Git commands                         |
| `git config --global user.signingkey <key>`            | Set a GPG key for signing commits                            |
| `git config --global commit.gpgSign true`              | Enable automatic signing of commits                         |
| `git gc --auto`                                       | Automatically run garbage collection when needed             |
| `git gc --aggressive`                                | Run a more aggressive garbage collection                     |
| `git clean -f -d`                                    | Remove untracked files and directories                       |
| `git clean -f -x`                                    | Remove all untracked files, including ignored files          |
| `git clean -fdx`                                     | Remove all untracked files and directories                   |
| `git fsck`                                           | Check the integrity of the repository                        |
| `git reflog expire --expire=<date> --all-ref`         | Expire all reflog entries older than the specified date      |
| `git tag -f <tag-name>`                               | Force-create or update an existing tag                       |
| `git log --pretty=format:"%h %d %s" --decorate`       | Show log with decorated branch and tag names                 |
| `git reflog expire --expire=now --all`                | Expire all reflog entries immediately                        |
| `git clean -n`                                       | Perform a dry-run of `git clean` to see what would be removed |
| `git worktree prune`                                 | Remove stale worktrees                                      |
| `git ls-files --stage`                                | Show the staged contents of files                           |
| `git ls-files --others`                               | Show untracked files                                       |
| `git ls-files --deleted`                              | Show deleted files in the working directory                 |
| `git log --all --graph --decorate --oneline`          | Show a graphical representation of all commits              |
| `git log --follow <file>`                             | Follow the history of a file across renames                 |
| `git log --follow --patch <file>`                      | Show changes to a file including history and renames        |
| `git rebase --interactive --exec <command>`            | Execute a command after each commit in interactive rebase   |
| `git remote set-url <remote> <new-url>`                | Change the URL of a remote repository                       |
| `git remote set-branches <remote> <branch>`            | Set which branches to fetch from a remote                  |
| `git remote show <remote>`                            | Show detailed information about a remote                   |
| `git submodule add <repo-url> [path]`                  | Add a new submodule                                        |
| `git submodule update --remote`                        | Update all submodules to their latest commit                |
| `git submodule sync`                                 | Synchronize submodule URLs with the repository configuration |
| `git submodule status`                               | Show the status of submodules                               |
| `git tag -l <pattern>`                                | List tags matching a pattern                               |
| `git tag -a <tag-name> -m "message"`                   | Create an annotated tag with a message                      |
| `git tag -d <tag-name>`                               | Delete a tag                                               |
| `git worktree add <path> <branch>`                     | Add a new worktree for a branch                             |
| `git worktree list`                                  | List all worktrees                                         |
| `git worktree remove <path>`                          | Remove a worktree                                          |
| `git rerere clear`                                    | Clear the recorded resolutions                             |
| `git rerere diff`                                     | Show the difference that would be applied to a conflicted file |
| `git rerere status`                                   | Show the current state of the rerere cache                  |
| `git archive --format=<format> --output=<file>`       | Create an archive of the repository                         |
| `git config --global http.proxy <proxy-url>`           | Set a proxy URL for HTTP connections                        |
| `git config --global https.proxy <proxy-url>`          | Set a proxy URL for HTTPS connections                       |
| `git config --global --unset http.proxy`               | Unset the HTTP proxy URL                                    |
| `git config --global --unset https.proxy`              | Unset the HTTPS proxy URL                                   |
| `git config --global credential.helper <helper>`       | Set a credential helper to cache or store credentials       |
| `git config --list --show-origin`                     | Show the configuration along with the origin of each setting |
| `git reset --keep <commit>`                           | Reset to a commit but keep changes in the working directory |
| `git diff --no-index <file1> <file2>`                 | Compare two files that are not in the index                  |
| `git diff --staged`                                   | Show differences between the staged and working directory   |
| `git log --reverse`                                  | Show the commit history in reverse order                    |
| `git log --pretty=oneline`                             | Show each commit on a single line                           |
| `git log --pretty=fuller`                              | Show detailed commit information including author and committer |
| `git log --format=%b`                                 | Show only the body of commit messages                       |
| `git log --format=%s`                                 | Show only the subject of commit messages                    |
| `git log --format=%an`                                | Show only the author name                                  |
| `git log --format=%ae`                                | Show only the author email                                 |
| `git log --format=%cn`                                | Show only the committer name                               |
| `git log --format=%ce`                                | Show only the committer email                              |
| `git log --format=%cd`                                | Show only the committer date                               |
| `git log --format=%cr`                                | Show only the committer relative date                      |
| `git rebase --exec <command>`                         | Run a command on each commit during a rebase                |
| `git log --format="%h %d %s" --decorate`              | Show commits with decorated branch and tag names            |
| `git log --format="%H %d %s" --decorate`              | Show full commit hash with decorated branch and tag names   |
| `git reflog expire --expire=now --all`                | Expire all reflog entries immediately                       |
| `git clean -n -d`                                    | Show what would be removed by `git clean` including directories |
