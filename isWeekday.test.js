describe('isWeekday' , function (){
    it('should find out if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    
    it('should find out if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Sunday'), false);
        });
});
