---
slug: terraform
title: Terraform Cheatsheet
group: cheatsheet
date: 2021-11-08
authors: cangulo
tags: [terraform,cheatsheets]

---

# Common per page
import AboutMe from '@cangulo-blog/components/dist/mdx/aboutme_area.mdx'
import { CaptionDocusaurus, ShareDocusaurus } from '@cangulo-blog/components'
import Comments from '/src/components/blog/comments.js'


This post explains the next topics:
* How to set up a shortcut for Terraform in the Terminal
* The Terraform commands I use the most

<!--truncate-->

## Create an alias for TF in your Terminal

Please add the next code to your profile depending if you are using PowerShell or bash:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ps" label="PowerShell" default>
    <code>New-Alias -Name tf -Value terraform -Force</code>
  </TabItem>
  <TabItem value="sh" label="Bash">
    <code>alias tf=terraform</code>
  </TabItem>
</Tabs>

## TF Commands

| Command                     |
| --------------------------- |
| `tf init`                   |
| `tf fmt --recursive`        |
| `tf plan -out plan.out`     |
| `tf apply -auto-approve `   |
| `tf destroy -auto-approve ` |


## References

* [TF Cheatsheet](https://dzone.com/articles/terraform-cli-cheat-sheet)

<AboutMe/>

<ShareDocusaurus 
  preSlug={frontMatter.group}
  slug={frontMatter.slug} 
  title={frontMatter.title}
  tags={frontMatter.tags} />