import { useState, useEffect } from 'react';
import { NavigationButton, TopBarWrapper, SlideOutTopBarButton } from './TopBar.styles';

export const TopBar = () => {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsTop(scrollTop === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = (value) => {
    const sections = document.querySelectorAll('.section');

    if (sections.length > value) {
      const scrollPosition = sections[value].offsetTop;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    } else {
      console.log('Invalid value:', value);
    }
  };

  return (
    <div>
      <TopBarWrapper isTop={isTop}>
        {!isTop && <NavigationButton onClick={() => handleButtonClick(0)}>Home</NavigationButton>}
        <NavigationButton onClick={() => handleButtonClick(1)}>About me</NavigationButton>
        <NavigationButton onClick={() => handleButtonClick(2)}>Projects</NavigationButton>
        <NavigationButton onClick={() => handleButtonClick(3)}>Skills</NavigationButton>
        <NavigationButton onClick={() => handleButtonClick(4)}>Contact</NavigationButton>
      </TopBarWrapper>
      <SlideOutTopBarButton />
    </div>
  );
};