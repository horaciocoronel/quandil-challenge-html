import Component from '@ember/component';

export default Component.extend({
	actions: {
    click(title) {
      console.log('I was clicked');
    }
  }
});
