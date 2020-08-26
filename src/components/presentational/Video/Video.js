import React from 'react';

export const Video = ({ title, children }) => (
  <main>
    <header>{title}</header>
    <section>
      {children}
    </section>
  </main>
);
