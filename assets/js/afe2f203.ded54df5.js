"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[7955],{3004:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"bash/interactive-bookmarks","metadata":{"permalink":"/blog/bash/interactive-bookmarks","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/interactive-bookmarks/interactive-bookmarks.mdx","source":"@site/blog/posts/bash/interactive-bookmarks/interactive-bookmarks.mdx","title":"Create an interactive bookmarks menu in your terminal","description":"In this post, I am going to implement an interactive bookmarks menu using fzf.","date":"2020-08-24T00:00:00.000Z","formattedDate":"August 24, 2020","tags":[{"label":"linux","permalink":"/blog/tags/linux"},{"label":"productivity","permalink":"/blog/tags/productivity"},{"label":"hack","permalink":"/blog/tags/hack"},{"label":"bash","permalink":"/blog/tags/bash"},{"label":"zsh","permalink":"/blog/tags/zsh"},{"label":"terminal","permalink":"/blog/tags/terminal"}],"readingTime":2.195,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"nextItem":{"title":"How to use the PowerShell Profile to be more productive","permalink":"/blog/ps-profile-productive"}},"content":"import { CaptionDocusaurus, ShareDocusaurus } from \'@cangulo-blog/components\'\\nimport Comments from \'/src/components/blog/comments.js\'\\nimport Gif from \'/src/components/gif.js\'\\nimport AboutMe from \'@cangulo-blog/components/dist/mdx/aboutme_area.mdx\'\\n\\nIn this post, I am going to implement an interactive bookmarks menu using fzf.\\n\\n\x3c!--truncate--\x3e\\n\\n## Requirements\\n* Linux (I\'m using [Elementary OS](https://elementary.io), a Ubuntu based distro, check it!)\\n* [fzf](https://github.com/junegunn/fzf)\\n\\n## Demo\\n\\n![goal](goal.gif)\\n\\nAs you see, every time I call the function `listBookmarks` the following paths are listed interactively. \\n* /home/cangulo/repos/cangulo-tf\\n* /home/cangulo/repos/cangulo-nuke\\n\\nI can move through them using the up/down keys, and navigate into by pressing Enter.\\n\\nOn the other hand, in case similar paths are listed, I can filter by typing keywords.\\n\\n![goal](demo_filter.gif)\\n\\n## Implementation\\n\\n```bash file=./code/listbookmarks.sh\\n```\\n\\n<CaptionDocusaurus label=\\"listBookmarks function\\" linkIsRelative={true} link=\\"posts/bash/interactive-bookmarks/code/listbookmarks.sh\\" />\\n\\nLet me define the basic structure:\\n1. Read the paths (let\'s call them _bookmarks_)\\n2. List them in a interactive way\\n3. Once a bookmark is selected, navigate to it\\n\\nNow let\'s dive into the details:\\n\\n### 1. Read the bookmarks\\nFirst, in order to make this extensible, the paths are listed in a json file:\\n\\n```json file=code/bookmarks.json\\n```\\n\\n<CaptionDocusaurus label=\\"bookmarks\\" linkIsRelative={true} link=\\"posts/bash/interactive-bookmarks/code/bookmarks.json\\" />\\n\\nWe can print the file content using `cat`, and then use `jq` to query the array items. \\n\\n`cat $bookmarksFile  | jq -r \'.[]\'`\\n\\n<details>\\n  <summary>If you are asking why I\'m using a json file instead of a simple text file. click here for the answer:</summary>\\n\\n  It is becaus in the next article I will define more advanced bookmarks with different properties used by new features \ud83d\ude01\\n</details>\\n\\n### 2. List the bookmarks\\n\\nHere is where fzf comes up, by piping the bookmarks to fzf, they will be output them as an interactive list.\\n\\n### 3. Once a bookmark is selected, navigate to it\\n\\n`fzf` returns the path selected, we save it to a variable.\\n\\n`local pathSelected=$(cat $bookmarksFile | jq -r \'.[]\' | fzf)`\\n\\nWe check if it is not empty (`-n`) before moving into:\\n\\n```bash\\n    if [[ -n \\"${pathSelected}\\" ]]; then\\n        cd $pathSelected\\n    else\\n        echo \\"no bookmark selected\\"\\n    fi\\n```\\n## Bonus: execute this every time you open a terminal\\nYou can add this in your bash or zsh profile (_.bashrc_, _.zshrc_ ). Just append the `listBookmarks` implementation, update the `bookmarksFile` variable to be a full path, and call the function.\\n\\n```bash\\nlistBookmarks() {\\n    local bookmarksFile=\'/home/cangulo/repos/FULL_PATH/code/bookmarks.json\'\\n    local pathSelected=$(cat $bookmarksFile |\\n        jq -r \'.[]\' |\\n        fzf)\\n\\n    if [[ -n \\"${pathSelected}\\" ]]; then\\n        cd $pathSelected\\n    else\\n        echo \\"no bookmark selected\\"\\n    fi\\n}\\n\\nlistBookmarks\\n```\\n\\nAnd that is all! I hope this saves you some time using the terminal. \\n\\n<Gif id=\\"xUPOqo6E1XvWXwlCyQ\\"  />\\n\\n<AboutMe/>\\n\\n<ShareDocusaurus \\n  slug=\\"posts/bash/interactive-bookmarks\\" \\n  title=\\"Create an interactive bookmarks menu in your terminal\\"\\n  tags={[\\"linux\\", \\"productivity\\", \\"hack\\", \\"zsh\\", \\"bash\\", \\"terminal\\"]} />\\n\\n<Comments />"},{"id":"ps-profile-productive","metadata":{"permalink":"/blog/ps-profile-productive","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/powershell/configuring-powershell-profile/configuring-powershell-profile.mdx","source":"@site/blog/posts/powershell/configuring-powershell-profile/configuring-powershell-profile.mdx","title":"How to use the PowerShell Profile to be more productive","description":"In this post, I will explain how to set up shortcuts in the PowerShell Profile. Everything in this article works for PowerShell 5.1 and later.","date":"2020-08-24T00:00:00.000Z","formattedDate":"August 24, 2020","tags":[{"label":"windows10","permalink":"/blog/tags/windows-10"},{"label":"productivity","permalink":"/blog/tags/productivity"},{"label":"hack","permalink":"/blog/tags/hack"},{"label":"powershell","permalink":"/blog/tags/powershell"}],"readingTime":3.01,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"prevItem":{"title":"Create an interactive bookmarks menu in your terminal","permalink":"/blog/bash/interactive-bookmarks"}},"content":"import { CaptionDocusaurus, ShareDocusaurus } from \'@cangulo-blog/components\'\\nimport Comments from \'/src/components/blog/comments.js\'\\nimport AboutMe from \'@cangulo-blog/components/dist/mdx/aboutme_area.mdx\'\\n\\nIn this post, I will explain how to set up shortcuts in the PowerShell Profile. Everything in this article works for PowerShell 5.1 and later.\\n\\n\x3c!--truncate--\x3e\\n\\n\\nIf you are a PowerShell (a.k.a. PS) user, I\'m sure at some point you repeat operations as navigating to a specific folder (e.g. your local GitHub repository). Maybe you run a script to clean or prepare your environment. Let\'s define those two scenarios as next:\\n\\n1. Go to your local git repository folder.\\n   - Code to execute: `cd .\\\\source\\\\repos\\\\`\\n2. Execute a script.\\n   - Code to execute: `$HOME\\\\source\\\\repos\\\\TaskManager\\\\startTaskManagerScript.ps1`\\n\\n## What is the PS Profile?\\n\\nThe PS Profile is a script that is run when the console starts, setting custom user settings as variables, aliases or functions. We can also use it to execute custom commands to prepare our local environment. Check your `$Profile` variable to know where your profile is stored.\\n\\n![Profile variables](./2020-08-26-configuring-powershell-profile/Profile-variable.png)\\n\\n## Shortcuts\\n\\nThe shortcuts we are going to set are functions or aliases depending on the following situations:\\n\\n1. For a command with static parameters, we will write functions. For example, `goToRepos` as a shortcut for `cd $HOME\\\\source\\\\repos`. The code will be:\\n\\n`function NAME { COMMAND_WITH_PARAMS }` -> `function goToRepos { cd $HOME\\\\source\\\\repos }`\\n\\n2. We will define an alias for frequently used commands which we call with different parameters. For example, we use `Select-String` to filter file content as next:\\n\\n```powershell\\nSelect-String [-Pattern] PATTERN [-Path] PATH\\n```\\n\\n![](ss-executed.png)\\n\\nInstead of writing `Select-String`, we could write `ss`. Next is the alias:\\n\\n`New-Alias -Name ALIAS -Value COMMAND` -> `New-Alias -Name ss -Value Select-String`\\n\\nIn our case, we want to avoid typing the full _startTaskManagerScript_, so we set that path as COMMAND.\\n\\n`New-Alias -Name startTaskManagerAPI -Value $HOME\\\\source\\\\repos\\\\TaskManager\\\\startTaskManagerScript.ps1`\\n\\n### Creating the profile\\n\\nLet\'s create and open the PS profile, execute the following command in PS: `code $PROFILE`, you should see the code editor empty. Considering that both commands share the `$HOME\\\\source\\\\repos` path, we could define a variable to short them as next:\\n\\n```powershell\\n# Variables\\n\\n$localRepo = $HOME + \'\\\\source\\\\repos\'\\n\\n# Functions\\n\\nfunction goToRepos { cd $localRepo }\\n\\n# Alias\\n\\nNew-Alias -Name startTaskManagerAPI -Value $localRepo\\\\TaskManager\\\\startTaskManagerScript.ps1\\n```\\n\\nPlease note the `$localrepo` variable will be available during the PS session. This means you can use it anytime, just as the variable `$HOME`. Paste the previous code into your profile and save it.\\n\\nOpen a new PS window. Maybe the next error will show up:\\n\\n![Problem Signature Profile](./2020-08-26-configuring-powershell-profile/digitally-signed-problem.png)\\n\\nThat is because PS has an execution policy that only accepts signed scripts (`AllSigned`). We need to change it to `RemoteSigned` to verify the signature for remote scripts, but not locals. We have to do it using the following command:\\n\\n`Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`. Now we are good to go, open a new PS and try to execute the shortcuts we defined. \\n\\n\\n![Shortcuts execution](./2020-08-26-configuring-powershell-profile/shortcuts-execution.png)\\n\\n:::tip use the autocomplete feature!\\nYou don\'t need to write your aliases or functions completely. Just type the initial part and press `tab`.\\n:::\\n\\nAnd we\'re done! I hope this helps you to save time when using PS. Do you know any other tweak to be more productive? Feel free to share it in the comments!\\n\\n\\n## References\\n\\n* [PowerShell Profiles Reference for PS 5.1](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-5.1)\\n* [Profiles Files in PS 5.1](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-5.1#the-profile-files)\\n* [Example 4: Create an alias to an executable file](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-5.1#example-4--create-an-alias-to-an-executable-file)\\n* [Example 5: Create an alias for a command with parameters](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-5.1#example-4--create-an-alias-to-an-executable-file)\\n* [How to sign PowerShell profile w/ self-signed certificate?](https://www.tenforums.com/general-support/107659-how-sign-powershell-profile-w-self-signed-certificate.html)\\n* [Signing PowerShell Scripts](https://www.hanselman.com/blog/SigningPowerShellScripts.aspx)\\n\\n\\n<AboutMe/>\\n\\n<ShareDocusaurus \\n  slug=\\"posts/ps-profile-productive\\" \\n  title=\\"How to use the PowerShell Profile to be more productive\\" \\n  tags={[\\"windows10\\",\\"productivity\\",\\"hack\\",\\"powershell\\"]} />\\n\\n<Comments />"}]}')}}]);