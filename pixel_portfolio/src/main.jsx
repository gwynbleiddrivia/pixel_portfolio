import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx'
import Home from './pages/Home.jsx'
import MyTechStack from './pages/MyTechStack.jsx'
import Projects from './pages/Projects.jsx'
import Publications from './pages/Publications.jsx'
import ProblemSolving from './pages/ProblemSolving.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children:[
	{
		path:"/",
		element: <Home></Home>
	},
	{
		path:"/mytechstack",
		element: <MyTechStack></MyTechStack>
	},
	{
		path:"/projects",
		element: <Projects></Projects>
	},
	{
		path:"/publications",
		element: <Publications></Publications>
	},
	{
		path:"/problemsolving",
		element: <ProblemSolving></ProblemSolving>
	},
	{
		path:"/contact",
		element: <Contact></Contact>
	},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
