import { Hero } from '@/components/wedding/hero'
import { Invitation } from '@/components/wedding/invitation'
import { Couple } from '@/components/wedding/couple'
import { LoveStory } from '@/components/wedding/love-story'
import { Gallery } from '@/components/wedding/gallery'
import { Events } from '@/components/wedding/events'
import { Gift } from '@/components/wedding/gift'
import { Rsvp } from '@/components/wedding/rsvp'
import { Footer } from '@/components/wedding/footer'
import { MusicPlayer } from '@/components/wedding/music-player'

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Invitation />
      <Couple />
      <LoveStory />
      <Gallery />
      <Events />
      <Gift />
      <Rsvp />
      <Footer />
      <MusicPlayer />
    </main>
  )
}
