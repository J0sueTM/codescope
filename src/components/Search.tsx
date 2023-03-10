import { AiOutlineSearch } from 'react-icons/ai'

interface Props {
  topic: string
}

function Search(props: Props) {
  return (
    <div className="w-full h-12">
      <AiOutlineSearch className="absolute w-6 h-6 right-7 mt-3 fill-dark"/>
      <input className="w-full h-full px-4 font-normal text-dark rounded-2xl border-2 border-dark bg-light" type="text" placeholder={`Search ${props.topic}...`}/>
    </div>
  )
}

export default Search