import { FC } from 'react'
import { StyledContainer } from './MemoryContainer.styles'

interface IMemoryContainer {
    children: React.ReactNode
}

const MemoryContainer: FC<IMemoryContainer> = ({children}) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default MemoryContainer