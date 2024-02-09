import { useContext } from 'react'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { ThemeContext } from './ThemeProvider'

const Header = () => {
    const {theme,toggler} = useContext(ThemeContext)

  return (
    <div className='h-20 px-[4%] flex text-nowrap shrink justify-between items-center bg-white font-extrabold text-base dark:bg-[#283844]'>
        <h1 className='text-primaryBlack font-bold font-spaceMono sm:text-[26px] dark:text-white text-base'>Where in the World?</h1>
        <div onClick={toggler} className='flex items-center justify-center gap-2 font-bold'>
            <span>
                {theme==='light'?<img src={moon} alt='moon icon'/>:<img src={sun} alt='sun icon'/>}
            </span>
            <h4 className='font-nunito text-black text-[12px] sm:text-[13px] dark:text-white'>{theme==='light'?'DARK MODE':'LIGHT MODE' }</h4>
        </div>
        
    </div>
  )
}

export default Header