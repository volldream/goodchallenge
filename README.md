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


