 export const Done =()=>{
    return (
        <div>
            <h1>Запрос отправлен!</h1>
            <label htmlFor="first-name" className="
              block text-sm font-semibold leading-6 text-gray-900">
              Если хотите задать другой вопрос, напишите в поле ниже
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className="
                  block w-full rounded-md border-0 px-3.5 py-2
                  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 
                  focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                  sm:text-sm sm:leading-6"
              />
            </div>
            
            <a 
                href='https://t.me/wowbae'
                target="_blank"
                rel="noreferrer"
                className='text-gray-400'> 
                made by @wowbae 
            </a>
        </div>
    )
 }

    