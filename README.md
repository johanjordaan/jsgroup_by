jsgroup_by
==========

A simple Object and Array extension that allows for easy grouping.

Install
-------
npm install group_by

Usage
-----
```
require('group_by')

var x = [1,2,3,4]
var grouping_key_generator = function(o) { 
  if(o%2==0) 
    return 'even'; 
  return 'odd'  
}

var groups = x.group_by(grouping_key_generator);

console.log(groups);
```

<pre>
{ __keys : [ 'odd', 'even' ]
  , odd  : [ 1, 3 ]
  , even : [ 2, 4 ] 
}
</pre>

