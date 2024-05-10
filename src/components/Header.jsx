import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HiBars3BottomRight, HiEllipsisVertical } from "react-icons/hi2";
import { GifState } from '../context/gif_context';
import GifSearch from './GifSearch';

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);
    const {gf, favorites} = GifState();

    const fetchGifCategories = async () => {
        const {data} = await gf.categories();
        setCategories(data);
    }
    useEffect(() => {
        fetchGifCategories();
    },[])

  return (
    <nav>
        <div className='relative flex justify-between items-center mb-2 gap-4'>
            <Link className='flex gap-2'>
                <img src='/logo.svg' alt='Giphy Logo' className='w-8' />
                <h1 className='text-5xl font-bold tracking-tighter cursor-pointer'>GIPHY</h1>
            </Link>
            <div className='font-bold text-md flex gap-2 items-center'>
                {/* Redering Categaries*/}
                {categories?.slice(0, 5)?.map((category) => {
                    return <Link key={category.name} to={`/${category.name_encoded}`} className='px-4 py-1 border-b-4 hover:gradient hidden lg:block'>{category.name}</Link>
                })}
                
                <button onClick={() => setShowCategories(!showCategories)}>
                    <HiEllipsisVertical size={35} className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""} border-b-4 hidden lg:block`}/>
                </button>

                {favorites.length > 0 && <div className='h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded'>
                    <Link to="/favorites">Favorite GIFs</Link>
                </div>}

                <button>
                    <HiBars3BottomRight size={35} className='text-sky-400 black lg:hidden'/>
                </button>
            </div>
        {showCategories && 
            <div className='absolute right-0 top-14 px-10 pb-9 pt-6 w-full gradient z-20'>
                <span className='text-3xl font-extrabold'>Categaries</span>
                <hr className='bg-gray-100 opacity-50 my-5'/>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1'>
                    {categories?.map((category) => {
                        return (
                            <Link key={category.name} to={`/${category.name_encoded}`} className='font-bold'>{category.name}</Link>
                        );
                    })}
                </div>
            </div>}
        </div>

        <GifSearch/>
    </nav>
  )
}

export default Header