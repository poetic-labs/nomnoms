import PlansSchema from '../../schemas/plans.js';

const Plans = new Mongo.Collection('Plans');
Plans.attachSchema(PlansSchema);

export default Plans;
