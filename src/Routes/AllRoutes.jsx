import React from 'react'
import { Route,Routes } from 'react-router-dom'

import {MovieList,MovieDetail, SeriesList, SeriesDetail,Search,PageNotFound,Faviorute} from '../Pages'

const AllRoutes = () => {
  return (
    <div className='dark:bg-[#1E293B]'>
      <Routes>
        <Route path='/' element={<MovieList apiPath="movie/now_playing" title="Home"/>} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path="/series/popular" element={<SeriesList apiPath="tv/popular" title="Popular Series" />} />
        <Route path="/series/:id" element={<SeriesDetail />} />
        <Route path='/movies/popular' element={<MovieList apiPath="movie/popular" title="Popular"/>} />
        <Route path='/movies/top' element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>} />
        <Route path='/movies/upcoming' element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>} />
        <Route path='/myList' element={<Faviorute apiPath="myList" title="MyList"/>} />
        <Route path="/search" element={<Search apiPath="search/multi" />} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
