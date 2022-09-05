import { useParams } from "react-router-dom"
import axios from 'axios'
import { useState,useEffect } from "react"
import styles from '../style'


const About = () => {
  const {id} = useParams() 
  const [movie,setMovie] = useState([])
  const loadData = async () => {
    try{
     const data = await axios.get(`https://kitsu.io/api/edge/anime?filter[id]=${id}`).then(res=>{
       setMovie(res.data.data)
     })
    }catch(err){
     console.log(err.message)
    }
   }
  useEffect(()=>{
    loadData()
  },[])

  return (
    <>
    {movie.map((realMovie,index)=>(
            <section className={`${styles.paddingX} flex md:flex-row flex-col md:items-start items-center`} key={index}>
              <div className='px-3 md:mb-0 mb-10 flex flex-col justify-center'>
                <img src={realMovie.attributes.posterImage.medium} alt="poster" className="md:w-[80%] rounded-lg shadow-lg shadow-white"/>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col justify-start items-center">
                    <h1 className='font-Inter font-normal text-5xl text-white'>{realMovie.attributes.canonicalTitle}</h1>
                    <div className='flex flex-row items-center justify-center mt-3'>
                      <div className='border-2 border-slate-200 bg-transparent text-slate-200 text-sm rounded-lg px-2 py-1'>{realMovie.attributes.subtype}</div>
                      <div className='border-2 border-slate-200 bg-transparent text-slate-200 text-sm rounded-lg ml-3 px-2 py-1'>{realMovie.attributes.ageRating}</div>
                    </div>           
                </div>
                <div className='w-full text-white font-Inter items-start mt-7'>
                  <h2 className='text-2xl '>Synopsis</h2>
                  <p className='mt-2 text-md text-slate-300 text-justify'>{realMovie.attributes.description}</p>
                </div>
              </div>
        </section>
        ))}
    </>
  )
}

export default About