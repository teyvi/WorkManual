import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";

const ManageEmployees = () => {
  const ManageEmployeesDocs = {
    title: "Manage Employees",
    description: "Learn how to manage employees efficiently.",
    sections: [
      {
        title: "Overview",
        content:
          "Manage Employees by adding, updating and viewing their details.",
      },

      {
        title: "Manage Employees",
        content:
          "Adding Employees have different modals that have to be filled",
        subsections: [
          {
            title: "Add Employee",
            content:
            "Add Employee details by editing these modals",
            steps: [
              "Department: ",
              "Employee:",
              "Next of Kin:",
              "Employee Address",
              "Preview:"
            ],
          },
          {
            title: "Update Employee",
            content:
              "Update Employee details by editing these modals",
            steps: [
                "Department: ",
                "Employee:",
                "Next of Kin:",
                "Employee Address",
                "Preview:",
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...ManageEmployeesDocs} />;
};

export default ManageEmployees;
