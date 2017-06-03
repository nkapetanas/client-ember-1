import Ember from 'ember';
import SaveModelMixin from 'noteblox-client-ember/mixins/hosts/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('host');
  }
});
