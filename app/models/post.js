import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  categories: DS.hasMany('category', {async: true})
});
