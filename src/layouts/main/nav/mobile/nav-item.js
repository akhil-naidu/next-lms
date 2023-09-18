import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';

import { StyledNavItem } from './styles';

// ----------------------------------------------------------------------

export default function NavItem({ item, open, active, externalLink, ...other }) {
  const renderContent = (
    <StyledNavItem active={active} {...other}>
      <ListItemIcon> {item.icon} </ListItemIcon>

      <ListItemText disableTypography primary={item.title} />

      {!!item.children && (
        <Iconify
          width={16}
          icon={open ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          sx={{ ml: 1 }}
        />
      )}
    </StyledNavItem>
  );

  // ExternalLink
  if (externalLink) {
    return (
      <Link href={item.path} target="_blank" rel="noopener" underline="none">
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
    <Link component={RouterLink} href={item.path} underline="none">
      {renderContent}
    </Link>
  );
}

NavItem.propTypes = {
  active: PropTypes.bool,
  externalLink: PropTypes.bool,
  item: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    path: PropTypes.string,
    title: PropTypes.string,
  }),
  open: PropTypes.bool,
};
