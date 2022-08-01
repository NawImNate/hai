import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/stud.jpg"
            alt="nate profile pic"
            className="shareProfileImg"
          />
          <input
            placeholder="What's on your mind, Nate?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <PermMediaIcon htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Media</span>
          </div>
          <div className="shareOptions">
            <LabelIcon htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOptions">
            <RoomIcon htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOptions">
            <EmojiEmotionsIcon htmlColor="gold" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
