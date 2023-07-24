# My Word Cards

## Easy to use, simple word cards like paper ones, but limitless, eco-friendly, fast in turnover, and free forever. 

## Features:
- Managing cards and collections
- Filtering and sorting
- Automatic getting a relevant image from Pixabay
- Images uploading
- Automatic images resizing
- Firebase Realtime Database
- Firebase Authentication
- Firebase Storage

## Local development:

### Node version:
```
$ node -v
v14.15.1
$ npm -v
6.14.8
```

## Docker Build & Start/Stop:
```
docker build -t my-word-cards .
docker run -it -p 5000:5000 my-word-cards
docker ps -a
docker stop <container_id>
```
