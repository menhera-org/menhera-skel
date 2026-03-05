
import React from 'react';

import { useDispatch } from 'react-redux';
import { drawerSlice } from '../ui/drawer';

export const DrawerToggleButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="app-drawer-toggle-button app-button material-symbols-outlined"
      onClick={() => {
        dispatch(drawerSlice.actions.toggleDrawer());
      }}
    >{'menu'}</button>
  );
};
