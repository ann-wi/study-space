import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import TodoList from './pages/todo-list';
import Resources from './pages/resources';
import NotFound from './pages/not-found';

export default function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
     </BrowserRouter>
  )
}
