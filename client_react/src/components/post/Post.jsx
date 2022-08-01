import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/stud.jpg"
              alt="nate pic"
            ></img>

            <span className="postUsername">Nathan Hatchell</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">A picture for my first post</span>
          <img src="assets/dbz2.jpg" alt="DBZ pic" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="like a post" />
            <img
              className="likeIcon"
              src="assets/heart.png"
              alt="heart a post"
            />
            <span className="postLikeCounter">32 others like this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
