function TimKiem(arr){
  if(arr.length === 1){
    console.log("mang chi co 1 ptu va đay la gia tri lon nhat");
    return arr[0];
  }
  const current = arr[0];
  const loaiboptudau = arr.slice(1);
  const ptuconlai = TimKiem(loaiboptudau);
  if(current > ptuconlai){
    return current;
  }
  else{
    return ptuconlai;
  }
}
const mang = [1,2,3,4,5,6,7,8,9];
const maxNumber = TimKiem(mang);
console.log("Số lớn nhất trong mảng là:", maxNumber);