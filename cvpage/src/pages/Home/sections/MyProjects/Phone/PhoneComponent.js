// import React from 'react';
import { PhoneFrame, PhoneFrameWrapper, Screen } from "./PhoneComponent.styles";

const PhoneComponent = ( { link } ) => {
    return (
      <PhoneFrameWrapper>
        <PhoneFrame>
          <Screen src={link} />
        </PhoneFrame>
      </PhoneFrameWrapper>
    );
  };
  export default PhoneComponent;