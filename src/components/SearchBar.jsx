import { useState } from 'react'
import searchL from '../assets/search.svg'
import searchD from '../assets/searchD.svg'

const SearchBar = ({findNation,theme}) => {

  const [query,setQuery] = useState('')

  const submitHandler = e =>{
    e.preventDefault();
    findNation(query);
    setQuery('');
  }

  return (
    <div>
        <div>
            <form onSubmit={submitHandler} className='w-[80%] mx-auto sm:w-[480px] h-14 bg-white shadow-lg rounded flex items-center dark:bg-[#283844] mb-16'>
                <div className='flex gap-2 ml-2 '>
                    {theme==='light'?<img src={searchL} alt="search icon" className='w-[24px] h-[24px]'/>:<img src={searchD} alt="search icon" className='w-[24px] h-[24px]'/>}
                    <input
                    required
                    value={query}
                    onChange={e =>setQuery(e.target.value)}
                    className='border-0 outline-none placeholder:text-[#848484] dark:bg-[#283844]' type="text" placeholder='Search for a country…'/>
                </div>
            </form>
            
        </div>
        
    </div>
  )
}

export default SearchBar