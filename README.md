NodeJS commands
---------------

npm init -y

sudo npm install -g nodemon jest

npm install express body-parser cors mongoose swagger-ui-express superagent supertest


Integration tests execution
---------------------------

jest


Launching nodejs app
--------------------

nodemon server.js


Launching nodejs app from command prompt with environment variables
-------------------------------------------------------------------

CUSTOMER_SERVICE_HOST=localhost PRODUCT_SERVICE_HOST=localhost nodemon server.js



Docker Build
------------

docker build -t customer-service .

docker build -t order-service .

docker build -t product-service .


Local (docker) execution:
-------------------------

docker run -p 9090:9090 customer-service

docker run -p 9091:9091 product-service

docker run -p 9000:9000 -e CUSTOMER_SERVICE_HOST=localhost -e PRODUCT_SERVICE_HOST=localhost order-service


Docker-compose execution:
-------------------------

docker-compose up -d

docker-compose down



Container Images (GKE):
------------------------

docker tag order-service eu.gcr.io/ssil1-258911/order-service:v1

docker tag customer-service eu.gcr.io/ssil1-258911/customer-service:v1

docker tag product-service eu.gcr.io/ssil1-258911/product-service:v1

docker push eu.gcr.io/ssil1-258911/order-service:v1

docker push eu.gcr.io/ssil1-258911/customer-service:v1

docker push eu.gcr.io/ssil1-258911/product-service:v1


K8S executin (GKE):
-------------------

gcloud container clusters create --machine-type n1-standard-2 --num-nodes 2  --zone europe-west2-b --cluster-version latest test-cluster

kubectl apply -f k8s-service.yml

kubectl get services