import './App.css';
import logo from 'assets/brand/logo.png';


export default function App() {
  return (
    <div>
      <h1 className="text-3xl bg-brandSecondary text-neutralWhite font-dancing font-normal">
        Match me with your tutor
      </h1>
      <img src={logo} />
    </div>

  )
}
