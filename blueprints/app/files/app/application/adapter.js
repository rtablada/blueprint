import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '<%= name %>/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.apiHost,
  namespace: `api`,
  authorizer: `authorizer:application`,
});
