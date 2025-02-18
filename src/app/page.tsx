import { signIn } from '@/auth'

export default async function Page() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
}
