
import logoImg from "./assets/logoe-sports.svg";

import "./styles/main.css";

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logotipo da aplicação" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-galaxy-gradient bg-clip-text text-transparent">Duo</span> está aqui.
      </h1>
    </div>
  )
}

export default App
