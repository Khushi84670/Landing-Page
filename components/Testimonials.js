const testimonials = [
  { name: 'Aisha K.', text: 'Amazing service — my go-to for busy nights. Food always arrives hot!' },
  { name: 'Tom R.', text: 'Great selection and the app is super easy to use.' },
  { name: 'Priya S.', text: 'Love the healthy options and speedy delivery.' },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">What our customers say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700">“{t.text}”</p>
              <p className="mt-4 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
