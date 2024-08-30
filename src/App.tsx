import MuiNavMenu from './MuiNavMenu/MuiNavMenu';
import { NavLinks } from './data';

const App: React.FC = () => {
  return (
      <MuiNavMenu NavLink={NavLinks} direction="row" />
  );
};

export default App;
