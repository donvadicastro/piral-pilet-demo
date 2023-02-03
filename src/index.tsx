import * as React from 'react';
import { PiletApi } from '@donvadicastro/intapp-host-demo';
import { Menu } from './components/Menu';
import { Tile } from './components/Tile';

const Page = React.lazy(() => import('./components/Page'));

export function setup(app: PiletApi) {
  app.registerPage('/productPage', Page);
  app.registerTile(Tile);
  app.registerMenu(Menu);
}
