import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from "../assets/react.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";
const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img className="logo" src={logo} alt="react logo" width={100} height={100} />
          <ul>
            <li>
              <NavLink to="/lazy1" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />} />
          <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
