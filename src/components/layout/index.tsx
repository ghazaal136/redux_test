import { Box, CssBaseline, useTheme } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { handleClickMenu, sideBarItems } from "./services";
import Header from "./components/header";
import SideBar from "./components/sideBar";

interface LayoutTypes {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutTypes) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const drawerWidth = "280px";
  const theme = useTheme();

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          httpEquiv='x-ua-compatible'
          content='ie=edge'
        />
        <title>{""}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0'
        />

        <link
          rel='shortcut icon'
          href=''
        />
        <meta
          property='og:type'
          content='website'
        />
      </Head>

      <Box
        component={"main"}
        sx={{ minHeight: "100vh", display: "flex" }}
      >
        <CssBaseline />
        <Header
          handleClickMenu={() => handleClickMenu(setToggleDrawer, toggleDrawer)}
          toggleDrawer={toggleDrawer}
          drawerWidth={drawerWidth}
        />
        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            ...(toggleDrawer && {
              transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              marginRight: drawerWidth,
            }),
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              px: 4,
              mt: 8,
            }}
          />
          {children}
        </Box>
        <SideBar
          drawerWidth={drawerWidth}
          toggleDrawer={toggleDrawer}
          handleClickMenu={() => handleClickMenu(setToggleDrawer, toggleDrawer)}
          sideBarItems={sideBarItems}
        />
      </Box>
    </>
  );
};

export default Layout;
