'use client';

import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { usePathname } from 'src/routes/hooks';
import MarketingServicesBenefits from 'src/sections/_marketing/services/marketing-services-benefits';

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      <MarketingServicesBenefits/>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
