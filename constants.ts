import { Hub } from './types';
import HomeIcon from './components/icons/HomeIcon';
import ShoppingCartIcon from './components/icons/ShoppingCartIcon';
import HandshakeIcon from './components/icons/HandshakeIcon';
import ConstellationIcon from './components/icons/ConstellationIcon';

export const HUBS: Hub[] = [
  {
    id: 'myverse',
    label: 'Myverse',
    Icon: HomeIcon,
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    Icon: ShoppingCartIcon,
  },
  {
    id: 'workforce',
    label: 'Workforce',
    Icon: HandshakeIcon,
  },
  {
    id: 'social',
    label: 'Social',
    Icon: ConstellationIcon,
  },
];
