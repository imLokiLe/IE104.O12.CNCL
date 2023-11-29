// Lấy dữ liệu từ Local Storage hoặc sử dụng mảng trống nếu không có dữ liệu
export let arrCart = JSON.parse(localStorage.getItem('cart')) || [];
// Cập nhật Local Storage với dữ liệu mới
export const updateCartLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(arrCart));
};
//trả về mảng arrCart
export const getArrCart = () => arrCart;

//Xóa data arrCart
export const resetCart = () => {
    arrCart = [];
    updateCartLocalStorage();
};

// Xóa phần tử trùng lặp giữa arrCart và arrPayment dựa trên id
export const removeDuplicatesBetweenArrays = (arr1, arr2) => {
  arr1.forEach(item1 => {
    const isDuplicate = arr2.some(item2 => item2.id === item1.id);
    if (isDuplicate) {
      arrCart = arrCart.filter(item => item.id !== item1.id);
      updateCartLocalStorage();
    }
  });
};