import React from 'react';

const useRedConsole = () => {
  const logRedMessage = (message) => {
    console.log('%c' + message, 'color: red;');
  };

  return { logRedMessage };
};

export default useRedConsole;