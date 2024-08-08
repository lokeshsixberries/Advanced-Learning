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
