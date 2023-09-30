import { Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const Sidebar = ({routes}) => <></>;

const Topbar = ({title}) => <></>;

const AutoClosedComponent = () => {
  return <div>Title</div>
}

const ComponentWithChildren = ({children}) => {
  return <div>{children}</div>
}


export const MainContainer = ({ children }: Props) => {
  return (
    <>
      <AutoClosedComponent />
      
      <ComponentWithChildren>
        <div>Children</div>
        <div>Children</div>
        <div>Children</div>
      </ComponentWithChildren>

    <Typography variant="h1">Hello</Typography>

      <Topbar title={"Hi, Peter Parker"}/>
      <Sidebar routes={[]} />
      <div>{children}</div>
    </>
  );
};
