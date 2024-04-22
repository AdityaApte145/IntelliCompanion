export const metadata = {
    title: 'ChatPDF',
    description: 'Chat with PDFs with LLM',
  }
  
  export default function ChatPDFLayout({
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
  