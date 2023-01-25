import { BrandType, TopicType } from "~/types";

interface IDatabase {
  brands: BrandType[];
  topics: TopicType[];
}

export const db: IDatabase = {
  brands: [
    { id: 1, name: "Forbes", icon: "/assets/icons/forbes.png" },
    { id: 2, name: "The Wall Street Journal", icon: "/assets/icons/wsj.png" },
    { id: 3, name: "Wealthfront", icon: "/assets/icons/wealthfront.png" },
  ],
  topics: [
    {
      id: 1,
      title: "Loan Payments",
      description:
        "Compare rates, crunch numbers and get expert guidance for life.",
      icon: "/assets/icons/hands.png",
    },
    {
      id: 2,
      title: "Financial Growth",
      description:
        "Compare rates, crunch numbers and get expert guidance for life.",
      icon: "/assets/icons/report.png",
    },
    {
      id: 3,
      title: "Mortgages",
      description:
        "Compare rates, crunch numbers and get expert guidance for life.",
      icon: "/assets/icons/money.png",
    },
    {
      id: 4,
      title: "Credit Cards",
      description:
        "Compare rates, crunch numbers and get expert guidance for life.",
      icon: "/assets/icons/house.png",
    },
    {
      id: 5,
      title: "Loan Payments",
      description:
        "Compare rates, crunch numbers and get expert guidance for life.",
      icon: "/assets/icons/hands.png",
    },
    {
      id: 6,
      title: "Financial Growth",
      description:
        "Compare rates, crunch numbers and get expert guidance for life.",
      icon: "/assets/icons/report.png",
    },
    {
      id: 7,
      title: "Mortgages",
      description:
        "Compare rates, crunch numbers and get expert guidance for life.",
      icon: "/assets/icons/money.png",
    },
    {
      id: 8,
      title: "Credit Cards",
      description:
        "Compare rates, crunch numbers and get expert guidance for life.",
      icon: "/assets/icons/house.png",
    },
  ],
};
