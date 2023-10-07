'use client';

import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { usePathname } from 'src/routes/hooks';
import ComingSoonView from 'src/sections/status/view/coming-soon-view'; 

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col bg-gray-100 dark:bg-slate-900 dark:text-gray-50">
      <ComingSoonView/>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
