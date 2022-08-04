import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="nate pic"
            ></img>
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date} </span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc} </span>
          <img src={post.photo} alt="tokyo pic" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="like a post" />
            <img
              className="likeIcon"
              src="assets/heart.png"
              alt="heart a post"
            />
            <span className="postLikeCounter">{like} others like this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
