import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="menu" >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Examenes">Examenes</Link>
          </li>
          <li>
            <Link >Configuracion</Link>
            <ul className="submenu" >
              <li><Link to="Setting">Setting</Link></li>
              <li><Link to="servicios/desarrollo">Desarrollo</Link></li>
              <li><Link to="servicios/marketing">Marketing</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      <Outlet />
    
    </>
    

  )
};

export default Layout;
