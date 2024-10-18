import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";
 

const Discounts = () => {
  const DiscountsDoc = {
    title: "Discounts",
    description: "Learn how to manage product discounts efficiently.",
    sections: [
      {
        title: "Overview",
         content:
          "Discounts are offered to customers in a form of free shipping, Fixed discounts, Percentage discounts. Please not this discounts have to be discussed with management before executing. Be very sure of what you are doing in this section as it is irreversible",
      },
      {
        title: "Add Discount",
         content: "To add discounts",
        subsections: [
          {
            title: "Create Discount",
             content: "A modal pops up to show which discount to be added.",
            steps: [
              "Discount Type: You can apply Percentage or Fixed amount Discounts or offer free shipping",
              "Discount Properties: Properties of the discount to be applied will vary ",
              "Discount Timeline: States the duration of a discount. ",
              "Discount Description: Craft an exciting and attractive description for customers to know the type of discount and how to use it",
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...DiscountsDoc} />;
};

export default Discounts;
