import {useState,useEffect} from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  const [film,setFilm] = useState([])
  const [loading,setLoading] = useState(false)

  const loadData = async () => {
   try{
    const data = await axios.get('https://kitsu.io/api/edge/trending/anime').then(res=>{
      setFilm(res.data.data)
      console.log(res.data.data)
    })
   } catch(err){
    console.log(err.message)
   }
   setLoading(true)
  }

  useEffect(()=>{
    loadData();
  },[])

  return (
    <Router>
      <section className="bg-primary w-full min-h-screen overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Navbar setFilm={setFilm}/>
          </div>
        </div>
        <div className={`${styles.flexStart} ${styles.paddingY}`}>
          <div className={`${styles.boxWidth}`}>
            <Switch>
              <Route exact path="/">
                <Hero film={film} loading={loading}/>
              </Route>
              <Route path="/about/:id">
                <About/>
              </Route>
            </Switch>
          </div>
        </div>
      </section>
    </Router>

  );
}

export default App;
