import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouer';




export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path="/login/*" element={
          <PublicRouter>
           <Routes>
           <Route path='/*' element={<LoginPage />} />
           </Routes>
          </PublicRouter>
        } />

        <Route path='/*' element={
          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>
        } />


      </Routes>

    </>
  )
}
