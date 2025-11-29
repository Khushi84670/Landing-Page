export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center">Get in touch</h2>
        <p className="text-center text-gray-600 mt-2">Questions? Partnership inquiries? We’d love to hear from you.</p>
        <form className="mt-6 grid grid-cols-1 gap-4">
          <input className="p-3 border rounded" placeholder="Your name" />
          <input className="p-3 border rounded" placeholder="Your email" />
          <textarea className="p-3 border rounded" rows="4" placeholder="Message" />
          <div className="text-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
