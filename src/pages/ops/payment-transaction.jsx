import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection'
 

const PaymentTransaction = () => {
    const PaymentTransactionDocs = {

        title: "Payout Transactions ",
        description: "Shows payment transactions.",
        sections: [
          {
            title: "Overview",
            content:
              "The dashboard shows payment transactions made so far in",
          },
        ],
    }
  return <FeatureDocumentation{...PaymentTransactionDocs}/>
};

export default PaymentTransaction;
