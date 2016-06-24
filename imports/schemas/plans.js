import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
  acceptingOrders: {
    type: Boolean,
    defaultValue: false,
  },
  callingIn: {
    type: Boolean,
    defaultValue: false,
  },
  diningIn: {
    type: Boolean,
    defaultValue: false,
  },
  driver: {
    type: String,
    defaultValue: '',
  },
  date: {
    type: Date,
  },
  type: {
    type: String,
    allowedValues: ['Drive', 'Walk', 'Delivery'],
    defaultValue: 'Walk',
  },
  users: {
    type: [String],
    defaultValue: [],
  },
  where: {
    type: String,
    defaultValue: '',
  },
});
