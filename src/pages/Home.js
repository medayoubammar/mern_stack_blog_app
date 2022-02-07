import Header from "../header/Header";
import Posts from "../Posts/Posts";
import SideBar from "../sideBar/SideBar";

export default function Home()
{
    return(
        <>
          <Header />
        <div className=" pt-2 d-flex justify-content-between">
          <div className="Posts row ms-2">
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          </div>
         
          <div className="">
             <SideBar /></div>
        </div>

        </>
    )
}