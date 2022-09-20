
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import logoImg from "./assets/logoe-sports.svg";

import "./styles/main.css";

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logotipo da aplicação" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-galaxy-gradient bg-clip-text text-transparent">Duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl="/game-1.png" title="League of legends" adsCount={3} />
      </div>

      <CreateAdBanner />

    </div>
  )
}

export default App
