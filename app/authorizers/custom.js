import Ember from "ember";
import Base from "ember-simple-auth/authorizers/base";

export default Base.extend({

  session: Ember.inject.service(),
  authorize(sessionData, block) {
    let userId = (sessionData.id || sessionData.id);
  }
});
