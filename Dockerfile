FROM 509472714099.dkr.ecr.us-east-1.amazonaws.com/nodejs:v0.0.2
COPY app/ /app
RUN adduser --disabled-password --uid 10000 noroot
USER noroot