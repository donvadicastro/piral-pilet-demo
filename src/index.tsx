import { PiletApi } from '@donvadicastro/intapp-host-demo';
import { Menu } from './components/Menu';
import { Page } from './components/Page';
import { Tile } from './components/Tile';

export function setup(app: PiletApi) {
  app.registerPage('/users', Page);
  app.registerTile(Tile);
  app.registerMenu(Menu);
}
