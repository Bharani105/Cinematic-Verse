import {useState,useEffect} from 'react'

const Usefetch = (apiPath,queryTerm="") => {
    const [data,setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${queryTerm}`

    useEffect(()=>{
      async function fetchMovies() {
      const response = await fetch(url);
      const json =await response.json();
      setData(json.results); 
    }
    fetchMovies();
  },[url])
  return {data}
}

export default Usefetch
