import BaseSearch from "./base-search";

const BlockActivityRoute = BaseSearch.extend({
  modelName: 'activity-log',
  sort: 'createdDate',
  dir: 'desc'

});
/*

 discriminatorDescriptions: {
 "1": "blox",
 "2": "app",
 "3": "case",
 "4": "comment",
 "5": "membership",
 "6": "membership request",
 "7": "issue",
 "8": "note"
 },
 */
BlockActivityRoute.reopen({
  actions: {
    showRow(source, model, e){


      let routeName;
      let routeModel;
      let discriminator = model.get('discriminator');
      let predicate = model.get('predicate');


      // if note/issue
      if (predicate == 'CREATED_NOTE' || predicate == 'UPDATED_NOTE'
        || predicate == 'CREATED_ISSUE' || predicate == 'UPDATED_ISSUE') {
        routeName = 'cases.case.index';
        routeModel = model.get('object.id');
        console.log("showRow, issue/note: ");
        console.log(model.get('object'));
      }
      // else block
      else if (predicate == 'BECAME_MEMBER_OF') {
        routeName = 'blox.block.index'
        routeModel = model.get('context.id');
      }
      if (routeName) {
        this.transitionTo(routeName, routeModel);
      }
    },
  }
});


export default BlockActivityRoute;
