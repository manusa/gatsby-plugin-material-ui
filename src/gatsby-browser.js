import React from 'react';
import {CacheProvider} from '@emotion/react';
import emotionCacheProps from 'material-ui-plugin-cache-endpoint';
import {initEmotionCache} from './emotion-cache';

const cache = initEmotionCache(emotionCacheProps);

export const wrapRootElement = ({element}) => <CacheProvider value={cache}>{element}</CacheProvider>;
