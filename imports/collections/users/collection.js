import { Meteor } from 'meteor/meteor';
import UserSchema from '../../schemas/users.js';

const Users = Meteor.users;
Users.attachSchema(UserSchema);

if (Meteor.isServer) {
  Users._ensureIndex({ username: 1 }, { unique: 1 });
}

// Users.attachBehaviour('timestampable');

// Users.attachBehaviour('timestampable', {
//   createdAt: 'insertedAt',
//   createdBy: 'insertedBy',
//   updatedAt: 'modifiedAt',
//   updatedBy: false,
// });

export default Users;
