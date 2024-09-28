//import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieCard } from '../components/MovieCard';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';

export const Search = ({ apiPath }) => {

    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");

    const { data: movies } = useFetch(apiPath, queryTerm);

    useTitle(`${queryTerm} / Moviemate`)

    return (
        <main>
            <section>
                <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No Result found` : `Results for ${queryTerm}`}</p>
            </section>
            <section className='max-w-7xl mx-auto py-7'>
                <div className='flex justify-start flex-wrap'>

                    {movies.map((movie) => (

                        <MovieCard key={movie.id} movie={movie} />
                    ))}

                </div>
            </section>
        </main>
    )
}
