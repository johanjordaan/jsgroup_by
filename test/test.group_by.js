var should = require('chai').should();

require('../group_by.js');

describe('Array', function() {

  describe('group_by(key_generator)', function() {

    it('should handle an empty array', function(done) {
      var items = [];  
      
      var groups = items.group_by( function(o) { return o.type; } );      
      groups.__keys.length.should.equal(0);
      Object.keys(groups).length.should.equal(1);
        
      done();
    });

  
    it('should create two groups', function(done) {
      var items = [{type:'x'},{type:'b'}];  
      
      var groups = items.group_by( function(o) { return o.type; } );      
      groups.__keys.length.should.equal(2);
      groups['x'].length.should.equal(1);
      groups['b'].length.should.equal(1);
      
      done();
    });

    it('should create two groups and the results should be a dictionary', function(done) {
      var items = [{type:'x',name:'xxx'},{type:'b',name:'bbb'},{type:'b',name:'b2'}];  
      
      var grouping_key_generator =  function(o) { return o.type; };
      var item_key_generator = function(o){ return o.name;};
      var groups = items.group_by(grouping_key_generator,item_key_generator );      
      
      groups.__keys.length.should.equal(2);
      groups['x'].__keys.length.should.equal(1);
      should.exist(groups['x']['xxx']);
      groups['b'].__keys.length.should.equal(2);
      should.exist(groups['b']['bbb']);
      should.exist(groups['b']['b2']);
      
      done();
    });

    
    
    
    it('should create two groups with multiple elements each', function(done) {
      var items = [{type:'x'},{type:'b'},{type:'b'}];  
      
      var groups = items.group_by( function(o) { return o.type; } );      
      groups.__keys.length.should.equal(2);
      groups['x'].length.should.equal(1);
      groups['x'][0].type.should.equal('x');
      groups['b'].length.should.equal(2);
      groups['b'][0].type.should.equal('b');
      groups['b'][1].type.should.equal('b');
      
      done();
    });
    
  });
});


describe('Object', function() {
  describe('group_by(key_generator)', function() {

    it('should handle an empty object', function(done) {
      var items = {};  
      
      var groups = items.group_by( function(o) { return o.type; } );      
      groups.__keys.length.should.equal(0);
      Object.keys(groups).length.should.equal(1);
        
      done();
    });
    
    it('should create two groups', function(done) {
      var items = {'x':{type:'x'},'b':{type:'b'}};  
      
      var groups = items.group_by( function(o) { return o.type; } );      
      groups.__keys.length.should.equal(2);
      groups['x'].length.should.equal(1);
      groups['b'].length.should.equal(1);
      
      done();
    });

    it('should create two groups with multiple elements each', function(done) {
      var items = {'x':{type:'x'},'b':{type:'b'},'z':{type:'b'}};  
      
      var groups = items.group_by( function(o) { return o.type; } );      
      groups.__keys.length.should.equal(2);
      groups['x'].length.should.equal(1);
      groups['x'][0].type.should.equal('x');
      groups['b'].length.should.equal(2);
      groups['b'][0].type.should.equal('b');
      groups['b'][1].type.should.equal('b');
      
      done();
    });
  });
});
