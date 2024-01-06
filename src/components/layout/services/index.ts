export const handleClickMenu: (
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>,
  toggleDrawer: boolean
) => void = (setToggleDrawer, toggleDrawer) => {
  setToggleDrawer(!toggleDrawer);
};

export const membersSideBarItems = [
  {
    item: "شناسنامه فرش دستباف",
    subItems: [
      {
        subItem: "درخواست جدید صدور شناسنامه",
        link: "/member/products/new",
      },
      {
        subItem: "لیست درخواست ها",
        link: "/member/products/list",
      },
    ],
  },
];

export const agentsSideBarItems = [
  {
    item: "ارزیاب‌های کارگزاری",
    subItems: [
      {
        subItem: "لیست ارزیاب های کارگزاری",
        link: "/agents/evaluators/list",
      },
      {
        subItem: "افزودن ارزیاب",
        link: "/agents/evaluators/new",
      },
    ],
  },
  {
    item: "شناسنامه فرش",
    subItems: [
      {
        subItem: "لیست درخواست ها",
        link: "/agents/products/list",
      },
      {
        subItem: "فرم صدور شناسنامه",
        link: "/agents/products/new",
      },
      {
        subItem: "شناسنامه‌های تکمیل شده",
        link: "/agents/products/completed-certifications",
      },
    ],
  },
];

export const evaluatorsSideBarItems = [
  {
    item: "لیست درخواست‌های صدور شناسنامه فرش",
    link: "/evaluator/products/list",
  },
  {
    item: "کارگزاری‌",
    subItems: [
      {
        subItem: "کارگزاری‌های من",
        link: "/evaluator/agents/my",
      },
      {
        subItem: "تمام کارگزاری ها",
        link: "/evaluator/agents/list",
      },
    ],
  },
];

export const numberingCenterSideBarItems = [
  {
    item: " ارزیابان صدور شناسنامه فرش",
    subItems: [
      {
        subItem: " لیست ارزیابان",
        link: "/numberingCenter/evaluators/list",
      },
      {
        subItem: "ثبت نام ارزیاب جدید",
        link: "/numberingCenter/evaluators/new",
      },
    ],
  },
  {
    item: "کارگزاران",
    subItems: [
      {
        subItem: "لیست کارگزاری‌ها",
        link: "/numberingCenter/agents/list",
      },
      {
        subItem: " درخواست های عضویت ارزیاب در کارگزاری",
        link: "/numberingCenter/agents/evaluators-requests",
      },
    ],
  },
  {
    item: " لیست درخواست های صدور شناسنامه",
    link: "/numberingCenter/products/list",
  },
];
