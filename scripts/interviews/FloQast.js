// - Web app that renders a list of 26 buttons labeled A-Z
// - Users may click these buttons in any order and as often as they'd like
// - Each action (click) is logged in the format `{ user: <userId>, action: <buttonLabel> }`
// - Logs are stored in a list sorted by time ascending, e.g. the oldest log is first, newest is last 

// - It has been reported that certain users are experiencing an error
// - We know the error is caused by a sequence of presses in the following order: A, B, C

// - Create a function that will return a list of users that have experienced this error

const logs = [
	{ user: 1, action: 'A' },
	{ user: 1, action: 'B' },
	{ user: 2, action: 'A' },
	{ user: 1, action: 'C' },
	{ user: 2, action: 'B' },
	{ user: 3, action: 'Z' },
	{ user: 2, action: 'B' },
	{ user: 2, action: 'C' },
];


/**
 * 
 * live attempt:
 * 
 * 
 */
const aggUserActions = (userLogs) => {
	let users = {
	}

	for (let user of userLogs) {
			if (users[user.user] !== undefined){
					users[user.user].push(user.action)
			}
			else {
					users[user.user] = [user.action];
			}
	}
	// console.log(users)
	return users;
}

const checkErrPattern = (userActions) => {
	let affectedUsers = []
	// iterate over userActions
	for (let [user, actions] of Object.entries(userActions)){
			console.log(user, actions)
	}
	 // if user's actions contain 'ABC'
			// push user id to result array

	
	return affectedUsers;
}

// console.log(checkErrPattern(aggUserActions(logs)))
// console.log(checkErrPattern(aggUserActions(logs)))
// https://codecollab.io/@jc/20211229-davidh