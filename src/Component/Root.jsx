import { Outlet } from "react-router";
import MainNavigation from "./MainNavigation";
//import classess from "./Root.module.css";

function Root() {
  return (
    <>
      <MainNavigation />
      <main >
        <Outlet />
      </main>
    </>
  );
}

export default Root;
