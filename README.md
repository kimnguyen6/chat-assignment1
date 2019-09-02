# Chat Application
This repository contains the current progress of the chat application which is implemented using Node.js, Angular and Express. It would contain group administrations and channels.

## Status
This application is supposed to hold the functionality of the following:  
### Group Admin
* Create groups
* Create channels within groups
* Create/invite users to a channel
* Remove groups, channels and users from channels
* Can allow a user to become a Group Assis of the group

### Group Assis of a Group
* Can add or remove a user in the group from channels within the group
* Create channels within the group

### Super Admin
* Assign users with Group admin or Super admin roles
* Also has group admin privileges
* Can remove users from the chat application
* Also has a Group Admin role

### Users
* Identified by username
* One intial user called __Super__ who is a Super admin
* Has an email address

## Git Repository Layout
The root directory of the repository contains the `README.md` file for the specifications. Node.js implementation is done in the file `index.js`. The root directory contains a sub-directory known as the `assess` directory which contains the components of Angular.
  
The `assess` directory contains all the auto-generated files. The project's files are contained inside the `src/app` sub-directory. There are also other directories relating to the specifications of the tasks including `login`, `group`, `channel` etc.
  
Git is to be used in this project, whenever there has been an update where a new function is created and is working as intended an example would be the login form veing responsive to the user's input in the `login` directory.

## Angular Architecture
The Angular application contains _components_, _services_ and _routes_.

### Components
There were four components that were supposed to be used in this application. 
- channel
- dashboard
- group
- login

As well as additional components that were considered like:
- profile
- services

#### Dashboard
The Dashboard component was intended to have all of the groups available to the user as well as containing their username as well as their role if there was one.

Group Admins would be able to create new groups, create channels within the group, invite users to channels and remove groups/users/channels

A Super admin can assign usersto group admin or super roles as well as remove users from the chat application, while also having a group admin role.

A Group assis can add or remove users in the group from channels within the group as well as create channels within the group

#### Login
Login component would allow a user to log in. The intended idea was to make a username and then the data will persist even when they log out. If the username didn't exist before the username was created, then the server will create the user in the background.

## REST API
REST API was intended to be used in Node.js when implemented with the express library.

## Data Structures
The data structures that would be used in a `users.json` file which is an array. The uses of this data was for mainly the:
- List of Users
- List of Groups
- List of Channels

```javascript
{ users:
   [ { username: 'Super',
       email: 'super@com.au',
       isSuper: true,
       isGrpAd: true,
       groups: [],
       password: '',
       valid: false,
       adminlist: [] 
       } 
   ] 
}
```