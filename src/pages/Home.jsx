import React, { useEffect } from 'react'
import { GifState } from '../context/gif_context';
import Gif from '../components/Gif';
import FilterGif from '../components/FilterGif';

const Home = () => {
  const {gf, gifs, setGifs, filter} = GifState();
  const fetchTrendingGIFs = async () => {
    const {data} = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };
  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);

  return (
    <div>
      <img src='/banner.gif' alt='Earth Banner' className='mt-2 rounded w-full'/>
      <FilterGif showTrending/>
      <div className='columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-2'>
        {gifs.map((gif) => {
          return <Gif gif={gif} key={gif?.title} />;
        })}
      </div>
    </div>
  )
}

export default Home