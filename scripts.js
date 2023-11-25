function DeleteMe(){
    document.getElementById("Result").value="";
    };
    function Calculator(NewValue){
        document.getElementById("Result").value+=NewValue;
    
    };
    function Answer(){
    var a = document.getElementById("Result").value;
    var b= eval(a);
    document.getElementById("Result").value=b
    }