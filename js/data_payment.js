// Lấy dữ liệu từ Local Storage hoặc sử dụng mảng trống nếu không có dữ liệu
export let arrPayment = JSON.parse(localStorage.getItem('payment')) || [];
// Cập nhật Local Storage với dữ liệu mới
export const updatePaymentLocalStorage = () => {
  localStorage.setItem('payment', JSON.stringify(arrPayment));
};
//trả về mảng arrPayment
export const getarrPayment = () => arrPayment;

//Xóa data arrPayment
export const resetPayment = () => {
    arrPayment = [];
    updatePaymentLocalStorage();
};