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
        let tempString =  Equation.replace(/×/gi , "*").replace(/÷/gi , "/").replace("+/-" , "(-1)*").replace(/%/gi , "/100"),
            filterdString = ""; 
 
         const allowedCharackters = ["+" , "-" , "*" , "/" , "(" , ")" , "."]; 
         for(let i=0;i<tempString.length;i++){
             let currentChar = tempString[i];
             if(!isNaN(currentChar) || allowedCharackters.indexOf(currentChar) > -1){
                 filterdString += currentChar;
                 continue;
             } 
         }  
         return filterdString;
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
