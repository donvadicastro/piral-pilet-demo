import * as React from 'react';
import { PiletApi } from '@donvadicastro/intapp-host-demo';

const Page = React.lazy(() => import('./components/Page'));
const Tile = React.lazy(() => import('./components/Tile'));
const Menu = React.lazy(() => import('./components/Menu'));

export function setup(app: PiletApi) {
  app.registerPage('/productPage', Page);
  app.registerTile(Tile);
  app.registerMenu(Menu);
}
