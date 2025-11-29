export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-block">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">✨ Welcome to Our Platform</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Amazing</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Create beautiful, responsive landing pages with our modern design system. Perfect for startups, agencies, and creators who want to make an impact.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Get Started Free
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200">
            Watch Demo
          </button>
        </div>
        <p className="mt-8 text-sm text-gray-500">No credit card required • Free forever plan available</p>
      </div>
    </section>
  )
}
