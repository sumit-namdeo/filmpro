import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

import React from 'react'

export const AllRouter = () => {
    return (

        <div className="dark:bg-slate-800">
            <Routes>
                <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
                <Route path="Movie/:id" element={<MovieDetail apiPath="movie/now_playing" />} />
                <Route path="Movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
                <Route path="Movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
                <Route path="Movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
                <Route path="search" element={<Search apiPath="search/movie" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes >

        </div>
    )
}
