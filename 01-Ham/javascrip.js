showLog = (message) =>{
    console.log(message);
    return document.write(message);
}
showLog("pk01489_Nguyễn Văn Khánh_BT về hàm");

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
function binhPhuong(a){
    var n = a*a;
    return n;
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
    if(b=min){
        min=b;
    }else{
        min=a;
    }
    return  min;
}

function trungBinh(a,b){
    var tb ;
    tb = (a+b)/2
    return tb;
}

function chiaLayDu(a,b){
    var phanDu = a%b;
    return phanDu;
}

function kiemTraChia(a,b){
    if (a%b==0) {
        return a+" chia hết cho "+b;
    }else if (a%b != 0) {
        return a+" không chia hết cho "+b;
    }else if (b%a==0) {
        return b+" chia hết cho "+a;
    }else if (b%a != 0) {
        return b+" không chia hết cho "+a;
    }
}

function tinhChuViDienTichHCN(a,b){
    var cv = (a+b)*2;
    var dt = a*b;
    return "Chu vi HCN là: "+cv+"<br>Diện tích HCN là: "+dt;
}

function tinhChuViDienTichHT(a){
    var cvht = 2*a*3.14;
    var dtht = (a*a)*3.14;
    return "Chu vi HT là: "+cvht+"<br>Diện tích HT là: "+dtht;
}