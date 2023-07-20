import React, { useEffect } from 'react';

const ReloadOnBack = () => {
  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return null;
};

export default ReloadOnBack;
