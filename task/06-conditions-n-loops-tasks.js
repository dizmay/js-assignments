
/** ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  const gen = (n, w) => num => num % n === 0 ? w : '';
  const fizz = gen(3, 'Fizz');
  const buzz = gen(5, 'Buzz');
  return fizz(num) + buzz(num) || num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  return n === 1 ? n : n * getFactorial(n-1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  return n2 * (n2 + 1) / 2 - n1 * (n1 - 1) / 2;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false 
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const arr = [a, b, c].sort((x, y) => x - y);
  return arr[0] + arr[1] > arr[2];
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const rect1RCY = rect1.top + rect1.height;
  const rect1RCX = rect1.left + rect1.width;
  return (rect1RCY > rect2.top) && (rect1RCX > rect2.left);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const d = Math.sqrt((point.x - circle.center.x)**2 +(point.y - circle.center.y)**2);
  return d < circle.radius
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i && str.indexOf(str[i], i + 1) === -1) {
      return str[i];
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval, specified by two points and 
 * include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return `${isStartIncluded ? '[' : '('}${a < b ? `${a}, ${b}` : `${b}, ${a}`}${isEndIncluded ? ']' : ')'}`
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse('').join('')
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return Number(num.toString().split('').reverse().join(''))
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let sum = 0;
  ccn = ccn.toString();
  for (let i = 0; i < ccn.length; i++) {
    let cardNum = parseInt(ccn[i]);
    if ((ccn.length - i) % 2 === 0) {
      cardNum *= 2;
      if (cardNum > 9) {
        cardNum -= 9;
      }
    }
    sum += cardNum;
  }
  return sum % 10 === 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  return num < 9 ? num : getDigitalRoot(num.toString().split('').reduce((a, b) => (+a) + (+b)));
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  let count = 1;
  const brackets = ['[]', '()', '{}', '<>'];
  while(count === 1) {
      let newStr = str;
      brackets.map(e => str = str.replace(e[0] + e[1], ''));
      if (newStr === str) count = 0;
  }
  return str.length === 0
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constructed using the following rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
	const diff = (endDate - startDate) / 1000;
	const min = (diff / 60);
  const hour = (min / 60);
  const day = (hour / 24);
  const month = (day / 30);
  const year = (day / 365);
  if(year <= (345 / 365)) {
  	if(month <= (25 / 30)) {
    	if(day <= (22 / 24)) {
      	if(hour <= 0.75) {
        	if(min <= 0.75) {
          	if(diff <= 45) return 'a few seconds ago'
          }
          else if(min > 0.75 && min <= 1.5) return 'a minute ago'
          else return `${Math.round((min - Math.floor(min)) === 0.5 ? min - 0.1 : min)} minutes ago`
        }
        else if(hour > 0.75 && hour <= 1.5) return 'an hour ago'
        else return `${Math.round((hour - Math.floor(hour)) === 0.5 ? hour - 0.1 : hour)} hours ago`
      }
      else if(day > (22 / 24) && day <= 1.5) return 'a day ago'
      else return `${Math.round((day - Math.floor(day)) === 0.5 ? day - 0.1 : day)} days ago`
    }
    else if(month > (25 / 30) && month <= 1.5) return 'a month ago'
    else return `${Math.round((month - Math.floor(month)) === 0.5 ? month - 0.1 : month)} months ago`
  }
  else if(year > (345 / 365) && year <= 1.493) return 'a year ago'
  else return `${Math.round((year - Math.floor(year)) === 0.5 ? year - 0.1 : year)} years ago`
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
	let result = '/';
	const gen = str => str.split('/').filter(e => e !== '');
  let first = gen(pathes[0]), last = gen(pathes[pathes.length-1])
  for(let i = 0; i < first.length; i++) {
  	if(first[i] === last[i]) result += first[i] + '/';
  }
  return pathes[pathes.length - 1][0] === '/' ? result : '';
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  let result = new Array(m1.length).fill(0).map(row => new Array(m2[0].length).fill(0));
  return result.map((e, i) => {
    return e.map((el, j) => {
     return m1[i].reduce((acc, item, id) => acc + (item * m2[id][j]), 0)
   })
  })
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
	let diagToBottom = [], diagToTop = [];
	for(let i = 0; i < position.length; i++) {
  	let line = [], row = [];
    diagToBottom.push(position[i][i]);
    diagToTop.push(position[(position.length - 1) - i][i])
    for(let j = 0; j < position.length; j++) {
    	line.push(position[i][j]);
      row.push(position[j][i]);
    }
    if(new Set(line).size === 1 && line[0] !== undefined) return line[0];
    if(new Set(row).size === 1 && line[0] !== row) return row[0];
  }
  if(new Set(diagToBottom).size === 1 && diagToBottom[0] !== undefined) return diagToBottom[0];
  if(new Set(diagToTop).size === 1 && diagToTop[0] !== undefined) return diagToTop[0];
  return undefined
}

module.exports = {
  getFizzBuzz: getFizzBuzz,
  getFactorial: getFactorial,
  getSumBetweenNumbers: getSumBetweenNumbers,
  isTriangle: isTriangle,
  doRectanglesOverlap: doRectanglesOverlap,
  isInsideCircle: isInsideCircle,
  findFirstSingleChar: findFirstSingleChar,
  getIntervalString : getIntervalString,
  reverseString: reverseString,
  reverseInteger: reverseInteger,
  isCreditCardNumber: isCreditCardNumber,
  getDigitalRoot: getDigitalRoot,
  isBracketsBalanced: isBracketsBalanced,
  timespanToHumanString : timespanToHumanString,
  toNaryString: toNaryString,
  getCommonDirectoryPath: getCommonDirectoryPath,
  getMatrixProduct: getMatrixProduct,
  evaluateTicTacToePosition : evaluateTicTacToePosition
};