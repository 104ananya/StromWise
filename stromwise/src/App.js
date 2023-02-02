import './App.css';
import Details from './components/Details';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TimeLoc from './components/TimeLoc';
import TopButtons from './components/TopButtons';


// import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 ">
      <TopButtons />
      <Inputs/>

      <TimeLoc/>
      <Details/>
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
