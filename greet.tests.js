describe('greet function' , function (){
    it('should greet bob with "Hello, bob"' , function(){
        assert.equal ("Hello, bob", greet("bob")); 
    });
    
        it('should greet sam with "Hello, sam"' , function(){
            assert.equal ("Hello, sam", greet("sam"));
        });
});
describe('is from bellville' , function (){
    it('should return true if a registration number is for Bellville otherwise returns false' , function(){
        assert.equal(isFromBellville('CY 123'), true); 
    });
    
    it('should return true if a registration number is for Bellville otherwise returns false' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
        });
});