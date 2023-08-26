import { Buttons } from './components/Buttons';
import { Component } from './components/Component';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import Illustration from './components/Illustration'

function App() {

  return (
    <div className=" flex flex-col items-center justify-center bg-desatured-blue-3 w-screen h-screen">
      <div>
        <Illustration />
      </div>
      <div className=" w-[400px] bg-desatured-blue-2  flex flex-col align-center p-8 pt-0 rounded-b-3xl">
        <Hero />
        <Component />
        <Buttons />
      </div>
      <Footer/>
    </div>
  );
}

export default App
