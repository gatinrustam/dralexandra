import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx'
import Price from './components/Price/Price.jsx'
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "price",
    element: <Price />,
  },
]);


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route 
//       path="/" 
//       element={<App />}
//     >
//       <Route 
//         path="price" 
//         element={<Price />} 
//       />
//       {/* <Route path="contact" element={<Contact />} /> */}
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
