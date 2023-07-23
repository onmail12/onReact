import { useState } from "react";
import {
  HouseDoorFill,
  Search,
  CameraReelsFill,
  TvFill,
  ArrowLeftSquareFill,
  ArrowRightSquareFill,
} from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

import plexLogo from "../assets/Plex_logo_2022.svg.png";

const Sidebar = () => {
  const sidebarIconSize = 24;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const location = useLocation().pathname;

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
      <div className="sidebar-title">
        <img src={plexLogo} alt="" className="logo" />
      </div>
      <div className="sidebar-content">
        <ul>
          <Link
            to="/"
            className={`sidebar-item ${location === "/" ? "active" : ""}`}
          >
            <HouseDoorFill size={sidebarIconSize} className="icon" />
            <h2 className="sidebar-name">Home</h2>
          </Link>
          <li
            className={`sidebar-item ${location === "/search" ? "active" : ""}`}
          >
            <Search size={sidebarIconSize} className="icon" />
            <h2 className="sidebar-name">Search</h2>
          </li>
          <Link
            to="/movies"
            onClick={window.location.reload}
            className={`sidebar-item ${location === "/movies" ? "active" : ""}`}
          >
            <CameraReelsFill size={sidebarIconSize} className="icon" />
            <h2 className="sidebar-name">Movies</h2>
          </Link>
          <Link
            to="/shows"
            onClick={window.location.reload}
            className={`sidebar-item ${location === "/shows" ? "active" : ""}`}
          >
            <TvFill size={sidebarIconSize} className="icon" />
            <h2 className="sidebar-name">Shows</h2>
          </Link>
          <li
            className="sidebar-item"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <ArrowLeftSquareFill size={sidebarIconSize} />
            ) : (
              <ArrowRightSquareFill size={sidebarIconSize} />
            )}
            <h2 className="sidebar-name">Close</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
