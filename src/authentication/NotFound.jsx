import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-md text-center">
        <AlertTriangle className="mx-auto mb-4 h-16 w-16 text-yellow-300 animate-bounce" />
        <h1 className="text-6xl font-extrabold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-white/90 mb-6">
          The page you’re looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 bg-yellow-300 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
          <Sparkles className="w-5 h-5" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
