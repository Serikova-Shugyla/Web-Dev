//min

function min(a, b) {
    return (a < b) ? a : b;
}

//pow

function pow(num, degree) {
    return num ** degree;
}

//req

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

//rewrite

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}