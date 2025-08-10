export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-cyan-400">Hanan</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
