import { IconType } from "react-icons/lib"
import { RiDatabase2Fill } from 'react-icons/ri'
import { FaCodeBranch, FaGamepad } from 'react-icons/fa'
import { TbListDetails } from 'react-icons/tb'

export type TopicURI = 'ds' | 'algo' | 'games' | 'extra'

export interface Topic {
  name: string
  uri: TopicURI
  icon: IconType
}

export const Topics: Topic[] = [
  { name: 'DS', uri: 'ds', icon: RiDatabase2Fill },
  { name: 'Algo.', uri: 'algo', icon: FaCodeBranch },
  { name: 'Games', uri: 'games', icon: FaGamepad },
  { name: 'Extra', uri: 'extra', icon: TbListDetails }
]
