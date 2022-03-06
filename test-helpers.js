function equal(actual, expected) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + defaultMessage);
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + defaultMessage);
  }
}

function notEqual(actual, expected) {
  if (actual !== expected) {
    const defaultMessage = `${expected} is different to ${actual}`;
    console.info("Pass: " + defaultMessage);
  } else {
    const defaultMessage = `${expected} is the same as ${actual}`;
    console.error("Fail: " + defaultMessage);
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}
