import { useRef, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function ProfileForm() {
  const navigate = useNavigate();
  const {data, setData} = useOutletContext();
  const [info, setInfo] = useState({
    name: '',
    team: '',
    job: '',
    phone: '',
    email: '',
    image: '',
  });
  const inputRefs = useRef({});

  const syncInfo = function(key, value) {
    setInfo(prev => ({
      ...prev,
      [key]: value
    })
  );
  }

  const message = {
    name: '이름이 입력되지 않았습니다!', 
    team: '팀이 입력되지 않았습니다!', 
    job: '직책이 입력되지 않았습니다!', 
    phone: '전화번호가 입력되지 않았습니다!', 
    email: '이메일이 입력되지 않았습니다!',
    image: '사진이 선택되지 않았습니다!'
  }

  const regist = (e) => {
    e.preventDefault();
    
    for (const [key, value] of Object.entries(info)) {
      if (value === '') {
        alert(message[key]);
        inputRefs.current[key]?.focus();
        return;
      }
    }
    setData([...data,
      info]
    );
    console.log(data);
    navigate('/profile/list');
  }

  return (
    <>
      <h1>프로필 카드 만들기</h1>
      <form onSubmit={regist}>
        <fieldset>
          <h2>정보를 입력해주세요.</h2>
          <ul>
            <li>
              <label>
                Name<input onChange={(e) => {syncInfo("name", e.target.value)}} ref={el => inputRefs.current["name"] = el} type="text" placeholder="ex) 류승찬" />
              </label>
              </li>
            <li>
              <label>
                Team<input onChange={(e) => {syncInfo("team", e.target.value)}} ref={el => inputRefs.current["team"] = el} type="text" placeholder="ex) PARADOX" />
              </label>
              </li>
            <li>
              <label>
                Job<input onChange={(e) => {syncInfo("job", e.target.value)}} ref={el => inputRefs.current["job"] = el}type="text" placeholder="ex) Frontend Developer" />
              </label>
              </li>
            <li>
              <label>
                Phone<input onChange={(e) => {syncInfo("phone", e.target.value)}} ref={el => inputRefs.current["phone"] = el} type="text" placeholder="ex) 010-8888-4444" />
              </label>
              </li>
            <li>
              <label>
                Email<input onChange={(e) => {syncInfo("email", e.target.value)}} ref={el => inputRefs.current["email"] = el} type="text" placeholder="ex) paradox@gmail.com" />
              </label>
            </li>
            <li>
              <label>
                Image<input onChange={(e) => {syncInfo("image", e.target.value)}} type="radio" name="image" value="../assets/PARADOX_default" />default
                <input onChange={(e) => {syncInfo("image", e.target.value)}} type="radio" name="image" value="../assets/PARADOX_reverse" />reverse
              </label>
            </li>
          </ul>
          <button type="submit">등록하기</button>
        </fieldset>
      </form>
    </>
  )
}

export default ProfileForm;