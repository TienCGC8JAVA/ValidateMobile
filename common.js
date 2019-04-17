function checkMobile(str)
{
    let regexp = /^[0-9]{2}-(?:[0][0-9]{9})$/;
    if (regexp.test(str))
    {
        return true;
    }
    return false;
}

let number = "84-0978489648";
console.log(checkMobile(number));
number = "a8-22222222";
console.log(checkMobile(number));