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
          <div className="birthdayText">
            <b>Zach Everett</b> and <b>2 other friends</b> have birthday's today
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
