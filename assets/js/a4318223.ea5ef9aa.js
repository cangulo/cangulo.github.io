"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[7040],{8805:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"aws","metadata":{"permalink":"/cheatsheets/aws","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/aws-cheatsheet.mdx","source":"@site/blog/cheatsheets/aws-cheatsheet.mdx","title":"AWS Cheatsheet","description":"This post contains some useful AWS commands and scripts.","date":"2023-02-03T16:15:35.903Z","formattedDate":"February 3, 2023","tags":[{"label":"aws","permalink":"/cheatsheets/tags/aws"},{"label":"cloud","permalink":"/cheatsheets/tags/cloud"},{"label":"scripts","permalink":"/cheatsheets/tags/scripts"}],"readingTime":0.585,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"nextItem":{"title":"Terraform Cheatsheet","permalink":"/cheatsheets/terraform"}},"content":"import BrowserWindow from \'/src/components/BrowserWindow\'\\nimport Tabs from \'@theme/Tabs\'\\nimport TabItem from \'@theme/TabItem\'\\n\\nThis post contains some useful AWS commands and scripts.\\n\\n\x3c!--truncate--\x3e\\n\\n## AWS Commands\\n\\n| Command                       |\\n| ----------------------------- |\\n| `aws sts get-caller-identity` |\\n\\n### Filtering command output\\n\\n* `--query PROP_PATH`. Like you\'re using `jq` for querying JSON string. You can save the initial `.`\\n* `--output text|json`. Output as text print values without quotes.\\n\\n### Most used commands\\n\\n* `aws sts get-caller-identity --query Arn --output text` get current user ARN\\n\\n## Script to verify credentials\\n\\n```shell\\ncurrent_credentials=$(aws sts get-caller-identity --query Arn --output text)\\nexpected_credentials=\\"arn:aws:iam::{ACCOUNT_ID}}:user/{USER_NAME}\\"\\n\\nif [[ \\"${current_credentials}\\" != \\"${expected_credentials}\\" ]]; then\\n    echo \\"\\\\033[31m INVALID CREDENTIALS \\\\033[0m\\" # PRINT THIS IN RED\\n    return\\nfi\\n```"},{"id":"terraform","metadata":{"permalink":"/cheatsheets/terraform","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/terraform-cheatsheet.mdx","source":"@site/blog/cheatsheets/terraform-cheatsheet.mdx","title":"Terraform Cheatsheet","description":"This post explains the next topics:","date":"2023-02-03T16:15:35.903Z","formattedDate":"February 3, 2023","tags":[{"label":"terraform","permalink":"/cheatsheets/tags/terraform"},{"label":"iac","permalink":"/cheatsheets/tags/iac"}],"readingTime":1.475,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"prevItem":{"title":"AWS Cheatsheet","permalink":"/cheatsheets/aws"},"nextItem":{"title":"Elementary Cheatsheet","permalink":"/cheatsheets/elementary"}},"content":"import BrowserWindow from \'/src/components/BrowserWindow\'\\nimport Tabs from \'@theme/Tabs\'\\nimport TabItem from \'@theme/TabItem\'\\n\\nThis post explains the next topics:\\n* How to set up a shortcut for Terraform in the Terminal\\n* The Terraform commands I use the most\\n\\n\x3c!--truncate--\x3e\\n\\n## Create an alias for TF in your Terminal\\n\\nPlease add the next code to your profile depending if you are using PowerShell or bash:\\n\\n<BrowserWindow>\\n<Tabs>\\n  <TabItem value=\\"ps\\" label=\\"PowerShell\\" default>\\n\\n```powershell\\nNew-Alias -Name tf -Value terraform -Force\\nfunction tffmt { tf fmt -recursive }\\nfunction tfa { tf apply -auto-approve }\\nfunction tfd { tf destroy -auto-approve }\\n```\\n\\n  </TabItem>\\n  <TabItem value=\\"sh\\" label=\\"Bash\\">\\n\\n```bash\\nalias tf=terraform\\nalias tffmt=\\"tf fmt -recursive\\"\\nalias tfa=\\"tf apply -auto-approve\\"\\nalias tfd=\\"tf destroy -auto-approve\\"\\n```\\n\\n  </TabItem>\\n</Tabs>\\n</BrowserWindow>\\n\\n## TF Commands\\n\\n| Command                                          |\\n| ------------------------------------------------ |\\n| `tf init`                                        |\\n| `tf fmt --recursive`                             |\\n| `tf plan -out plan.out`                          |\\n| `tf apply -auto-approve `                        |\\n| `tf destroy -auto-approve`                       |\\n| `tf state ls`                                    |\\n| `tf state rm ADDR`                               |\\n| `tf import -var-file=[FILENAME].tfvars ADDR ID ` |\\n\\n### Examples\\n\\n#### TF IMPORT\\n`terraform [global options] import [options] ADDR ID` -> Is the resource path as `RESOURCE_TYPE.RESOURCE_NAME`. Examples:\\n\\n```bash\\naws_resourcegroups_group.main\\naws_organizations_organizational_unit.apps[\\"journalbot\\"] -> Resources created without foreach.\\nmodule.app_envs[\\"temp-app-envs\\"].aws_organizations_organizational_unit.envs[\\"prd\\"] -> Resources created **with foreach**.\\n```\\n\\nUsing the ADDR in tf import:\\n\\n<BrowserWindow>\\n<Tabs>\\n  <TabItem value=\\"ps\\" label=\\"PowerShell\\" default>\\n\\n```powershell\\ntf import -var-file=base.tfvars RESOURCE_TYPE.RESOURCE_NAME ID_OR_ARN # Resources created without foreach.\\ntf import -var-file=base.tfvars \'RESOURCE_TYPE.RESOURCE_NAME[\\\\\\"RESOURCE_KEY\\\\\\"]\' ID_OR_ARN #  Resources created **with foreach**. Please note the `\'\'` for the resource path.\\n```\\n\\n  </TabItem>\\n  <TabItem value=\\"sh\\" label=\\"Bash\\">\\n\\n```bash\\ntf import -var-file=base.tfvars RESOURCE_TYPE.RESOURCE_NAME ID_OR_ARN # Resources created without foreach.\\ntf import -var-file=base.tfvars \'RESOURCE_TYPE.RESOURCE_NAME[\\"RESOURCE_KEY\\"]\' ID_OR_ARN #  Resources created **with foreach**. Please note the `\'\'` for the resource path.\\n```\\n\\n  </TabItem>\\n</Tabs>\\n</BrowserWindow>\\n\\n## References\\n\\n* [TF Cheatsheet](https://dzone.com/articles/terraform-cli-cheat-sheet)"},{"id":"elementary","metadata":{"permalink":"/cheatsheets/elementary","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/elementary/elementary-notes.mdx","source":"@site/blog/cheatsheets/elementary/elementary-notes.mdx","title":"Elementary Cheatsheet","description":"This post explains some tips I discovered about Elementary OS.","date":"2023-02-03T16:15:35.903Z","formattedDate":"February 3, 2023","tags":[{"label":"elementary","permalink":"/cheatsheets/tags/elementary"},{"label":"linux","permalink":"/cheatsheets/tags/linux"},{"label":"os","permalink":"/cheatsheets/tags/os"},{"label":"linux_distribution","permalink":"/cheatsheets/tags/linux-distribution"}],"readingTime":1.425,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"prevItem":{"title":"Terraform Cheatsheet","permalink":"/cheatsheets/terraform"},"nextItem":{"title":"Git Cheatsheet","permalink":"/cheatsheets/git"}},"content":"import BrowserWindow from \'/src/components/BrowserWindow\'\\nimport Tabs from \'@theme/Tabs\'\\nimport TabItem from \'@theme/TabItem\'\\n\\nThis post explains some tips I discovered about [Elementary OS](https://elementary.io).\\n\\n\x3c!--truncate--\x3e\\n\\n## Where the app launcher apps are stored?\\n\\n* `/home/YOUR_USER/.local/share/applications`\\n* `~/.local/share/applications`\\n\\n## How does an app launcher looks like:\\n\\nOutlook shortcut example\\n```bash\\n#!/usr/bin/env xdg-open\\n[Desktop Entry]\\nVersion=1.0\\nTerminal=false\\nType=Application\\nName=Outlook\\nExec=/opt/vivaldi/vivaldi --profile-directory=Default --app-id=eigpmdhekjlgjgcppnanaanbdmnlnagl\\nIcon=vivaldi-eigpmdhekjlgjgcppnanaanbdmnlnagl-Default\\nStartupWMClass=crx_eigpmdhekjlgjgcppnanaanbdmnlnagl\\nActions=New-event;New-message;Open-calendar\\n\\n[Desktop Action New-event]\\nName=New event\\nExec=/opt/vivaldi/vivaldi --profile-directory=Default --app-id=eigpmdhekjlgjgcppnanaanbdmnlnagl --app-launch-url-for-shortcuts-menu-item=https://outlook.live.com/calendar/deeplink/compose\\n\\n[Desktop Action New-message]\\nName=New message\\nExec=/opt/vivaldi/vivaldi --profile-directory=Default --app-id=eigpmdhekjlgjgcppnanaanbdmnlnagl --app-launch-url-for-shortcuts-menu-item=https://outlook.live.com/mail/deeplink/compose\\n\\n[Desktop Action Open-calendar]\\nName=Open calendar\\nExec=/opt/vivaldi/vivaldi --profile-directory=Default --app-id=eigpmdhekjlgjgcppnanaanbdmnlnagl --app-launch-url-for-shortcuts-menu-item=https://outlook.live.com/calendar\\n```\\n\\n## Nice tip: add `xkill` as shortcut:\\n\\nFirst of all, what `xkill` is? It is a command to _kill_ process by clicking on their windows. The normal usage is:\\n1. Open a terminal\\n2. Set the app you want to kill visible next to the terminal\\n3. Introduce the xkill command in the terminal\\n4. The mouse pointer will change to an `x`, click on the app windows to kil it. If you want to cancel the operation, right click anywhere\\n\\n[More details about xkill](https://www.tutorialspoint.com/how-to-kill-linux-processes-using-xkill-command)\\n\\nNext is a custom app launcher example:\\n\\n:::info reuse this example:\\nPlease note this example execute the command `xkill`. You can modify it to run any other command you want to have on the app launcher. Just Update all the properties to your needs, the most important one is the `exec`, set there the command you want to execute. \\n:::\\n\\n ```bash\\n#!/usr/bin/env xdg-open\\n[Desktop Entry]\\nName=xkill\\nGenericName=Bash Command Execution\\nExec=xkill\\nComment=Execute xkill command, you will be able to close any windows by clicking on it\\nIcon=/home/cangulo/.local/share/applications/icons/xkill-icon.svg\\nType=Application\\nCategories=System\\nKeywords=Command;kill;close\\n```\\n\\nRemember to provide an icon, in my case, I created a folder called icons and add the next one:\\n\\n![xkill icon](assets/xkill-icon.png)"},{"id":"git","metadata":{"permalink":"/cheatsheets/git","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/git/git-cheatsheet.mdx","source":"@site/blog/cheatsheets/git/git-cheatsheet.mdx","title":"Git Cheatsheet","description":"This post explains the next topics:","date":"2023-02-03T16:15:35.903Z","formattedDate":"February 3, 2023","tags":[{"label":"git","permalink":"/cheatsheets/tags/git"},{"label":"githooks","permalink":"/cheatsheets/tags/githooks"},{"label":"alias","permalink":"/cheatsheets/tags/alias"}],"readingTime":3.565,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"prevItem":{"title":"Elementary Cheatsheet","permalink":"/cheatsheets/elementary"},"nextItem":{"title":"WSL Cheatsheet","permalink":"/cheatsheets/wsl"}},"content":"This post explains the next topics:\\n* the git commands I use the most\\n* some git _alias_ to avoid typing long commands\ud83d\ude01\ud83d\udc4c\\n\\n\x3c!--truncate--\x3e\\n\\n## Git Commands\\n\\n### Git Checkout\\n\\n`git checkout --track origin/NAME`      \\n*  Create a local branch that tracks the remote one                                                                                                                                                                                    \\n\\n`git checkout -`                        \\n*  Checkout the previous branch, this can be useful if you go from your feature branch to dev, you update it, and you want to come back to your feature branch to rebase dev                                                           \\n\\n`git checkout tags/<tag> -b <branch>`   \\n*  Checkout a branch starting from the tag provided                                                                                                                                                                                    \\n\\n`git switch`                            \\n*  New git command to change between branches to avoid using checkout. Currently is in status experimental. \\n*  Check this [link](https://git-scm.com/docs/git-switch/2.23.0) and this [one](https://bluecast.tech/blog/git-switch-branch/)\\n\\n### Git Branch\\n\\n`git branch --list [<pattern>]`         \\n*  List all the branches that match the `<pattern>`. e.g. `*-1234` list all the branches that end `1234`                                                                                                                               \\n\\n  \\n### Gitk\\n\\n`gitk`                                  \\n*  Check Last commits using a GUI                                                                                                                                                                                                      \\n\\n`gitk <filePath>`                       \\n*  Check `<filePath>` last commits using a GUI                                                                                                                                                                                         \\n\\n### Git Cherry Pick\\n\\n`git cherry-pick -n <commit>`           \\n*  Let\'s you inspect the files modified in the commit before cherry-pick them. [Reference](https://stackoverflow.com/questions/5717026/how-to-git-cherry-pick-only-changes-to-certain-files)                                           \\n\\n### Git diff\\n\\n`git diff [target-branch] -name-status` \\n*  List the files modified and what kind of modification (Added, Deleted, Modified) in your branch using the target branch as reference                                                                                                \\n\\n`git diff [target-branch] -name-only`   \\n*  List the files modified in your branch using the target branch as reference                                                                                                                                                         \\n\\n### Git rebase\\n\\n`git rebase -i --root`\\n* DO IT UNDER YOUR RISK. Do a git rebase since the first commit. \\n* https://stackoverflow.com/questions/22992543/how-do-i-git-rebase-the-first-commit/23000315\\n\\n\\n## How to configure an Alias\\n\\n### Using Command Line\\n\\n| Command                                              | Example                                 |\\n| ---------------------------------------------------- | --------------------------------------- |\\n| `git config --global alias.[AliasName] [AliasValue]` | `git config --global alias.co checkout` |\\n\\n### Editing the git config file\\n\\n1. Open your `.gitconfig` file, it is located in your home folder\\n2. In a new line, add the tag `[alias]`\\n3. In the next lines add your alias following the format `[TAB space]AliasName = AliasValue`.\\n\\nPlease note this config file is space/tab sensitive so be sure no spaces are added at the end of each line\\n\\n```bash\\n[alias]\\n\\tb = branch\\n```\\n\\nNext are my personal alias:\\n\\n## Alias configured\\n\\n```bash\\n[alias]\\n  b = branch\\n  bl = branch --list\\n  bd = branch -D\\n  co = checkout\\n  cob = checkout -b\\n  cor = checkout --track\\n  cp = cherry-pick\\n  cp-c = cherry-pick --continue\\n  cp-a = cherry-pick --abort\\n  re = rebase -i\\n  re-c = rebase --continue\\n  re-a = rebase --abort\\n  re-m = rebase -i --rebase-merges\\n  pushf = push --force\\n  st = status\\n  l = \\"!f() { git log --oneline -n ${1-15}; }; f\\"\\n  lg = \\"!f() { git log --oneline --grep=${1-NoArgumentProvided}; }; f\\"\\n  pushr = \\"!f() { currentBranch=$(git branch --show-current);git push --set-upstream origin $currentBranch; }; f\\"\\n  settings = config --global --edit\\n```\\n\\n<CaptionDocusaurus label=\\"Check the file here\\" linkIsRelative={true} link=\\"cheatsheets/git/git-alias\\"/>\\n\\n\\nThe one I use the most is `cob`, every time I have to create a new branch I type `git cob [BRANCH_NAME]`. Also the rebase one, `git re develop` , that is how I update my branch with the last changes from develop.\\n\\nPlease note the `l` and `lg` are alias defined as Bash functions with input parameters `${1-DefaultParameter}`.\\n\\n## How to update the permissions for bash files in a git repository\\n\\n`git update-index --chmod=+x path/to/file`\\n\\n```powershell\\n$bashScripts= Get-ChildItem -Name -Filter \\"*.sh\\" -Depth 5\\nforeach ($script in $bashScripts) {\\n    git update-index --chmod=+x $script\\n}\\n``` \\n\\n\\n## undo change in file permissions \\n\\n**Scenario**: you copy and paste repositories manually. When you copy it from a external drive the permissions change for all the files\\n\\nHow to list differences? `git diff --summary`\\n\\n**Solution**:\\n\\n```bash\\nfunction git_undo_permissions_change_in_repo() {\\n    git diff -p -R --no-ext-diff --no-color | grep -E \\"^(diff|(old|new) mode)\\" --color=never  | git apply\\n}\\n\\nfunction git_undo_permission_change_in_subfolders() {\\n    # 1 level deep\\n    for d in ./*/ ; do (cd \\"$d\\" && git diff -p -R --no-ext-diff --no-color | grep -E \\"^(diff|(old|new) mode)\\" --color=never  | git apply); done\\n    # 2 level deep\\n    for d in ./*/*/ ; do (cd \\"$d\\" && git diff -p -R --no-ext-diff --no-color | grep -E \\"^(diff|(old|new) mode)\\" --color=never  | git apply); done\\n}\\n\\n```\\n\\n## References\\n\\n* [official docs - git alias](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)\\n* [8 Git aliases that make me more efficient](https://opensource.com/article/20/11/git-aliases)\\n\\n\\n\x3c!-- ## Notes --\x3e\\n\\n\x3c!-- how-to-git-rebase-into-a-forked-repo: https://medium.com/@topspinj/how-to-git-rebase-into-a-forked-repo-c9f05e821c8a --\x3e"},{"id":"wsl","metadata":{"permalink":"/cheatsheets/wsl","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/wsl/wsl-cheatsheet.mdx","source":"@site/blog/cheatsheets/wsl/wsl-cheatsheet.mdx","title":"WSL Cheatsheet","description":"This post explains the next topics:","date":"2023-02-03T16:15:35.903Z","formattedDate":"February 3, 2023","tags":[{"label":"wsl","permalink":"/cheatsheets/tags/wsl"},{"label":"linux","permalink":"/cheatsheets/tags/linux"},{"label":"windows-terminal","permalink":"/cheatsheets/tags/windows-terminal"}],"readingTime":0.625,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"prevItem":{"title":"Git Cheatsheet","permalink":"/cheatsheets/git"}},"content":"This post explains the next topics:\\n* some tips when using the WSL (Windows Subsystem for Linux)\\n\\n\x3c!--truncate--\x3e\\n\\n## Format bash scripts for been used in Ubuntu\\n\\n### User Case\\n\\nLet\'s say you are using Windows but you have some bash scripts for a Pipeline (Bitbucket or GH Action) you need to modify, if you install Ubuntu in the WSL you can call and tests those scripts. The only problems is that sometimes there is a formatting issue when Ubuntu tries to read them, the next code fix it:\\n\\n`sed -i \'s/\\\\r//\' scripts/*.sh`          ;`\\n\\n```bash\\nbashScripts=$(find ./ -type f -name \\"*.sh\\") ;\\\\\\nfor script in \\"${bashScripts[@]}\\"; do  \\\\\\n    sed -i \'s/\\\\r//\' $script; \\\\\\ndone\\n```\\n\\n## References\\n\\n* [Windows Subsystem for Linux Documentation - Microsoft](https://docs.microsoft.com/en-us/windows/wsl/)"}]}')}}]);