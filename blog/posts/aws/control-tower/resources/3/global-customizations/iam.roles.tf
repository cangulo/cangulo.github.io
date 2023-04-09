resource "aws_iam_role" "iac_deployer" {
  name                = "iac-deployer-${local.account_name}"
  path                = "/deployments/"
  assume_role_policy  = data.aws_iam_policy_document.allow_shared_users_to_assume_role.json
  managed_policy_arns = [data.aws_iam_policy.admin.arn]
}

data "aws_iam_policy" "admin" {
  name = "AdministratorAccess"
}

data "aws_iam_policy_document" "allow_shared_users_to_assume_role" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "AWS"
      identifiers = [local.shared_iac_deployer_user]
    }
  }
}

locals {
  shared_iac_deployer_user = "arn:aws:iam::2146903:user/deployments/iac-deployer-shared"
}