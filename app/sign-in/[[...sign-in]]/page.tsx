import { SignIn } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import { authCardAppearance } from "@/components/auth/auth-card-appearance"
import { AuthSplitLayout } from "@/components/auth/auth-split-layout"

export default async function SignInPage() {
  const { userId } = await auth()
  if (userId) redirect("/editor")

  return (
    <AuthSplitLayout>
      <SignIn appearance={authCardAppearance} />
    </AuthSplitLayout>
  )
}
