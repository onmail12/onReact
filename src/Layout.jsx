import bgImage from "./assets/Sand-Dunes-Sahara-Desert-View-1920-x-1200.jpg";
import Sidebar from "./components/Sidebar";

const Layout = ({ children, backdropPath }) => {
  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: `url("${backdropPath ? backdropPath : bgImage}")`,
        }}
      ></div>
      <div className="container">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
    </>
  );
};

export default Layout;
