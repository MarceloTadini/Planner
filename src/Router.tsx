import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Indicator from "./components/Indicator";
import { Wrapper } from "./components/Wrapper/styles";
import Home from "./pages/Home";
import Planner from "./pages/Planner";

const pathMap = {
    home: 'Home',
    planner: 'Planner'
  }
  
  const Layout = () => {
    return (
      <>
        <Header />
        <Wrapper>
          <Indicator pathMap={pathMap}></Indicator>
          <Outlet />
        </Wrapper>
      </>
    )
  }
  
  export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          index: true,
          element: <Home />
        },
        { path: '/planner', element: <Planner /> }
      ]
    }
  ])