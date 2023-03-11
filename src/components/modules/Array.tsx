import { useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi'

function Array() {
  let [ arr, setArr ] = useState<string[]>(['Data 0'])

  return (
    <div className="w-full h-full flex flex-row justify-center items-center space-x-4
                    md:flex-col md:space-x-0 md:space-y-4">
      <p className="hidden text-light
                    md:block">
        [
          {arr.map((data: string, i: number) => data + ((i < arr.length - 1) ? ', ' : ''))}
        ]
      </p>
      <div className="flex flex-col justify-center items-center space-y-4
                      md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex flex-col border-2 border-light rounded-2xl overflow-hidden
                        md:flex-row">
          {arr.map((data: string, i: number) =>
            <div
              key={i}
              className={`w-24 h-24 bg-dark ${(i < arr.length - 1) ? 'border-b-2 md:border-b-0 md:border-r-2 border-light' : ''}`}
            >
              <p className="w-full h-full flex justify-center items-center font-semibold text-light text-center">
                {data.toUpperCase()}
              </p>
            </div>
          )}
        </div>
        <div className="w-8 h-24 flex flex-row justify-center items-center space-x-2
                        md:flex-col md:space-x-0 md:space-y-2">
          <button
            className="group w-8 h-8 flex justify-center items-center border-2 border-light rounded-lg bg-dark cursor-pointer
                    hover:bg-light"
            onClick={() => setArr([...arr, `Data ${arr.length}`])}
          >
            <HiPlus className="fill-light
                            group-hover:fill-dark"/>
          </button>
          <button
            className="group w-8 h-8 flex justify-center items-center border-2 border-light rounded-lg bg-dark cursor-pointer
                    hover:bg-light"
            onClick={() => setArr(arr.filter((data: string, i: number) => i != arr.length - 1))}
          >
            <HiMinus className="fill-light
                              group-hover:fill-dark"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Array