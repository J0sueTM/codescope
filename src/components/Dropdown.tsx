import React, { useContext, useState } from 'react'
import { RiDatabase2Fill } from 'react-icons/ri'
import { BiCaretDown, BiGame } from 'react-icons/bi'
import { SiAlwaysdata } from 'react-icons/si'
import { Section, SectionContext } from '../App'

import Button, { ButtonStyle } from './Button'

export interface DropdownStyle {
  width: string | number
  height: string | number
  
  button: ButtonStyle
}

const SECTIONS: Section[] = [
  {
    name: 'Data Structures',
    uri: 'ds',
    icon: RiDatabase2Fill
  },
  {
    name: 'Algorithms',
    uri: 'algo',
    icon: SiAlwaysdata 
  }, 
  {
    name: 'Games',
    uri: 'games',
    icon: BiGame
  }
]

interface Props {
  style: DropdownStyle
}

function Dropdown(props: Props) {
  const [ isMenuHidden, setIsMenuHidden ] = useState<boolean>(true)

  const [ section, setSection ] = useContext(SectionContext)

  return (
    <div className={`w-${props.style.width} h-${props.style.height}`}>
      <Button
        text={section!.name}
        icon={BiCaretDown}
        style={props.style.button}
        onClick={() => {
          setIsMenuHidden(!isMenuHidden)
        }}
        onBlur={() => {
          setIsMenuHidden(true)
        }}
      />
      <div className={`w-${props.style.width} ${isMenuHidden ? 'hidden' : 'absolute'}`}>
        {getDropdownMenus(section!.name, props.style.button, setSection)}
      </div>
   </div>
  )
}

function getDropdownMenus(currentSectionName: string, buttonStyle: ButtonStyle,
                          setSection: React.Dispatch<React.SetStateAction<Section>> | null) {
  if (setSection === null)
    return

  return (
    SECTIONS.map((sec: Section, i: number) =>
      (sec.name !== currentSectionName)
        ? <Button
            key={sec.name}
            text={sec.name}
            icon={sec.icon}
            style={buttonStyle}
            onClick={() => setSection(sec)}
          />
        : null
    )
  )
}

export default Dropdown