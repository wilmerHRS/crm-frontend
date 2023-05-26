import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Navbar } from "./Navbar";

interface Props {
  children: ReactNode | ReactNode[];
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <div className="d-flex justify-content-between bg-global vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Header />
        <Main title={title}>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;
