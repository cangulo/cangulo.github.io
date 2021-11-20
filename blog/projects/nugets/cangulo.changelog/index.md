---
slug: cangulo.changelog
title: cangulo.changelog
date: 2021-11-08
authors: cangulo
tags: [nuke,cicd,conventional_commits]

---

import ShareCard from '/src/components/blog/share.js'
import Caption from '/src/components/blog/caption.jsx'
import Comments from '/src/components/blog/comments.js'
import AboutMePostArea from '/src/mdx_components/aboutme_area.mdx'
import BrowserWindow from '/src/components/BrowserWindow'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Not ready yet 😉

But you can check the repo this post will talk about:

* [solution cangulo.changelog](https://github.com/cangulo-nugets/cangulo.changelog)

<!--truncate-->

## The problem I want to solve

Let's consider the next scenario:

-   Every time you merge a PR a new release ([GitHub Release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)) will be created.
-   The repo is following [Semantic Versioning](https://semver.org) and the PR contains [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) that set the release to be created (_major_, _minor_ or _fix_).
-   We would like to have a Changelog that is updated with the new changes (i.e. commit msgs) added on every release.

I have the dotnet project ___cangulo.nuke.releasecreator___ which solves the first two points. The ___cangulo.changelog___ project is my solution for the third one.

Let me set my main goal:
:::info Goal
_I would like to have a solution that adds new release changes to the changelog._
:::

Maybe you would say, okay, why do you need a custom solution? Why don't you do it in the GH Action or in the same _cangulo.nuke.releasecreator_? Well, when I started working on this I realize it was not so simple, here is what I took into account for that decision:

-   The Changelog is a Markdown (MD) file, so adding the changes is not directly appending text, we should format the text to the MD language.
-   To make the Changelog more formal we should add other elements as:
	-   Header containing the version number
	-   A Date to know when that release was created (okay, this is a _nice to have_ 😁)
	-   Future elements as contributors, PR link, Link to the tests reports executed. Yes, I'm going too far that is why I keep those for future versions 😄

Although MD is easy to write, there is still some formatting logic that I decided to keep isolated in a separate solution which you can check here.


## Example

### Input: Commits from a merged PR
The release 0.0.2 is created after merging a PR with the next commits list:
-   _fix: Solved bug in the TransactionsController that makes transactions fail_
-   refactor: Simplified Transactions Repository
-   docs: Updated docs/examples
-   feat: Implemented new DocumentsController
-   refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how -> Please never write a commit message like this 😜, this is an example I found [here](http://whatthecommit.com/85835a6ce3edb747ec06e42f6313d0a2).

### Output: Changelog Updated

**Next is the changelog section I would like to have for version 0.0.2**

<BrowserWindow>
<Tabs>
  <TabItem value="markdown" label="Markdown Code" default>

```markdown
# 0.0.2

2021-11-20

fix:
-   Solved bug in the TransactionsController that makes transactions fail

refactor:
-   Simplified Transactions Repository
-   It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how

docs:
-   Updated docs/examples

features:
-   Implemented new DocumentsController
```

  </TabItem>
  <TabItem value="html" label="Changelog Visualization" default>

# 0.0.2

2021-11-20

fix:
-   Solved bug in the TransactionsController that makes transactions fail

refactor:
-   Simplified Transactions Repository
-   It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how

docs:
-   Updated docs/examples

features:
-   Implemented new DocumentsController


  </TabItem>
</Tabs>
</BrowserWindow>



<AboutMePostArea/>

<ShareCard 
  slug="projects/cangulo.changelog" 
  title="cangulo.changelog" 
  tags={["nuke", "cicd", "conventional_commits", "changelog"]} />
  
<Comments
  slug="projects/cangulo.changelog"  />