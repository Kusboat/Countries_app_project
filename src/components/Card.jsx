const Card = ({data,findNation}) => {

  return (
    <button className='dark:text-white dark:bg-[#283844] rounded-xl p-1 shadow' key={data.numericCode} value={data.name} onClick={()=>findNation(data.name)}>
        <img className= 'h-[190px] w-full' src={data.flag} alt='flag'/>
        <div className='text-left'>
            <div className='mt-6 mb-4 font-extrabold text-[18px]'>
                {data.name}
            </div>
            <div><b>Population:</b> {data.population.toLocaleString()}</div>
            <div><b>Region:</b> {data.region}</div>
            <div><b>Capital:</b> {data.capital}</div>
        </div>
    </button>
  )
}

export default Card