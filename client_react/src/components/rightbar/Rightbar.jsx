import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="assets/gift.png"
            alt="birthday icon"
          />
          <span className="birthdayText">
            <b>Zach Everett</b> and <b>2 other friends</b> have birthday's today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpg" alt="pickleball ad" />
        <h4 className="rightbarTitle">Friends Online</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
