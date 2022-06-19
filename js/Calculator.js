class Calculator{
      

     constructor(){
      this.history = [];
      return this;
     }
     getEquationValue = function(Equation){
        try{  
            return eval(Equation);
        }catch(e){
            return false;
        }
     } 

     replaceCharactersToCalculating = function(Equation){
        return Equation.replace(/×/gi , "*").replace(/÷/gi , "/").replace("+/-" , "(-1)*").replace(/%/gi , "/100");
     }
 
     appendToHistory = function(Equation , EquationAnswer){ 
         if(this.history.length < 3){ 
            this.history.push({Equation : Equation , EquationAnswer : EquationAnswer});
            return true;
         }
         this.history[2] = {Equation : Equation , EquationAnswer : EquationAnswer};
         return true;
     } 
     getHistory = function(){
        return this.history;
     } 

}
