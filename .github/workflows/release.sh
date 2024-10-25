#!/bin/bash

if [ "${GITHUB_REF_NAME}" = "master" ]
then
  ENV="prod"
else
  ENV="staging"
fi

aws s3 sync app/dist/ s3://${PROJECT_NAME}-${ENV}-${SERVICE_NAME}/ --delete --acl public-read
