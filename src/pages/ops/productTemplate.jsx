import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection'

const ProductTemplate = () => {
    const ProductTemplateDocs = {

      title: "Product Templates ",
      description: "Learn how to manage product templates efficiently.",
      sections: [
        {
          title: "Overview",
          content:
            "Product Templates are predefined templates for specific products like books, software, etc",
        },
  
        {
          title: "Add Product Template",
          content:
            "Add a product template to be used by similar products",
          subsections: [
            {
              title: "Add Product Template",
              content: "Click on create product template to add a new template",
              steps: [
                "Name and Description: Add simple name and description of the product",
                "Body: Body of the product has labels, description, and a required field to check. Click on the plus button below to add more labels to the product template",
              ],
            },
          ],
        },
      ],

    }
  return <FeatureDocumentation{...ProductTemplateDocs}/>
};

export default ProductTemplate;
