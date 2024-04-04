import HomePage from "./Pages/HomePage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route>
        <Route path='/' element={<HomePage />}/>

       </Route>
 )
);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
