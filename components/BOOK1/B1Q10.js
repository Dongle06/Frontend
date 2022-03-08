import "../css/B1Q1.css";
import { useNavigate } from "react-router-dom";
const B1Q10 = () => {
  const navigate = useNavigate();
  return (
    <div className="B1Q1">
      <div>
        <div
          className="quit"
          onClick={() => {
            navigate("/Save");
          }}
        >
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp">동작을 따라해보세요!</div>
        <div className="Content">
          <p>
            풍뎅이가 준 보석은 매우 반짝이고 아름다웠어요.
            <br />
            풍뎅이가 건넨 보석을 사용할까요? <br />
            아래 그림을 보고 동작을 따라해 선택해보세요! <br />
            <br />
          </p>
          <div className="paint">
            <img
              className="img2"
              alt="book"
              src={require("../img/action3.png")}
            />
            <div>사용한다.</div>
          </div>
          <div className="paint">
            <img
              className="img2"
              alt="book"
              src={require("../img/action1.png")}
            />
            <div>사용하지않는다.</div>
          </div>
          <div className="cam2"></div>
        </div>
      </div>
    </div>
  );
};
export default B1Q10;