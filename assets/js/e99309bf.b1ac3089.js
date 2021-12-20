"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[5762],{386:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"cangulo.changelog","metadata":{"permalink":"/projects/cangulo.changelog","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/projects/nugets/cangulo.changelog.mdx","source":"@site/blog/projects/nugets/cangulo.changelog.mdx","title":"cangulo.changelog","description":"cangulo-nugets/cangulo.changelog","date":"2021-11-26T00:00:00.000Z","formattedDate":"November 26, 2021","tags":[{"label":"cicd","permalink":"/projects/tags/cicd"},{"label":"cangulo.changelog","permalink":"/projects/tags/cangulo-changelog"},{"label":"personal-nuget-packages","permalink":"/projects/tags/personal-nuget-packages"},{"label":"changelog","permalink":"/projects/tags/changelog"}],"readingTime":0.72,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"nextItem":{"title":"cangulo.nuke.prcommitsvalidations","permalink":"/projects/cangulo.nuke.prcommitsvalidations"}},"content":":::info Project Web site:\\n[cangulo-nugets/cangulo.changelog](https://cangulo-nugets.github.io/cangulo.changelog.github.io/)\\n:::\\n\\n\\n## Problem I want to solve\\n\\nI have the solution [cangulo.nuke.releasecreator](https://github.com/cangulo-nuke/cangulo.nuke.releasecreator) to handle releases in my GH repos. However, this doesn\'t document the changes, for that, I need a solution that updates the Changelog and create release notes, all, having as input the commit messages of the last PR merged.\\n\\n\x3c!--truncate--\x3e\\n\\n## Goal\\n\\nHave a custom solution to update changelogs and create release notes.\\n\\n## Approach\\n\\nCreate a NuGet package that can be imported in any C# project. In my case, I will import it in [cangulo.nuke.releasecreator](https://github.com/cangulo-nuke/cangulo.nuke.releasecreator). \\n\\nThe main interface to call is:\\n\\n```csharp\\npublic interface IChangelogBuilder\\n{\\n    void Build(string version, string[] changes, string path);\\n}\\n```\\n<CaptionDocusaurus label=\\"Definiton at cangulo.changelog\\" linkIsRelative={false}  link=\\"https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/src/cangulo.changelog/Builders/ChangelogBuilder.cs\\" />\\n\\n## Full Documentation\\n\\n[cangulo-nugets/cangulo.changelog](https://cangulo-nugets.github.io/cangulo.changelog.github.io/)\\n\\n## Where do I use it?\\n\\n[cangulo.nuke.releasecreator](https://github.com/cangulo-nuke/cangulo.nuke.releasecreator)\\n\\n\\n## Repository\\n\\n[cangulo.changelog repository](https://github.com/cangulo-nugets/cangulo.changelog)\\n\\n## NuGet Package\\n\\n[cangulo.changelog](https://www.nuget.org/packages/cangulo.changelog/)\\n\\n\x3c!-- ## GitHub Action --\x3e"},{"id":"cangulo.nuke.prcommitsvalidations","metadata":{"permalink":"/projects/cangulo.nuke.prcommitsvalidations","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/projects/nuke/cangulo.nuke.prcommitsvalidations.mdx","source":"@site/blog/projects/nuke/cangulo.nuke.prcommitsvalidations.mdx","title":"cangulo.nuke.prcommitsvalidations","description":"Problem I want to solve","date":"2021-11-26T00:00:00.000Z","formattedDate":"November 26, 2021","tags":[{"label":"nuke","permalink":"/projects/tags/nuke"},{"label":"cicd","permalink":"/projects/tags/cicd"},{"label":"commits","permalink":"/projects/tags/commits"},{"label":"conventional-commits","permalink":"/projects/tags/conventional-commits"}],"readingTime":1.57,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"prevItem":{"title":"cangulo.changelog","permalink":"/projects/cangulo.changelog"},"nextItem":{"title":"cangulo.nuke.releasecreator","permalink":"/projects/cangulo.nuke.releasecreator"}},"content":"## Problem I want to solve\\n\\nI want to make sure all the commits in a PR follow custom conventions based on the [Conventional Commits](https://www.conventionalcommits.org/) specification. The conventions should be per repository. Let\'s consider _fix_, _minor _and _major_ as a reference.\\n\\nOn the other hand, as I have been playing with [NUKE](https://nuke.build/index.html) lately, I want to create a solution based on it.\\n\\n\x3c!--truncate--\x3e\\n\\n:::info\\n[NUKE](https://nuke.build/index.html) is a build automation framework where you define operations as build, test or push NuGets, in a C# project. I found good reviews and some videos in [Channel9](https://channel9.msdn.com/Shows/On-NET/Build-Automation-with-NUKE) about it. So, for instance, dotnet commands are predefined methods, and its arguments are extension methods, check the next example:\\n\\n\\n<details>\\n  <summary>How a NUKE project looks like?</summary>\\n\\n```csharp\\nTarget Pack => _ => _\\n    .DependsOn(Clean)\\n    .Executes(() => \\n    {\\n      DotNetTasks\\n          .DotNetPack(s => s\\n              .SetProject(project.Path)\\n              .SetOutputDirectory(outputFolderAbsolutePath)\\n              .SetConfiguration(configuration)\\n              .SetVersionPrefix(currentPackageVersion)\\n              .SetVersionSuffix(versionSuffix)\\n              .EnableNoRestore());\\n    });\\n```\\n\\n</details>\\n:::\\n\\n\\n## Goals\\n\\n* Validate the commits from a open PR.\\n* The Solution should be based on NUKE.\\n* Any repository should be able to use it.\\n\\n## Approach\\n\\ncangulo.nuke.prcommitsvalidations will execute the following operations sequentially:\\n\\n1. Get the commit list using the GH API Client provided by NUKE\\n2. Validate they follow the conventions defined in the repo.\\n\\n\\n## Remarks\\n\\n* I\'m not saying NUKE is the best solution, I just want to give it a try \ud83d\ude0a. In the future, I will create another solution based on scripts.\\n* The conventions are defined in a json file, you can extend the next example:\\n\\n```json\\n{\\n    \\"conventionalCommitTypes\\": [\\n        \\"fix\\",\\n        \\"minor\\",\\n        \\"major\\"\\n    ]\\n}\\n```\\n## How to use it?\\n\\nPlease check the examples given [here](https://github.com/cangulo-actions/cangulo.nuke.prcommitsvalidations#example).\\n\\n## Where do I use it?\\n\\nI call this solution through a specific [GH Action](https://github.com/cangulo-actions/cangulo.nuke.prcommitsvalidations) in the next projects:\\n\\n* [cangulo-nugets/cangulo.changelog](https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/.github/workflows/4-Release-New-Version.yml)\\n* [cangulo-nugets/cangulo.common.testing](https://github.com/cangulo-nugets/cangulo.common.testing/blob/v0.0.2/.github/workflows/4-Release-New-Version.yml)\\n* [cangulo-nuke/cangulo.nuke.prcommitsvalidations](https://github.com/cangulo-nuke/cangulo.nuke.prcommitsvalidations/blob/v0.0.1/.github/workflows/3-Release_New_Version.yml)\\n* [cangulo-actions/cangulo.nuke.prcommitsvalidations](https://github.com/cangulo-actions/cangulo.nuke.prcommitsvalidations/blob/v0.0.1/.github/workflows/2-release_new_version.yml)\\n* [cangulo-tf/basic-iac](https://github.com/cangulo-tf/basic-iac/blob/v0.0.2/.github/workflows/3-Release_New_Version.yml)\\n\\n\\n## Repository\\n\\n[cangulo.nuke.prcommitsvalidations repository](https://github.com/cangulo-nuke/cangulo.nuke.prcommitsvalidations)\\n\\n## GitHub Action\\n\\n[github action to execute in ANY repository](https://github.com/cangulo-actions/cangulo.nuke.prcommitsvalidations)"},{"id":"cangulo.nuke.releasecreator","metadata":{"permalink":"/projects/cangulo.nuke.releasecreator","editUrl":"https://github.com/cangulo/cangulo.github.io/blob/main/blog/projects/nuke/cangulo.nuke.releasecreator.mdx","source":"@site/blog/projects/nuke/cangulo.nuke.releasecreator.mdx","title":"cangulo.nuke.releasecreator","description":"Problem I want to solve","date":"2021-11-26T00:00:00.000Z","formattedDate":"November 26, 2021","tags":[{"label":"nuke","permalink":"/projects/tags/nuke"},{"label":"cicd","permalink":"/projects/tags/cicd"},{"label":"releases","permalink":"/projects/tags/releases"}],"readingTime":2.08,"truncated":true,"authors":[{"name":"Carlos Angulo Mascarell","title":"Software Engineer","url":"https://github.com/cangulo","imageURL":"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png","key":"cangulo"}],"prevItem":{"title":"cangulo.nuke.prcommitsvalidations","permalink":"/projects/cangulo.nuke.prcommitsvalidations"}},"content":"## Problem I want to solve\\n\\nEvery time I want to release a new version in my C# projects, I have to do it manually or define a custom GH action for every repo. I would like to have a general solution that makes this automatically every time I merge a PR. Also, as I have been playing with [NUKE](https://nuke.build/index.html) lately, I want to include it in the solution. \\n\\n\x3c!--truncate--\x3e\\n\\n:::info\\n[NUKE](https://nuke.build/index.html) is a build automation framework where you define operations as build, test or push NuGets, in a C# project. I found good reviews and some videos in [Channel9](https://channel9.msdn.com/Shows/On-NET/Build-Automation-with-NUKE) about it. So, for instance, dotnet commands are predefined methods, and its arguments are extension methods, check the next example:\\n\\n\\n<details>\\n  <summary>How a NUKE project looks like?</summary>\\n\\n```csharp\\nTarget Pack => _ => _\\n    .DependsOn(Clean)\\n    .Executes(() => \\n    {\\n      DotNetTasks\\n          .DotNetPack(s => s\\n              .SetProject(project.Path)\\n              .SetOutputDirectory(outputFolderAbsolutePath)\\n              .SetConfiguration(configuration)\\n              .SetVersionPrefix(currentPackageVersion)\\n              .SetVersionSuffix(versionSuffix)\\n              .EnableNoRestore());\\n    });\\n```\\n\\n</details>\\n:::\\n\\n\\n## Goals\\n\\n* Build a solution that releases a new version every time a PR is merged.\\n* The Solution should be based on NUKE.\\n* Any repository should be able to use it.\\n\\n## Approach\\n\\ncangulo.nuke.releasecreator will execute the following operations sequentially:\\n\\n1. Calculate the next version based on the commits merged\\n2. Release a new version through the GH API client (provided by NUKE). \\n\\nNext are the requirements for calculating the release number:\\n\\n* The repository app follows [Semantic Versioning.](https://semver.org)\\n* All PR contain [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) which set the release to be created (_major_, _minor_ or _fix_).\\n\\nSo, if an app has the version `0.0.2` and a PR with a _fix_ commit as  `fix: solved error in the controller` is merged, the version released will be `0.0.3`.\\n\\n## Remarks\\n\\n* I\'m not saying NUKE is the best solution, I just want to give it a try \ud83d\ude0a. In the future, I will create another solution based on scripts.\\n* As I started coding this, I realize that I can define more tasks as:\\n  * To update the version in `.csproj` files. I did this as optional.\\n  * To update the changelog using [cangulo.changelog](https://github.com/cangulo-nugets/cangulo.changelog)\\n  * To push custom Assets to the release,  like a JSON schema that we updated\\n\\n## How to use it?\\n\\nPlease check the examples given [here](https://github.com/cangulo-actions/cangulo.nuke.releasecreator#examples).\\n\\n## Where do I use it?\\n\\nI call this solution through a specific [GH Action](https://github.com/cangulo-actions/cangulo.nuke.releasecreator) in the next projects:\\n\\n* [cangulo-nugets/cangulo.changelog](https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/.github/workflows/4-Release-New-Version.yml)\\n* [cangulo-nugets/cangulo.common.testing](https://github.com/cangulo-nugets/cangulo.common.testing/blob/v0.0.2/.github/workflows/4-Release-New-Version.yml)\\n* [cangulo-nuke/cangulo.nuke.prcommitsvalidations](https://github.com/cangulo-nuke/cangulo.nuke.prcommitsvalidations/blob/v0.0.1/.github/workflows/3-Release_New_Version.yml)\\n* [cangulo-actions/cangulo.nuke.prcommitsvalidations](https://github.com/cangulo-actions/cangulo.nuke.prcommitsvalidations/blob/v0.0.1/.github/workflows/2-release_new_version.yml)\\n* [cangulo-tf/basic-iac](https://github.com/cangulo-tf/basic-iac/blob/v0.0.2/.github/workflows/3-Release_New_Version.yml)\\n\\n\\n## Repository\\n\\n[solution cangulo.nuke.releasecreator](https://github.com/cangulo-nuke/cangulo.nuke.releasecreator)\\n\\n## GitHub Action\\n\\n[github action to execute in ANY repository](https://github.com/cangulo-actions/cangulo.nuke.releasecreator)"}]}')}}]);