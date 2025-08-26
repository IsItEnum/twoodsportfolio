import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

export default function Layout() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
