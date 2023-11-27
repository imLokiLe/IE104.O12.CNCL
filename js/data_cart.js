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