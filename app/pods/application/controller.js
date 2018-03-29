// Exports a function that will return true if the currentRouteName is not present in the hideNavRoutes array.
export default Ember.Controller.extend({
	hideNavRoutes: ['products.show'],
	isOnHideNavRoutes: Ember.computed('currentRouteName', function(){
		return this.get('hideNavRoutes').indexOf(this.get('currentRouteName')) !== -1;
	  }),
	actions: {
		click(title) {
			console.log('I was clicked');
		}
	}
});
