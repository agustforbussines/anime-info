import styles from '../style'
const Aboutcard = ({movie}) => {
    return (
        <>
        {movie.map((realMovie,index)=>(
            <section className={`${styles.paddingX} flex flex-row items-start`} key={index}>
            <div className='px-3'>
              <p>{realMovie.attributes.canonicalTitle}</p>
              <img src={realMovie.attributes.posterImage.medium} alt="poster" className="w-[80%] rounded-lg shadow-lg shadow-white"/>
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
  
  export default Aboutcard