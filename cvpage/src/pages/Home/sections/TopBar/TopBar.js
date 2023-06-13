import React from 'react'
import { NavigationButton, TopBarWrapper } from './TopBar.styles'

export const TopBar = () => {

  const handleScroll = (value) => {
    // Obliczenie wartości przewijania na podstawie wartości typu vh
    const scrollPosition = value * window.innerHeight;

    // Przewinięcie strony do określonej pozycji
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <TopBarWrapper>
        <NavigationButton onClick={() => handleScroll(0)}>About me</NavigationButton>
        <NavigationButton onClick={() => handleScroll(1)}>Skills & Experience</NavigationButton>
        <NavigationButton onClick={() => handleScroll(2)}>Projects</NavigationButton>
        <NavigationButton onClick={() => handleScroll(3)}>Contact</NavigationButton>
    </TopBarWrapper>
  )
}
