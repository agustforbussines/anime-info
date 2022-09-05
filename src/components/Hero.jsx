import Card from '../components/Card'
import styles from '../style'
import arrow from '../assets/arrow.svg'

const Hero = ({film,loading}) => {
  return (
    <>
    {loading ? (
      <section className={`${styles.paddingX}`}>
        {film.length > 0 ? (
          <>
            <div className='flex flex-row items-center justify-between w-full mb-5 border-b-[1px] border-slate-300'>
              <h2 className={`${styles.heading2}`}>Popular Anime</h2>
              <img src={arrow} className='w-8 h-8 cursor-pointer'/>
          </div>
          <div className={`grid grid-flow-row lg:grid-cols-4 lg:gap-16 ss:grid-cols-2 md:grid-cols-3 grid-cols-1 w-full`}>
            {film.filter((movie) => movie.attributes.episodeLength !== null)
            .map((movie,index)=>(
              <Card movie={movie} key={index}/>
            ))}
          </div>
        </>
        ) : (
          <h1 className={`${styles.heading2} text-white`}>Pencarian tidak ditemukan</h1>
        )} 
      </section>
    
    ) : (
      <h1 className=' xs:text-2xl ss:text-3xl  lg:text-5xl text-white text-center'>Loading....</h1>
    )}
    </>
  )
}

export default Hero