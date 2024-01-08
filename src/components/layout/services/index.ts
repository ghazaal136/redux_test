export const handleClickMenu: (
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>,
  toggleDrawer: boolean
) => void = (setToggleDrawer, toggleDrawer) => {
  setToggleDrawer(!toggleDrawer);
};

export const sideBarItems = [
  {
    item: "Home",
    subItems: [
      {
        subItem: "Products",
        link: "/",
      },
    ],
  },
  {
    item: "About us",
    link: "/about",
  },
  {
    item: "Contact us",
    link: "/contact",
  },
];

