import { getCookie } from '@ketch-com/ketch-cookie'

/**
 * Get a value from a cookie by the key.
 *
 * @param w The window object
 * @param key The cookie key
 */
export default function getConsent(w: Window): any {
  const value = getCookie(w, '_swb_ketch_')
    if (value) {
      try {
        return JSON.parse(atob(value))
      } catch (e) {
        return
      }
    }
    return
}
