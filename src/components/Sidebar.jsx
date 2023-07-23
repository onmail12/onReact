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
import reactLogo from "../assets/icons8-react-100.png";

const Sidebar = () => {
  const sidebarIconSize = 24;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation().pathname;

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.replace(`/search/${e.target.query.value}`);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
      <div className="sidebar-title">
        <img src={reactLogo} alt="" className="logo" id="reactLogo" />
        <p className="text">onReact.</p>
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
            id="search"
          >
            <form className="input-group" onSubmit={handleSearch}>
              <Search size={sidebarIconSize} className="icon" />
              <input type="text" name="query" placeholder="Search" />
            </form>
            <Search
              onClick={() => setSidebarOpen(!sidebarOpen)}
              size={sidebarIconSize}
              className="icon-closed"
            />
          </li>
          <Link
            to="/movies"
            className={`sidebar-item ${location === "/movies" ? "active" : ""}`}
          >
            <CameraReelsFill size={sidebarIconSize} className="icon" />
            <h2 className="sidebar-name">Movies</h2>
          </Link>
          <Link
            to="/shows"
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
