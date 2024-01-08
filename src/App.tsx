import './App.css';
import Catalog from './components/Catalog';
import { Provider, View, defaultTheme, repeat } from '@adobe/react-spectrum';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Comparison from './components/Comparison';
import { labels, route } from './constants';

/**
 * Capabilities:
 * 
 * A catalog page listing the different breeds of dogs
 * 
 * The ability to select a specific dog breed to obtain more information (e.g., dog profile and image)
 * 
 * Allow a user to compare different dog breeds to help identify a dog they like
 * 
 */


function App() {
  let navigate = useNavigate();

  return (
    <div className='app'>
      <Provider theme={defaultTheme} colorScheme={'light'} router={{navigate}}>
        <Routes>
          <Route path={route.ROOT} element={<Catalog />} />
          <Route path={route.COMPARE} element={<Comparison />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
