import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes';
import AuthInfoProvider from './inforProviders/AuthInfoProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthInfoProvider>
      <RouterProvider router={router} />
    </AuthInfoProvider>
  </React.StrictMode>,
)
