var el = "";
var bool = false;

function addChar(num){
  
    if(num == '.' && el.slice(-1)=='.'){
        el=el.slice(0,-1)
        bool = false;
    }else{
    bool = true;
    }
    el=el.toString()+num;
    document.getElementById("result").value = el;
}

function addOp(num){
    if(!bool){
        Canc(); 
    }
    if(el.length>1){
    el=el.toString()+num;
    document.getElementById("result").value = el;
    bool = false;}
}

function Canc(){
    if(el.slice(-2)=='**'){
        el=el.slice(0,-2);
    }else
    el=el.slice(0,-1);
}

function CancAll(){
    el="";
    document.getElementById("result").value = el;
}
function CancLast(){
    Canc();
    document.getElementById("result").value = el;
}

function execute(){
    if( document.getElementById("result").value!="0"){
    el = eval(el);
    document.getElementById("result").value = el;}
}

