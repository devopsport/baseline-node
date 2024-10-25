module "main" {
  source         = "github.com/devopsport/spa"

  project          = var.project
  env              = var.env
  service          = var.service
  domain           = var.domain
  aws_route53_zone = "punkerside.io"
}