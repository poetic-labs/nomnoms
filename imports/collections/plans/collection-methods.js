import Plans from './collection';
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';
import moment from 'moment';

Plans.methods = {
  createPlan: new ValidatedMethod({
    name: 'Plans.methods.createPlan',
    validate(args) {
      check(args, {
        plan: Object,
        userId: String,
      });
    },
    run({ plan, userId }) {
      if (Meteor.isClient) return false;

      console.log('plan: ', plan);

      // on the app Meteor.userId()
      // slack -- look at the document and grab the user id

      const newPlan = {
        where: plan.name,
        date: moment(`${moment().format('MM/DD/YYYY')} ${plan.field2}`).toDate(),
        users: [userId],
      };

      const planId = Plans.insert(newPlan);

      return Plans.findOne(planId);
    },
  }),
};
