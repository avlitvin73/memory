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
  const bgPath = card.isSolved ? card.path : ''
  const bg = `./assets/images/${bgPath.split('/')[bgPath.split('/').length - 1]}`

  return <StyledCard bg={bg} onClick={card.onClick}></StyledCard>
}

export default MemoryCard