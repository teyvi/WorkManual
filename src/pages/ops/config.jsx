import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection'


const Config = () => {
    const ConfigDocs = {

        title: "Config",
        description: "Learn how to manage app configurations efficiently.",
        sections: [
          {
            title: "Overview",
            content:
              "Configs are used to manage important features in the app",
          },
    
          {
            title: "Update Configurations",
            content:
              "Click on update to update the configurations",
            subsections: [
              {
                title: "Update",
                steps: [
                  "Delivery limit for payment on deliver: Updates the limit on payment on delivery",
                  "Payment Cap:",
                  "Payment threshold:",
                  "Payable security deposit:",
                  "WhatsApp Community Link: Updates the whatsapp link for customers to join",
                  "Become a Supplier: Updated the form link to become a supplier"
                ],
              },
            ],
          },
        ],
      


    }
  return <FeatureDocumentation{...ConfigDocs}/>
};

export default Config;
