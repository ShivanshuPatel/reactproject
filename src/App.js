import './App.css';
import Cards from "./Component/Cards.jsx"
function App() {
  return (
    <div className="w-screen h-screen">
        <div className='bg-orange-400 w-auto h-80 mx-auto'></div>
          <div className='bg-white w-auto h-80 mx-auto'>
                <div className='w-80 h-80 rounded-full bg-white border-4 border-black content-center mx-auto relative'>
                  <div className='h-1 bg-black w-[315px] rotate-180  absolute '></div>
                  <div className='h-1 bg-black w-[315px] rotate-90  absolute'></div>
                  <div className='h-1 bg-black w-[315px] rotate-45  absolute'></div>
                  <div className='h-1 bg-black w-[315px] rotate-12  absolute'></div>
                  <div className='h-1 bg-black w-[315px] rotate-45 absolute'></div>
                  <div className='h-1 bg-black w-[315px] rotate-  absolute'></div>
                  <div className='h-1 bg-black w-[315px] rotate-45  absolute'></div>
                  <div className='h-1 bg-black w-[315px] rotate-12  absolute'></div>
                  <div className='h-1 bg-black w-[315px] -rotate-180 absolute'></div>
                  <div className='h-1 bg-black w-[315px] -rotate-90  absolute'></div>
                  <div className='h-1 bg-black w-[315px] -rotate-45  absolute'></div>
                  <div className='h-1 bg-black w-[315px] -rotate-12  absolute'></div>
                 
                </div>
          </div>
          <div className='bg-green-500 w-auto h-80 mx-auto'>
                         
        </div>


    </div>
  );
}

export default App;
