let arr = [1,2,3,4,5,6,7,8,9,10];

timKiemTuanTu = (a) =>{
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i]==a) {
            return "vị trí "+i;
        }
    }
    return "Phần tử không có trong mảng";
}
console.log(timKiemTuanTu(6));

timKiemNhiPhan = (arr,a,left,right) =>{
    console.log(`${left} ${right}`);
    
    let i = Math.ceil((left + right)/2);
    if (a == arr[i]) {
        return "Vị trí "+ i ;
    }
    if (left == right) {
        return "Phần tử không có trong mảng";
    }
    if( a > arr[i]){
        return timKiemNhiPhan(arr,a,i+1,right);
    }
    if (a < arr[i]) {
        return timKiemNhiPhan(arr,a,left,i-1);
    }
    return "Phần tử không có trong mảng";
}
console.log(timKiemNhiPhan(arr,10,0,arr.length-1));