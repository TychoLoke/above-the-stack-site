import { redirect } from 'next/navigation'

export const metadata = { title: 'Playbooks — Above The Stack' }

export default function Page() {
  redirect('/insights')
}
