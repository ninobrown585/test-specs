const {multiplication, conCatOdds} = require('./index');

test('multiplication of 2 and 3 equals 6', () => {
    expect(multiplication(2, 3)).toBe(6);
});

test('multiplication of 5 and 5 equals 25', () => {
    expect(multiplication(5, 5)).toBe(25);
});

test('multiplication of 0 and 0 equals 0', () => {
    expect(multiplication(0, 0)).toBe(0);
});

test('multiplication of 0 and 5 equals 0', () => {
    expect(multiplication(0, 5)).toBe(0);
});

test('multiplication of 7 and 7 does not equal 0', () => {
    expect(multiplication(7, 7)).not.toBe(0);
});

test('concatenation of odd numbers in array equals 13579', () => {
    expect(conCatOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe('13579');
});

test('concatenation of odd numbers in array does not equal 2468', () => {
    expect(conCatOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])).not.toBe('2468');
});

test('concatenation of odd numbers in array does not equal 123456789', () => {
    expect(conCatOdds([1, 2, 3, 4, 5, 6, 7, 8, 9])).not.toBe('123456789');
});

test('concatenation of odd numbers in array equals 1579', () => {
    expect(conCatOdds([1, 2, 4, 5, 6, 7, 8, 9])).toBe('1579');
});

//fundtional test section for shopping cart checkout

//If the user is not logged in, the user should be asked to login or continue as guest
//When a user checks out as guest, the user should be asked if they want to login or create an account
///If a user continues as guest, the user should be asked to enter their shipping address and payment information
///If a user logs in, the user should be asked to enter their payment information
///If a user creates an account, the user should be asked to enter their shipping address and payment information

//If the cart is empty, the user should be asked to add items to the cart before checking out




