import Array from "../components/modules/Array"
import None from "../components/modules/None"

type Difficulty = 'easy' | 'medium' | 'hard' | 'complex'

export interface Module {
  name: string
  uri: string
  topicName: string
  difficulty: Difficulty
  component: () => JSX.Element
}

const Modules: Module[] = [
  {name: 'None', uri: '', topicName: '', difficulty: 'easy', component: None},
  {name: 'Array', uri: 'array', topicName: 'DS', difficulty: 'easy', component: Array},
  {name: 'Linked List', uri: 'linked-list', topicName: 'DS', difficulty: 'medium', component: Array},
  {name: 'Queue', uri: 'queue', topicName: 'DS', difficulty: 'medium', component: Array},
  {name: 'Stack', uri: 'stack', topicName: 'DS', difficulty: 'medium', component: Array}
]

export default Modules