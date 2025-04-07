import { Link, useNavigate } from "react-router-dom";
import { useUser, SignInButton, SignOutButton } from "@clerk/clerk-react";
import { Bookmark, Search } from "lucide-react";


const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-4 md:px-10 py-3 flex justify-between items-center bg-[#101010] border-b border-white/10 text-white">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-white">
        GameVerse
      </Link>

      {/* Right Side: Navigation + Auth */}
      <div className="flex items-center gap-4">


<Link
  to="/library"
  className="flex items-center gap-2 py-2 px-4 rounded-full bg-gaming-primary/20 hover:bg-gaming-primary/30 transition-all duration-300 border border-gaming-primary/30 text-white"
>
  <Bookmark className="w-4 h-4 text-gaming-accent" />
  <span className="hidden sm:inline text-sm">My Library</span>
</Link>


        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-[#1C1C1C] text-white rounded-lg hover:bg-blue-600 hover:text-[#1C1C1C] transition duration-200">
  Login
</button>

          </SignInButton>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/70 hidden sm:inline">
              Hello, {user.firstName || user.username}
            </span>
            <SignOutButton>
              <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm">
                Logout
              </button>
            </SignOutButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
