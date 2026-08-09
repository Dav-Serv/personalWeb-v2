import { useApp } from '../store'
import Gallery from './Gallery'

export default function Competitions() {
  const { t, data } = useApp()

  return (
    <Gallery
      id="contest"
      title={t.contest.title}
      subtitle={t.contest.subtitle}
      items={data.competitions}
    />
  )
}
