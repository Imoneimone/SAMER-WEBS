
import { auth } from "@/lib/firebase"
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  applyActionCode,
  User
} from "firebase/auth"

const googleProvider = new GoogleAuthProvider()

export const authService = {
  async signUpWithEmail(email: string, password: string) {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    await sendEmailVerification(result.user)
    return result.user
  },

  async signInWithEmail(email: string, password: string) {
    const result = await signInWithEmailAndPassword(auth, email, password)
    return result.user
  },

  async signInWithGoogle() {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  },

  async signOut() {
    return auth.signOut()
  },

  async verifyEmail(oobCode: string) {
    return applyActionCode(auth, oobCode)
  }
}

export type UserRole = "admin" | "customer"

export interface UserData {
  uid: string
  email: string
  role: UserRole
  emailVerified: boolean
}
