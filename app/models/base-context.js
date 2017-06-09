import Ember from 'ember';
import DS from "ember-data";

const {
  computed
} = Ember;


const BaseContext = DS.Model.extend({

  name: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string')

});


BaseContext.reopenClass({
  columns: computed(function() {
    return [{
      label: '',
      avatarUrlPath: 'createdBy.avatarUrl',
      avatarNamePath: 'createdBy.username',
      width: '60px',
      sortable: false,
      cellComponent: 'user-avatar'
    }, {
      label: 'Author',
      cellComponent: 'cases/light-cell'
    }, {
      label: 'Title',
      valuePath: 'title',
    }];
  })
});

export default BaseContext;
