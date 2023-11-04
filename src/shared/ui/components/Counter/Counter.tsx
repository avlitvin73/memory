import { FC } from 'react'

interface ICounter {
  text: string;
  count: number
}

const Counter: FC<ICounter> = ({text, count}) => {

  return <div>
    <div>{text}</div>
    <span>{count}</span>
    </div>
}

export default Counter