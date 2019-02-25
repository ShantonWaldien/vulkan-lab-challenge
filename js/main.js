mocha.setup('bdd');
var assert = chai.assert;

const reverse = (input) => {
  // your code here 
 
  var input = input.split('').reverse().join('');
  return input;
  
  return "";
  
}

describe('#reverse', function() {
  it('should reverse abcde edcba', function() {
    assert.deepEqual(reverse("abcde"), "edcba");
  });  
  
  it('should reverse Hello elder price! !ecirp redle olleH', function() {
    assert.deepEqual(reverse("Hello elder price!"), "!ecirp redle olleH");
  });  
});



const palindrome = (input) => {
  // your code here 
  
  var reg = /[\W_]/g;
   
  var pal = input.toLowerCase().replace(reg, "");
    
  var reverse = pal.split("").reverse().join("");
  if (reverse === pal)
  return true; 
  
  return false;
}



describe('#palindrome', function() {
  it('return true for a valid palindrome', function() {
    assert.deepEqual(palindrome("Rats live on no evil star"), true);
  });  
  
  it('return true for a famous  palindrome', function() {
    assert.deepEqual(palindrome("Able was I ere I saw Elba"), true);
  });  
  
 
  it('return false for not a palindrome', function() {
    assert.deepEqual(palindrome("Not a palindrome"), false);
  });  
});



const people = [
  { name: "James", age: 21, occupation: "Office Worker" }, 
  { name: "Ann", age: 32, occupation: "Office Worker" }, 
  { name: "Julie", age: 21, occupation: "Civil Service" }, 
  { name: "Rob", age: 18, occupation: "Industrial Supplier" },
];

const group = (items, key) => {
  // your code here 

  const group = {};

  items.forEach(item => {
  	group[item[key]] = [];
  });

  items.forEach(item => {
  	group[item[key]].push(item);
  });

  return group;
}

describe('#group', function() {
  it('should group a list of people by occupation', function() {
      assert.deepEqual(group(people, 'occupation'), {
        "Office Worker": [
          { name: "James", age: 21, occupation: "Office Worker" }, 
          { name: "Ann", age: 32, occupation: "Office Worker" }, 
        ],
        "Civil Service": [
          { name: "Julie", age: 21, occupation: "Civil Service" },         
        ],
        "Industrial Supplier": [          
          { name: "Rob", age: 18, occupation: "Industrial Supplier" },
        ]
      })
  });  
  it('should group a list of people by age', function() {
      assert.deepEqual(group(people, 'age'), {
        18: [          
          { name: "Rob", age: 18, occupation: "Industrial Supplier" },
        ],
        21: [
          { name: "James", age: 21, occupation: "Office Worker" }, 
          { name: "Julie", age: 21, occupation: "Civil Service" },
        ],
        32: [         
          { name: "Ann", age: 32, occupation: "Office Worker" }, 
        ],
      })
   });
  
  it('what if the list is empty', function() {
      assert.deepEqual(group([], 'age'), {})
   });
  it('what if the list is null', function() {
      assert.deepEqual(group(null, 'age'), {})
   });
  it('BONUS: what if the list is stupid long', function() {
      assert.isNotNull(group(new Array(1000000).fill({ name: "Rob", age: 18, occupation: "Industrial Supplier" }), 'age'))
   });
});

mocha.run();