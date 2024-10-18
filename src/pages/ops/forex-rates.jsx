import React from 'react'
import FeatureDocumentation from '../../components/layouts/docsection'
 

const ForexRates = () => {
    const ForexRatesDocs = {

        title: "View forex rates ",
        description: "Forex rates are updated regularly to show current rates for Ghana, Nigeria and South Africa.",


    }
  return <FeatureDocumentation{...ForexRatesDocs}/>
};

export default ForexRates;
