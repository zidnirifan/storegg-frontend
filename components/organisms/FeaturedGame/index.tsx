import { useCallback, useEffect, useState } from 'react';
import { getFeaturedGames } from '../../../services/player';
import GameItem from '../../molecules/GameItem';

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeaturedGameList = useCallback(async () => {
    const data = await getFeaturedGames();
    setGameList(data);
  }, [getFeaturedGames]);

  useEffect(() => {
    getFeaturedGameList();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item) => (
            <GameItem
              key={item._id}
              thumbnail={`${process.env.NEXT_PUBLIC_IMG}/${item.thumbnail}`}
              title={item.name}
              category={item.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
