export const metadata = {
    title: 'Chat',
    description: 'Chat with LLM',
  }
  
  export default function ChatLayout({
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
  