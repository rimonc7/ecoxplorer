import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Titles = () => {
  const location = useLocation(); 
  
  useEffect(() => {
    const currentPath = location.pathname;

    const routeTitles = {
      '/': 'Home - EcoXplorer',
      '/auth/login': 'Login - EcoXplorer',
      '/auth/register': 'Register - EcoXplorer',
      '/profile': 'Profile - EcoXplorer',
      '/update-profile': 'Update Profile - EcoXplorer',
      '/plan/:ID': 'Adventure Details - EcoXplorer',
    };

    let newTitle = routeTitles[currentPath];

    if (currentPath.startsWith("/plan/")) {
      const adventureID = currentPath.split('/')[2];
      newTitle = `Adventure ${adventureID} - EcoXplorer`;
    }
    document.title = newTitle || 'EcoXplorer';
  }, [location]);

  return null;
};

export default Titles;
