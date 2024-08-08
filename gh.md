| **Command**                                             | **Description**                                              |
|---------------------------------------------------------|--------------------------------------------------------------|
| `gh auth login`                                        | Log in to GitHub                                             |
| `gh auth logout`                                       | Log out from GitHub                                          |
| `gh auth status`                                       | Check authentication status                                 |
| `gh repo clone <owner/repo>`                           | Clone a repository                                          |
| `gh repo create <repo-name> [flags]`                   | Create a new repository                                     |
| `gh repo view <owner/repo>`                            | View repository details                                     |
| `gh repo list [flags]`                                | List repositories                                           |
| `gh repo set-default <owner/repo>`                     | Set a default repository                                    |
| `gh issue create --title "Issue Title" --body "Issue Description" [flags]` | Create a new issue                                          |
| `gh issue list [flags]`                                | List issues                                                 |
| `gh issue view <issue-number> [flags]`                 | View an issue                                               |
| `gh issue close <issue-number>`                        | Close an issue                                              |
| `gh pr create --title "PR Title" --body "PR Description" --base <base-branch> [flags]` | Create a pull request                                       |
| `gh pr list [flags]`                                   | List pull requests                                          |
| `gh pr view <pr-number> [flags]`                       | View a pull request                                         |
| `gh pr merge <pr-number> [flags]`                      | Merge a pull request                                        |
| `gh pr close <pr-number>`                              | Close a pull request                                        |
| `gh gist create <file1> [file2 ...] [flags]`           | Create a new gist                                           |
| `gh gist list`                                         | List gists                                                  |
| `gh gist view <gist-id>`                               | View a gist                                                 |
| `gh release create <tag> [file1 ...] [flags]`          | Create a new release                                        |
| `gh release list`                                     | List releases                                               |
| `gh release view <tag>`                                | View a release                                              |
| `gh workflow list`                                    | List workflows                                              |
| `gh run list [flags]`                                  | List workflow runs                                          |
| `gh run view <run-id>`                                 | View a workflow run                                         |
| `gh run cancel <run-id>`                               | Cancel a workflow run                                       |
| `gh workflow run <workflow-id> [flags]`                | Trigger a workflow run                                      |
| `gh workflow enable <workflow-id>`                     | Enable a workflow                                          |
| `gh workflow disable <workflow-id>`                    | Disable a workflow                                         |
| `gh repo forks`                                        | List repository forks                                       |
| `gh repo create-fork`                                 | Create a fork of a repository                               |
| `gh repo delete <owner/repo>`                           | Delete a repository                                         |
| `gh pr review <pr-number> --approve`                    | Approve a pull request                                      |
| `gh pr review <pr-number> --request-changes`           | Request changes on a pull request                           |
| `gh pr review <pr-number> --comment "Review comments"` | Comment on a pull request                                   |
| `gh repo edit <owner/repo> --description "New Description"` | Edit a repository description                               |
| `gh pr check <pr-number>`                              | Check the status of a pull request                          |
| `gh repo collaborators`                               | List repository collaborators                               |
| `gh repo add-collaborator <username>`                   | Add a collaborator to a repository                          |
| `gh repo remove-collaborator <username>`                | Remove a collaborator from a repository                     |
| `gh issue edit <issue-number> --title "New Title"`     | Edit an issue title                                         |
| `gh issue edit <issue-number> --body "New Description"`| Edit an issue body                                          |
| `gh repo teams`                                        | List repository teams                                       |
| `gh repo add-team <team-name>`                         | Add a team to a repository                                  |
| `gh repo remove-team <team-name>`                      | Remove a team from a repository                             |
| `gh pr create --draft`                                | Create a draft pull request                                 |
| `gh issue comment <issue-number> --body "Comment Body"`| Comment on an issue                                         |
| `gh release delete <tag>`                              | Delete a release                                            |
| `gh repo merge <source-branch> --into <target-branch>` | Merge a branch into another branch                          |
| `gh issue create --template <template-name> [flags]`   | Create a new issue from a template                          |
| `gh issue template list`                              | List issue templates                                        |
| `gh issue template view <template-name>`               | View a specific issue template                              |
| `gh pr template list`                                 | List pull request templates                                 |
| `gh pr template view <template-name>`                  | View a specific pull request template                       |
| `gh release create <tag> [file1 ...] --draft`          | Create a new draft release                                 |
| `gh release view <tag> --assets`                       | List all release assets                                    |
| `gh release download <tag> [flags]`                    | Download release assets                                    |
| `gh release edit <tag> [flags]`                        | Update a release                                           |
| `gh repo list --all`                                  | List all repositories you have access to                    |
| `gh repo search <keyword>`                             | Find a repository by keyword                                |
| `gh repo history <owner/repo>`                         | View the history of a repository                           |
| `gh repo branch list`                                 | List all branches in a repository                           |
| `gh repo branch create <branch-name>`                  | Create a new branch                                        |
| `gh repo branch delete <branch-name>`                  | Delete a branch                                            |
| `gh repo tag list`                                    | View all tags in a repository                               |
| `gh repo tag create <tag-name> --message "Tag message"`| Create a new tag                                           |
| `gh repo tag delete <tag-name>`                        | Delete a tag                                               |
| `gh deploy create <deployment-id> [flags]`             | Create a new deployment                                    |
| `gh deploy list`                                      | List deployments                                           |
| `gh deploy view <deployment-id>`                       | View a deployment                                          |
| `gh deploy cancel <deployment-id>`                     | Cancel a deployment                                        |
| `gh commit view <commit-sha>`                          | View a specific commit                                     |
| `gh branch commits <branch-name>`                      | List commits in a branch                                   |
| `gh issue comment <issue-number> --body "Comment body" --repo <owner/repo>` | Create a new issue comment                                 |
| `gh repo fork list`                                   | List all forks of a repository                             |
| `gh repo settings`                                    | Show repository settings                                   |
| `gh repo settings edit [flags]`                        | Edit repository settings                                   |
| `gh pr list --base <branch-name>`                      | List all pull requests for a specific branch                |
| `gh pr list --label <label>`                           | Filter pull requests by label                              |
| `gh issue list --label <label>`                        | Filter issues by label                                    |
| `gh pr review status <pr-number>`                      | View pull request review status                            |
| `gh issue comment list <issue-number>`                 | List all issue comments                                    |
| `gh issue comment edit <comment-id> --body "Updated comment"` | Update an issue comment                                   |
| `gh issue comment delete <comment-id>`                 | Delete an issue comment                                    |
| `gh label create <label-name> --color <color> --description "Label description"` | Create a new label                                         |
| `gh label list`                                       | List all labels                                            |
| `gh label delete <label-name>`                         | Delete a label                                             |
| `gh milestone create --title "Milestone Title" --description "Milestone Description" --due-date <due-date>` | Create a new milestone                                      |
| `gh milestone list`                                   | List milestones                                            |
| `gh milestone view <milestone-number>`                 | View a milestone                                           |
| `gh milestone edit <milestone-number> [flags]`         | Edit a milestone                                           |
| `gh milestone delete <milestone-number>`               | Delete a milestone                                         |
| `gh issue edit <issue-number> --add-label <label>`     | Add a label to an issue or PR                              |
| `gh issue edit <issue-number> --remove-label <label>`  | Remove a label from an issue or PR                         |
| `gh check run list`                                  | List all check runs                                        |
| `gh check run view <check-run-id>`                     | View a specific check run                                  |
| `gh check run cancel <check-run-id>`                   | Cancel a check run                                        |
| `gh check run create <name> [flags]`                   | Create a check run                                        |
| `gh user view <username>`                              | View user profile                                          |
