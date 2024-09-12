import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";
import {
  Book,
  CircleEllipsis,
  Pen,
  Replace,
  ShieldCheck,
  ShieldOff,
  ShoppingCart,
  UserRound,
} from "lucide-react";

const Supplier = () => {
  const SupplierDoc = {
    title: "Supplier",
    description: "Learn how to manage Suppliers efficiently.",
    sections: [
      {
        title: "Overview",
        icon: <Book size={18} />,
        content:
          "Express orders are high-priority orders that require expedited processing and shipping. This feature allows you to identify, filter, and manage express orders effectively.",
      },
      {
        title: "Supplier",
        icon: <ShoppingCart size={18} />,
        content: "Each supplier can be viewed, edited and verified",
        subsections: [
          {
            title: "Supplier actions",
            icon: <ShieldCheck size={18} />,
            content: "You can easily search for supplier by their names.",
            steps: [
              "There is a search button to search for suppliers by name",
              "VIEW SUPPLIERS: Details of supplier like name, email etc can be seen. You can update the suppliers agreement term from a markup to commission or vise versa",
              "VERIFY SUPPLIER: To verify supplier, provide their generic name and the agreement term of either markup to commission",
              "EDIT USER TYPE: User can be edited to either an advanced supplier or a basic supplier",
              "EDIR USER: currentlt disabled",
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...SupplierDoc} />;
};

export default Supplier;
