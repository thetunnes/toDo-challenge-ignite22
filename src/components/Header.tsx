
import Rocket from "../assets/rocket.svg"

export function Header() {


  return (
    <header className="w-full p-20 bg-gray-700 flex items-center justify-center gap-3">
      <img src={Rocket} alt="Logo foguete roxo com propulsores ligado" />
      <span className="font-sans font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple-dark">todo</span>
    </header>
  )
}
