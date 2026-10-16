import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Profile from "./Profile.jsx";
import Repositories from "./Repositories.jsx";

function App() {

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <Profile />
      <Repositories />
      <Footer />
    </div>
  );
}

export default App;
