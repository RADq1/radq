import { Home } from './pages/Home/Home';
import { ModalProvider } from './context/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <Home/>
    </ModalProvider>
  );
}

export default App;
