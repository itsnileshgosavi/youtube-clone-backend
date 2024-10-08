# Youtube Clone - Backend

This is the backend for youtube clone project.

## Installation

### prerequisite
- Node.js v14.17.0 or higher
- MongoDB v4.2.0 or higher

1. Install dependencies

```bash
npm install
```
2. add .env file with your credentials

```
MONGODB_URL = mongodb://localhost:27017/youtube
JWT_SECRET = yoursecret
CLOUDINARY_CLOUD_NAME = yourcloudname
CLOUDINARY_API_KEY = yourapikey
CLOUDINARY_API_SECRET = yourapisecret
```
3. Run the server

```bash
npm start
```

## Usage

### Routes

**You can use the following routes in your frontend**

1. Signup route - `api/user/signup`
2. Login route - `api/user/login`
3. Upload video route - `api/video/upload`
4. Get videos route - `api/video/getVideos`
5. Get user videos route - `api/video/getUserVideos`
6. Get video route - `api/video/getVideo`
7. Delete video route - `api/video/deleteVideo`
8. Edit video route - `api/video/editVideo`
9. Get channel route - `api/channel/getChannel`
10. Get channels route - `api/channel/getChannels`
11. Get channel videos route - `api/channel/getChannelVideos`
12. Create comment route - `api/comment/createComment`
13. Get comments route - `api/comment/getComments`
14. Edit comment route - `api/comment/editComment`
15. Delete comment route - `api/comment/deleteComment`
16. Like video route - `api/like/createLike`
17. Unlike video route - `api/like/undoLike`
18. Dislike video route - `api/dislike/createDislike`
19. Undislike video route - `api/dislike/undoDislike`
20. Subscribe channel route - `api/subscribe/createSubscription`
21. Unsubscribe channel route - `api/subscribe/undoSubscription`
22. Upload avatar route - `api/upload/avatar`
23. Upload banner route - `api/upload/banner`
24. Increase view count route - `api/video/viewCount`
