import PropTypes from 'prop-types';

import Collapse from '@mui/material/Collapse';

import { usePathname } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { NavSectionVertical } from 'src/components/nav-section';

import NavItem from './nav-item';

// ----------------------------------------------------------------------

export default function NavList({ item }) {
  const pathname = usePathname();

  const externalLink = item.path.includes('http');

  const listOpen = useBoolean();

  return (
    <>
      <NavItem
        item={item}
        open={listOpen.value}
        onClick={listOpen.onToggle}
        active={pathname === item.path}
        externalLink={externalLink}
      />

      {!!item.children && (
        <Collapse in={listOpen.value} unmountOnExit>
          <NavSectionVertical data={item.children} />
        </Collapse>
      )}
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.shape({
    children: PropTypes.array,
    path: PropTypes.string,
  }),
};
