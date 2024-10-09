# Youtube Clone - Backend

[Repository](https://github.com/itsnileshgosavi/youtube-clone-backend)
[Deployment](https://youtube-backend-eight.vercel.app/)

## Description

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
2. Login route - `api/user/signin`  
3. Upload video route - `api/video/upload`
4. Get videos route - `api/videos`  
5. Get user videos route - `api/videos/channel/:channelId`  
6. Get video route - `api/video/:videoId`
7. Delete video route - `api/video/delete/:videoId`  
8. Edit video route - `api/video/edit/:videoId`
9. Get channel route - `api/channel/:handle` 
10. Get channels route - `api/channel`  
11. Get channel videos route - `api/videos/channel/:channelId`  <
12. Create comment route - `api/comment/create/:videoId`
13. Get comments route - `api/comments/:videoId`
14. Edit comment route - `api/comment/edit/:videoId`
15. Delete comment route - `api/comment/delete/:commentId`
16. Like video route - `api/video/like/:videoId`
17. Unlike video route - `api/video/unlike/:videoId`
18. Dislike video route - `api/video/dislike/:videoId`
19. Undislike video route - `api/video/undodislike/:videoId`
20. Subscribe channel route - `api/channel/subscribe/:channelId`
21. Unsubscribe channel route - `api/channel/unsubscribe/:channelId`
22. Upload avatar route - `api/upload/avatar`
23. Upload banner route - `api/upload/banner/:channelId`
24. Increase view count route - `api/video/view/:videoId` 

| Route | Method | Signin Required |
| --- | --- | --- |
| `api/user/signup` | POST | No |
| `api/user/signin` | POST | No |
| `api/user` | GET | Yes | 
| `api/channel/create` | POST | Yes |  
| `api/channel/:handle` | GET | No |
| `api/channel` | GET | Yes |  
| `api/channelbyid/:id` | GET | No | 
| `api/video/upload` | POST | Yes |
| `api/video/:videoId` | GET | No |
| `api/videos` | GET | No |
| `api/videos/channel/:channelId` | GET | Yes |
| `api/video/delete/:videoId` | DELETE | Yes |
| `api/video/edit/:videoId` | PUT | Yes |
| `api/comment/create/:videoId` | POST | Yes |
| `api/comments/:videoId` | GET | No |
| `api/comment/edit/:videoId` | PUT | Yes |
| `api/comment/delete/:commentId` | DELETE | Yes |
| `api/video/like/:videoId` | POST | Yes |
| `api/video/unlike/:videoId` | DELETE | Yes |
| `api/video/dislike/:videoId` | POST | Yes |
| `api/video/undodislike/:videoId` | DELETE | Yes |
| `api/channel/subscribe/:channelId` | POST | Yes |
| `api/channel/unsubscribe/:channelId` | DELETE | Yes |
| `api/upload/avatar` | POST | Yes |
| `api/upload/banner/:channelId` | POST | Yes |
| `api/video/view/:videoId` | GET | No |  
