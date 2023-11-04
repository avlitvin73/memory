import React, { FC } from 'react'
import { StyledCards } from './MemoryCards.styles'
import MemoryCard from '../Memory-card/MemoryCard'
import { getCardsPosition, getExistIcons } from './utils'
import { pairType } from '../Memory-main/MemoryMain';

const imagesContext = import.meta.glob('./../../../public/assets/images/*.{png,jpg,jpeg,gif,svg}');
// const imagesContext = import.meta.glob('./images/*.{png,jpg,jpeg,gif,svg}');
interface IMemoryCards {
  handleClick: (arg0: {position:number, icon:string}) => void
  pairs: pairType[]
}

const MemoryCards: FC<IMemoryCards> = ({handleClick, pairs}) => {
  const [positions] = React.useState(16)
  const [icons] = React.useState(getExistIcons(imagesContext))
  const [cardsPosition] = React.useState(getCardsPosition({icons, positions, handleClick}))
  
  return (
    <StyledCards>
        {cardsPosition.map((card, i)=> {
          card.isSolved = false
          for (const pair of pairs) {
            if (card.path.includes(pair.icon) && pair.position === i) {
              card.isSolved = true
            }
            if (pair.position === i) {
              card.isSolved = true
            }
          
          }

        return <MemoryCard key={`card-${i}`} card={card} /> })}
    </StyledCards>
  )
}

export default MemoryCards
