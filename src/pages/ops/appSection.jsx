import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection'


const AppSection = () => {
    const AppSectionDocs = {

      title: "App Sections",
      description: "Learn how to manage app sections efficiently.",
      sections: [
        {
          title: "Overview",
          content:
            "App sections are dedicated banners to promote product or show marketing content",
        },
  
        {
          title: "Sections",
          content:
            "Shows the type of banners and what to input in these banners",
          subsections: [
            {
              title: "App Banner",
              content: "App Banners are visible to the customer to view a marketing content",
              steps: [
                "Collection: Select the collection this app banner addresses",
                "Image: Upload the banner (of size: )",
              ],
            },
            {
              title: "Promo Banner",
              content:
                "Promotional banners shows product that are currently been promoted",
              steps: [
                "Screen: Select the screen you have the banner to be visible in. Either home / discover screen",
                "Image: Upload the banner( of size)"
              ],
            },
            {
              title: "Trending",
              content:
                "Shows customers which products are trending",
              steps: [
                "Category: Select the category of the product to be promoted",
                "Product: Add the actual product from the dropdown and save"

              ],
            },
            {
              title: "Featured Categories",
              content:
                "Shows by color, the category to be featured",
              steps: [
                "Feature Color: Select color of the feature",
                "Select Category: Select the category of the product and save"
              ],
            },
            {
              title: "Top Deals",
              content:
                "This highlights only products that will be advertised",
              steps: [
               "Category: Select product category",
               "Product: Select the product to be displayed"
              ],
            },
          ],
        },
      ],
    }
  return <FeatureDocumentation{...AppSectionDocs}/>
};

export default AppSection;
