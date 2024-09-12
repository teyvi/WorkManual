import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection';
import { Book, CircleEllipsis, Pen, Replace, ShieldCheck, ShieldOff, ShoppingCart, UserRound } from 'lucide-react';

const Reseller = () => {
  const ResellerDoc = {

    title: "Reseller",
    description: "Learn how to manage resellers efficiently.",
    sections: [
      {
        title: "Overview",
        icon: <Book size={18} />,
        content: "This section shows a list of resellers at a glance with ways to manipulate their data"
      },

      {
        title: "Resellers",
        icon: <ShoppingCart size={18} />,
        content: "Each reseller has controllers like view user, edit shop, delete user and referrals",
        subsections: [
          {
            title: "Reseller",
            icon: <ShieldCheck size={18} />,
            content: "You can easily filter express orders from the main order list.",
            steps: [
              "There is a search button to search for orders by order number e.g 1724842874791 omit ORDERGH- to get the best results",
             
              "VIEW USER: Shows a user details of the reseller and a list of their resold items",
              "EDIT SHOP: Lets you edit name of the shop and a toggle to indicate if the reseller is a brand or an influencer",
              "DELETE USER: currently disabled",
              "REFERRALS: currently disabled",
             
            ]
          },
          
        ]
      },
    ]

    

  }
  return (
    <FeatureDocumentation {...ResellerDoc}/>
  )
}

export default Reseller;

