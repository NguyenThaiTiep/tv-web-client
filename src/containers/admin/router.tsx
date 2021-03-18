import {
  BarChart as BarChartIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
} from "react-feather";
import ChatIcon from "@material-ui/icons/Chat";
import ApartmentIcon from "@material-ui/icons/Apartment";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { role } from "../../settings/role";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { HomePage } from "../../app/pages/home";
import { RouteItem } from "../../app/router";
import React from "react";
import { history } from "../../service";
export const routes = [
  {
    href: "/admin/dashboard",
    icon: BarChartIcon,
    title: "Thống kê",
    private: [role.MANAGER, role.ADMIN],
    component: HomePage,
  },
  {
    href: "/admin/info",
    icon: UserIcon,
    title: "Thông tin cá nhân",
    component: HomePage,
  },
  {
    href: "/admin/book",
    icon: ApartmentIcon,
    title: "Quản lý sách",
    component: HomePage,
  },
  {
    href: "/admin/students",
    icon: ShoppingBagIcon,
    title: "Quản lý sinh viên",
    private: [role.MANAGER, role.ADMIN],
    component: HomePage,
  },
  {
    href: "/admin/book-order",
    icon: FormatListBulletedIcon,
    title: "Quản lý mượn/trả",
    private: [role.MANAGER, role.ADMIN],
    component: HomePage,
  },
  {
    href: "/admin/settings",
    icon: FormatListBulletedIcon,
    title: "Cài đặt",
    private: [role.MANAGER, role.ADMIN],
    component: HomePage,
  },
];
const RouteAdminItem = (route: any) => {
  return <Route {...route}></Route>;
};
export const RouteAdmin = () => {
  return (
    <Switch>
      <Redirect path="/admin" to="/admin/dashboard" />
      {routes.map((route) => (
        <RouteAdminItem {...route} />
      ))}
    </Switch>
  );
};
