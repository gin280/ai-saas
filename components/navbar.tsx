import { UserButton } from "@clerk/nextjs"

import { MobileSidebar } from "@/components/mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
// import { checkSubscription } from "@/lib/subscription"

const Navbar = async () => {
  const apiLimitCount = 12
  const isPro = true

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={false} apiLimitCount={apiLimitCount} />
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
