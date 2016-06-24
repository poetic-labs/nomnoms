import Plans from './collection';
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';
import moment from 'moment';

Plans.methods = {
  createPlan: new ValidatedMethod({
    name: 'Plans.methods.createPlan',
    validate(plan) {
      check(plan, Object);
    },
    run(plan) {
      if (Meteor.isClient) return false;

      const newPlan = {
        where: plan.name,
        date: moment(`${moment().format('MM/DD/YYYY')} ${plan.field2}`).toDate(),
        users: [Meteor.userId()],
      };

      const planId = Plans.insert(newPlan);

      return Plans.findOne(planId);
    },
  }),
};

