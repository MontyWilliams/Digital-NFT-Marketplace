import '../styles/globals.css'
import Link from 'next/link'

function DcxApp({ Component, pageProps }) {
  return (
		<div>
			<nav className="border-b p-6">
				<p className="text-4xl font-bold">918-DCX</p>
					<div className="flex mt-4">
					 <Link href="/">
						<a className="mr-6 text-blue-500">
						Home
						</a>
					 </Link>
					 <Link href="/create-item">
						<a className="mr-6 text-blue-500">
							Sell Digital Commodities
						</a>
					</Link>
					<Link href="/my-assets">
						<a className="mr-6 text-pink-500">
							My Digital Commodities
						</a>
					</Link>
					<Link href="/creator-dashboard">
					  <a className="mr-6 text-pink-500">
							Creator Catalog
						</a>
					</Link>
					</div>
				</nav>
			<Component {...pageProps} />
		</div>
	)
}

export default DcxApp
