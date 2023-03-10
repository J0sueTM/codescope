import React from 'react'
import { IconType } from 'react-icons/lib'

export interface ButtonStyle {
  hoverable?: boolean

  textWeight: string
  textSize: string
}

interface Props {
  style: ButtonStyle
  text: string
  icon: IconType

  onClick?: () => void
  onBlur?: () => void
}

function Button(props: Props) {
  return (
    <button
      className={`group w-full h-full px-4 py-2 border-2 border-dark text-dark bg-light rounded-3xl
                  ${props.style.hoverable ? 'hover:border-light hover:text-light hover:bg-dark' : ''}`}
      onClick={props.onClick}
      onBlur={props.onBlur}
    >
      <p className={`inline-block font-${props.style.textWeight} text-${props.style.textSize}`}>{props.text}</p>
      <props.icon className="ml-1 mb-1 inline-block fill-dark
                             group-hover:fill-light"/>
    </button>
  )
}

export default Button
