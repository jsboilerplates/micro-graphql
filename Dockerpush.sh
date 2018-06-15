echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push jsboilerplates/micro-graphql
docker push jsboilerplates/micro-graphql:0.0.0
