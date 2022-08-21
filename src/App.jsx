import Home from './views/Home';
import Error from './views/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  function checkDarkModeOnStart() {
    // It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  checkDarkModeOnStart()

  return (
    <div className='bg-white dark:bg-costum-gray-700 min-h-[100vh]'>

      <Router>
        <Routes >

          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
