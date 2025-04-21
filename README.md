#Docker 

### Useful command

```bash
- docker ps 
- docker ps -a
- docker build .
- docker run -it [image-id] # Run simple apple in interactive terminal
- docker run -ai [image-id] 
- docker run -p 80:3000 -d --rm  ef0abfb93ea7
- docker rm [containers-names] #Remove container
- docker rmi [image] #Remove one image
- docker images # List all images
- docker image prune #‼️Remove all images 
- docker inspect [image-name] #Inspect image
```