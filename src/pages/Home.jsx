import { useState } from 'react'
import CardContainer from '../components/CardContainer'
import Filter from '../components/Filter'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Home = ({data, findNation}) => {
  
  const [reg,setReg]=useState('all')

  const filVal=(val)=>setReg(val)
  
  const filterList = reg === "all" ? data : data.filter(country=>country.region === reg)

  return (
    <div className='bg-[#FAFAFA] font-nunito dark:bg-[#202C36]'>
        <Header/>
        <div className='sm:flex justify-between mt-12 sm:px-20'>
            <SearchBar findNation={findNation}/>
            <Filter filVal={filVal} />
        </div>
        <CardContainer data={filterList} findNation={findNation} />
    </div>
  )
}

export default Home