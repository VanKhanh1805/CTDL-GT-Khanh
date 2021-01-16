showLog = (message) =>{
    console.log(message);
    return document.write(message);
}
showLog("xin chào");

/**
 * @param  {number} a
 * @param  {number} b
 */
function tong(a,b) {
    return a+b;
}

function hieu(a,b) {
    return a-b;
}

function tich(a,b) {
    return a*b;
}

function thuong(a,b) {
    if(b == 0 ){ 
        return "a không chia được cho 0";
    }else if(a == 0){
        return "b không chia được cho 0"; 
    }else{
        var c = a/b;
        var d = b/a;
        return "Thương của a/b là: "+ c +"<br> Thương của b/a là: "+ d +"" ; 
    }
}

function soLonNhat(a,b) {
    var max;
    if(a=max){
        max=a;
    }else{
        max=b;
    }
    return  max;
}

function soNhoNhat(a,b) {
    var min;
    if(a=min){
        min=a;
    }else{
        min=b;
    }
    return  min;
}