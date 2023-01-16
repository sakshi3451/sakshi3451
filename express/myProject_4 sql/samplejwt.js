const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 'Sample@132');

const token2 = jwt.sign({
    data: 'test jwt'
  }, 'Sample@132', { expiresIn: 1 });

console.log(token); 
console.log(token2);


setTimeout(() => {
    try {
        var decoded = jwt.verify(token2, 'Sample@132');
        console.log(decoded);
    } catch(err) {
        console.log(err);
    }
}, 2000);
