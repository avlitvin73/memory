import { FC } from 'react'
import { StyledCard } from './MemoryCard.styles'

interface ICard {
    path: string
    isSolved: boolean
    onClick: () => void
}

interface IMemoryCard {
    card: ICard
}

const MemoryCard: FC<IMemoryCard> = ({card}) => {
  const bg = card.isSolved ? card.path : ''

  return <StyledCard bg={bg} onClick={card.onClick}></StyledCard>
}

export default MemoryCard