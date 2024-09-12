import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";
import {
  Book,
  CircleEllipsis,
  Pen,
  Replace,
  ShieldCheck,
  ShieldOff,
  ShoppingCart,
  UserRound,
} from "lucide-react";

const Shops = () => {
  const ShopsDoc = {
    title: "Shops",
    description: "Learn how to manage customer shops efficiently.",
    sections: [
      {
        title: "Overview",
        icon: <Book size={18} />,
        content:
          "Customer shops can be viewed and edited in this section",
      },

      //documentation for Cart orders
      {
        title: "Shops",
        icon: <ShoppingCart size={18} />,
        content:
          "There two functionalities ie, view shop and edit shop",
        subsections: [
          {
            title: "Shops",
            icon: <ShieldCheck size={18} />,
            content:
              " ",
            steps: [
              "There is a search button to search for shops by name ",
              "VIEW SHOP: Each shop shows name, date created, ownership etc",
              "EDIT SHOP: Lets you edit name of the shop and a toggle to indicate if the shop is for a brand or an influencer",
              "",
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...ShopsDoc} />;
};

export default Shops;
