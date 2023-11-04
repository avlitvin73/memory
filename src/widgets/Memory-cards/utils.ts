import { pairType } from "../Memory-main/MemoryMain"

type iconItems = {[key: string]: {position: number[], path: string}}
type getCardsPositionProp = {icons:iconItems, positions:number, handleClick: (arg0: pairType) =>void}
type imagesContext = {[key: string]: () => void}

export const getExistIcons = (imagesContext: imagesContext) : iconItems=> {
    const initialValue = {} as iconItems
    const icons = Object.keys(imagesContext).reduce((accumulator, currentValue) => {
        const path = currentValue.replace('../../../', '/');
        const splitPath = path.split('/')
        const filename = splitPath[splitPath.length - 1].split('.')[0]
        const updateElem = {
            position:[],
            path: path
        }
        accumulator[filename] = updateElem
        return accumulator
    } , initialValue)
    return icons
}

export const getCardsPosition = ({icons, positions, handleClick}: getCardsPositionProp) => {
    const occupiedPositions:number[] = []
    const cardsPosition = []
    for (let i=0; i < 2; i++) {
        for (const icon of Object.keys(icons)) {
          let position = Math.ceil(Math.random() * positions)
          while (occupiedPositions.includes(position)) {
            position = Math.ceil(Math.random() * positions)
          }
          occupiedPositions.push(position)
          cardsPosition[position] = {
            path: icons[icon].path,
            isSolved: false,
            onClick: () => {
                handleClick({
                    position,
                    icon
                })
            }
          }
          icons[icon].position.push(position)
        }
      }
    return cardsPosition
}