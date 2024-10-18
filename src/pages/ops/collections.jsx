import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";
 

const Collections = () => {
  const CollectionsDoc = {
    title: "Collection",
    description: "Learn how to manage Collections efficiently.",
    sections: [
      {
        title: "Overview",
         content:
          "Unlike categories, product collections are temporary collection of products for marketing purposes",
      },
      {
        title: "Manage Collections",
         content: "How to view and add product collections",
        subsections: [
          {
            title: "Add Collections",
             content: "Collections shows as a banner in application prompting users to view a new product collection",
            steps: [
            "Name:Add name of the collection e.g Valsday collection",
            "Description: Describe what the collection for e.g Make your vals day amazing with these product collections",
            "Banner:Design a banner showing the product offerings",
            "Add Products: After creating the collection, click on the collection to add the products"
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...CollectionsDoc} />;
};

export default Collections;
