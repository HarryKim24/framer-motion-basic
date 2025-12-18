import './App.css'
import MoveBox from './components/MoveBox'
import ToggleBox from './components/ToggleBox'
import HoverBox from './components/HoverBox'
import PresenceBox from './components/PresenceBox'
import VariantPresenceBox from './components/VariantPresenceBox'
import StaggerList from './components/StaggerList'
import StaggerPresence from './components/StaggerPresence'
import LayoutList from './components/LayoutList'
import SharedLayoutCard from './components/SharedLayoutCard'
import SharedLayoutCardVariants from './components/SharedLayoutCardVariants'

function App() {

  return (
    <div style={{ padding: 40 }}>
      <SharedLayoutCardVariants />
    </div>
  )
}

export default App
