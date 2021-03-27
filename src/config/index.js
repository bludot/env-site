import merge from 'deepmerge';
import getValue from 'get-value';
import queryString from 'query-string';

import staticConfig from './static';

let appConfig = staticConfig;

if (window.CONFIG) {
  appConfig = merge(appConfig, window.CONFIG);
}

const queryConfig = queryString.parse(location.search);

export default {
  get: key => getValue(appConfig, key),
  getQuery: key => getValue(queryConfig, key),
};
