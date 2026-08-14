/** @type {import('next').NextConfig} */
const nextConfig = {
	// Emit a fully static site into ./out for GitHub Pages.
	output: "export",
	// Pages ships plain files, so there is no Next image optimiser at runtime.
	images: { unoptimized: true },
	// Emit /conditions/index.html rather than /conditions.html so Pages resolves
	// every route without relying on its extension-guessing fallback.
	trailingSlash: true,
}

export default nextConfig
