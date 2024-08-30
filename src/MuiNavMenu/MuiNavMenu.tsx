import { Box as BoxComponent } from '@mui/material';
import { navStyle } from './style';
import MenuItem from './MenuItem/MenuItem';
import { memo } from 'react';
import { ArrowRight } from '@mui/icons-material';
import { NavLink } from '../data'

interface MuiNavMenuProps {
  NavLink?: NavLink[];
  direction?: 'row' | 'column';
  showIconOnHover?: boolean | undefined;
  Icon?: React.ElementType;
}

const MuiNavMenu = memo(({ NavLink = [], direction = 'column', showIconOnHover = false, Icon = ArrowRight }: MuiNavMenuProps) => {
  return (
      <BoxComponent component="nav" sx={navStyle} data-direction={direction}>
        {NavLink.map((link, index) => (
          <MenuItem
            key={index}
            parentIndex={index}
            render={link.render}
            Icon={Icon}
            className={`parent-nav-child-${index} parent-navs`}
            href={link.href}
            name={link.name}
            hasSubLinks={link.subLinks && link.subLinks.length > 0}
            subLinks={link.subLinks}
            onClick={link.onClick}
            showIconOnHover={showIconOnHover}
          />
        ))}
      </BoxComponent>
  );
});

MuiNavMenu.displayName = "MuiNavMenu";

export default MuiNavMenu;
