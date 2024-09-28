import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export const PageNotFound = () => {

    useTitle("Page Not Found / Moviemate");
    // useEffect(() => {
    //     document.title = `Page Not Found / Moviemate`
    // })

    return (
        <main>
            <section className='flex flex-col justify-center px-2'>

                <div className='flex flex-col items-center my-4'>
                    <p className='text-7xl font-bold my-10 dark:text-white'>404, OOps</p>
                    <p className='text-7xl font-bold my-10 dark:text-white'> We couldent find your page</p>
                    <button></button>
                </div>
                <Link to="/">
                    <button className='w-64 text-xl text-white bg-gradient-to-r '>Back to Home</button>
                </Link>
            </section>
        </main>
    )
}
