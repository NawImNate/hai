import "./rightbar.css";

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/zach.jpg"
                alt="zach pic"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Zach Everett</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/zach.jpg"
                alt="zach pic"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Zach Everett</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/zach.jpg"
                alt="zach pic"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Zach Everett</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
