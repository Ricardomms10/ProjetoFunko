'use client'
import React, { ReactNode, useContext } from 'react';
import Navbar from '@/components/NavBar';
import '@/styles/globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {


  return (
      <html lang="pt-br">
        <head>
        </head>
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
  
  );
};

export default RootLayout;
