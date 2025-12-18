import './App.css'
import MoveBox from './components/MoveBox'
import ToggleBox from './components/ToggleBox'
import HoverBox from './components/HoverBox'
import PresenceBox from './components/PresenceBox'
import VariantPresenceBox from './components/VariantPresenceBox'
import StaggerList from './components/StaggerList'
import StaggerPresence from './components/StaggerPresence'

function App() {

  return (
    <div style={{ padding: 40 }}>
      <StaggerPresence />
    </div>
  )
}

export default App
