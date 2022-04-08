import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Day1 from "./components/day1";
import Day2 from './components/day2';
import Day3 from './components/day3';
import Day4 from './components/day4';
import Day5 from './components/day5';
import Day6 from './components/day6/Profile';
import Day7 from './components/day7';

import Feature from './components/day5/nested-route/Feature';
import New from './components/day5/nested-route/New';
import Layout from "./components/layout";
import Login from './components/day6/Login';

import { AuthProvider } from './components/day6/context/user';
import { PrivateRoute } from './components/day6/PrivateRoute';
import { Provider } from 'react-redux';
import store from './redux/store';

const LazyPage = React.lazy(() => import('./components/day5/LazyLoaded'));

const routes = [
  { name: "Day 1", path: "/", element: <Day1 /> },
  { name: "Day 2", path: "/day2", element: <Day2 /> },
  { name: "Day 3", path: "/day3", element: <Day3 /> },
  { name: "Day 4", path: "/day4", element: <Day4 /> },
  { 
    name: "Day 5", 
    path: "/day5", 
    element: <Day5 />,
    child: [
      { name: 'New', path: 'new', element: <New /> },
      { name: 'Feature', path: 'feature', element: <Feature /> },
    ]
  },
  { name: "Day 6", path: "/profile", element: <Day6 /> },
  {  
    name: "Redux", 
    path: "/redux", 
    element: <Provider store={store}><Day7 /></Provider> 
  },
]

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          {routes.map((r) => {
            if (r.child) {
              return (
                <Route key={r.path} path={r.path} element={<PrivateRoute>{r.element}</PrivateRoute>}>
                  <Route index element={<New />} />
                  {r.child.map((ch) => (
                    <Route key={ch.path} path={ch.path} element={ch.element} />
                  ))}
                </Route>
              )
            }else {
              return <Route key={r.path} path={r.path} element={<PrivateRoute>{r.element}</PrivateRoute>} />
            }
          })}
          <Route 
            path='/about'
            element={
              <React.Suspense fallback="loading ... ">
                <LazyPage />  
              </React.Suspense>
            }
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
