function getBalance(checking); (savings); {
    let account = prompt(" Which account?");
    if (account == checking) {
        return checkingBalance;
    }
    else (account == savings);{ 
    return savingsBalance;}
}


function withdraw(checking, savings);{
    let amount = prompt("How much would you like to withdraw?");
    return amount;
}

function deposit(checking, savings);{
    let deposit = prompt("How much would you like to deposit?");
    return deposit;
}

module.exports = {
    add : getBalance, withdraw, deposit  
}