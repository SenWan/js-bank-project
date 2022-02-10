// handle deposit section
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
    // set deposit total amount
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //console.log(depositTotal.innerText) // এটা যেহেতু ইনপুট ফিল্ড না তাই ইনার টেক্সট দিতে হবে।।
    // depositTotal.innerText = depositAmount; // it will show in deposit section
    
    // clear deposit input field
    depositInput.value = '';

});

// handle widraw section
document.getElementById('widraw-button').addEventListener('click', function(){
    const widrawInput = document.getElementById('widraw-input');
    const widrawAmountText = widrawInput.value;
    const newWidrawAmount = parseFloat(widrawAmountText);

    //set widraw total
    const widrawTotal = document.getElementById('widraw-total');
    const previousWidrawText = widrawTotal.innerText;
    const previousWidrawTotal = parseFloat(previousWidrawText);
    const newWidrawTotal = previousWidrawTotal + newWidrawAmount;
    widrawTotal.innerText = newWidrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWidrawTotal;
    balanceTotal.innerText = newBalanceTotal;


    // clear widraw input
    widrawInput.value = '';
})