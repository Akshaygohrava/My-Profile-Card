import './app.css'
function App() {

  return (
    <>
      <div className='container-profile flex flex-col gap-5 rounded-lg bg-stone-900'>
         <img className='rounded-full' src="Akshay-Gohrava.jpeg" alt="Akshay-Gohrava" srcset="" />
         <h1>Akshay-Gohrava</h1>
        <h2 className=' text-lime-500 mb-1'>Mumbai, Maharastra</h2>
        <p className='text-slate-200'>"Front-End Devloper And Designer"</p>
        <button><a href="https://github.com/Akshaygohrava/">GitHub</a></button>
        <button><a href="https://in.linkedin.com/in/akshaygohrava">LinkeDin</a></button>
        <button><a href="https://codepen.io/Akshaygohrava">front-End Dev</a></button>
        <button><a href="">Twitter</a></button>
        <button><a href="https://www.instagram.com/akshay_gohrava?igsh=MTg2ODQyb3JkZ3NvbA==">Instagram</a></button>
      </div>
    </>
  )
}
export default App
