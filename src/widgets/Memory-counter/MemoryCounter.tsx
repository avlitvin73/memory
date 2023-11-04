import { FC } from 'react'
import { StyledCounter } from './MemoryCounter.styles'
import Counter from '../../shared/ui/components/Counter/Counter'


interface IMemoryCounter { 
  text: string;
  count: number
}

const MemoryCounter: FC<IMemoryCounter> = ({text, count}) => {
  return (
    <StyledCounter>
      <Counter text={text} count={count}/> 
    </StyledCounter>
  )
}

export default MemoryCounter
