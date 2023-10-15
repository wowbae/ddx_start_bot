import { Fragment, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const gyms = [
  { id: 1, chatId: 251465357, name: 'DDX Авиапарк' },
  { id: 2, chatId: 251465357, name: 'DDX Щука' },
  { id: 3, name: 'DDX Третий' },
  { id: 4, name: 'DDX Четвертый' },
  { id: 5, name: 'DDX Четвертый' },
  { id: 6, name: 'DDX Четвертый' },
  { id: 7, name: 'DDX Четвертый' },
  { id: 8, name: 'DDX Четвертый' },
  { id: 9, name: 'DDX Четвертый' },
  { id: 10, name: 'DDX Четвертый' },
  { id: 11, name: 'DDX Четвертый' },
  { id: 12, name: 'DDX Четвертый' },
  { id: 13, name: 'DDX Четвертый' },
  { id: 14, name: 'DDX Четвертый' },
  // More users...
]


export default function MyCombobox () {
  // const [selected, setSelected] = useState(gyms[0])
  const [selected, setSelected] = useState()
  const [query, setQuery] = useState('')
  const [value, setValue] = useState()

  // от Исмаила
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);

  
  const handleBlur = () => {
    document.activeElement.blur();
    document.getElementById('welcome-input').blur()
    !selected && document.getElementById('h2').focus()
    // console.log('focus: ',document.activeElement);
  };

  const handleScroll = () => {
    document.activeElement.blur();
  };
  // от Исмаила
  

  const filteredPeople =
    query === ''
      ? gyms
      : gyms.filter((gym) =>
          gym.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
        
  function handleChange(event) {
    let e = event.target.value
      setValue(e)
    if (e === '') {
      // document.activeElement.blur()
    }
    let f = gyms.filter((gym) => {
      return gym.name.toLowerCase().includes(e.toLowerCase())
    })

    if (f.length === 1 ) {
      routeChange('/form', {state: f[0] } )
    }
  }

  let navigate = useNavigate(); 
  const routeChange = (path, data) => { 
    // path = `/form`; 
    navigate(path, data);
  }
  

  return (
    // <div className="fixed top-16 w-72">
    <div className="">
      <div id='h2' tabIndex='0' role="button"/>
      <Combobox onChange={setSelected}>
        { useEffect(()=>{
            selected && routeChange('/form', {state: selected })
          }) // тут еще был массив [selected]
        }

        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <input
              type='text'
              id='welcome-input'
              readonly
              ref={inputRef}
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(gym) => gym.name}
              onChange={handleChange}
            />
            <Combobox.Button 
                onClick={handleBlur} 
                className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
                onClick={ handleBlur }
                // onClick={handleBlur}
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          > 
            <div ref={resultsContainerRef} onScroll={handleScroll}>
              <Combobox.Options 
              // id='options'
              className="absolute mt-1 max-h-60 w-full overflow-y-scroll
              rounded-md bg-white py-1 text-base shadow-lg 
              ring-1 ring-black ring-opacity-5 
              focus:outline-none sm:text-sm"
              onScroll={handleScroll}
              >
                {filteredPeople.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Клуб не найден :(
                  </div>
                ) : (
                  filteredPeople.map((gym) => (
                    <Combobox.Option
                      key={gym.id}
                      className={({ active }) =>
                        `rounded-md mx-1 relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={gym}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {gym.name}
                          </span>

                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </div>
            
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
