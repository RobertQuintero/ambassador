//api/send/env.ts
export const resendApi = assertValue(
  process.env.RESEND_API_KEY,
  'Missing environment variable: RESEND_API_KEY'
)

export const useCdn = false
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}