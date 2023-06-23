import { useContext, useRef } from 'react'

import { ModalContext } from '../../../context/ModalProvider';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { AboutMeContainerWrapper, AboutMeSpan, CloseModalButton, LeftSide, RightSide } from './AboutMeContainer.styles'

export const AboutMeContainer = () => {
    const describe = "Hi! My name is Radosław Gackowski and i am a graduate of Applied Computer Science from Politechnika Bydgoska (Bydgoszcz University of Technology), with a strong passion for computers."
    const { isModal, setIsModal} = useContext(ModalContext);
    const ref = useRef();

    const handleCloseModal = () => {
      setIsModal(false);
    }
  
    useOnClickOutside(ref, () => setIsModal(false));

  return (
    <AboutMeContainerWrapper ref={ref}>
        <CloseModalButton onClick={handleCloseModal}></CloseModalButton>
        <LeftSide>
            <AboutMeSpan>{describe}</AboutMeSpan>
        </LeftSide>
        <RightSide>Photo</RightSide>
    </AboutMeContainerWrapper>
  )
}
