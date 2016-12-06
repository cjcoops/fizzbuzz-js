describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("knows if something is divisible by 3", function() {
    expect(fizzBuzz.divisibleBy3(3)).toEqual(true);
  });

  it('knows if something is not divisible by 3', function() {
    expect(fizzBuzz.divisibleBy3(4)).toEqual(false);
  });

  it('knows if something is divisible by 5', function() {
    expect(fizzBuzz.divisibleBy5(5)).toEqual(true);
  });

  it('knows if something is not divisible by 5', function() {
    expect(fizzBuzz.divisibleBy5(6)).toEqual(false);
  });

  it('knows if something is divisible by 15', function() {
    expect(fizzBuzz.divisibleBy15(15)).toEqual(true);
  });

  it('knows if something is not divisible by 15', function() {
    expect(fizzBuzz.divisibleBy15(16)).toEqual(false);
  });

  it('knows if a number is divisible by a divisor', function() {
    expect(fizzBuzz.divisibleByDivisor(3,3)).toEqual(true);
    expect(fizzBuzz.divisibleByDivisor(5,5)).toEqual(true);
    expect(fizzBuzz.divisibleByDivisor(15,15)).toEqual(true);
  });

  it('knows if a number is not divisible by a divisor', function() {
    expect(fizzBuzz.divisibleByDivisor(4,3)).toEqual(false);
    expect(fizzBuzz.divisibleByDivisor(6,5)).toEqual(false);
    expect(fizzBuzz.divisibleByDivisor(16,15)).toEqual(false);
  });

  it('returns fizz when number is divisible by 3', function() {
    expect(fizzBuzz.play(3)).toEqual('fizz');
  });

  it('returns buzz when number is divisible by 5', function() {
    expect(fizzBuzz.play(5)).toEqual('buzz');
  });

  it('returns fizzbuzz when number is divisible by 15', function() {
    expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
  });

  it('returns itself when number not a multiple of 3, 5 or 15', function() {
    expect(fizzBuzz.play(4)).toEqual(4);
  });


});
