assert.equal(regCheck('DC 55 YU GP', 'GP'), true);assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
describe('regCheck' , function (){
    it('should return true for registration numbers like this "RG 45 HN GP""LKG 679 EC", The function should return false for registration numbers like this"ND 123-456""CY 678-453"' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    
    it('should return true if a registration number is for Bellville otherwise returns false' , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
        });
});