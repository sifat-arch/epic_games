import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] border-t border-cyan-600/30 backdrop-blur-md text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
          {/* Left: Logo + Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-cyan-400 text-2xl font-bold tracking-widest">
              Epic Games
            </h2>
            <p className="text-gray-400 mt-2 text-sm text-center md:text-left max-w-md">
              Epic Games is your ultimate gaming hub — discover new games, get
              news updates, and join a community of passionate gamers.
            </p>
          </motion.div>

          {/* Center: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-cyan-400 text-lg font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-cyan-300 transition" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-300 transition"
                  to="/game-details"
                >
                  Game Details
                </Link>
              </li>
              <li>
                <Link className="hover:text-cyan-300 transition" to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link className="hover:text-cyan-300 transition" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Right: Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-cyan-400 text-lg font-semibold mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4 text-xl">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#06b6d4" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#06b6d4" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#06b6d4" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#06b6d4" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-center border-t border-cyan-600/20 pt-5 text-gray-500 text-sm"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Epic Games</span>. All
          rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
