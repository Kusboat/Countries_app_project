const Filter = ({filVal}) => {

  return (
    <div className="ml-[10%]">
        <select onChange={e=>filVal(e.target.value)} className='w-[200px] h-14 dark:bg-[#283844] dark:text-white rounded p-1' name="filReg" >
            <option value="all" >Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Filter