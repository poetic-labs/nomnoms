# Nom Nom Noms
----

## Introduction
----

Where do you want to go to lunch next?

## Install

Noms is built on top of the Meteor framework.

1. Clone the repo
 ```
  git clone git@github.com:poetic-labs/nomnoms.git
  cd nomnoms
  ```

2. Install Meteor if you don't have it already
  * OSX / Linux

    `curl https://install.meteor.com/ | sh`

  * [Windows Installer](https://install.meteor.com/windows)

3. Run `meteor npm install`

## Settings

## Start Up
----
* Run `npm start`

## Structure

```
.
├── client
│   ├── css
│   └── imports
│       ├── action-creators
│       ├── action-type-constants
│       ├── components
│       ├── reducers
│       └── store.js
├── imports
│   ├── collections
│   │   ├── places
│   │   ├── plans
│   │   └── users
│   ├── constants
│   ├── modules
│   ├── schemas
│   ├── seeds
│   └── startup
│       ├── client
│       └── server
├── public
│   └── images
├── tests
└── package.json
```
