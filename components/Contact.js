import React from "react";

export default function ContactLinks() {
  return (
    <div id="contact" className="flex gap-4 items-center justify-center mt-6">
      {/* GitHub */}
      <a
        href="https://github.com/hananpalemad"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        <img
          src="/github.svg"
          alt="GitHub"
          className="w-8 h-8"
        />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/hanan_p_t_/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        <img
          src="/instagram.svg"
          alt="Instagram"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
}
