const items = [
	{
		title: 'Speed',
		desc: 'Fast performance and instant feedback to keep users engaged.',
		icon: '⚡',
	},
	{
		title: 'Security',
		desc: 'Built-in best practices to protect user data and privacy.',
		icon: '🔒',
	},
	{
		title: 'Scalability',
		desc: 'Designed to grow with your needs — from hobby projects to enterprise.',
		icon: '🚀',
	},
]

export default function Features() {
	return (
		<section id="features" className="py-16 bg-amber-50">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
					Why people love our product
				</h2>
				<p className="text-center text-gray-600 mb-8">
					Fast, reliable, and built with care — everything you need to get
					started.
				</p>

				<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
					{items.map((it) => (
						<div
							key={it.title}
							className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
						>
							<div className="text-teal-600 mb-4 text-3xl">{it.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{it.title}</h3>
							<p className="text-gray-600">{it.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
