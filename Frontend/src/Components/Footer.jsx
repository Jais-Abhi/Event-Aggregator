import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 h-[20vh] py-8">
      <div className="px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="text-sm text-gray-300">© {year} Event Aggregator. All rights reserved.</div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-300 hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition">Terms of Service</Link>
            <Link to="/help" className="text-gray-300 hover:text-white transition">Help Center</Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          <p>Event Aggregator™ - Connecting Students & Institutions. Made with ❤️ for college communities worldwide.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;