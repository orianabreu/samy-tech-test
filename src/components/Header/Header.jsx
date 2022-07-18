import React from 'react';
import Input from '../Input/Input';

import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Input
        type="text"
        placeholder="You're looking for something?"
        className="input input--search"
      />
    </header>
  );
}
