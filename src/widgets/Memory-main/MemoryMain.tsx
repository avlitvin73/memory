import React, { FC } from 'react'
import { StyledMain } from './MemoryMain.styles'
import MemoryCounter from '../Memory-counter/MemoryCounter'
import MemoryCards from '../Memory-cards/MemoryCards'

export type pairType =  {
  position:number
  icon:string
  isSolved?:boolean
}


const MemoryMain: FC = () => {
  const [counter, setCounter] = React.useState(0)
  const [countDown, setCountDown] = React.useState(40)
  const [pairs, setPairs] = React.useState<never | pairType[]>([])

  const handleClick = (pair: pairType) => {
    setPairs((prev) => {
    if (prev.length) {
      if (prev[prev.length - 1].position !== pair.position) {
        if (prev.length % 2 === 0) {
          setCounter((prev)=>prev+1)
          setCountDown((prev)=>prev-1)
          return [...prev.filter((p) => p.isSolved), pair]
        }
        if (prev[prev.length - 1].icon === pair.icon) {
          const solvedPrev = prev.map((pair) => {
            pair.isSolved = true
            return pair
          })
          pair.isSolved = true
          return [...solvedPrev, pair]
        } 
        return [...prev, pair]
      } 
      return prev
    } 
    return [pair]

    })
  }

  
  return (
    <StyledMain>
      <MemoryCounter count={counter} text={'сделано ходов'}/>
      <MemoryCards handleClick={handleClick} pairs={pairs}/>
      <MemoryCounter count={countDown} text={'осталось попыток'}/>
    </StyledMain>
  )
}

export default MemoryMain
