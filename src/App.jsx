import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Profile from "./Profile.jsx";
import Repositories from "./Repositories.jsx";
import Bio from "./Bio.jsx";

function App() {

  const name = "Nicole Angela P. Galan";
  const username = "@nicole-galan";

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <Profile />
      <Bio name={name} username={username} />
      <Repositories />
      <Footer />
    </div>
  );
}

export default App;
