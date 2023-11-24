"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[5159],{42344:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return h},assets:function(){return f},toc:function(){return g},default:function(){return w}});var o=a(83117),n=a(80102),r=(a(67294),a(3905)),i=a(64888),s=a(46785),c=a(26684),l=a(93511),u=a(84964),m=["components"],d={title:"AWS Control Tower - Reducing Cost 1",date:new Date("2022-01-22T00:00:00.000Z"),group:"blog",authors:"cangulo",tags:["aws","projects","accounts","setup","aws-control-tower"]},p=void 0,h={permalink:"/blog/aws/control-tower/1-delete-vpc-endpoints-and-nat",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/aws/control-tower/1-delete-vpc-endpoints-and-nat.mdx",source:"@site/blog/posts/aws/control-tower/1-delete-vpc-endpoints-and-nat.mdx",title:"AWS Control Tower - Reducing Cost 1",description:"This post explains some customizations I did to save AWS Control Tower costs. I followed the next article to set it up: Manage AWS Accounts Using Control Tower Account Factory for Terraform. I recommend you read it before continuing. Basic knowledge about AWS and Terraform is required.",date:"2022-01-22T00:00:00.000Z",formattedDate:"January 22, 2022",tags:[{label:"aws",permalink:"/blog/tags/aws"},{label:"projects",permalink:"/blog/tags/projects"},{label:"accounts",permalink:"/blog/tags/accounts"},{label:"setup",permalink:"/blog/tags/setup"},{label:"aws-control-tower",permalink:"/blog/tags/aws-control-tower"}],readingTime:4.17,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"AWS Control Tower - Reducing Cost 2",permalink:"/blog/aws/control-tower/2-disable-config-in-aft-account"},nextItem:{title:"Interactive bookmarks menu v2",permalink:"/blog/bash/5-interactive-bookmarks-v2"}},f={authorsImageUrls:[void 0]},g=[{value:"Context",id:"context",children:[],level:2},{value:"Problem: Costs",id:"problem-costs",children:[],level:2},{value:"Solution",id:"solution",children:[{value:"Delete the VPC Endpoints when not used",id:"delete-the-vpc-endpoints-when-not-used",children:[],level:3},{value:"Delete the NAT related resources when not used",id:"delete-the-nat-related-resources-when-not-used",children:[],level:3},{value:"Reduced Costs",id:"reduced-costs",children:[],level:3}],level:2},{value:"References:",id:"references",children:[{value:"Git Repositories",id:"git-repositories",children:[],level:3}],level:2}],_={toc:g};function w(t){var e=t.components,p=(0,n.Z)(t,m);return(0,r.kt)("wrapper",(0,o.Z)({},_,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This post explains some customizations I did to save AWS Control Tower costs. I followed the next article to set it up: ",(0,r.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/terraform/aws-control-tower-aft#create-aws-aft-organizational-unit-and-account"},"Manage AWS Accounts Using Control Tower Account Factory for Terraform"),". I recommend you read it before continuing. Basic knowledge about AWS and Terraform is required."))),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Whenever I want to start a new project, I create an AWS account for each environment, I do it to separate domains and costs. So far, I have been doing this manually, but then I discover the Account Factory for Terraform (AFT) as part of the AWS Control Tower services. "),(0,r.kt)("p",null,"AFT defines a GitOps process to automate the account creation and update. It is based on two main elements: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Git repositories where the account creation request and customizations are defined."),(0,r.kt)("li",{parentName:"ol"},"AWS resources used in the account creation/update process. All of them are based on the repository code. Some of them are CodePipeline, Dynamo tables, Lambdas, and Step Functions.")),(0,r.kt)("p",null,"I don't want to go into details, but I think it is worth mentioning that this automatization simplifies the whole process, not only because we avoid manual operations (that is always nice, right?), but because it allows us to align different AWS accounts."),(0,r.kt)("p",null,"A customization example could be to define a Budget after creating the account. We can add a notification when we are close to a maximum amount (in fact, this was my main goal at first, to avoid any unexpected cost \ud83d\ude01). Next are other examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create default resources like S3 buckets"),(0,r.kt)("li",{parentName:"ul"},"Add SSM parameters to describe the account"),(0,r.kt)("li",{parentName:"ul"},"Add custom policies")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"I'm not going to go into the customization details in this article. I just want to point out a few examples. I will explain it in a separate post in the future."))),(0,r.kt)("h2",{id:"problem-costs"},"Problem: Costs"),(0,r.kt)("p",null,"AFT does not have a cost itself, the cost depends ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/controltower/latest/userguide/aft-pricing.html"},"on the resources deployed and used"),". Next are the main costs per resource after a few days of using it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"VPC Endpoints: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html"},"billed hourly"),"."),(0,r.kt)("li",{parentName:"ol"},"NatGateway.")),(0,r.kt)("p",null,"I found it in the Cost Explorer of my root account, grouping by API Operation:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"costs",src:a(17597).Z})),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("h3",{id:"delete-the-vpc-endpoints-when-not-used"},"Delete the VPC Endpoints when not used"),(0,r.kt)("p",null,"The AFT repository (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-ia/terraform-aws-control_tower_account_factory"},"terraform-aws-control_tower_account_factory"),") offers  the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"aft_vpc_endpoints")," to enable/disable the VPC Endpoints. As those are billed hourly, it doesn't make sense to have them on if you are not using them. So, to save costs, only turn them on before requesting a new account, and once it is finished, turn them off. The idea is simple, let's see that in practice:"),(0,r.kt)("p",null,"The basic TF code that creates the AFT infrastructure is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terraform"},'module "aft" {\n  source                      = "github.com/aws-ia/terraform-aws-control_tower_account_factory"\n\n  ct_management_account_id    = var.ct_management_account_id\n  log_archive_account_id      = var.log_archive_account_id\n  audit_account_id            = var.audit_account_id\n  aft_management_account_id   = var.aft_management_account_id\n  ct_home_region              = var.ct_home_region\n  tf_backend_secondary_region = "us-west-2"\n\n  vcs_provider                                  = "github"\n  account_request_repo_name                     = "${var.github_username}/learn-terraform-aft-account-request"\n  global_customizations_repo_name               = "${var.github_username}/learn-terraform-aft-global-customizations"\n  account_customizations_repo_name              = "${var.github_username}/learn-terraform-aft-account-customizations"\n  account_provisioning_customizations_repo_name = "${var.github_username}/learn-terraform-aft-account-provisioning-customizations"\n}\n')),(0,r.kt)("p",null,"Once we have created the infrastructure by executing a ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply"),", the VPC endpoints are enabled by default, we process to send the account creation request (explained in the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/terraform/aws-control-tower-aft#create-aws-aft-organizational-unit-and-account"},"tutorial"),"). Once it is finished, we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"aft_vpc_endpoints")," flag to false:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terraform",metastring:"{5}","{5}":!0},'module "aft" {\n  source                      = "github.com/aws-ia/terraform-aws-control_tower_account_factory"\n\n  ...\n\n  aft_vpc_endpoints                             = false\n}\n')),(0,r.kt)("p",null,"We reexecute ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply")," and done! VPC endpoints deleted and costs reduced!"),(0,r.kt)("h3",{id:"delete-the-nat-related-resources-when-not-used"},"Delete the NAT related resources when not used"),(0,r.kt)("p",null,"Maybe, the first approach we think is to manually delete the NAT resources. Then, before queuing any account creation request, we use Terraform to recreate them. That might work, but it involves manual intervention on in the AWS Console for every request, we don't want that. "),(0,r.kt)("p",null,"So, taking into account that the AFT code is in a GitHub repository, I thought it was better to fork it and add a new flag to conditionally create the NAT resources. So, I did the next steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"I forked the AWS GH repo ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-ia/terraform-aws-control_tower_account_factory"},"aws-ia/terraform-aws-control_tower_account_factory")," in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cangulo-aws-aft/terraform-aws-control_tower_account_factory"},"cangulo-aws-aft/terraform-aws-control_tower_account_factory"),"."),(0,r.kt)("li",{parentName:"ol"},"I created a new flag called ",(0,r.kt)("inlineCode",{parentName:"li"},"aft_vpc_nat_gateway")," following the ",(0,r.kt)("inlineCode",{parentName:"li"},"aft_vpc_endpoints")," model."),(0,r.kt)("li",{parentName:"ol"},"I modify the NAT resources to depend on the new flag. ")),(0,r.kt)("p",null,"Everything is done in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cangulo-aws-aft/terraform-aws-control_tower_account_factory/commit/d8cfd2584f4cec37e1a91d213f823191cec201d3"},"this commit"),"."),(0,r.kt)("p",null,'Then, I simply update the "aft" module source to my fork and provide the new flag. Next is the result:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-terraform",metastring:"{22}","{22}":!0},'module "aft" {\n\n  # source = "github.com/cangulo-aws-aft/terraform-aws-control_tower_account_factory" # repo in the cloud\n\n  # source                      = "github.com/cangulo-aws-aft/terraform-aws-control_tower_account_factory"\n  source = "../terraform-aws-control_tower_account_factory" # repo in the same local path\n\n  ct_management_account_id    = var.ct_management_account_id\n  log_archive_account_id      = var.log_archive_account_id\n  audit_account_id            = var.audit_account_id\n  aft_management_account_id   = var.aft_management_account_id\n  ct_home_region              = var.ct_home_region\n  tf_backend_secondary_region = var.tf_backend_secondary_region\n\n  vcs_provider                                  = "github"\n  account_request_repo_name                     = "${var.github_username}/account-request"\n  account_provisioning_customizations_repo_name = "${var.github_username}/account-provisioning-customizations"\n  global_customizations_repo_name               = "${var.github_username}/global-customizations"\n  account_customizations_repo_name              = "${var.github_username}/account-customizations"\n\n  aft_feature_delete_default_vpcs_enabled = false\n  aft_vpc_aws_nat_gateway                 = false\n  aft_vpc_endpoints                       = false\n}\n')),(0,r.kt)("h3",{id:"reduced-costs"},"Reduced Costs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"reduced-costs",src:a(60969).Z})),(0,r.kt)("p",null,"I deactivated the VPC Endpoints since the day 11, NAT costs disappeared next days. "),(0,r.kt)("h2",{id:"references"},"References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Youtube Tutorial for setting up AWS Control Tower: ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=CwRy0t8nfgM"},"Enable AWS Control Tower for Existing Organizations"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/aws-control-tower-aft#create-aws-aft-organizational-unit-and-account"},"Manage AWS Accounts Using Control Tower Account Factory for Terraform"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/aws/new-aws-control-tower-account-factory-for-terraform/"},"Account Factory for Terraform"))),(0,r.kt)("h3",{id:"git-repositories"},"Git Repositories"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/learn-terraform-aft-account-provisioning-customizations"},"learn-terraform-aft-account-provisioning-customizations"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/learn-terraform-aft-account-customizations"},"learn-terraform-aft-account-customizations"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/learn-terraform-aft-global-customizations"},"learn-terraform-aft-global-customizations"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/learn-terraform-aft-account-request"},"learn-terraform-aft-account-request")),(0,r.kt)(u.ZP,{mdxType:"AboutMe"}),(0,r.kt)(l.ZP,{mdxType:"FullExperienceLink"}),(0,r.kt)(c.ZP,{mdxType:"Contact"}),(0,r.kt)(s.ShareDocusaurus,{preSlug:d.group,slug:d.slug,title:d.title,tags:d.tags,mdxType:"ShareDocusaurus"}),(0,r.kt)(i.Z,{mdxType:"Comments"}))}w.isMDXComponent=!0},64888:function(t,e,a){var o=a(67294),n=a(84610),r=a(52263);e.Z=function(){var t=(0,r.default)().siteConfig,e=parseInt(t.customFields.hyvorTalkSiteId);return o.createElement("section",null,o.createElement("h2",null,"Comments"),o.createElement(n.Z.Embed,{loadMode:"scroll",websiteId:e}))}},17597:function(t,e,a){e.Z=a.p+"assets/images/costs-using-aws-ct-aft-d4354ebcbd937280814f1324ed6d01c8.png"},60969:function(t,e,a){e.Z=a.p+"assets/images/reduced-costs-5c2f3227c940d3a45808ddf213d5a6ce.jpg"}}]);