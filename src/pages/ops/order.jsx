import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection';
import { Book, CircleEllipsis, Pen, Replace, ShieldCheck, ShieldOff, ShoppingCart, UserRound } from 'lucide-react';

function Order() {
  const OrderDoc = {
    title: "Orders",
    description: "Learn how to manage and process orders efficiently.",
    sections: [
      {
        title: "Overview",
        icon: <Book size={18} />,
        content: "The orders panel shows orders from customers."
      },

            //documentation for Cart orders
      {
        title: "Cart Orders",
        icon: <ShoppingCart size={18} />,
        content: "Cart orders have two sections to manage orders and they are Active orders and Finishes Orders each dropdown explains how to handle each process",
        subsections: [
          {
            title: "Active Orders",
            icon: <ShieldCheck size={18} />,
            content: "You can easily filter express orders from the main order list.",
            steps: [
              "There is a search button to search for orders by order number e.g 1724842874791 omit ORDERGH- to get the best results",
              "After getting the particular order you want, click on ACTIONS on the far right to check the status of recent orders, manage returns, and download invoices",
              "ORDER DETAILS: This has details on active orders and option to show the status of that order ie, pending, accepted, supplier notified etc",
              "RESELLER INVOICE: Show the invoice for the reseller and an option to print the invoice",
              "CUSTOMER INVOICE: Show the invoice of the customer and an option to print the invoice",
              ""
            ]
          },
          {
            title: "Finished Orders",
            icon: <ShieldOff size={18} />,
            content: "After an order has been fulfilled, the finished orders shows it notification and stages.",
            steps: [
            
              "There is a search button to search for orders by order number e.g 1724842874791 omit ORDERGH- to get the best results",
              "After getting the particular order you want, click on ACTIONS on the far right to check the status of recent orders, manage returns, and download invoices",
              "ORDER DETAILS: This has details on active orders and option to show the status of that order ie, pending, accepted, supplier notified etc",
              "RESELLER INVOICE: Show the invoice for the reseller and an option to print the invoice",
              "CUSTOMER INVOICE: Show the invoice of the customer and an option to print the invoice",
              "DELIVERY STICKER: Shows invoice date, due date, name and contact number of the customer",
            
            ],
          }
        ]
      },


      //documentation for individual orders
      {
        title: "Individual Orders",
        icon: <UserRound size={18} />,
        content: "Individual orders shows a list of all single order on the dashboard and a list of actions to be preformed on each order.",
        subsections: [
          {
            title: "Change Status",
            icon: <Replace size={18} />,
            content: "Change order status and add notes.",
            steps: [
              "Each order can be searched by its ID ie:20247-2811115-663",
              "Change the status of orders ie: pending, accepted etc",
              "ADD NOTES: Each other has the functionality to add notes",
              "UPDATE ORDER: After changing order status or adding a note, click on Update Order to submit the changes"
            ]
          },
          {
            title: "Edit Orders",
            icon: <Pen size={18} />,
            content: "Express orders should be processed as quickly as possible to meet delivery deadlines.",
            steps: [
              "EDIT CUSTOMER LOCATION: To edit customer location, click on add location to add the latest location of the customer",
              "EDIT ORDER NUMBER: Each order has a plus and minus sign to increase or decrease the number of items ordered",
              "CHANGE DELIVERY LOCATION: The location of the delivery can be changed and note it affects the delivery cost",
              "UPDATE ORDER: Click on update order to submit the changes you have made",
              "Generate shipping label with express shipping option"
            ],
            note: "Remember: Express orders have a 2-hour processing time target from the moment they are received."
          },

          {
            title: "More",
            icon: <CircleEllipsis size={18} />,
            content: "Shows more operations that can be performed on the order",
            steps: [
              "VIEW CART",
              "EDIT SKU",
              "ADD NOTES",
              "DELIVERY MESSAGE",
              "PICKUP MESSAGE"
            ],
            note: "Remember: Express orders have a 2-hour processing time target from the moment they are received."
          }
        ]
      },
    ]

  }

  
  return (<FeatureDocumentation {...OrderDoc} />
  )
}

export default Order;
