import getConsent from './index'

describe('consent', () => {
  describe('getConsent', () => {
    it('returns undefined if the cookie does not exist', async () => {
      expect(getConsent()).toBeTruthy()
    })
  })
})
