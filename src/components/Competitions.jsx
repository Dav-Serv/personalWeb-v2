import { useApp } from '../store'
import Gallery from './Gallery'

export default function Competitions() {
  const { t, data } = useApp()
  // const { t } = useApp()

  return (
    <Gallery
      id="contest"
      title={t.contest.title}
      subtitle={t.contest.subtitle}
      coming={t.contest.coming}
      items={data.competitions}
    />
  )
}
