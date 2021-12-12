import Base from './components/Base'
import Home from './components/Home'

import "./styles/global.scss"

const App = () => {
  return (
    <Base>
      <div className="container">
        <Home />
      </div>
    </Base>
  )
}

export default App