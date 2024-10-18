import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";
 

function DigitalProducts() {
  const digitalProductsDoc = {
    title: "Digital Orders",
    description: "Learn how to manage digital orders efficiently.",
    sections: [
      {
        title: "Overview",
        content: "Manual for digital orders",
      },

      {
        title: "View digital products",
        content: "Shows digital products and option to send to customer",
        subsections: [
          {
            title: "View Digital details and send email remider",
            steps: [
               "Order Number",
                "Product",
                "Last Updated",
                "Date",
                "Price",
                "Profit",
                "SKU",
                "QTY",
                "Status",
                "Reseller",
                "Customer",
                "Actions: Send a reminder to customer"
            ],
          },
        ],
      },
 
    ],
  };

  return <FeatureDocumentation {...digitalProductsDoc} />;
}

export default DigitalProducts;
