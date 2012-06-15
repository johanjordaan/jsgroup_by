Array.prototype.group_by = function(grouping_key_generator,item_key_generator) {
  var ret_val = {
    __keys : [],
  }
  
  for(var i=0;i<this.length;i++) {
    var key = grouping_key_generator(this[i]);
    if(ret_val.__keys.indexOf(key) == -1) {
      ret_val.__keys.push(key);
      if(item_key_generator == undefined)
        ret_val[key] = []
      else 
        ret_val[key] = { __keys : [] }
    }      
    if(item_key_generator == undefined)
      ret_val[key].push(this[i]);
    else {
      var item_key = item_key_generator(this[i]);
      ret_val[key][item_key] = this[i];
      ret_val[key].__keys.push(item_key);
    }
  }
  return ret_val;
}

Object.prototype.group_by = function(grouping_key_generator,item_key_generator) {
  var ret_val = {
    __keys : [],
  }
 
  var source_keys = Object.keys(this);
  for(var i=0;i<source_keys.length;i++) {
    var key = grouping_key_generator(this[source_keys[i]]);
    if(ret_val.__keys.indexOf(key) == -1) {
      ret_val.__keys.push(key);
      if(item_key_generator == undefined)
        ret_val[key] = []
      else
        ret_val[key] = { __keys : [] }
    }      
    if(item_key_generator == undefined)
      ret_val[key].push(this[source_keys[i]]);
    else {
      var item_key = item_key_generator(this[i]);
      ret_val[key][item_key] = this[i];
      ret_val[key].__keys.push(item_key);
    }
  }
 
  return ret_val;
}
