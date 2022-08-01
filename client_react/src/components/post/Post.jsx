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
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
};

export default Post;
