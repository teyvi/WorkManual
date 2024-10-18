import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";


const DeliveryLocation = () => {
  const DeliveryLocationDoc = {
    title: "Delivery Location ",
    description: "Learn how to manage delivery locations efficiently.",
    sections: [
      {
        title: "Overview",
        content:
          "Delivery locations shows specific areas we deliver products to and the cost of delivery",
      },

      {
        title: "Add Delivery Location",
        content:
          "Add delivery location and cost of delivery to that location",
        subsections: [
          {
            title: "Create a new delivery location",
            steps: [
             "Location: Add specific location eg. Adenta, Madina, Makola etc",
             "Price: Add price to the location",
             "Type of delivery: Depending on the location and cost of delivery, some areas are Instant delivery and others are payment before delivery. Check with Supervisor on these choices",
             "Remarks: Add remarks are other information you want the customer to know about their delivery location"
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...DeliveryLocationDoc} />;
};

export default DeliveryLocation;
