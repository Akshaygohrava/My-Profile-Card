import './app.css'

function App() {

  return (
    <>
      <div className='container-profile flex flex-col gap-5 rounded-lg bg-stone-900'>
         <img className='rounded-full' src="Akshay-Gohrava.jpeg" alt="Akshay-Gohrava" srcset="" />
         <h1>Akshay-Gohrava</h1>
        <h2 className=' text-lime-500 mb-3'>Mumbai, Maharastra</h2>
        <p className='text-slate-200'>"Front-End Devloper And Designer"</p>

        <button><a href="">GitHub</a></button>
        <button><a href="">LinkeDin</a></button>
        <button><a href="">front-End Devloper</a></button>
        <button><a href="">Twitter</a></button>
        <button><a href="">Instagram</a></button>

      </div>
    </>
  )
}

export default App
