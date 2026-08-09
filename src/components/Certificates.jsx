import { useApp } from '../store'
import Gallery from './Gallery'

export default function Certificates() {
  const { t, data } = useApp()

  return (
    <Gallery
      id="cert"
      title={t.cert.title}
      subtitle={t.cert.subtitle}
      items={data.certs}
    />
  )
}
