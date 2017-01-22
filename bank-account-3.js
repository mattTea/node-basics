var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return account;
}


function getAccount (username) {
	var matchedAccount;
	
	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].username === username) {
			matchedAccount = accounts[i];
		}
	}
	
	return matchedAccount;
}


function deposit (account, amount) {
	if (typeof amount === 'number') {
		account.balance += amount;
	} else {
		console.log('Deposit failed, amount is not a number.')
	}
}

function withdraw (account, amount) {
	if (typeof amount === 'number') {
		account.balance -= amount;
	} else {
		console.log('Withdraw failed, amount is not a number.')
	}
}

function getBalance (account) {
	return account.balance;
}


function createBalanceGetter (account) {
	return function () {
		return account.balance;
	}
}


var matt = createAccount({
	username: 'Matt',
	balance: 0
});

deposit(matt, 120);
withdraw(matt, 'my string');

var matt2 = getAccount('Matt');
var getMatt2Balance = createBalanceGetter(matt2);

console.log(getMatt2Balance());