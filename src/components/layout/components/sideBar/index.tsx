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
  // currentUser: {
  //   id: number;
  //   displayName: string;
  //   roleName: string;
  // };
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
}: // currentUser,
SideBarTypes) => {
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

        <Stack
          direction={"row"}
          sx={{ mx: "auto", alignItems: "center" }}
        >
          <Box
            sx={{
              ml: 1,
              "& svg": {
                width: "4.375rem",
                height: "4.375rem",
              },
            }}
          >
            {icons.user_square()}
          </Box>
          <Typography
            variant='caption1'
            color={theme.palette.common.black}
            sx={{ fontWeight: 700 }}
          >
            {/* {currentUser.displayName} */}
            Qazaal
          </Typography>
        </Stack>
        <Divider />
        <List sx={{ mt: 5 }}>
          {sideBarItems.map((sideItem: SideBaItemTypes, index: number) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                mr: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {sideItem.link ? (
                <Link href={sideItem.link}>
                  <ListItemButton>
                    <ListItemIcon
                      sx={{
                        minWidth: "1.375rem",
                        ml: 1,
                        "& svg": {
                          width: "1.375rem",
                          height: "1.5rem",
                          path: {
                            stroke:
                              pathname === sideItem.link.split("?")[0]
                                ? "#00599D"
                                : "#292929",
                          },
                        },
                      }}
                    >
                      {icons.hamburger_menu()}
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        textAlign: "right",
                        "& .MuiTypography-root": {
                          fontSize: "1rem",
                          fontWeight: "500",
                          color:
                            pathname === sideItem.link.split("?")[0]
                              ? "#00599D"
                              : theme.palette.common.black,
                        },
                      }}
                      primary={sideItem.item}
                    />
                  </ListItemButton>
                </Link>
              ) : (
                <ListItemButton sx={{ cursor: "default" }}>
                  <ListItemIcon
                    sx={{
                      minWidth: "1.375rem",
                      ml: 1,
                      "& svg": {
                        width: "1.375rem",
                        height: "1.5rem",
                      },
                    }}
                  >
                    {icons.hamburger_menu()}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      textAlign: "right",
                      "& .MuiTypography-root": {
                        fontSize: "1rem",
                        fontWeight: "500",
                      },
                    }}
                    primary={sideItem.item}
                  />
                </ListItemButton>
              )}

              {sideItem.subItems &&
                sideItem.subItems.length > 0 &&
                sideItem.subItems.map((each, index) => (
                  <Link
                    href={each.link}
                    key={index}
                  >
                    <ListItemButton sx={{ mr: 3 }}>
                      <ListItemIcon
                        sx={{
                          minWidth: "1.25rem",
                          ml: 1,
                          "& svg": {
                            width: "1.25rem",
                            height: "1.25rem",
                          },
                        }}
                      >
                        {pathname === each.link.split("?")[0]
                          ? icons.full_circle()
                          : icons.empty_circle()}
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          textAlign: "right",
                          "& .MuiTypography-root": {
                            fontSize: "0.875rem",
                            fontWeight: "500",
                            color:
                              pathname === each.link.split("?")[0]
                                ? "#00599D"
                                : theme.palette.common.black,
                          },
                        }}
                        primary={each.subItem}
                      />
                    </ListItemButton>
                  </Link>
                ))}
            </ListItem>
          ))}
        </List>
        <Box sx={{ width: "70%", mx: "auto", mt: "auto", mb: 6 }}>
          <CustomButton
            size='medium'
            variant='outlined'
            text={`خروج`}
            leftIcon={icons.exit()}
            onClick={() => {
              handleLogout();
            }}
            specialStyle={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              px: 4,
              "& svg": {
                "& path": {
                  stroke: theme.palette.info.main,
                },
              },
            }}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
