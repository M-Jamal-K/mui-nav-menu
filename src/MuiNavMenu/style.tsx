export const listStyle = {
  position: 'relative',
  padding: 0,
  margin: 0,
  listStyle: 'none',
};

export const listItemStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
};

export const linkStyle = {
  width: '100%',
  minWidth: 'max-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#242424',
  textDecoration: 'unset',
  cursor: 'pointer',
  padding: '10px',
  '&:has(svg)': {
    padding: '10px 2px 10px 10px',
  },
};

export const subListStyle = {
  display: 'flex',
  position: 'absolute',
  left: '100%',
  padding: 0,
  opacity: 0,
  top: 0,
  zIndex: 111,
  flexDirection: 'column',
};




export const navStyle = {
  '&, & ul.sublink-navs': {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    borderRadius: '2px',
    background: 'white',
    width: '100%',
    minWidth: 'max-content',
  },
  "&:hover li:not(:hover) a, &:hover li:not(:hover) div": {
    color: '#2424249e',
  },
  '& a:before, & div:before': {
    content: `""`,
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '2px',
    bottom: '0',
    background: '#242424',
    left: '0',
    transform: 'scaleX(0)',
    transformOrigin: 'top left',
    transition: 'transform 0.3s ease',
  },
  '& a:hover::before, & a[data-isopen="true"]::before, & div:hover::before, & div[data-isopen="true"]::before': {
    transform: 'scaleX(1)',
  },
  "& li[data-isopen='true'] > ul, & a[data-isopen='true'] svg, & div[data-isopen='true'] svg": {
    transition: 'opacity 0.8s cubic-bezier(0.5, 0, 0, 1)',
    opacity: 1,
  },
  "&[data-direction='row']": {
    display: 'flex',
    gap: '10px',
    "& > ul > li > a, & > ul > li > div": {
      justifyContent: 'flex-start',
      gap: '5px'
    },
    "& > ul > li > a svg, & > ul > li > div svg": {
      transform: 'rotate(90deg)',
      margin: 0,
    },
    "& > ul > li > ul": {
      left: 0,
      top: '100%'
    },
  }
};
