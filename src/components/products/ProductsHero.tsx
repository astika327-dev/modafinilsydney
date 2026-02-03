export default function ProductsHero() {
  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(/images/hero-sydney.jpg)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Our Collection
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Premium <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Modafinil</span> Products
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Pharmaceutical-grade cognitive enhancers from trusted manufacturers. 
            All products are lab-tested and guaranteed authentic.
          </p>
          

        </div>
      </div>
    </section>
  );
}

