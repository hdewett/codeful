import React from "react";
import TopNav from "./TopNav";
import { Outlet, Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import classNames from "classnames";

function SideNavBar() {

  const location = useLocation();
  const pathName = location.pathname;

  return (
    
    <div className="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
    <TopNav />
    <Outlet />
    </div> 
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-50 bg-base-200  text-base-content">
    <a className="btn btn-ghost normal-case text-xl text-primary">Codeful</a>
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/" className={classNames({"active":pathName == "/"})}><AiIcons.AiFillHome /> Dashboard</Link></li>
      <li><Link to="/entries" className={classNames({"active":pathName == "/entries"})}><BsIcons.BsJournalCode />Journal</Link></li>
      <li><Link to="/newentry" className={classNames({"active":pathName == "/newentry"})}><AiIcons.AiOutlinePlus />New Entry</Link></li>
      <li><Link to="/entriesfeed" className={classNames({"active":pathName == "/entriesfeed"})}><FaIcons.FaTasks />Entries Feed</Link></li>
      <li><Link to="/stats" className={classNames({"active":pathName == "/stats"})}><IoIcons.IoMdStats />Stats</Link></li>

      {/* {SideNavData.map((item, index) => {
            return (
              <li key = {index} className={item.cName}>
                <Link to={item.path} className={`${toggleClassCheck}`} onClick={handleClick}>
                  {item.icons}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })} */}
    </ul>
  </div>
</div>
  )
}

export default SideNavBar