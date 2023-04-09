#!/usr/bin/python3

import os
from jinja2 import Environment, FileSystemLoader


backend_path=os.getenv('AWS_BACKEND_PATH')
timestamp=os.getenv('EXECUTION_TIMESTAMP')
tf_distribution_type=os.getenv('TF_DISTRIBUTION_TYPE')
backend_region=os.getenv('AWS_BACKEND_REGION')
bucket=os.getenv('AWS_BACKEND_BUCKET')
key=os.getenv('AWS_BACKEND_KEY')
dynamodb_table=os.getenv('AWS_BACKEND_DYNAMODB_TABLE')
kms_key_id=os.getenv('AWS_BACKEND_KMS_KEY_ID')
aft_admin_role_arn=os.getenv('AWS_BACKEND_ROLE_ARN')

file_loader = FileSystemLoader('.')
env = Environment(loader=file_loader)

template = env.get_template(backend_path)

output_content = template.render(
    timestamp=timestamp,
    tf_distribution_type=tf_distribution_type,
    region=backend_region,
    bucket=bucket,
    key=key,
    dynamodb_table=dynamodb_table,
    kms_key_id=kms_key_id,
    aft_admin_role_arn=aft_admin_role_arn
)
output_filename = backend_path.replace(".jinja",".tf")

# to save the results
with open(output_filename, "w") as fh:
    fh.write(output_content)