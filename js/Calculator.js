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
        this.addFilterToStringPrototype();
        return Equation.replace(/×/gi , "*").replace(/÷/gi , "/").replace("+/-" , "(-1)*").replace(/%/gi , "/100").filterForCalculating();  
     }
 
     addFilterToStringPrototype = function(){
        String.prototype.filterForCalculating = function(){
            const allowedCharackters = ["+" , "-" , "*" , "/" , "(" , ")" , "."]; 
            let filterdString = ""; 
            for(let i=0;i<this.length;i++){
                let currentChar = this[i];
                if(!isNaN(currentChar) || allowedCharackters.indexOf(currentChar) > -1){
                    filterdString += currentChar;
                    continue;
                } 
            }  
            return filterdString;
        }
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
