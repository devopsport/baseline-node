#!/bin/bash

DOCKER_UID=$(id -u)
DOCKER_GID=$(id -g)
DOCKER_USER=$(whoami)

aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin $(aws sts get-caller-identity --query Account --output text).dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com

echo "${DOCKER_USER}:x:${DOCKER_UID}:${DOCKER_GID}::/app:/sbin/nologin" > passwd
docker pull 509472714099.dkr.ecr.us-east-1.amazonaws.com/npm:v0.0.6
docker run --rm -u ${DOCKER_UID}:${DOCKER_GID} -v ${PWD}/passwd:/etc/passwd:ro -v ${PWD}/app:/app 509472714099.dkr.ecr.us-east-1.amazonaws.com/npm:v0.0.6 run test
