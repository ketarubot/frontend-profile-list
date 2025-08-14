import "../styles/components.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function ProfileModify() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [info, setInfo] = useState([]);
  const inputRefs = useRef({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/profile/" + id)
      .then(response => setInfo(response.data))
      .catch(err => console.error(err));
  }, []);

  const syncInfo = function (key, value) {
    setInfo(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const modify = async e => {
    e.preventDefault();
    await axios.put("http://localhost:8080/api/profile/" + id, info);
    navigate("/profile/list");
  };

  const defaultImagePath = "/src/assets/PARADOX_default.png";
  const reverseImagePath = "/src/assets/PARADOX_reverse.png";

  return (
    <>
      <h1 className="title">프로필 카드 수정하기</h1>
      <form onSubmit={modify}>
        <h2>정보를 수정해주세요.</h2>
        <p>
          <strong className="content">Name</strong>
          <input
            value={info.name}
            onChange={e => {
              syncInfo("name", e.target.value);
            }}
            ref={el => (inputRefs.current["name"] = el)}
            type="text"
            placeholder="ex) 김태훈"
          />
        </p>
        <p>
          <strong className="content">Team</strong>
          <input
            value={info.team}
            onChange={e => {
              syncInfo("team", e.target.value);
            }}
            ref={el => (inputRefs.current["team"] = el)}
            type="text"
            placeholder="ex) 떠돌이"
          />
        </p>
        <p>
          <strong className="content">Job</strong>
          <input
            value={info.job}
            onChange={e => {
              syncInfo("job", e.target.value);
            }}
            ref={el => (inputRefs.current["job"] = el)}
            type="text"
            placeholder="ex) Backend Developer"
          />
        </p>
        <p>
          <strong className="content">Phone</strong>
          <input
            value={info.phone}
            onChange={e => {
              syncInfo("phone", e.target.value);
            }}
            ref={el => (inputRefs.current["phone"] = el)}
            type="text"
            placeholder="ex) 010-4321-5678"
          />
        </p>
        <p>
          <strong className="content">Email</strong>
          <input
            value={info.email}
            onChange={e => {
              syncInfo("email", e.target.value);
            }}
            ref={el => (inputRefs.current["email"] = el)}
            type="text"
            placeholder="ex) gimtaehooon@gmail.com"
          />
        </p>
        <p>
          <strong className="content">Image</strong>
          <input
            checked={info.image === defaultImagePath}
            onChange={e => {
              syncInfo("image", e.target.value);
            }}
            type="radio"
            name="image"
            value={defaultImagePath}
          />
          Default
          <span className="content"></span>
          <input
            checked={info.image === reverseImagePath}
            onChange={e => {
              syncInfo("image", e.target.value);
            }}
            type="radio"
            name="image"
            value={reverseImagePath}
          />
          Reverse
        </p>
        <button type="submit">수정완료</button>
      </form>
    </>
  );
}

export default ProfileModify;
