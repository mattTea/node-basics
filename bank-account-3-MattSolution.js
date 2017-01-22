var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return account;
}


	// 1. replace forEach with either whileLoop or forLoop
	// iterate over every account, when find a match save to matchedAccount, and return matchedAccount
	// account[0] account[1] account[i] (use accounts.length -> returns total number of accounts so can use it in a for or while loop)

	// original function: find matching accounts using forEach (replace now with whileLoop or forLoop)
	//     check if userName matches whatever is passed in, for all items in array
	//     or return undefined

function getAccount (username) {
	var i = 0;
	var matchedAccount;
	
	for (accounts[i]; accounts.username !== username && accounts < accounts.length; accounts++) {
		if (account.username === username) {
			matchedAccount = account;
		}
	}
	
	return matchedAccount;
}


// 2. only accept number, use typeof
//    if not console.log a message

function deposit (account, amount) {
	if (typeof amount != 'number') {
		console.log('Sorry, deposit amount must be a numeric value.');
	} else (account.balance += amount);
}

function withdraw (account, amount) {
	if (typeof amount != 'number') {
		console.log('Sorry, deposit amount must be a numeric value.');
	} else (account.balance -= amount);
}

function getBalance (account) {
	return account.balance;
}


// 3. create function createBalanceGetter(account)
// closure video

//		return anon function ()
//			reference account.balance and return it

function createBalanceGetter (account) {
	function newBalance () {
		console.log('Your new balance is ' + account.balance);
	}

	return newBalance;
}



var mattsAccount = createAccount({
	username: 'Matt',
	balance: 0
});

var katiesAccount = createAccount({
	username: 'Katie',
	balance: 10
});

console.log(accounts);


var existingAccount = getAccount('Katie');
console.log(getBalance(katiesAccount));


deposit(mattsAccount, 100);
console.log(getBalance(mattsAccount));


withdraw(mattsAccount, 'Sheep');
console.log(getBalance(mattsAccount));




var mattNewBalance = createBalanceGetter('Matt')
mattNewBalance();
mattNewBalance();