import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function ProfileLayout({data, setData}) {
  return (
    <>
      <Header />
      <Outlet context={{data, setData}}/>
    </>
  )
}

export default ProfileLayout;