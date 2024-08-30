import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";
import {
  Book,
  ShoppingCart,
  ShieldCheck,
  ShieldOff,
  UserRound,
  Pen,
  CircleEllipsis,
  Replace,
  CircleX,
} from "lucide-react";

function OfflineOrders() {
  const expressOrdersDoc = {
    title: "Offline Orders",
    description: "Learn how to manage and process express orders efficiently.",
    sections: [
      {
        title: "Overview",
        icon: <Book size={18} />,
        content: "Manual for offline orders",
      },

      //documentation for recording offline orders
      {
        title: "Record an Offline Order",
        icon: <ShoppingCart size={18} />,
        content: "How to record manually record offline orders",
        subsections: [
          {
            title: "Record an offline Order",
            icon: <ShieldCheck size={18} />,
            content:
              "You can easily filter express orders from the main order list.",
            steps: [
              "The file uploaded must be in CSV or Excel format",
              "The file must contain the following columns: Product SKU, Customer Phone, Customer Name, Order Total Amount, Reseller Phone Number, Quantity, Reseller Profit, Delivery Location ID, Delivery Amount, Customer Area, Customer City",
              "The first row of the file must contain the column names",
              "The file must contain at least one row of data",
              "Refer to the Delivery Locations Tab for the Delivery Location ID",
            ],
          },
        ],
      },

      //documentation for Orders created offline orders
      {
        title: "Orders Created Offline",
        icon: <UserRound size={18} />,
        content:
          "List of all orders created online are presented for more manipulation",
        subsections: [
          {
            title: "Change Status",
            icon: <Replace size={18} />,
            content: "Change order status and add notes.",
            steps: [
              "Each order can be searched by its ID ie:20243-6234322-672",
              "Change the status of orders ie: pending, accepted etc",
              "ADD NOTES: Each other has the functionality to add notes",
              "UPDATE ORDER: After changing order status or adding a note, click on Update Order to submit the changes",
            ],
          },
          {
            title: "Edit Orders",
            icon: <Pen size={18} />,
            content:
              "Express orders should be processed as quickly as possible to meet delivery deadlines.",
            steps: [
              "EDIT CUSTOMER LOCATION: To edit customer location, click on add location to add the latest location of the customer",
              "EDIT CUSTOMER NUMBER: To edit customer number, click on Edit Customer Phone to change the number of the customer",
              "EDIT ORDER AMOUNT: Each order has a plus and minus sign to increase or decrease the number of items ordered",
              "CHANGE DELIVERY LOCATION: The location of the delivery can be changed and note it affects the delivery cost",
              "UPDATE ORDER: Click on update order to submit the changes you have made",
            ],
            note: "Remember:....",
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
              "PICKUP MESSAGE",
            ],
            note: "Remember:....",
          },
        ],
      },

      //documentation for orders failed to create offline
      {
        title: "Failed to Create Orders offline",
        icon: <CircleX size={18} />,
        content:
          "Individual orders shows a list of all single order on the dashboard and a list of actions to be preformed on each order.",
        subsections: [
          {
            title: "Remove failed orders",
            icon: <CircleX size={18} />,
            content: "Change order status and add notes.",
            steps: [
              "To remove a failed order click on the check box and remove failed order that pops up after",
            ],
          },
        //   {
        //     title: "Edit Orders",
        //     icon: <Pen size={18} />,
        //     content:
        //       "Express orders should be processed as quickly as possible to meet delivery deadlines.",
        //     steps: [
        //       "EDIT CUSTOMER LOCATION: To edit customer location, click on add location to add the latest location of the customer",
        //       "EDIT ORDER NUMBER: Each order has a plus and minus sign to increase or decrease the number of items ordered",
        //       "CHANGE DELIVERY LOCATION: The location of the delivery can be changed and note it affects the delivery cost",
        //       "UPDATE ORDER: Click on update order to submit the changes you have made",
        //       "Generate shipping label with express shipping option",
        //     ],
        //     note: "Remember: Express orders have a 2-hour processing time target from the moment they are received.",
        //   },

        //   {
        //     title: "More",
        //     icon: <CircleEllipsis size={18} />,
        //     content: "Shows more operations that can be performed on the order",
        //     steps: [
        //       "VIEW CART",
        //       "EDIT SKU",
        //       "ADD NOTES",
        //       "DELIVERY MESSAGE",
        //       "PICKUP MESSAGE",
        //     ],
        //     note: "Remember: Express orders have a 2-hour processing time target from the moment they are received.",
        //   },
        ],
      },
    ],
  };

  return <FeatureDocumentation {...expressOrdersDoc} />;
}

export default OfflineOrders;
