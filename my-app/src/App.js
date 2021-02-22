
import "./style/global.css"
import Header from "./components/Header/Header"
import Route from "./router"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend';




function App() {
  return (

    <div>
      <DndProvider backend={HTML5Backend}>
        <Route />
      </DndProvider>
    </div>

  );
}

export default App;
