import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import './index.css'
import App from './App'


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const queryClient = new QueryClient()

root.render(
	<QueryClientProvider client={queryClient} >
		<App />
	</QueryClientProvider>,
	document.getElementById('root'),
)
