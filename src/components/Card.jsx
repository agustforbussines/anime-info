import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Card = ({movie}) =>  {
  useEffect(()=>{
    AOS.init({duration:2500})
  },[])
  return (
    <Link to={`/about/${movie.id}`}>
    <section data-aos="fade-up" className='w-[250px] cursor-pointer lg:ml-0 mx-auto'>
          <img src={movie.attributes.posterImage.small} alt="img" className=' transition ease-in hover:scale-105 duration-75 animate-fade w-[100%] rounded-lg'/>
          <div className='py-2'>
            <p className='font-Inter font-semibold text-[18px] text-white max-h-8 overflow-hidden'>{movie.attributes.canonicalTitle}</p>
            <div className='flex flex-row w-full items-center justify-between'>
              <p className='font-Inter text-[10px] text-slate-300'>{`${movie.attributes.episodeLength} Eps`}</p>
              <p className='font-Inter text-[10px] text-slate-300'>{`Rating : ${movie.attributes.averageRating}`}</p>
            </div>
          </div>
      </section>
    </Link>
  )}


export default Card