export const metadata = {
  title: 'IntelliCompanion Sign-In',
  description: 'Sign in to IntelliCompanion to access your account.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
