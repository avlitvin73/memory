import Counter from "./Counter"
import {render, screen} from "@testing-library/react"

describe('Counter test content', () => {
    test('check Counter text',  () => {
        render(<Counter text={'сделано ходов'} count={1}/>)
        expect(screen.getByText('сделано ходов')).toBeDefined()
    })
    test('check Counter text',  () => {
        render(<Counter text={'осталось попыток'} count={1}/>)
        expect(screen.getByText('осталось попыток')).toBeDefined()
    })
    
})