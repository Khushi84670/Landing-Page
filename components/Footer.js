export default function Footer(){
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Fresh Eats. All rights reserved.</p>
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href="#" className="text-sm text-gray-600">Privacy</a>
          <a href="#" className="text-sm text-gray-600">Terms</a>
          <a href="#contact" className="text-sm text-gray-600">Contact</a>
        </div>
      </div>
    </footer>
  )
}
