import React, { useState } from "react"

import Header from "./components/Header"
import Modules, { Module } from "./dto/module"
import { Topic, Topics } from "./dto/topic"

export interface Unit {
  topic: Topic
  module: Module
}

export interface IUnitContext {
  unit: Unit
  setUnit: React.Dispatch<React.SetStateAction<Unit>>
}
 
export var UnitContext: React.Context<IUnitContext>

function App() {
  let [ unit, setUnit] = useState<Unit>({
    topic: Topics[0],
    module: Modules[0]
  } as Unit)

  UnitContext = React.createContext<IUnitContext>({ unit: unit, setUnit: setUnit })

  return (
    <div className="w-screen h-screen">
      <UnitContext.Provider value={{ unit, setUnit }}>
        <Header/>
      </UnitContext.Provider>
      <div className="fixed left-0 top-0 w-screen h-screen z-10">
        <unit.module.component/>
      </div>
      <p className="fixed w-screen bottom-2 items-center text-center text-light text-xs">
        Copyright GPL3.0<br/>Created by <a className="underline" href="https://j0suetm.com">Josué Teodoro Moreira</a>.
      </p>
   </div>
  );
}

export default App;
