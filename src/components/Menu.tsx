import * as React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC<any> = () => {
  return <>
    <Link className="p-2" href="#" to={'/productPage'}>Users</Link>
    <a className="p-2" href="#">Roles</a>
  </>;
};
