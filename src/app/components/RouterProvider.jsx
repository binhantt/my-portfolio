import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '../routers';
import Page404 from '../pages/page404'; // Import your 404 page

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const Component = route.element;
          return (
            <Route 
              key={route.path}
              path={route.path}
              element={<Component />}
            />
          );
        })}
        {/* Route fallback cho 404 phải nằm trong <Routes> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
