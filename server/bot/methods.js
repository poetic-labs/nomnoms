Meteor.methods({
  'bot.checkUserStatus'(userId) {
    const registeredUser = Meteor.users.findOne({
      'profile.social.slack.userId': userId,
    });
    if (registeredUser) return true;
  },
  'bot.createPlan'(userId, placeName, planTime) {
    return true;
  },
  'bot.listAllPlans'(teamId, teamDomain) {
    const teamName = teamDomain.charAt(0).toUpperCase() + teamDomain.slice(1);

    return `Plans for ${teamName}`;
  },
});
