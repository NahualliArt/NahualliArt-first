import { ReactNode } from 'react';
import Header from './Header';
import '../styles/header.scss';


const Layout = () => {
  return (
    <div className="layout-wrapper">
      <div className="main-wrapper">
        <Header />
      </div>
    </div>
  );
};

export default Layout;