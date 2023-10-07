/* взял здесь
https://headlessui.com/react/combobox
*/
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Switch } from '@headlessui/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Bot, InlineKeyboard } from "grammy";
import Notification from '../components/ui/Notification'
import MyModal from '../components/ui/MyModal';
import { render } from '@testing-library/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactForm (props) {
  const [agreed, setAgreed] = useState(false)
  let navigate = useNavigate(); 
  const routeChange = (path, data) => { 
    path = `/`; 
    navigate(path, data);
  }

  const bot = new Bot("5312475410:AAEqIlh5nUPxdFpq1J_tab7LGJGR7ILvoSw"); 
  const myId = 251465357
  const location = useLocation();
  const gymName = location.state.name;
  let chatId = location.state.chatId;


  function handleSubmit(event) {
    event.preventDefault();

    const
    first_name = document.getElementById ('first-name').value,
    last_name = document.getElementById ('last-name').value,
    message = document.getElementById ('message').value,
    prefix =  document.getElementById ('country').value

    let
    phone = document.getElementById ('phone-number').value

    phone = phone.replace(/\D/,'')
    if (phone.length === 10) {
      phone = prefix + phone
    } else
    if (phone.length === 11 || phone.length === 12) {
      phone = prefix + phone.slice (1)
    } 

    const msg = 
    `Новый запрос на ФТ ✅\n${chatId ? '' : (chatId = myId, '\nКлуб: ' + gymName )}\nФИО: ${last_name+' '+first_name}\nТелефон: <code>${phone}</code>\n\nПожелания:\n"${message}"`,
    linkWa = 'wa.me/'+ phone.slice(1),
    linkTg = 't.me/'+ phone,
    keys = new InlineKeyboard()
    .url("WhatsApp", linkWa)
    .url("Telegram", linkTg)
     
    if (first_name && phone) {
        if (agreed) {
        bot.api.sendMessage (chatId, msg, {
          parse_mode: 'html',
          reply_markup: keys
        })
        // render(<Notification />)
      } else 
        render (
          <Notification msg={'Пожалуйста, согласитесь с политикой конфиденциальности 🙏🏼'} />
        )
    } else
    render (
        <Notification msg={'Введите пожалуйста имя и телефон для связи 🙏🏼'} />
    )
  }

  
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden={true}>
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f4c175] to-[#9089fc] opacity-70 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Заполните форму, пожалуйста</h2>
        <p className="px-10 mt-2 text-sm leading-6 text-gray-600">
          Мы передадим информацию координатору, он подберет тренера, который свяжется с вами.
        </p>
      </div>
      
      {/* Начинается форма */}
      <form action="#" method="POST" className="mx-auto mt-12 max-w-xl">
        <div className="px-8 sm:px-0 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="
              block text-sm font-semibold leading-6 text-gray-900">
              Ваше имя
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
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
          </div>

          <div>
            <label htmlFor="last-name" className="
              block text-sm font-semibold leading-6 text-gray-900">
              Фамилия
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Ваш телефон
            </label>
            <div className="relative mt-2.5">
              <div 
              hidden={true}
              className="absolute inset-y-0 left-0 flex items-center">
                <label 
                hidden={true}
                htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  hidden={true}
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>+7</option>
                  <option>+9</option>
                  {/* <option>EU</option> */}
                </select>
                <ChevronDownIcon
                  hidden={true}
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden={true}
                />
              </div>
              <input
                placeholder='начиная с "+7"'
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-2 pl-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Пожелания по дате, времени и тренеру
            </label>
            <div className="mt-2.5">
              <textarea
                autoComplete = "off"
                name="message"
                id="message"
                rows={5}
                className="h-auto block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={'Добрый день! Хочу пройти фитнес диагностику.\nУдобные дни: \nВремя: '}
              />
            </div>
          </div>

          <div className=''>
            <label className="
              text-sm font-semibold leading-6 text-gray-900">
              Ваш клуб: {gymName}
            </label>

            {/* политика конфиденциальности */}
            <div className='mt-7 grid sm:align-bottom'> 
            <Switch.Group as="div" className="
              flex sm:col-span-2">

              <div className="
              flex h-6 items-center"> 
                <Switch
                  id='switch'
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed 
                    ? 'bg-indigo-600' 
                    : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600'
                  )}
                >
                  <span
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
                </div>
                <Switch.Label className="
                text-start ml-4 text-sm w-auto text-gray-600">
                  Подтверждаю согласие с {' '}
                  <a href="https://google.ru" className="font-semibold text-indigo-600">
                    политикой&nbsp;конфиденциальности.
                  </a>
                </Switch.Label>
              </Switch.Group>
            </div>

            {/* нижний div это кнопки */}
            <div className='
            mt-0 gap-4 grid grid-cols-2 items-baseline text-center'>
              <button
                  type="button"
                  onClick={routeChange}
                  className="block w-full rounded-md h-9 border-orange-300 border-2  
                  text-center text-sm font-semibold
                  text-orange-400 shadow-sm hover:bg-orange-300 hover:text-white
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                  focus-visible:outline-indigo-600">
                  Сменить клуб
              </button>

              <button
                type="submit"
                className="mt-4 h-9 w-auto rounded-md
                bg-indigo-600 px-3.5 text-center text-sm font-semibold 
                text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600"
                onClick={ handleSubmit }
              > Отправить
              </button>
            </div>   
          </div>
        </div>
      </form>
    </div>
  )
}
