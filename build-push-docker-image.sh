docker login -u $1 -p $2 -e $3

docker build -t $4:$5 .  
docker push $4:$5

docker logout