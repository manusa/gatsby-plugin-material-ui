describe('emotion-cache', () => {
  let emotionCache;
  beforeEach(() => {
    emotionCache = require('../emotion-cache');
  });
  describe('initEmotionCache', () => {
    test('With no props, returns with default key', () => {
      const cache = emotionCache.initEmotionCache();
      expect(cache).toHaveProperty('key', 'css');
    });
    test('With props, returns cache with propagated options', () => {
      const cache = emotionCache.initEmotionCache({key: 'camelot', nonce: '1337'});
      expect(cache).toHaveProperty('key', 'camelot');
      expect(cache).toHaveProperty('nonce', '1337');
    });
  });
});
