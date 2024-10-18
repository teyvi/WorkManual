import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";

const Marketing = () => {
  const MarketingDocs = {
    title: "Marketing Notifications",
    description: "Learn how to manage marketing notifications efficiently.",
    sections: [
      {
        title: "Overview",
        content:
          "Marketing notifications can either be a pop-up of an email with marketing contents",
      },

      {
        title: "Push Notification",
        content:
          "This appears when the app is opened for the customer to view a marketing content",
        subsections: [
          {
            title: "Add Push Notification",
            content: "Click on Push Notification to add new marketing content",
            steps: [
              "Title: Add a short title",
              "Message: Short description of the offering",
            ],
          },
          {
            title: "Email",
            content:
              "Send customer email of the marketing content. This has email interface",
            steps: [
              "To: Add emails of customers(ask supervisor for emails to send the content to)",
              "Subject: Simple subject of the content",
              "Body:Add the body of the content",
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...MarketingDocs} />;
};

export default Marketing;
