import React from "react";
import FeatureDocumentation from "../../components/layouts/docsection";

const Coupon = () => {
  const CouponDocs = {
    title: "Coupons",
    description: "Coupons are great ways we increase customer retention. Take note that adding coupons are irreversible and with cost lost to the company is if done inappropriately",
    sections: [
      {
        title: "Overview",
        content:
          "Add and view coupons",
      },

      {
        title: "Add Coupons",
        content:
          "Add new coupons modal pops up",
        subsections: [
          {
            title: "Add coupons",
            steps: [
             "Name: Add the name of the coupon",
             "Code: Special codes are added to easily identify the coupon",
             "Coupon Type: There are three types of coupons ie: Cash Rewards, Free delivery, Combo(combination of both)",
             "Onboarding coupons: These coupons applies to new customers we get",
             "Duration:Add time and duration for the coupons so they can expire ",
             "Issue all: Issues coupons to all users"
            ],
          },
        ],
      },
    ],
  };
  return <FeatureDocumentation {...CouponDocs} />;
};

export default Coupon;
