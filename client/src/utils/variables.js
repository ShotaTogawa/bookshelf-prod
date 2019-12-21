export const bookGenres = [
  "Arts",
  "Biographies",
  "Business",
  "Computers Technology",
  "Fitness",
  "Health",
  "Literature",
  "Novel",
  "Politics",
  "Religion",
  "Science",
  "Self-Help",
  "Social Science",
  "Others"
];

export const tableHeaderBefore = [
  "",
  "Title",
  "Genre",
  "Author",
  "Pages",
  "Registered Date",
  "Start Date"
];

export const tableHeaderReading = [
  "",
  "Title",
  "Genre",
  "Author",
  "Progress",
  "Start Date",
  "Evaluation",
  "Status Edit"
];

export const tableHeaderRead = [
  "",
  "Title",
  "Genre",
  "Author",
  "Finish Date",
  "Evaluation"
];

export const menus = [
  {
    url: "#",
    icon: "fas fa-user-circle",
    title: "User",
    submenus: [
      { url: "/user", title: "Status", icon: "fas fa-list" }
      // { url: "#", title: "Edit", icon: "fas fa-user-edit" }
    ]
  },
  {
    url: "#",
    icon: "fas fa-book",
    title: "Book",
    submenus: [
      { url: "/books", title: "List", icon: "fas fa-th-list" },
      { url: "/book", title: "Register", icon: "fas fa-plus" },
      { url: "/book/search", title: "Search", icon: "fas fa-search" },
      { url: "/timeline", title: "TimeLine", icon: "fas fa-stream" }
    ]
  }
];
