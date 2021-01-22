//Bài1: mảng chứa số từ 1 tới 10
var mang = [1,2,3,4,5,6,7,8,9,10];
console.log(mang);

//Bài2: mảng chứa sở thích
var soThich = ["chơi game","nghe nhạc","chơi thể thao"];
console.log(soThich);

//Bài3: hàm trả danh sách n số nhỏ hơn n
SoNhoHonN = (n) => {
    var mangSo = [];
    for (let i = 0; i < n; i++) {
        mangSo.push(i);
    }
    return mangSo;
}
console.log(SoNhoHonN(100));

//Bài4: hàm trả danh sách n số lẻ nhỏ hơn n
SoLeNhoHonN = (n) => {
    var mangSoLe = [];
    for (let i = 0; i < n; i++) {
        if (i%2 != 0) {
            mangSoLe.push(i);
        }
    }
    return mangSoLe;
}
console.log(SoLeNhoHonN(100));

//Bài5: tìm vị trí đầu tiên trong mảng
findFirst = (arr, chuoiCanTim) =>{
    return  arr.indexOf(chuoiCanTim) + 1;
}

//Bài6: tìm vị trí cuối trong mảng
findLast = (arr, chuoiCanTim) =>{
    return arr.lastIndexOf(chuoiCanTim) + 1;
}

//Bài7: tìm vị trí tất cả phần tử
find = (arr, chuoiCanTim) =>{
    var check = arr.indexOf(chuoiCanTim);
    var viTri = [];
    while (check != -1) {
        viTri.push(check);
        check = arr.indexOf(chuoiCanTim, check + 1);
    }
    return viTri;
}

//Bài8: thêm phần tử vào mảng
add = (arr, them) =>{
    arr.push(them);
    return arr;
}

//Bài9: thêm phẩn tử vào mảng nếu có rồi thì không thêm nữa
faddIfNotExist = (arr,chuoiCanThem) =>{
    var check = arr.indexOf(chuoiCanThem);
    if (check == -1) {
        arr.push(chuoiCanThem);
    }
    return arr;
}

//Bài10: xóa toàn bộ phần tử ra khỏi mảng
deleteChuoi = (arr,chuoiCanXoa) =>{
    var check = arr.filter(item => item != chuoiCanXoa);
    return check;
}