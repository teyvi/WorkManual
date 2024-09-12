import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection';
import { Book, CircleEllipsis, Pen, Replace, ShieldCheck, ShieldOff, ShoppingCart, UserRound } from 'lucide-react';

const Campaigns = () => {
  const CampaignsDoc = {

    title: "Campaigns",
    description: "Learn how to manage campaigns efficiently.",
    sections: [
      {
        title: "Overview",
        icon: <Book size={18} />,
        content: "Campaigns are organised for resellers to earn rewards when they accomplish certain tasks"
      },

            //documentation for Cart orders
      {
        title: "Add Campaign",
        icon: <ShoppingCart size={18} />,
        content: "The add campaign adds new campaigns with the intent, validity and reward",
        subsections: [
          {
            title: "Add Campaign",
            icon: <ShieldCheck size={18} />,
            content: "Helps to add new campaigns to the platform created campaigns can be deleted.",
            steps: [
              "Name: Add name of campaigne",
              "Campaign Type: Either a marketing or leaderboard campaign",
              "Campaign Text: Shows what the campaign is about. Add detailed description at this place",
              "Campaign ID: To help track the campaign",
              "Dates: Include Start dates and end dates to the campaign",
              ""
            ]
          },
         
        ]
      },
    ]

  }
  return (
    <FeatureDocumentation {...CampaignsDoc}/>
  )
}

export default Campaigns;