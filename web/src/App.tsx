import { useState, useEffect } from "react";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import logoImg from "./assets/logoe-sports.svg";

import "./styles/main.css";

interface Games {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(response => response.json())
    .then((data) => {
      setGames(data);
    })
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logotipo da aplicação" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-galaxy-gradient bg-clip-text text-transparent">Duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {/* <GameBanner bannerUrl="/game-1.png" title="League of legends" adsCount={3} /> */}

        {
         games.length > 0 && games.map(game => (
          <GameBanner 
              key={game.id} 
              bannerUrl={game.bannerUrl} 
              title={game.title} 
              adsCount={game._count.ads} 
          />
         ))
        }
      </div>

      <CreateAdBanner />

    </div>
  )
}

export default App
