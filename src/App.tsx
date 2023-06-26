import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Lazy from './layout/Lazy';

export default function App() {
  const Home = lazy(()=> import('./pages/Home'))
  const NotFound = lazy(()=> import('./components/NotFound'))
  return (
    <Suspense fallback={<Lazy/>}>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/404' element={<NotFound/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Suspense>
  );
}
