import { auth } from "../_lib/auth"

const session = await auth()

const firstName = session.user.name.split(" ").at(0)

export const metadata = {
  title: `${firstName}`,
}

export default async function Page() {
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  )
}
