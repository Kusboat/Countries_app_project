
const Border = ({data, border, findNation}) => {
    const nation = data.find(nation=>nation.alpha3Code === border)

    return (
    <div>
        <button onClick={()=>findNation(nation.name)} className="min-w-24 h-7 px-2 rounded border-[0.25px] border-transparent border-[#979797] shadow text-sm text-center flex-1 dark:bg-[#283844]" >
            {nation.name}
        </button>
    </div>
  )
}

export default Border