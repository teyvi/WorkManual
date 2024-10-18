import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";

const PickupLocations = () => {
  const PickupLocationsDoc = {
    title: "Pick Location ",
    description: "Learn how to manage pickup locations efficiently.",
    sections: [
      {
        title: "Overview",
        content:
          "There are designated pickup points setup by the company . These locations are rarely updated as it requires a lot of logistics to setup",
      },

      {
        title: "Pickup Location",
        content:
          "Add pickup location and comments",
        subsections: [
          {
            title: "Add pickup locations",
            steps: [
             "Remarks: Add remarks are other information you want the customer to know about their delivery location"
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...PickupLocationsDoc} />;
};

export default PickupLocations;
