import MemoryContainer from '../widgets/Memory-container/MemoryContainer'
import MemoryHeader from '../widgets/Memory-header/MemoryHeader'
import MemoryMain from '../widgets/Memory-main/MemoryMain'


function App() {
  return (
    <>
    <MemoryContainer>
      <MemoryHeader />
      <MemoryMain/>
    </MemoryContainer>
    </>
  )
}

export default App
