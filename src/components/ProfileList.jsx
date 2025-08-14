import ProfileCard from "./ProfileCard";
import "../styles/components.css";
import axios from "axios";
import { useState, useEffect } from "react";

function ProfileList() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/profile/list")
      .then(response => setDataList(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1 className="title">프로필 카드 목록</h1>
      <div className="cardContainer">
        {dataList.map(body => (
          <ProfileCard key={body.id} data={body} setData={setDataList} />
        ))}
      </div>
    </>
  );
}

export default ProfileList;
