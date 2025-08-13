import ProfileCard from "./ProfileCard";
import { useOutletContext } from "react-router-dom";
import "../styles/components.css";

function ProfileList() {
  const { data, setData } = useOutletContext();

  return (
    <>
      <h1 className="title">프로필 카드 목록</h1>
      <div className="cardContainer">
        {data.map((p, index) => (
          <ProfileCard key={index} data={p} setData={setData} />
        ))}
      </div>
    </>
  );
}

export default ProfileList;
