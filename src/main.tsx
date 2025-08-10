import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import AppLayout from './ui/AppLayout'
import HomePage from './pages/HomePage'
import ResearchPage from './pages/ResearchPage'
import PublicationsPage from './pages/PublicationsPage'
import PresentationsPage from './pages/PresentationsPage'
import ExperiencePage from './pages/ExperiencePage'
import ServicePage from './pages/ServicePage'
import ConsultingPage from './pages/ConsultingPage'
import ContactPage from './pages/ContactPage'
import CvPage from './pages/CvPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: 'publications', element: <PublicationsPage /> },
      { path: 'presentations', element: <PresentationsPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'service', element: <ServicePage /> },
      { path: 'consulting', element: <ConsultingPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'cv', element: <CvPage /> },
    ],
  },
], { basename: import.meta.env.BASE_URL })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


