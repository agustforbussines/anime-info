import {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from '../style'
import searchIcon from '../assets/search.svg'
import darkSearch from '../assets/darkSearch.svg'
import menu from '../assets/menu.svg'
import home from '../assets/home.svg'
import info from '../assets/info.svg'
import fire from '../assets/fire.svg'
import close from '../assets/close.svg'
import axios from 'axios'

const Navbar = ({setFilm}) => {
    const [search,setSearch] = useState("")
    const [toggle,setToggle] = useState(false)
    const[toggleSearch,setToggleSearch] = useState(false)

    const searchAnime = (search) => {
        const finalSearch = search.toLowerCase().replace(' ',"%20");
        axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${finalSearch}`).then((res)=>{
            setFilm(res.data.data);
        })
      }

    return (
    <nav className={`w-full flex justify-between items-center py-6 relative`}>
            <div className={`${toggleSearch ? 'flex' : 'hidden'} ss:hidden items-center py-4`}>
                <div className='flex items-center relative'>
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='mr-[1px] w-[250px] shadow-white shadow-sm px-[5px] py-[9px] font-semibold outline-none active:outline-none ring-2 ring-slate-300 rounded-lg border-none' placeholder='Search Anime'/>
                    <img src={searchIcon} alt="search-icon" onClick={()=>searchAnime(search)} className='absolute right-0 w-6 h-6 cursor-pointer mx-5'/>
                </div>
                <div className='ml-7'>
                    <img src={close} alt="close" onClick={()=>setToggleSearch((prev)=>!prev)} className='w-7 h-7 cursor-pointer' />
                </div>
            </div>
            
            <Link to='/'>
                <div className={`${styles.flexStart} ${toggleSearch ? 'hidden' : 'flex'} ss:flex flex-col`}>
                    <h1 className='lg:text-6xl sm:text-[48px] text-[40px] font-extrabold font-poppins bg-gradient-to-r bg-clip-text from-sky-600 to-white text-transparent '>Anime.ku</h1>
                    <p className='xl:text-sm sm:text-[11px] text-[9px] font-Inter font-normal text-slate-200'>Free Streaming Anime Website</p>
                </div>
            </Link>
        
        <div className='flex items-center justify-end'>
            <div className='flex items-center relative'>
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className=' sm:flex hidden xs:w-[540px] xs:mr-[1px] sm:w-[300px] md:w-[400px] lg:w-[630px] shadow-white shadow-sm xs:px-[5px] xs:py-[9px] font-semibold outline-none active:outline-none ring-2 ring-slate-300 rounded-lg border-none' placeholder='Search Anime'/>
                <img src={searchIcon} alt="search-icon" onClick={()=>searchAnime(search)} className='absolute right-0 w-6 h-6 cursor-pointer mx-5'/>
            </div>
        </div>
        
        <img src={darkSearch} alt="search-icon" onClick={()=>setToggleSearch((prev)=>!prev)} className={`sm:hidden ${toggleSearch ? 'hidden' : 'flex'} w-6 h-6 cursor-pointer mx-5`}/>
        
        <img src={menu} onClick={() => setToggle((prev)=>!prev)} className = 'flex w-8 h-8 object-contain cursor-pointer'/>
        
        <div className = {`h-screen z-[5] ${toggle ? 'right-0' : '-right-full'} flex fixed top-0  bg-red-700 px-2 py-7 transform ease-linear duration-500 flex-col gap-y-5`}>
            <div className='flex w-full justify-end mb-5 mr-3 cursor-pointer'>
                <img onClick={() => setToggle((prev)=>!prev)} src={close} className='w-8 h-8 object-contain'/>
            </div>
            <Link to='/'>
                <div className='flex w-full flex-row items-center text-white justify-start px-10 py-2 cursor-pointer group hover:bg-red-300'>
                    <img className='w-8 h-8 object-contain mr-5'src={home}/>
                    <p className={`${styles.paragraph} group-hover:text-slate-900`}>Home</p>
                </div>
            </Link>
            <div className='flex w-full flex-row items-center justify-start text-white px-10 py-2 cursor-pointer group hover:bg-red-300'>
                <img className='w-8 h-8 object-contain mr-5'src={fire}/>
                <p className={`${styles.paragraph} group-hover:text-slate-900`}>Trending</p>
            </div>
            <div className='flex w-full flex-row items-center justify-start text-white px-10 py-2 cursor-pointer group hover:bg-red-300'>
                <img className='w-8 h-8 object-contain mr-5'src={info}/>
                <p className={`${styles.paragraph} group-hover:text-slate-900`}>About</p>
            </div>
        </div>
    </nav>
  )}

export default Navbar