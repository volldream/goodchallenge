# goodchallenge
This is a challenge for evaluating my Kubernetes and container skill 

## Run app on local 

#### You can run app on your local env with two command
`npm install`

`npm start`

## Run Application

#### Add Repository information 
First of all set some repository value on nodeapp file 

Your repository address and name
`REPO="YOUR_REPO"`

Your repository username
`USERNAME="USERNAME"`

Your repository password
`PASSWORD="PASSWORD"`

#### init application for first time

For first run run command 

`./nodeapp init`

#### build new image 

Run `./nodeapp build {version_number}` to build new image

#### deploy new image 

Run `./nodeapp deploy {version_number}` to deploy new image on kubernetes cluster

## What a real life deployment would need extra?

There are serveral way that we can use them but my solution is based on Jenkins, GitHub, and Kubernetes. we should setup Jenkins and connect it to GitHub with a Github hook then we can define many pipelines and rollback solution. for example create a pipeline when a commit on master branch Jenkins start to build a new image with the suitable tag number, at next step we can write some test for application such as unit test, smoke test, and some function test and run it before deploying on production. Also, we can define more deployment stage for manual test and finally we can deploy it on the production server.
