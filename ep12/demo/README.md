# Serverless demo

This is just a demo and it's **not** production ready.  

If you need help setting up a production ready serverless application, please feel free to ping us, Duarte Mendes <duarte.mendes@mindera.com> or Paulo Andrade <paulo.andrade@mindera.com>.

## Context

This app creates an API Gateway that exposes one endpoint.  

When this endpoint is hit, it triggers a lambda, "PostFoosToSQS".  

This lambda will send the given Foo to the FoosSQS.  

FoosSQS will then trigger the lambda "ProcessFoos".  

Finally, this lambda will process the Foo.

## Lint template

`cfn-lint -t template.yaml`

## Deploy

Before proceeding, make sure you have your AWS credentials setup.  

Also, go to package.json and append your name to all the occurrences of the bucket name.

### Prerequesites

Install:
- [yarn](https://yarnpkg.com/en/docs/install#mac-stable)  
- [docker](https://www.docker.com/products/docker-desktop)  
- [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)  
- [aws-sam-cli](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)  
- [cfn-lint](https://github.com/aws-cloudformation/cfn-python-lint) (optional)  

### Prepare - run once

`yarn install`

`yarn build`

`yarn create-bucket`

### Package

`yarn package`

### Deploy

`yarn deploy`
