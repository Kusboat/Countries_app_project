import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "./components/ThemeProvider"
import Header from "./components/Header"


function App() {

  const [data,setData]= useState([])
  const [code, setCode] = useState("288")

  const navigate = useNavigate()

  useEffect(() => {
    // Fetch data from your JSON file or API
    const fetchData = async () => {
      try {
        const response = await axios.get('../src/assets/data.json');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
      <Home data={data} findNation={findNation}/>
      <Routes>
        {/* <Route path="/" element={<Home  />}/> */}
        <Route path="/details/:nation" element={<Details data={data} code={code} findNation={findNation} />}/>        
      </Routes>
    </>
  )
}

export default App
