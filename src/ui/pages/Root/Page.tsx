import { Header } from "ui/components/Header/Header";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";

export const RootPage: FC = () => {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
