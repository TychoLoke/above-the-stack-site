import { redirect } from 'next/navigation'

export const metadata = { title: 'Research — Above The Stack' }

export default function Page() {
  redirect('/insights')
}
