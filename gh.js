Log in to GitHub:

bash

gh auth login
Log out from GitHub:

bash

gh auth logout
Check authentication status:

bash

gh auth status
Clone a repository:

bash

gh repo clone <owner/repo>
Create a new repository:

bash

gh repo create <repo-name> [flags]
View repository details:

bash

gh repo view <owner/repo>
List repositories:

bash

gh repo list [flags]
Set a default repository:

bash

gh repo set-default <owner/repo>
Create a new issue:

bash

gh issue create --title "Issue Title" --body "Issue Description" [flags]
List issues:

bash

gh issue list [flags]
View an issue:

bash

gh issue view <issue-number> [flags]
Close an issue:

bash

gh issue close <issue-number>
Create a pull request:

bash

gh pr create --title "PR Title" --body "PR Description" --base <base-branch> [flags]
List pull requests:

bash

gh pr list [flags]
View a pull request:

bash

gh pr view <pr-number> [flags]
Merge a pull request:

bash

gh pr merge <pr-number> [flags]
Close a pull request:

bash

gh pr close <pr-number>
Create a new gist:

bash

gh gist create <file1> [file2 ...] [flags]
List gists:

bash

gh gist list
View a gist:

bash

gh gist view <gist-id>
Create a new release:

bash

gh release create <tag> [file1 ...] [flags]
List releases:

bash

gh release list
View a release:

bash

gh release view <tag>
List workflows:

bash

gh workflow list
List workflow runs:

bash

gh run list [flags]
View a workflow run:

bash

gh run view <run-id>
Cancel a workflow run:

bash

gh run cancel <run-id>
Trigger a workflow run:

bash

gh workflow run <workflow-id> [flags]
Enable a workflow:

bash

gh workflow enable <workflow-id>
Disable a workflow:

bash

gh workflow disable <workflow-id>
List repository forks:

bash

gh repo forks
Create a fork of a repository:

bash

gh repo create-fork
Delete a repository:

bash

gh repo delete <owner/repo>
Approve a pull request:

bash

gh pr review <pr-number> --approve
Request changes on a pull request:

bash

gh pr review <pr-number> --request-changes
Comment on a pull request:

bash

gh pr review <pr-number> --comment "Review comments"
Edit a repository description:

bash

gh repo edit <owner/repo> --description "New Description"
Check the status of a pull request:

bash

gh pr check <pr-number>
List repository collaborators:

bash

gh repo collaborators
Add a collaborator to a repository:

bash

gh repo add-collaborator <username>
Remove a collaborator from a repository:

bash

gh repo remove-collaborator <username>
Edit an issue title:

bash

gh issue edit <issue-number> --title "New Title"
Edit an issue body:

bash

gh issue edit <issue-number> --body "New Description"
List repository teams:

bash

gh repo teams
Add a team to a repository:

bash

gh repo add-team <team-name>
Remove a team from a repository:

bash

gh repo remove-team <team-name>
Create a draft pull request:

bash

gh pr create --draft
Comment on an issue:

bash

gh issue comment <issue-number> --body "Comment Body"
Delete a release:

bash

gh release delete <tag>
Merge a branch into another branch:

bash

gh repo merge <source-branch> --into <target-branch>
