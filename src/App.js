import './App.css';
import Navigation from './components/Navigation';
import Information from './components/Information';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <Navigation />
      <Information />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
