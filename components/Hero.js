export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">Fresh Eats — Fast Delivery</h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">Get restaurant-quality meals delivered to your door in under 30 minutes. Your cravings, satisfied.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#pricing" className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700">Order Now</a>
          <a href="#features" className="px-6 py-3 border border-gray-200 rounded-md font-medium text-gray-700 hover:bg-gray-100">See Features</a>
        </div>
      </div>
    </section>
  )
}
