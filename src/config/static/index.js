import merge from 'deepmerge';
import queryString from 'query-string';
import { pickBy as _pickBy } from 'lodash-es';

import defaultConfig from './default';
import development from './development';
import e2e from './e2e';

const queryParamsWhitelist = [];

const appConfigs = {
  development,
  e2e,
};

const appEnv = process.env.APP_CONFIG || process.env.NODE_ENV;
const appConfig = appConfigs[appEnv] || {};

const queryParamsConfig = _pickBy(
  queryString.parse(location.search),
  (_value, key) => queryParamsWhitelist.includes(key),
);

export default merge.all([defaultConfig, queryParamsConfig, appConfig]);
