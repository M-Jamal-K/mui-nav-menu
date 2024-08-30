import { useState, MouseEventHandler } from 'react';
import { Box as BoxComponent } from '@mui/material';
import { linkStyle, listItemStyle, listStyle, subListStyle } from '../style';
import { NavLink } from '../../data'

interface MenuItemProps {
  subLinks?: NavLink[];
  hasSubLinks: boolean | undefined;
  name?: string;
  href?: string;
  showIconOnHover?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
  className?: string;
  parentIndex?: number;
  render?: () => JSX.Element;
  Icon: React.ElementType;
}

const MenuItem: React.FC<MenuItemProps> = ({
  subLinks = [],
  hasSubLinks,
  name,
  href,
  showIconOnHover = false,
  onClick,
  className,
  parentIndex,
  render,
  Icon
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
      <BoxComponent component="ul" sx={listStyle} className={className}>
        <BoxComponent
          component="li"
          sx={listItemStyle}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          data-isopen={isOpen}
        >
          <BoxComponent
            component={onClick ? 'div' : "a"}
            href={(href && !onClick) ? href : undefined}
            onClick={onClick}
            sx={linkStyle}
            data-isopen={isOpen}
          >
            {name} {render && render()}
            {hasSubLinks && (
              <Icon
                sx={{ opacity: showIconOnHover ? 0 : 0.6, mr: '10px' }}
                fontSize="small"
              />
            )}
          </BoxComponent>
          {hasSubLinks && (
            <BoxComponent component="ul" sx={subListStyle} className={`sublink-navs-${parentIndex} sublink-navs`}>
              {isOpen && subLinks.map((subLink, index) => (
                <MenuItem
                  key={index}
                  render={subLink.render}
                  parentIndex={index}
                  Icon={Icon}
                  className={`subLink-level-${parentIndex}-nav-child-${index}`}
                  href={subLink.href}
                  name={subLink.name}
                  hasSubLinks={subLink.subLinks && subLink.subLinks.length > 0}
                  subLinks={subLink.subLinks}
                  onClick={subLink.onClick}
                  showIconOnHover={showIconOnHover}
                />
              ))}
            </BoxComponent>
          )}
        </BoxComponent>
      </BoxComponent>
  );
};

export default MenuItem;
