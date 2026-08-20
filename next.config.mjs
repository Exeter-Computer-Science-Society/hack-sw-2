/** @type {import('next').NextConfig} */
const nextConfig = {
	// Emit a fully static site into ./out for the Cloudflare assets Worker.
	output: "export",
	// The Worker serves plain files, so there is no Next image optimiser at runtime.
	images: { unoptimized: true },
	// Emit /conditions/index.html rather than /conditions.html so Wrangler
	// html_handling: "force-trailing-slash" can resolve every route.
	trailingSlash: true,
}

export default nextConfig
