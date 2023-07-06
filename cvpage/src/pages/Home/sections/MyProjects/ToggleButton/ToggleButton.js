import React, { useState, useEffect } from 'react';

import { ButtonContainer, ButtonComputer, ScreenIcon, MobileIcon, ButtonMobile } from './ToggleButton.styles';

const ToggleButton = ( {isMobile, setIsMobile} ) => {

    useEffect(() => {
        function handleResize() {
            const windowWidth = window.innerWidth;

            if (windowWidth < 1620){
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMobile])

    return (
      <ButtonContainer>
        <ButtonComputer isMobile={isMobile} onClick={() => setIsMobile(false)}>
          <ScreenIcon/>
        </ButtonComputer>
        <ButtonMobile isMobile={isMobile} onClick={() => setIsMobile(true)}>
          <MobileIcon/>
        </ButtonMobile>
      </ButtonContainer>
    );
  };

  export default ToggleButton;