import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection'


const PayoutRequest = () => {
    const PayoutRequestDocs = {
        title: "Payout Request ",
        description: "Learn how to manage payout requests efficiently.",
        sections: [
          {
            title: "Overview",
            content:
              "When resellers request a payout,you can verify, update the status",
          },
    
          {
            title: "Update Status",
            content:
              "Update the status of the payout request from pending, declined and approved",
          },
        ],
    }
  return <FeatureDocumentation{...PayoutRequestDocs}/>
};

export default PayoutRequest;
