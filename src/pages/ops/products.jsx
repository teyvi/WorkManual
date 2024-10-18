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

const Products = () => {
  const ProductsDoc = {
    title: "Products Inventory",
    description: "Learn how to manage product inventory efficiently.",
    sections: [
      {
        title: "Overview",
        icon: <Book size={18} />,
        content:
          "Product is one of the most important features of the dashboard.It helps manage existing products. At a glance, you can see and search All products, In stock, In transit, Out of stock, Verified and unverifed, published and unpublished",
      },
      {
        title: "Bulk Update Products",
        icon: <ShoppingCart size={18} />,
        content: "To make it easier for products to be updated, there is a csv of cuurent products. Ask you Supervisor of this cvs that has to be uploaded to update the data",
        subsections: [
          {
            title: "How do make bulk updates",
            icon: <ShieldCheck size={18} />,
            content: "The csv needs to have the following details to make a successful update",
            steps: [
              "SKU - Stock Keeping Unit",
              "Price",
              "Cost Price",
              "Quantity",
              "After carefully submitting the csv, upload and click submit",
            ],
          },
        ],
      },
      {
        title: "Instant Delivery",
        icon: <ShoppingCart size={18} />,
        content: "There are products that have been given delivery priorities and they can be updated or removed by inputting the SKUs",
        subsections: [
          {
            title: "Manage Instant Delivery Update",
            icon: <ShieldCheck size={18} />,
            content: "You can update the delivery using the product SKU",
            steps: [
              "Look for the product sku my searching for its name in the search box below ",
             "To update it, simple enter the SKU in the update or remove modal"
            ],
          },
        ],
      },

      {
        title: "Add Productd",
        content: "Products can be added to the shop with without variants. ",
        subsections: [
          {
            title: "Add Product",
            content: "Product variants simply means same product but different size, color, style brand etc. This is very typical with shoes with different sizes or colour",
            steps: [
              "Product Information: Enter product information like name, selling price, cost price, MOQ, the country and Currency. SKUs are automatically generated for you",
             "Category and Tags:There are predefined categories for product to select and add tags to make it easier to search ",
             "Inventory Management:Add the stock quantity and state of it is in limited quantity or always available ",
             "Product Variants: This is used for a product with different colour, size, brand etc",
             "Product Media: Upload a picture of the roduct",
             "Extra information: To add if the product is instantly delivered or normal delivery",
             "Publish: If you are not sure if you want to publish a product, you can toggle the draft functionality"
            ],
          },
        ],
      },
      
    ],
  };
  return <FeatureDocumentation {...ProductsDoc} />;
};

export default Products;
