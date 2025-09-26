import './App.css'
import { Suspense, use } from 'react';
import Navbar from './components/Navbar'
import Card from './components/card';
import DarkFooter from './components/footer'



const fetchTickers = fetch("/data.json").then(res => res.json());


function App() {

  const ticketesData = use(fetchTickers);

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className='grid md:grid-cols-2 grid-cols-1 space-x-4'>
          {ticketesData.map(ticket => <Card key={ticket?.id} ticket={ticket}></Card>)}
        </div>
      </Suspense>
      <DarkFooter></DarkFooter>
    </>
  )
}

export default App
