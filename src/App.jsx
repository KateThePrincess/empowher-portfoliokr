import { useGlobalContext } from './Context';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

const App = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();

  return (
    <main>
      <Navbar />
      <Hero />
      <Hero />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
