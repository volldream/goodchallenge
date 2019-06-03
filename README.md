# goodchallenge
This is a challenge for evaluating my Kubernetes and container skill 

## Run app on local 
You can run app on your local env with two command
`npm install`
`npm start`

### Build docker file and push it on docker registery

### Run below command to build docker file
`docker build -t {yourrepo}/nodeapp .`

### Run containerized app on local env 
`docker run -d -p 8080:8080 {yourrepo}/nodeapp`

