export const metadata = {
  title: 'Intellicompanion Sign-Up',
  description: 'Sign up to Intellicompanion to create an account.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
