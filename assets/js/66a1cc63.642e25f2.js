"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[2154],{64888:function(e,t,n){var o=n(67294),r=n(84610),a=n(52263);t.Z=function(){var e=(0,a.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return o.createElement("section",null,o.createElement("h2",null,"Comments"),o.createElement(r.Z.Embed,{loadMode:"scroll",websiteId:t}))}},14897:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return g},metadata:function(){return m},assets:function(){return d},toc:function(){return f},default:function(){return w}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),l=n(64888),i=n(46785),s=n(59750),u=n(9741),c=n(38705),h=["components"],p={title:"GitHub CLI Cheatsheet",group:"cheatsheets",authors:"cangulo",tags:["github","CLI","gh-cli"]},g=void 0,m={permalink:"/cheatsheets/gh-cli/gh-cli",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/gh-cli/gh-cli.mdx",source:"@site/blog/cheatsheets/gh-cli/gh-cli.mdx",title:"GitHub CLI Cheatsheet",description:"This post contains some scripts for that use GH CLI",date:"2023-05-24T07:46:00.596Z",formattedDate:"May 24, 2023",tags:[{label:"github",permalink:"/cheatsheets/tags/github"},{label:"CLI",permalink:"/cheatsheets/tags/cli"},{label:"gh-cli",permalink:"/cheatsheets/tags/gh-cli"}],readingTime:.435,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"Elementary Cheatsheet",permalink:"/cheatsheets/elementary"},nextItem:{title:"Git Cheatsheet",permalink:"/cheatsheets/git"}},d={authorsImageUrls:[void 0]},f=[{value:"Delete Workflows run",id:"delete-workflows-run",children:[],level:2},{value:"References",id:"references",children:[],level:2}],k={toc:f};function w(e){var t=e.components,n=(0,r.Z)(e,h);return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This post contains some scripts for that use GH CLI"),(0,a.kt)("h2",{id:"delete-workflows-run"},"Delete Workflows run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# Read input parameters\nowner=""\nrepo=""\nbranch=""\nworkflow_path=".github/workflows/import.yml"\n\n# get workflow ids\nworkflow_ids=$(gh api -X GET "/repos/$owner/$repo/actions/runs" | jq ".workflow_runs[] | select(.path == \\"$workflow_path\\") | .id")\n\n# delete workflow runs for each id\nfor id in $workflow_ids; do\n    echo "deleting $id"\n    gh api -X DELETE "/repos/$owner/$repo/actions/runs/$id" --silent\ndone\n\necho "All workflow runs for workflow \'$workflow_path\' on branch \'$branch\' in repository \'$owner/$repo\' have been deleted."\n\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cli.github.com/manual/"},"GH CLI"))),(0,a.kt)(c.ZP,{mdxType:"AboutMe"}),(0,a.kt)(u.ZP,{mdxType:"FullExperienceLink"}),(0,a.kt)(s.ZP,{mdxType:"Contact"}),(0,a.kt)(i.ShareDocusaurus,{preSlug:p.group,slug:p.slug,title:p.title,tags:p.tags,mdxType:"ShareDocusaurus"}),(0,a.kt)(l.Z,{mdxType:"Comments"}))}w.isMDXComponent=!0}}]);