export default function Projects() {
  const projects = [
    { title: "Rental Office Space", url: "https://talrop-task.vercel.app/" },
    { title: "Rock Paper Game", url: "https://jsgame-navy.vercel.app/" },
    { title: "Todo List", url: "https://todo-list-woad-gamma.vercel.app/" },
    { title: "Digital Magazine Website", url: "https://palemad-madrasa-nine.vercel.app/" }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <a key={index} href={p.url} target="_blank" rel="noopener noreferrer"
               className="bg-gray-700 p-6 rounded-lg hover:shadow-xl hover:bg-gray-600 transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
