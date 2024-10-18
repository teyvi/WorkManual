import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection'

const ProfitProcessing = () => {
    const ProfitProcessingDocs = {

      title: "Profit Processing ",
      description: "Shows profits processed",
      sections: [
        {
          title: "Overview",
          content:
            "To refresh the process, click on Retry Profit Payout",
        },
      ],


    }
  return <FeatureDocumentation{...ProfitProcessingDocs}/>
};

export default ProfitProcessing;
