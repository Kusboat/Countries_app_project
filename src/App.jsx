import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "./components/ThemeProvider"
import Header from "./components/Header"
import jsonData from './assets/data.json'


function App() {

  const [data,setData]= useState([])
  const [code, setCode] = useState("288")

  const navigate = useNavigate()

  useEffect(() => {
    setData(jsonData);
  }, []);

  console.log(data)

  const findNation = (query) => {
    const country = data.find(nation => query.localeCompare(nation.name, 'en', {sensitivity: 'base'}) === 0 /*nation.name === query*/ )
    setCode(country.numericCode)
    navigate(`/details/${country.name}`)
  }

  const {theme} = useContext(ThemeContext)

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/Countries_app_project" element={<Home data={data} findNation={findNation} />}/>
        <Route path="/details/:nation" element={<Details data={data} code={code} findNation={findNation} />}/>        
      </Routes>
    </>
  )
}

export default App
