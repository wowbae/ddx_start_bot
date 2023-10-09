import '../app/App.css';
import ContactForm from '../../pages/contact-form';

const tg = window.Telegram.WebApp

function App() {
  //   useEffect(()=>{
  //     tg.ready()
  //   })

  // const onCLose = () => {
  //   tg.close()
  // }

  return (
    <div className="App">
      <ContactForm />
    </div>
  );
}

export default App;
