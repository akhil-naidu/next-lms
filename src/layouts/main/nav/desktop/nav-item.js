import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Link from '@mui/material/Link';

import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';

import { StyledNavItem } from './styles';

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  ({ item, open, active, subItem, externalLink, ...other }, ref) => {
    const renderContent = (
      <StyledNavItem
        ref={ref}
        disableRipple
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {item.title}

        {!!item.children && <Iconify width={16} icon="carbon:chevron-down" sx={{ ml: 1 }} />}
      </StyledNavItem>
    );

    // ExternalLink
    if (externalLink) {
      return (
        <Link href={item.path} target="_blank" rel="noopener" color="inherit" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    if (item.children) {
      return renderContent;
    }

    // Default
    return (
      <Link component={RouterLink} href={item.path} color="inherit" underline="none">
        {renderContent}
      </Link>
    );
  }
);

NavItem.propTypes = {
  active: PropTypes.bool,
  externalLink: PropTypes.bool,
  item: PropTypes.shape({
    children: PropTypes.array,
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  open: PropTypes.bool,
  subItem: PropTypes.bool,
};
