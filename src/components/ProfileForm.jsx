import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components.css";
import axios from "axios";

function ProfileForm() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    team: "",
    job: "",
    phone: "",
    email: "",
    image: "",
  });
  const inputRefs = useRef({});

  const syncInfo = function (key, value) {
    setInfo(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const message = {
    name: "이름이 입력되지 않았습니다!",
    team: "팀이 입력되지 않았습니다!",
    job: "직책이 입력되지 않았습니다!",
    phone: "전화번호가 입력되지 않았습니다!",
    email: "이메일이 입력되지 않았습니다!",
    image: "사진이 선택되지 않았습니다!",
  };

  const regist = async e => {
    e.preventDefault();
    for (const [key, value] of Object.entries(info)) {
      if (value === "") {
        alert(message[key]);
        inputRefs.current[key]?.focus();
        return;
      }
    }
    await axios.post("http://localhost:8080/api/profile", info);
    navigate("/profile/list");
  };

  return (
    <>
      <h1 className="title">프로필 카드 만들기</h1>
      <form onSubmit={regist}>
        <h2>정보를 입력해주세요.</h2>
        <p>
          <strong className="content">Name</strong>
          <input
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
            onChange={e => {
              syncInfo("image", e.target.value);
            }}
            type="radio"
            name="image"
            value="/src/assets/PARADOX_default.png"
          />
          Default
          <span className="content"></span>
          <input
            onChange={e => {
              syncInfo("image", e.target.value);
            }}
            type="radio"
            name="image"
            value="/src/assets/PARADOX_reverse.png"
          />
          Reverse
        </p>
        <button type="submit">등록하기</button>
      </form>
    </>
  );
}

export default ProfileForm;
