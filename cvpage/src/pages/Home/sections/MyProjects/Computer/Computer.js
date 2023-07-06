import { ComputerWrapper, ComputerFrame, Screen } from "./Computer.styles"

export const Computer = ( {link} ) => {
    return (
      <ComputerWrapper>
        <ComputerFrame>
          <Screen src={link}/>
        </ComputerFrame>
      </ComputerWrapper>
    )
  }