function isMobileNumberValid(number) {
  const regex = /^[89]\d{9}$/; // Regular expression pattern to match the mobile number
  
  return regex.test(number);
}

function checkNumber(mobileNumber){

  if (isMobileNumberValid(mobileNumber)) {
    console.log(`${mobileNumber} :- Valid mobile number`);
  } else {
    console.log(`${mobileNumber} :- Invalid mobile number`);
  }
}
checkNumber(6353302838);
checkNumber(9727811406);
checkNumber(97278114069);