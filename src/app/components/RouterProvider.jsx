import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from '../routers'
const RouterProvider = ({ children }) => {
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
      </Routes>
      {children} 
    </BrowserRouter>
  );
};

export default RouterProvider;