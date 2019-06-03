//add numbers
describe("Add", function(){
   let answer = new Calculator();
 it("should add two numbers and return 0", function(){
     let result = answer.addNum(0,0);
     expect(result).toBe(0);
 })

  it("should add two negative numbers and return -2", function(){
     let result = answer.addNum(-1,-1);
     expect(result).toBe(-2);
 })


   it("should add two numbers and return 9", function(){
     let result = answer.addNum(4,5);
     expect(result).toBe(9);
 })


    it("should add two numbers and return 10", function(){
     let result = answer.addNum(1,2,3,4);
     expect(result).toBe(10);
 })

 });

//multiply numbers
describe("Multiply", function(){
   let answer = new Calculator();
   it("should multiply two numbers and return 2", function(){
       let result = answer.multiplyNum(1,2);
       expect(result).toBe(2);
   })

   it("should multiply numbers and return 24", function(){
       let result = answer.multiplyNum(1,2,3,4);
       expect(result).toBe(24);
   })
});


//last
describe("last returns the result of the last function called", function(){
   let answer = new Calculator();
   it("should return 2", function(){
       answer.multiplyNum(1,2);
       let result = answer.last();
       expect(result).toBe(2);
   })

   it("should return 3", function(){
       answer.addNum(1,2);
       let result = answer.last();
       expect(result).toBe(3);
   })

   it("should return 7", function(){
       answer.addNum(1,2);
       let result = answer.addNum(answer.last(), 4);
       expect(result).toBe(7);
   })
});

//Memory Slots
describe("Allow the calculator to remember more stuff", function(){
   let answer = new Calculator();
   it("should return 3", function(){
       answer.addNum(1,2);
       answer.set_slot(1);
       let result = answer.get_slot(1)
       expect(result).toBe(3);
   })

    it("should return 9", function(){
       answer.addNum(1,2);
       answer.set_slot(1);
       let result = answer.addNum(answer.get_slot(1), 6);
       expect(result).toBe(9);
   })

    it("should return 12", function(){
       answer.addNum(1,2);
       answer.set_slot(1);
       let result = answer.multiplyNum(answer.get_slot(1), 4);
       expect(result).toBe(12);
   })


});