import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";
 

const Categories = () => {
  const CategoriesDoc = {
    title: "Categories",
    description: "Learn how to manage Categories efficiently.",
    sections: [
      {
        title: "Overview",
         content:
          "Categories improves user experience by bundling products to be easily accessible",
      },
      {
        title: "Category",
         content: "Add product categories for easy accessibility",
        subsections: [
          {
            title: "Add Category",
             content: "",
            steps: [
             "Main Category: There some products that are main categories e.g Fashion and Shirts a subcategory. When you toggle on the main category button, it adds the category as main and when toggled off,you add the parent category (fashion) in this example",
             "Category Description: Give a short description of the product category",
             "Image: Upload a picture about the category"

            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...CategoriesDoc} />;
};

export default Categories;
