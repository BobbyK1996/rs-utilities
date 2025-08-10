import { Outlet, NavLink } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      AppLayout
      <div>
        <NavLink to='/'>Go To Rotation Builder</NavLink>
        <NavLink to='archeologymaterials'>Go To Rotation Builder</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default AppLayout;
