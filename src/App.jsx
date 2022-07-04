import ParallaxView from './views/ParallaxView';
import MainView from './views/MainView';

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
    <div className="background">
      <MainView />
    </div>
  );
}

export default App;
