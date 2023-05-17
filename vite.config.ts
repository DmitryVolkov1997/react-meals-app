import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr()],
	resolve: {
		alias: {
			components: '/src/components',
			hooks: '/src/hooks',
			pages: '/src/pages',
			services: '/src/services',
			assets: '/src/assets',
			types: '/src/types',
			store: '/src/store',
			api: '/src/api',
			features: '/src/features',
			layout: '/src/layout',
		},
	},
})
