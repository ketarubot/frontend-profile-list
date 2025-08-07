import '../styles/components.css';

function ProfileCard({data, setData}) {

  const deleteCard = (id) => {
  setData(prev => prev.filter(data => data.id !== id));
  };

  return (
    <>
      <div className="profileCard">
        <div className="cardHead">
          <img src={data.image} alt="이미지" />
          <h3>{data.name}</h3>
        </div>
        <div className="cardBody">
          <div className="cardInfo">
            <p><strong>Team. @{data.team}</strong></p>
            <p><strong>{data.job}</strong></p>
            <p><strong>tel.</strong> {data.phone}</p>
            <p><strong>email.</strong> {data.email}</p>
          </div>
          <div className="cardActions">
            <button style={{
                backgroundColor: "#90a3ff"
              }}>수정</button>
            <button style={{
                backgroundColor: "#ff9090"
              }} onClick={() => deleteCard(data.id)}>삭제</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard;