import React from 'react'
import ReactDOM from 'react-dom/client'
import MiniDrawer from "./App";

import './index.css'
import { CssBaseline } from '@mui/material';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Invoices from './page/invoices/Invoices';
import Calendar from './page/calendar/Calendar';
import LineChart from './page/lineChart/LineChart';

import NotFound from './page/notFound/NotFound';
import Team from './page/team/Team';
import Cont from './page/cont/Cont';
import Form from './page/form/Form';

import PieChart from './page/pieChart/PieChart';
import BarChart from './page/barChart/BarChart';
import Dashboard from './page/dashboard/Dashboard';
import Category from './page/category/Category';
import Products from './page/products/Products';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MiniDrawer />}>
      <Route index element={<Dashboard />}/>
      <Route path="dashboard"element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="cont" element={<Cont />}/>
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="barChart" element={<BarChart />} />
      <Route path="pieChart" element={<PieChart />} />
      <Route path="lineChart" element={<LineChart />} />
      <Route path="category" element={<Category />} />
      <Route path='products' element={<Products />}/>
     <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
);
