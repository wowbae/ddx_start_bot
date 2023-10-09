import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Welcome } from './pages/Welcome';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactForm from './pages/ContactForm';
import ErrorPage from './pages/Error-page';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
    // если хотим отображать элементы внутри главного, то children
    children: [
      {
        path: "contacts/:contactId",
        element: <div></div>,
      },
    ],
    // loader: formLoader,
  },
  {
    path: "form/", /*:contactId*/
    element: <ContactForm/> // сомнения в {props}
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// // обработка клавиатур inline
// bot.on('callback_query', async (ctx) => {
//   await listenKeyboards (ctx)
//   await ctx.answerCallbackQuery()
// }) 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
