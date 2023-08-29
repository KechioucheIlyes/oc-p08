
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Kechiouche Ilyes',
  description: `Je suis Ilyes Kechiouche, un développeur web junior passionné par la création de sites web beaux et fonctionnels. J'ai plus d'un an d'expérience dans le domaine du développement web, et je suis spécialisé dans le développement front-end. Je maîtrise les technologies HTML, CSS et JavaScript, et je suis également familier avec le framework Next.js.
  Je suis toujours à la recherche de nouveaux défis et je suis toujours prêt à apprendre de nouvelles choses. Je suis également très motivé et je suis toujours prêt à travailler dur pour atteindre mes objectifs.
  Si vous êtes à la recherche d'un développeur web junior qui peut vous aider à créer un site web beau, fonctionnel et performant, n'hésitez pas à me contacter. Je serais ravi de vous aider.`,
}

export default function RootLayout({ children }) {

  return (
    <html id='root' lang="fr">

      <body className={inter.className}>{children}</body>
    </html>
  )
}
