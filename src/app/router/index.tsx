import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { role } from "../../settings/role";
import { NotFoundPage } from "../pages/404";
import { AboutPage } from "../pages/about";
import { AdminPage } from "../pages/admin";
import { HomePage } from "../pages/home";

// todo
const nameApp = "Thư viện HSV";
export const routes = [
  {
    path: "/",
    roleDefine: [],
    public: true,
    name: "Trang chủ",
    exact: true,
    component: HomePage,
  },
  {
    path: "/home",
    roleDefine: [],
    public: true,
    name: "Trang chủ",
    exact: true,
    component: HomePage,
  },
  {
    path: "/about",
    roleDefine: [],

    public: true,
    component: AboutPage,
  },
  {
    path: "/404",
    roleDefine: [],
    public: true,
    component: NotFoundPage,
  },
  {
    path: "/admin",
    roleDefine: [],
    name: "Quản lý",
    public: true,
    component: AdminPage,
  },
  {
    path: "/profile",
    roleDefine: [],
    public: true,
    component: AdminPage,
  },
];
const setTitleDocument = (name?: string) => {
  document.title = name || nameApp;
};

export const RoutesApp = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <RouteItem key={index} {...route} />
      ))}

      <Redirect to="/404"></Redirect>
    </Switch>
  );
};

export const RouteItem = (props?: any) => {
  return <Route {...props}>{setTitleDocument(props.name)}</Route>;
};
