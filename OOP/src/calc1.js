class Calculator{
   constructor(){
       this.lastNum = 0;
       this.slot = [];
   }
   //add numbers
   addNum(){
       var sum = 0;
       for(let i = 0; i<arguments.length; i++){
           sum += arguments[i];
       }
       this.lastNum = sum;
       return sum;
   }


   //muiltiply numbers
   multiplyNum(){
       var product = 1;
       for(let i = 0; i<arguments.length; i++){
           product *= arguments[i];
       }
       this.lastNum = product;
       return product;
   }

   //return last
   last(){
       return this.lastNum;
   }

   set_slot(number){
       this.slot[number] = this.lastNum;
   }

   get_slot(number){
       return this.slot[number];
   }
};