import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from "../assets/react.svg";
import ShoppingPage from "../component-patterns/pages/ShoppingPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img className="logo" src={logo} alt="react logo" width={100} height={100} />
          <ul>
            <li>
              <NavLink to="/shopping" className={({ isActive }) => (isActive ? "nav-active" : "")}>
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
          <Route path="/shopping" element={<ShoppingPage />} />
          {/* <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy3" element={<LazyPage3 />} /> */}
          <Route path="/*" element={<Navigate to="/shopping" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
