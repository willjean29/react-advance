import { Suspense } from "react";
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from "../assets/react.svg";
import { routes } from "./routes";

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img className="logo" src={logo} alt="react logo" width={100} height={100} />
            <ul>
              {routes.map((route, index) => (
                <li key={index}>
                  <NavLink to={route.to} className={({ isActive }) => (isActive ? "nav-active" : "")}>
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }, index) => (
              <Route path={path} element={<Component />} key={index} />
            ))}
            <Route path="/*" element={<Navigate to="/lazy1" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
