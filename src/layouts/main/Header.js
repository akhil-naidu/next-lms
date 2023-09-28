import React from 'react';

import Box from '@mui/material/Box';

const Header = () => (
  <Box className="min-w-xl flex h-14 items-center justify-between bg-yellow-500 shadow-md ">
    <div>Logo</div>
    <nav className=" space-x-12">
      <span>Home</span>
      <span>About</span>
      <span>Courses</span>
      <span>Something</span>
    </nav>
    <div>toggel</div>
  </Box>
);

export default Header;
