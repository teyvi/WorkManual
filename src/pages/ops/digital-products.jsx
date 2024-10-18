import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";

const DigitalProducts = () => {
  const DigitalProductsDoc = {
    title: "Digital Products Inventory",
    description: "Learn how to manage digital product inventory efficiently.",
    sections: [
      {
        title: "Overview",
        content:
          "Digital Products are one of the most important features of the dashboard.It helps manage existing and new digital products. At a glance, you can see and search All products, In stock, In transit, Out of stock, Verified and unverifed, published and unpublished",
      },

      {
        title: "Add Products",
        content: "Products can be added to the shop with or without variants. ",
        subsections: [
          {
            title: "Add Product",
            content:
              "Digital Product variants simply means same product but different size, color, style brand etc. This is very typical with wedding invites with different sizes or colour",
            steps: [
              "Product Information: Enter product information like name, selling price, cost price, MOQ, the country and Currency. SKUs are automatically generated for you",
              "Category and Tags:There are predefined categories for product to select and add tags to make it easier to search ",
              "Inventory Management:Add the stock quantity and state of it is in limited quantity or always available ",
              "Product Variants: This is used for a product with different colour, size, brand etc",
              "Product Media: Upload a picture of the product",
              "Publish: If you are not sure if you want to publish a product, you can toggle the draft functionality",
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...DigitalProductsDoc} />;
};

export default DigitalProducts;
