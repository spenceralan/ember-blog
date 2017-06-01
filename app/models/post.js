import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
