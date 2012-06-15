require('../group_by.js')

var x = [1,2,3,4]
var grouping_key_generator = function(o) { 
  if(o%2==0) 
    return 'even'; 
  return 'odd'  
}

var groups = x.group_by(grouping_key_generator);

console.log(groups);