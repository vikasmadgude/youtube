import './App.css';
import ContactForm from './components/contactform';
import IntroSection from './components/introsection';
import About from './components/about';
function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactForm />
      <About />
    </div>
  );
}

export default App;
