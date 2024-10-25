#!/bin/bash

if [ "${GITHUB_REF_NAME}" = "master" ]
then
  ENV="prod"
else
  ENV="staging"
fi

echo "PROJECT_NAME: ${PROJECT_NAME}"
echo "SERVICE_NAME: ${SERVICE_NAME}"
echo "GITHUB_REF_NAME: ${GITHUB_REF_NAME}"
echo "ENV: ${ENV}"