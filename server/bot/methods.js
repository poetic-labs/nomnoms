import Plans from '../../imports/collections/plans/collection';
import Users from '../../imports/collections/users/collection';
import _ from 'lodash';
import moment from 'moment';

Meteor.methods({
  'bot.checkUserStatus'(userId) {
    const registeredUser = Meteor.users.findOne({
      'profile.social.slack.userId': userId,
    });
    if (registeredUser) return true;
  },

  'bot.createPlan'(slackUserId, placeName, planTime) {
    const user = Users.findOne({ 'profile.social.slack.userId': slackUserId });

    const planDeets = {
      plan: {
        name: placeName,
        field2: planTime,
      },
      userId: user._id,
    };

    Plans.methods.createPlan.call(planDeets, (err, result) => {
      if (err) {
        console.log('oops! problem creating a plan from slack... ', err);
      }

      return result;
    });
  },

  'bot.listAllPlans'(teamId, teamDomain) {
    const teamName = teamDomain.charAt(0).toUpperCase() + teamDomain.slice(1);

    const plans = Plans.find().fetch();

    const planList = {
      text: `${teamName}'s lunch plans!`,
      attachments: [
        {
          author_name: 'Jimmy Thigpen',
          text: 'Chipotle today @ 1:00pm',
          thumb_url: 'https://lh5.googleusercontent.com/-Hl_2HxoPXpg/AAAAAAAAAAI/AAAAAAAAI8c/vQAWdHgK1hc/s0-c-k-no-ns/photo.jpg',
          footer: 'by nomsnoms',
        },
        {
          author_name: 'Krisy Miller',
          text: 'Whole Foods today @ 11:30am',
          thumb_url: 'https://lh3.googleusercontent.com/-TmQx3gl1KB8/AAAAAAAAAAI/AAAAAAAARdE/OYGS47KrIys/s0-c-k-no-ns/photo.jpg',
          footer: 'by nomsnoms',
        },
        {
          author_name: 'Gina Graves',
          text: 'Island Grille today @ 10:30am',
          thumb_url: 'http://s3-media1.fl.yelpcdn.com/bphoto/AojBL69PI5HC9FpF_2CCbg/o.jpg',
          footer: 'by nomsnoms',
        },
      ],
    };

    _.each(plans, plan => {
      const whoMadeThisPlan = Users.findOne(_.first(plan.users));

      planList.attachments.push({
        author_name: `${whoMadeThisPlan.profile.firstName} ${whoMadeThisPlan.profile.lastName}`,
        text: `${plan.where} at ${moment(plan.date).format('hh:mm')}`,
        thumb_url: 'http://www.meathgoldcoast.com/images/food.png',
        footer: 'by nomnoms',
      });
    });

    return JSON.stringify(planList);
  },
});
