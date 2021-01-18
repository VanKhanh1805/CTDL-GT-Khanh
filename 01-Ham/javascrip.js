showLog = (message) =>{
    console.log(message);
    return document.write(message);
}
showLog("<h2>pk01489_Nguyễn Văn Khánh_BT về hàm</h2>");

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

var s1,s2,s3,s4,s5;

function noiChuoi(s1,s2){
    var noi = s1.concat(s2);
    return "Kết quả: "+noi;
}

function noiChuoiNam(s1,s2,s3,s4,s5){
    var chuoiNam = s1.concat(s2,s3,s4,s5);
    return "Kết quả: "+chuoiNam;
}

function inHoa(s1,s2,s3,s4,s5){
    var chuois1 = s1.toUpperCase();
    var chuois2 = s2.toUpperCase();
    var chuois3 = s3.toUpperCase();
    var chuois4 = s4.toUpperCase();
    var chuois5 = s5.toUpperCase();
    var chuoiall = s1.concat(s2,s3,s4,s5).toUpperCase();
    return "Chuỗi s1: "+chuois1+"<br>Chuỗi s2: "+chuois2+"<br>Chuỗi s3: "+chuois3+"<br>Chuỗi s4: "+chuois4+"<br>Chuỗi s5: "+chuois5+
    "<br>Chuỗi nối: "+chuoiall;
}

function kiemTraTonTai(s1,s2){
    var kiemTra = s1.indexOf(s2);
    if(kiemTra == -1){
        return "s2 không tồn tại trong s1";
    }else{
        return "s2 tồn tại trong s1";
    }
}

function demDoDai(s1, s2, s3, s4, s5) {
    var doDais1 = s1.length;
    var doDais2 = s2.length;
    var doDais3 = s3.length;
    var doDais4 = s4.length;
    var doDais5 = s5.length;
    var doDaiAll = s1.concat(s2, s3, s4, s5).length;
    return "Độ dài của s1: " + doDais1 + "<br>" + "độ dài của s2: " + doDais2 + "<br>" + "độ dài của s3: " + doDais3 + "<br>"
        + "Độ dài của s4: " + doDais4 + "<br>" + "độ dài của s5: " + doDais5 + "<br>" + "độ dài của chuỗi gộp từ s1->s5: " + doDaiAll;
}

function hamCatChuoi(s1, s2, s3, s4, s5) {
    var string1 = s1.substr(1, 3);
    var string2 = s2.substr(1, 3);
    var string3 = s3.substr(1, 3);
    var string4 = s4.substr(1, 3);
    var string5 = s5.substr(1, 3);
    return "Cắt chuỗi con s1: " + string1 + "<br>" + "cắt chuỗi con s2: " + string2 + "<br>" + "cắt chuỗi con s3: "+string3+ "<br>"
        + "cắt chuỗi con s4: " + string4 + "<br>" + "cắt chuỗi con s5: " + string5;
}
