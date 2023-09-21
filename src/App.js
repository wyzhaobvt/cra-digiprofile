import './App.css';
import NavBar from './components/NavBar';
import JobPosition from './components/JobPosition';
import Experience from './components/Experience';
import Accomplishments from './components/Accomplishments';
import Project from './components/Project';
import Technology from './components/Technology';
import EduCert from './components/EduCert';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
     <NavBar/>
     <JobPosition/>
     <Experience/>
     <Accomplishments/>
     <Project/>
     <Technology/>
     <EduCert/>
     <ContactForm/>
    </div>
  );
}

export default App;
