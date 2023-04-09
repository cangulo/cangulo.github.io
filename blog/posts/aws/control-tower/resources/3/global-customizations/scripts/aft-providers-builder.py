#!/usr/bin/python3

import os
from jinja2 import Environment, FileSystemLoader


providers_path=os.getenv('AWS_PROVIDER_PATH')
timestamp=os.getenv('EXECUTION_TIMESTAMP')
provider_region=os.getenv('AWS_BACKEND_REGION')
target_admin_role_arn=os.getenv('AWS_PROVIDER_ROLE_ARN')

file_loader = FileSystemLoader('.')
env = Environment(loader=file_loader)

template = env.get_template(providers_path)

output_content = template.render(
    timestamp=timestamp,
    provider_region=provider_region,
    target_admin_role_arn=target_admin_role_arn
)
output_filename = providers_path.replace(".jinja",".tf")

with open(output_filename , "w") as fh:
    fh.write(output_content)