import { Fira_Code as FontMono, Inter as FontSans , Fira_Sans as FiraSans} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
export const firaSans = FiraSans({
  subsets: ["latin"],
  variable: "--font-fira-sans",
  weight: ["100","200","300","400","500","600","700","800","900"],
})
