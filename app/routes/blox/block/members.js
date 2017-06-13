import Ember from 'ember';
import BaseAuthenticated  from '../../base-authenticated';

export default BaseAuthenticated.extend({
  breadCrumbModelTitleProperty: null,
  breadCrumb: {
    title: 'Members'
  },
  model: function() {
    var spaceId = this.paramsFor('blox.block').block_id;
    return this.store.query('context-membership', {'context': spaceId});
  }
});