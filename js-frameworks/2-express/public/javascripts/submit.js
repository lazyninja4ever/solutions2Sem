const btn = document.getElementById('subBtn');

const validateInput = () => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const inputVal = document.getElementById('mailField').value;
    let matches = regEx.test(inputVal);
    if(matches){
        return true;
    } else {
        return false;
    }
}

btn.addEventListener('click',()=>{

    let proceed = validateInput();
    let msg = "Please enter a valid email";
    if (proceed){
        msg = 'Subscription could not be completed. Please try again later.';
    }
    alert(msg);
});