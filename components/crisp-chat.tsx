"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(`e9db6c7d-238a-4c1e-bb3c-09c59ff43fc1`)
  }, [])

  return null
}
