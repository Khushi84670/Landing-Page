export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="text-xl font-bold text-gray-900">Fresh Eats</div>
          <p className="text-sm text-gray-600 mt-2">Delicious food delivered fast.</p>
        </div>

        <div className="mt-6 md:mt-0 flex gap-6">
          <a href="#" className="text-sm text-gray-600">Privacy</a>
          <a href="#" className="text-sm text-gray-600">Terms</a>
          <a href="#contact" className="text-sm text-gray-600">Contact</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Fresh Eats. All rights reserved.</div>
    </footer>
  )
}
