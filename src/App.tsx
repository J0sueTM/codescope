import React, { useState } from "react"
import { BrowserRouter } from "react-router-dom"

import Dropdown from "./components/Dropdown"
import { IconType } from "react-icons/lib"
import { IconBase } from "react-icons"

export type SectionURI = 'ds' | 'algo' | 'games'

export interface Section {
  name: string
  uri: SectionURI
  icon: IconType
}
 
export const SectionContext = React.createContext<[Section | null, React.Dispatch<React.SetStateAction<Section>> | null]>([null, null])

function App() {
  const [sectionContext, setSectionContext] = useState<Section>({name: 'Data Structures', uri: 'ds', icon: IconBase})

  return (
    <div className="w-full h-full">
      <header className="w-full h-12 pt-4 flex flex-row justify-center items-center">
        <SectionContext.Provider value={[sectionContext, setSectionContext]}>
          <Dropdown
            style={{
              width: 'max',
              height: 5,
              button: {
                hoverable: true,
                textWeight: 'bold',
                textSize: 'md'
              }
            }}
          />
        </SectionContext.Provider>
      </header>
    </div>
  );
}

export default App;
