import MyCombobox from "../components/ui/MyCombobox"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const gyms = [
  { id: 1, name: 'DDX Авиапарк' },
  { id: 2, name: 'DDX Щука' },
  { id: 3, name: 'DDX Третий' },
  { id: 4, name: 'DDX Четвертый' },
  // More...
]

export const Welcome = () => {
  const [value, setValue] = useState()

  function handleChange(event) {
    let e = event.target.value
    setValue(e);
    let f = gyms.filter((gym) => {
      return gym.name.toLowerCase().includes(e.toLowerCase())
    })

    // console.log ();

    if (f.length === 1 ) {
      // f[0] - объект с id и name клуба
      routeChange('/form', {state: f[0] } )
      // console.log('great'); // работает 
    }
  }

  function handleKeyDown(event) {
    
    if (event.key === "Enter" || event.key === "Tab") {
      // console.log( event.key )
    } 
    // Пользователь выбрал клуб, переходим к следующей форме
    // Здесь вы можете добавить логику для перехода к следующей форме
  }

  let navigate = useNavigate(); 
  const routeChange = (path, data) => { 
    // let path = `/`; // ее объявляем по факту вызова
    navigate(path, data);
  }

  return (
    <div className="
        relative
        grid 
        grid-rows-2
        h-screen
        min-h-fit
        justify-self-center
        mt-0">
        {/* <div className="w-full grid grid-cols-1 p-20 mt-32 gap-6"> */}
        <div className="
          w-10/12 
          flex-col
          justify-self-center
          px-6 py-44 
          sm:py-44 lg:px-8">
          <h1 className="mb-14 text-center font-bold text-2xl">Добро пожаловать в DDX Fitness 🦾</h1>
          <div className="grid gap-2 text-center items-center align-middle">
              <span className="text-sm text-slate-500 text-">Выберите ваш клуб</span>
              {/* w-1/3  */}
              <div className="
                  justify-self-center">
                  <input 
                    // type="text" 
                    type="hidden" 
                    value={value || ''} 
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown} 
                  />
                  <MyCombobox />
                  
              </div>
          </div>
      </div>
      <footer className="footer absolute align-bottom pb-14">
          <a 
              href='https://t.me/wowbae'
              target="_blank"
              rel="noreferrer"
              className='text-gray-400'> 
              made by @wowbae 
          </a>
      </footer>
    </div>
  )
}

// роутер ?????
// export async function loader({ params }) {
//     const selectedGym = await getGym(params.gymName);
//     return { selectedGym };
// }

/*
<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    */