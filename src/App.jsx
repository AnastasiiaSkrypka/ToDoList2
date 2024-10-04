import { Route, Routes } from 'react-router-dom';

// import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Todos />} />
    </Routes>
  );
}
export default App;
