const multiplication = (x, y) => {
    return x * y;
};

const conCatOdds = (arr) => {
    return arr.filter(num => num % 2 !== 0).join('');
}

module.exports = {multiplication, conCatOdds};