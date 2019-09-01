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