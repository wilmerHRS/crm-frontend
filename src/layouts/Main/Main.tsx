import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  title: string;
}

const Main = ({ children, title }: Props) => {
  return (
    <main className="mx-2 mx-xl-3 mx-xxl-5 my-2">
      <h3>{title}</h3>
      {children}
    </main>
  );
};

export default Main;
