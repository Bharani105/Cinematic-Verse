import { useSearchParams } from 'react-router-dom';
import MovieCards from '../Component/MovieCards'
import SeriesCards from '../Component/SeriesCards';
import Usefetch from '../hooks/Usefetch';
import UseDocTitle from '../hooks/UseDocTitle';

const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: results } = Usefetch(apiPath, queryTerm);

  const pageDocTitle = UseDocTitle(`Search result for ${queryTerm} `)

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{results.length === 0 ? `No result found for ${queryTerm}` : `Result for ${queryTerm}` }</p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {results.map((item) =>
            item.media_type === "movie" ? (
              <MovieCards key={item.id} movie={item} />
            ) : item.media_type === "tv" ? (
              <SeriesCards key={item.id} series={item} />
            ) : null
          )}

        </div>
      </section>
    </main>
  )
}

export default Search
