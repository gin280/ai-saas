import { Button } from "@/components/ui/button"
import Link from "next/link"

const Landing = () => {
  return (
    <div>
      <Link href="/sign-in">
        <Button>Sign in</Button>
      </Link>
      <Link href="/sign-up">
        <Button>sign up</Button>
      </Link>
    </div>
  )
}

export default Landing
