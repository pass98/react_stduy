
import './App.css';
import ContactForm from './components/ContactForm';
import ContactItem from './components/ContactItem';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';



function App() {
  return (
    <div>
    <section >
    <div className>
      <ContactForm/>
      <ContactList/>
    </div>
    </section>
    </div>
  );
}

export default App;
