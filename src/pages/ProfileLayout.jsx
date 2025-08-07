import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function ProfileLayout({data, setData}) {
  return (
    <>
      <Header />
      <div className="contents">
        <Outlet context={{data, setData}}/>
      </div>
    </>
  )
}

export default ProfileLayout;