import React from "react";
import { FidgetSpinner } from 'react-loader-spinner';

  const PreLoader= ()=>{
        
    return (
        <FidgetSpinner
            visible={true}
            height="200"
            width="200"
            ariaLabel="fidget spinner-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['var(--title-color)', 'var(--title-color)', 'var(--title-color)']}
            backgroundColor="var(--title-color-dark)"
        />
    )
  }

  export default PreLoader;

