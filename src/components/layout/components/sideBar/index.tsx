import CustomButton from "@/components/basicComponents/customButton";
import { icons } from "@/utils/icons";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { handleLogout } from "./services";

interface SideBarTypes {
  drawerWidth: string;
  toggleDrawer: boolean;
  handleClickMenu: () => void;
  sideBarItems: {
    item: string;
    link?: string;
    subItems?: {
      subItem: string;
      link: string;
    }[];
  }[];
}

interface SideBaItemTypes {
  item: string;
  link?: string;
  subItems?: {
    subItem: string;
    link: string;
  }[];
}

const SideBar = ({
  drawerWidth,
  toggleDrawer,
  handleClickMenu,
  sideBarItems,
}: SideBarTypes) => {
  const theme = useTheme();
  const { pathname } = useRouter();

  return (
    <>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxShadow: `-10px 0px 65px 6px ${theme.palette.grey[400]}`,
            overflow: "hidden",
          },
        }}
        variant='persistent'
        anchor='right'
        open={toggleDrawer}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-start",
            mr: "auto",
            mt: 3,
            ml: 2,
            cursor: "pointer",
          }}
        >
          <Box onClick={handleClickMenu}>{icons.circle_close()}</Box>
        </Box>

      </Drawer>
    </>
  );
};

export default SideBar;
