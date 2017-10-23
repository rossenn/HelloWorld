import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr(),
	lastName: DS.attr(),
	address1: DS.attr(),
	address2: DS.attr(),
	city: DS.attr(),
	state: DS.attr(),
	zip: DS.attr(),
	country: DS.attr()
});
