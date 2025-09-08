import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Questioning Unsettling Experiences',
  description: 'A guided psycho-education resource for 14–25 year olds experiencing unsettling perceptual experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="h-full antialiased">
        <Providers>
          <main className="min-h-full">{children}</main>
        </Providers>
        <footer className="bg-gray-800 text-gray-300 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Questioning Unsettling Experiences
            </p>
            <p className="text-xs text-gray-400 mt-2">
              For educational use with mental health professionals. Not a diagnosis or treatment.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
