$(function(){

    
    let values=[];
    let op=[];
    let result=0;
    let flag=0;

    //////////////////////////////////////////
    $.fn.changePrimary=function(content){
        if(flag==1){
            $("#text2").text(0);
            $("#text1").text(0);
            flag=0;
        }
        let primaryText= $("#text2").text();
        if(primaryText=="0"){
            primaryText="";
        }
        primaryText += content;
        $("#text2").text(primaryText);
    }

    $.fn.shift=function(operation){
        let secondaryText=$("#text1").text();
        let primaryText= $("#text2").text();

        values.push(Number(primaryText));
        if(operation != ""){
            op.push(operation);
        }

        $("#text2").text("0");
        if (secondaryText == "0"){
            secondaryText="";
        }

        secondaryText += primaryText + operation;
        
        $("#text1").text(secondaryText);
    }

    $.fn.equalto=function(){
        let result1=0;
        for(let i=1, j=0; j<op.length && i<values.length;j++,i++){
            if(result1==0 && j==0){
                result1=values[0];
            }
            value=values[i];
            let sign=op[j];
            switch(sign){
                case "+":{result1 += value; break;}
                case "-":{result1 -= value; break;}
                case "*":{result1 = (result1 * value); break;}
                case "/":{result1 = (result1 / value); break;}
                case "":continue;

            }
        }
        values=[];
        op=[];
        return result1;
    }
    
    $.fn.showResult=function(){
        if(values.length>0){
            result=$.fn.equalto();
        }
        $("#text2").text(result);
        flag=1;
    }
    
    
    /////////////////////////////////////////////////////////////////////
    $("#btnadd").click(function(){
        $.fn.shift("+");
    });
    $("#btndiff").click(function(){
        $.fn.shift("-");
    });
    $("#btnprod").click(function(){
        $.fn.shift("*");
    });
    $("#btndiv").click(function(){
        $.fn.shift("/");
    });


    $("#btnequal").click(function(){
        $.fn.shift("");
        $.fn.showResult();

    });

    $("#btnAC").click(function(){
        values=[];
        op=[];
        $("#text1").text(0);
        $("#text2").text(0);

        console.log('arrays are cleared');
    });

    $("#btnC").click(function(){
        $("#text2").text(0);
    });
    
    
    ///////////////////////////////////////////////////////////////

    $("#btn1").click(function(){
        $.fn.changePrimary("1");
    });
    $("#btn2").click(function(){
        $.fn.changePrimary("2");
    });
    $("#btn3").click(function(){
        $.fn.changePrimary("3");
    });
    $("#btn4").click(function(){
        $.fn.changePrimary("4");
    });
    $("#btn5").click(function(){
        $.fn.changePrimary("5");
    });
    $("#btn6").click(function(){
        $.fn.changePrimary("6");
    });
    $("#btn7").click(function(){
        $.fn.changePrimary("7");
    });
    $("#btn8").click(function(){
        $.fn.changePrimary("8");
    });
    $("#btn9").click(function(){
        $.fn.changePrimary("9");
    });
    $("#btn0").click(function(){
        $.fn.changePrimary("0");
    });
    $("#btndot").click(function(){
        $.fn.changePrimary(".");
    });
})