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
    return JSON.stringify(planList);
  },
});
