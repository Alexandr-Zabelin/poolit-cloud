import css from '@styled-system/css';
import styledC from 'styled-components';
import MuiDrawer from '@mui/material/Drawer';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { colors, variants } from '@src/styled-config';

interface IsOpen {
  isOpen: boolean;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const SidebarContainer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const Header = styled('div')<IsOpen>(({ isOpen }) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: '8px',
    px: isOpen ? 16 : '8px',
    height: 56,
  }),
);

export const Body = styledC('nav')<IsOpen>(({ isOpen }) =>
  css({
    height: 56,
    mt: 24,
  }),
);

export const Tab = styledC(ListItemButton)({
  display: 'flex',
  alignItems: 'center',
});

export const TabTitle = styledC('h3')<IsOpen>(({ isOpen }) =>
  css({
    ...variants.h4Regular,
    color: colors.textPrimary,
    opacity: isOpen ? 1 : 0,
    ml: '8px',
  }),
);

export const Title = styledC('h2')<IsOpen>(({ isOpen }) =>
  css({
    ...variants.h2Regular,
    color: colors.textPrimaryBlank,
    opacity: isOpen ? 1 : 0,
    ml: '8px',
  }),
);

export const PlatformTitle = styledC('div')({
  display: 'flex',
  alignItems: 'center',
});
