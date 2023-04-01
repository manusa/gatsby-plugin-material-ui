import createCache from '@emotion/cache';

export const initEmotionCache = props => createCache(props ?? {key: 'css'});
