import MovieCards from '../Component/MovieCards'
import Usefetch from '../hooks/Usefetch';
import UseDocTitle from '../hooks/UseDocTitle';
const MovieList = ({apiPath,title}) => {

  const {data:movies} = Usefetch(apiPath);
  const pageDocTitle = UseDocTitle(title)
  
  return ( 
    <main>
     <section className='max-w-7xl mx-auto py-7'>
      <div className='flex justify-start flex-wrap [@media(min-width:340px)_and_(max-width:1200px)]:justify-evenly'>
        {movies.map((movie)=>(
          <MovieCards key={movie.id} movie={movie}></MovieCards>
        ))}
        
      </div>
     </section>
    </main>
  )
}

export default MovieList 
