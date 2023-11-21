// import '@/styles/globals.css'
import '../styles/app.scss'
import { QueryClient, QueryClientProvider } from "react-query";
export default function App({ Component, pageProps }) {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>
  <Component {...pageProps} />
  </QueryClientProvider>
}
