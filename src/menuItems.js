export const menuItems = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Services",
    submenu: [
      {
        title: "web design",
        link: "/about"
      },
      {
        title: "web development",
        link: "/about",
        submenu: [
          {
            title: "Frontend",
            link: "/about"
          },
          {
            title: "Backend",
            link: "/about",
            submenu: [
              {
                title: "NodeJS",
                link: "/about"
              },
              {
                title: "PHP",
                link: "/about"
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
        link: "/seo"
      },
    ],
  },
  {
    title: "About",
    link: "/about",
    submenu: [
      {
        title: "Who we are",
        link: "/about"
      },
      {
        title: "Our values",
        link: "/about"
      },
    ],
  },
];
