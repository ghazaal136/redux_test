import React from "react";
import { icons } from "@/utils/icons";
import { Box, IconButton, Toolbar, useTheme, AppBar } from "@mui/material";

interface HeaderTypes {
  handleClickMenu: () => void;
  toggleDrawer: boolean;
  drawerWidth: string;
}

const Header = ({
  handleClickMenu,
  toggleDrawer,
  drawerWidth,
}: HeaderTypes) => {
  const theme = useTheme();

  return (
    <AppBar
      position='fixed'
      sx={{
        bgcolor: theme.palette.common.white,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(toggleDrawer && {
          width: `calc(100% - ${drawerWidth})`,
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: drawerWidth,
        }),
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='end'
          onClick={handleClickMenu}
          sx={{ ...(toggleDrawer && { display: "none" }) }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              display:"flex",
              alignItems:"center",
              justifyContent:'center',
              "& svg": {
                width: "37px !important",
                height: "40px !important",
              },
            }}
          >
            {icons.hamburger_menu()}
          </Box>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
