import { useContext, useState } from 'react'
import { Unit, UnitContext } from '../App'

import Modules, { Module } from '../dto/module'
import { Topic, Topics } from '../dto/topic'
import Search from './Search'

interface Props {
  isClosed: boolean
}

function Navbar(props: Props) {
  let { unit, setUnit } = useContext(UnitContext)

  let [ tempUnit, setTempUnit ] = useState({
    topic: unit.topic,
    module: unit.module
  } as Unit)

  return (
    <div className={`w-full h-full ${props.isClosed ? 'hidden' : 'fixed z-20'} p-4 pt-0 flex flex-col space-y-4 bg-light
                     sm:w-1/2
                     lg:w-1/3
                     xl:w-1/4`}>
      <div className="w-full grid grid-cols-2 gap-2">
        {Topics.map((topic: Topic, i: number) =>
          <button
            key={i}
            className={`w-full px-4 py-2 flex flex-row items-center border-2 border-dark rounded-2xl
                        ${topic.name === tempUnit.topic.name ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            onClick={() => setTempUnit({
              topic: topic,
              module: tempUnit.module
            } as Unit)}
          >
            <topic.icon className=""/>
            <p className="ml-2 font-semibold text-xl">{topic.name}</p>
          </button>
        )}
      </div>
      <Search topic={tempUnit.topic.name}/>
      <div className="w-full grid grid-cols-2 gap-2">
        {Modules.map((module: Module, i: number) =>
          (module.topicName === tempUnit.topic.name)
            ? <button
                key={i}
                className="w-full h-full flex flex-col justify-between border-2 border-dark rounded-2xl overflow-hidden"
                onClick={() => setUnit({
                  topic: tempUnit.topic,
                  module: module
                } as Unit)}
              >
                <p className="w-full py-4 flex justify-center items-center text-center font-semibold text-2xl text-ellipsis">
                  {module.name.toUpperCase()}
                </p>
                <p className={`w-full h-8 py-2 flex justify-center items-center text-center font-bold text-md border-t-2 border-dark bg-dark text-light`}>
                  {module.difficulty}
                </p>
              </button>
            : null
        )}
      </div>
    </div>
  )
}

export default Navbar