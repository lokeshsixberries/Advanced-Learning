Log in to GitHub:



gh auth login
Log out from GitHub:



gh auth logout
Check authentication status:



gh auth status
Clone a repository:



gh repo clone <owner/repo>
Create a new repository:



gh repo create <repo-name> [flags]
View repository details:



gh repo view <owner/repo>
List repositories:



gh repo list [flags]
Set a default repository:



gh repo set-default <owner/repo>
Create a new issue:



gh issue create --title "Issue Title" --body "Issue Description" [flags]
List issues:



gh issue list [flags]
View an issue:



gh issue view <issue-number> [flags]
Close an issue:



gh issue close <issue-number>
Create a pull request:



gh pr create --title "PR Title" --body "PR Description" --base <base-branch> [flags]
List pull requests:



gh pr list [flags]
View a pull request:



gh pr view <pr-number> [flags]
Merge a pull request:



gh pr merge <pr-number> [flags]
Close a pull request:



gh pr close <pr-number>
Create a new gist:



gh gist create <file1> [file2 ...] [flags]
List gists:



gh gist list
View a gist:



gh gist view <gist-id>
Create a new release:



gh release create <tag> [file1 ...] [flags]
List releases:



gh release list
View a release:



gh release view <tag>
List workflows:



gh workflow list
List workflow runs:



gh run list [flags]
View a workflow run:



gh run view <run-id>
Cancel a workflow run:



gh run cancel <run-id>
Trigger a workflow run:



gh workflow run <workflow-id> [flags]
Enable a workflow:



gh workflow enable <workflow-id>
Disable a workflow:



gh workflow disable <workflow-id>
List repository forks:



gh repo forks
Create a fork of a repository:



gh repo create-fork
Delete a repository:



gh repo delete <owner/repo>
Approve a pull request:



gh pr review <pr-number> --approve
Request changes on a pull request:



gh pr review <pr-number> --request-changes
Comment on a pull request:



gh pr review <pr-number> --comment "Review comments"
Edit a repository description:



gh repo edit <owner/repo> --description "New Description"
Check the status of a pull request:



gh pr check <pr-number>
List repository collaborators:



gh repo collaborators
Add a collaborator to a repository:



gh repo add-collaborator <username>
Remove a collaborator from a repository:



gh repo remove-collaborator <username>
Edit an issue title:



gh issue edit <issue-number> --title "New Title"
Edit an issue body:



gh issue edit <issue-number> --body "New Description"
List repository teams:



gh repo teams
Add a team to a repository:



gh repo add-team <team-name>
Remove a team from a repository:



gh repo remove-team <team-name>
Create a draft pull request:



gh pr create --draft
Comment on an issue:



gh issue comment <issue-number> --body "Comment Body"
Delete a release:



gh release delete <tag>
Merge a branch into another branch:



gh repo merge <source-branch> --into <target-branch>
