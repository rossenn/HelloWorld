import Route from '@ember/routing/route';

export default Route.extend({
	firstName: "",
	lastName: "",
	address1: "",
	address2: "",
	city: "",
	state: "",
	zip: "",
	country: "",

	actions: {
		register() {
			var person = this.get('store').createRecord('person', {
				firstName: this.get('firstName'),
				lastName: this.get('lastName'),
				address1: this.get('address1'),
				address2: this.get('address2'),
				city: this.get('city'),
				state: this.get('state'),
				zip: this.get('zip'),
				country: this.get('country'),
			});
			person.save();
			this.transitionTo('confirmation');
		}
	}
});
