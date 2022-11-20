import { Route, Routes } from 'react-router-dom';
import BazaWiedzy from './components/BazaWiedzy/BazaWiedzy';
import Footer from './components/Footer/Footer';
import FullArticle from './components/FullArticle/FullArticle';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='baza-wiedzy' element={<BazaWiedzy />} />
        <Route path='artykul/:articleId' element={<FullArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
