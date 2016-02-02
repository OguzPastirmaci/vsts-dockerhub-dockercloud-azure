docker login --username=$1 --password=$2 --email=$3 https://index.docker.io/v1/

docker build -t $4:$5 .  
docker push $4:$5

docker logout