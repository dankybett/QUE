import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Questioning Unsettling Experiences',
  description: 'A guided psycho-education resource for 14–25 year olds experiencing unsettling perceptual experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-3xl px-4 py-8">
          <header className="mb-8">
            <h1 className="text-2xl font-bold">Questioning Unsettling Experiences</h1>
            <p className="text-sm text-neutral-600">A guided psycho-education resource</p>
          </header>
          <Providers>
            <main className="prose prose-neutral max-w-none">{children}</main>
          </Providers>
          <footer className="mt-16 text-sm text-neutral-500">
            © {new Date().getFullYear()} — For educational use, not a diagnosis or treatment.
          </footer>
        </div>
      </body>
    </html>
  )
}
