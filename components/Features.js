const items = [
  { title: 'Quick Delivery', desc: 'Get food delivered in under 30 minutes with live tracking.' },
  { title: 'Fresh & Healthy', desc: 'Curated menu with fresh ingredients and healthy options.' },
  { title: 'Best Restaurants', desc: 'Partnered with top local restaurants near you.' },
]

export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Why choose Fresh Eats?</h2>
        <p className="text-center text-gray-600 mt-3">Fast, fresh and rated 4.8 by thousands of customers.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
