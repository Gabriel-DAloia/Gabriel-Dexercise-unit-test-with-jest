test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 Yen", function() {

    const { fromDollarToYen } = require('./app.js');


    const yen = fromDollarToYen(3.5);


    const expected = 3.5 * 156.5;


    expect(yen).toBe(expected);
});

test("One Yen should be 0.87 Pounds", function() {

    const { fromYenToPound } = require('./app.js');


    const pounds = fromYenToPound(3.5);

    const expected = 3.5 * 0.87;

    expect(pounds).toBe(expected);
});
