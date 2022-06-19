$(document).ready(function(){
  
let    calculatorBox = $("#calculatorBox") ,
       resultOfStatmentInput     = $(".resultOfStatment"),
       EquationStringSpan        = $(".EquationString"),
       EquialOperatorSpanText    = $(".EquialOperatorSpan"),
       numbersBtns               = $(".numbers-box input"),
       operatorsBtns             = $(".operators-box input:not(.singleTask)"),
       EquialOperatorinput       = $(".operators-box input.EquialOperator.singleTask"),
       resetOperator             = $(".operators-box input.resetOperator.singleTask"),
       NegativeToggleOperator    = $(".operators-box input.NegativeToggleOperator.singleTask"),
       history                   = $("div.history"),
       historyIcon               = $("span#historyIcon"),
       closeSpan                 = $("span#closeSpan"),
       historyBox                = $("div.history div.history-box");
       ModeSpan                = $("div.mode-buttons-box span");
       CalculatorOb              = new Calculator(); 

       function getResultOnEvent(){
        let EquationString = resultOfStatmentInput.val(),
            Equation   =  CalculatorOb.replaceCharactersToCalculating(EquationString),
            result ;
         
            result = CalculatorOb.getEquationValue(Equation);   
            EquialOperatorSpanText.html("=");
            resultOfStatmentInput.val(result ? result : "");
            EquationStringSpan.html(result ? EquationString : "Wrong Entry"); 
            CalculatorOb.appendToHistory(EquationString , result);
            
            //adding Equation 
            let historyRows = "",
                historyArray = CalculatorOb.getHistory();            
            for(let historyItem in historyArray){ 
                historyRows  += "<div class='Equation-history-row'><p data-answer= '" + historyArray[historyItem].EquationAnswer + "'>" + historyArray[historyItem].Equation + "</p></div>"; 
            }
            historyBox.html(historyRows);
        }

        //on pressing enter event
        $(document).keyup(function(e){
            if(e.keyCode == 13 && resultOfStatmentInput.val() != ""){
                getResultOnEvent();
            }
        });

       //eqiual btn code
       EquialOperatorinput.click(function(){
           if(resultOfStatmentInput.val() != ""){ 
                getResultOnEvent();
           }
       });  
       //reset btn code
       resetOperator.click(function(){
           resultOfStatmentInput.val("");
           EquationStringSpan.html(""); 
           EquialOperatorSpanText.html("");
       });

       //Negative or positive sign adder btn code
       NegativeToggleOperator.click(function(){
        let inputValue = resultOfStatmentInput.val();
        if(!$(this).hasClass("clicked")){ 
            resultOfStatmentInput.val( inputValue + "(-1)×"); 
            NegativeToggleOperator.addClass("clicked");
            return true;
        }  
        resultOfStatmentInput.val( inputValue.slice(0 , inputValue.length - 5 ));
        NegativeToggleOperator.removeClass("clicked");
       });

       //numbers btn code
       numbersBtns.each(function(){
           $(this).click(function(){ 
                resultOfStatmentInput.val(resultOfStatmentInput.val()  + $(this).val());
                NegativeToggleOperator.removeClass("clicked");
           });
       });

       //operators btn code
       operatorsBtns.each(function(){
           $(this).click(function(){ 
                resultOfStatmentInput.val(resultOfStatmentInput.val()  + $(this).val());
                NegativeToggleOperator.removeClass("clicked");
           });
       });


       //history code 
       historyIcon.click(function(){
            $(this).parent().toggleClass("visible");
            $(this).parent().toggleClass( "hidden");
       });
       closeSpan.click(function(){
            $(this).parent().toggleClass("visible");
            $(this).parent().toggleClass( "hidden");
       });
 
       historyBox.on("click" , "div.Equation-history-row" , function(){

            //put the equition and answer into result box
            let equition = $(this).find("p").text(),
                equitionAnswer = $(this).find("p").attr("data-answer"); 
                resultOfStatmentInput.val(equitionAnswer);
                EquationStringSpan.html(equitionAnswer ? equition : "Wrong Entry"); 
 
            //hiding history box
            history.toggleClass("visible");
            history.toggleClass( "hidden"); 
       });


       //mode code
       ModeSpan.click(function(){
           $(this).addClass("active").siblings("span").removeClass("active");
            calculatorBox.attr("data-mode" , $(this).attr("data-mode-name"));
       });
});
 