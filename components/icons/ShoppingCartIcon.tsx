import React from 'react';

const ShoppingCartIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.837a.5.5 0 00-.47-.665H5.25l-.838-3.141A.5.5 0 003.75 3H2.25zM7.5 14.25v3H6a3 3 0 01-3-3h4.5zM15 14.25a3 3 0 00-3 3h4.5a3 3 0 01-3-3h1.5z" />
  </svg>
);

export default ShoppingCartIcon;