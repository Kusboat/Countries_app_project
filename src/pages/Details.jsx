import Border from "../components/Border";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import backL from '../assets/call-made.svg'
import backD from '../assets/call-madeD.svg'
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

const Details = ({data,code,findNation}) => {

  const navigate=useNavigate();

  const {theme}=useContext(ThemeContext)

  const nation=data.find(nation=>nation.numericCode === code)

  const {money}=nation.currencies

  console.log(money)

  return (
    <div className="dark:bg-[#202c36] min-h-screen dark:text-white" key={data.numericCode}>
      <button onClick={()=>navigate(-1)} className='ml-[4%] flex justify-center items-center gap-2 mt-5 w-32 h-10 dark:bg-[#283844] rounded dark:text-white' >
      {theme==='light'?<img src={backL} alt='moon icon'/>:<img src={backD} alt='sun icon'/>}Back
      </button>
      {<div className='sm:flex justify-between items-center mt-10 mx-[10%] sm:mx-20 gap-8'>
        <img className='sm:w-[50%] rounded-xl shadow-2xl' src={nation.flag} alt="flag" />
        <div className="w-[40%]">
          <h1 className="text-2xl text-[32px] font-extrabold">
            {nation.name}
          </h1>
          <div className='sm:flex justify-between gap-2 items-center mt-10 text-base text-nowrap'>
            <div className="">
              <p><b >Native Name: </b>{nation.nativeName}</p>
              <p><b>Population: </b>{nation.population.toLocaleString()}</p>
              <p><b>Region: </b>{nation.region}</p>
              <p><b>Sub Region: </b>{nation.subregion}</p>
              <p><b>Capital: </b>{nation.capital}</p>
            </div>
            <div className="mt-5">
              <p><b>Top Level Domain:</b>{nation.topLevelDomain}</p>
              <p><b>Currencies: </b>{nation.currencies.name}</p>
              <p className="text-wrap"><b>Languages: </b>{nation.languages.map(lang=>lang.name+', ' ) }</p>
            </div>
          </div>
          <p className="mt-16 sm:flex fle items-center gap-2 text-nowrap">
            <b className="text-base">Border Countries:</b><div className="flex gap-3 flex-wrap">{nation.borders === undefined ? 'No Border Countries' : nation.borders.map(border=><Border key={data.numericCode} border={border} data={data} findNation={findNation}/> )}</div>             
          </p>
        </div>
      </div>}
    </div>
  )
}

export default Details