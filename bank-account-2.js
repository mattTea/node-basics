var accounts = [];


// new function createAccount(account object, stored in an array of accounts)
// push onto accounts array
// return account

function createAccount (account) {
	accounts.push(account);
	return account;
}


// new function getAccount (one argument userName)
// find matching accounts using forEach
//     check if userName matches whatever is passed in, for all items in array
//     or return undefined

function getAccount (username) {
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});
	
	return matchedAccount;
}




// deposit(account, amount)
function deposit (account, amount) {
	account.balance += amount;
}

// withdraw(account, amount)
function withdraw (account, amount) {
	account.balance -= amount;
}

// getBalance(account)
function getBalance (account) {
	return account.balance;
}


// creating new account to check above code that adds new account to 'accounts' array
var mattsAccount = createAccount({
	username: 'Matt',
	balance: 0
});


deposit(mattsAccount, 100);
console.log(getBalance(mattsAccount));


withdraw(mattsAccount, 11);
console.log(getBalance(mattsAccount));


// check getAccount function
var existingAccount = getAccount('Matt');
console.log(getBalance(mattsAccount));


// check create Account function
var katiesAccount = createAccount({
	username: 'katie001',
	balance: 12
});

console.log(accounts);


// verify getAccount works (var does not necessarily need to be different to existing Account)
var existingKatiesAccount = getAccount('katie001');
console.log(existingKatiesAccount);
	



// MT: the array 'accounts' has no relation to function arguments 'account'
