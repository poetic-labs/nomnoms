import { Meteor } from 'meteor/meteor';
import bodyParser from 'body-parser';
import moment from 'moment';

atIndex = (text) => {
  const index = text.includes(' at ')
    ? text.indexOf(' at ')
    : text.indexOf(' @ ');

  return index;
};

formatPlace = (text, index) => {
  text = text.toLowerCase();
  const containsAt = text.includes(' at ') || text.includes(' @ ');
  if (!containsAt) {
    console.log('error in formatPlace');
    return false;
  }

  const pickName = text.substring(0, index).trim();

  return pickName.charAt(0).toUpperCase() + pickName.slice(1);
}

formatTime = (text, index) => {
  const pickTime = text.substring(index + 3, text.length);

  const validateTime = pickTime.toString().replace(/[^\d:-]/g, '');
  let formattedTime = new moment(validateTime, 'h:mm');

  if (!formattedTime.isValid()) {
    console.log('error in formatTime');
    return false;
  }

  const now = moment();
  const noon = now.clone().hour(12).minute(0).second(0);
  const isAfterNoon = now.isAfter(noon);
  const currentHour = now.hour();
  const enteredForAfterNoon = formattedTime.hour() >= 1 && formattedTime.hour() < currentHour;

  if (isAfterNoon || !isAfterNoon && enteredForAfterNoon) {
    return moment(formattedTime).add(12, 'hours').format('hh:mm');
  };

  return moment(formattedTime).format('hh:mm');
};

Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.urlencoded({ extended: false }));

Picker.route('/nomsbot', function(params, request, response, next) {
  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200;

  const { team_id: teamId,
          user_id: userId,
          team_domain: teamDomain,
          user_name: userName,
          response_url: url,
          text,
          token } = request.body;

  Meteor.call('bot.checkUserStatus', userId, (err, userIsRegistered) => {
    if (!userIsRegistered) {
      response.end('You need to "Sign in with Slack" on Noms to link Nomsbot');
      return false;
    }
  });

  if (text.toLowerCase() === 'list') {
    Meteor.call('bot.listAllPlans', teamId, teamDomain, (err, plans) => {
      if (err) response.end('Error listing plans');
      response.end(plans);
    });
  } else {
    const placeName = formatPlace(text, atIndex(text));
    const planTime = formatTime(text, atIndex(text));

    if (!text) response.end('You need to enter a place!');
    if (!planTime) response.end('That is not a valid time!');

    Meteor.call('bot.createPlan', userId, placeName, planTime, (err, success) => {
      if (err) {
        response.end('Error creating plan... try again?');
      } else {
        response.end(`Noms plan created! ${placeName}, today at ${planTime}`);
      }
    });
  }
});
