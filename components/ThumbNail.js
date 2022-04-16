import { ThumbUpIcon } from '@heroicons/react/outline'
import React from 'react'

const ThumbNail = ({ result }) => {

    const BASE_URL = "https://image.tmdb.org/t/p/original/"

    return (
        <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105">
            <img className="h-4/6 w-[500px]" src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} alt="" />

            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="text-2xl mt-1 text-white transition-all duartion-100 ease-in-out group-hover:font-medium">{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type}  `}{" "}
                    {result.release_date || result.first_air_date} * {" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>

        </div>
    )
}

export default ThumbNail