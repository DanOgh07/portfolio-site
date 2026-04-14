import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Daniel Oghie | Data Analyst & Scientist',
  description:
    'Analytics Innovation Manager at DecisionSpaak. I build dashboards, ML pipelines, and predictive models that turn raw data into decisions.',
  openGraph: {
    title: 'Daniel Oghie | Data Analyst & Scientist',
    description:
      'Analytics Innovation Manager at DecisionSpaak. I build dashboards, ML pipelines, and predictive models that turn raw data into decisions.',
    url: 'https://daniel-oghie.vercel.app',
    siteName: 'Daniel Oghie',
    locale: 'en_NG',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
