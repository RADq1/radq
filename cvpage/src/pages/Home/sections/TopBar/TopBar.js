import { useState, useEffect} from 'react';

import { NavigationButton, TopBarWrapper, SlideOutTopBarButton} from './TopBar.styles'

export const TopBar = () => {

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setHidden(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [hidden, setHidden] = useState(false);

  const handleScroll = (value) => {
    const sections = document.querySelectorAll('.section');
    console.log('sections:', sections);
  
    if (sections.length > value) {
      const scrollPosition = sections[value].offsetTop;
      console.log('scrollPosition:', scrollPosition);
  
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    } else {
      console.log('Invalid value:', value);
    }
  };

  const handleMouseEnter = () => {
    setHidden(false);
  };

  const handleMouseLeave = () => {
    setHidden(true);
  };

  return (
    <div>
        {hidden ? <div><SlideOutTopBarButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/></div> : (
        <TopBarWrapper isTop={isTop}>
        {!isTop && <NavigationButton onClick={() => handleScroll(0)}>Home</NavigationButton>}
        <NavigationButton onClick={() => handleScroll(1)}>About me</NavigationButton>
        <NavigationButton onClick={() => handleScroll(2)}>Skills</NavigationButton>
        <NavigationButton onClick={() => handleScroll(3)}>Projects</NavigationButton>
        <NavigationButton onClick={() => handleScroll(4)}>Contact</NavigationButton>
        </TopBarWrapper>
      )}
    </div>
  )
}
