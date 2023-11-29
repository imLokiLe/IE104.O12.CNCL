// Lấy dữ liệu từ Local Storage hoặc sử dụng mảng trống nếu không có dữ liệu
export let dataDelivery = JSON.parse(localStorage.getItem('delivery')) || [];
// Cập nhật Local Storage với dữ liệu mới
export const updateDeliveryLocalStorage = () => {
  localStorage.setItem('delivery', JSON.stringify(dataDelivery));
};
export const getDataDelivery = () => dataDelivery;

//Xóa data arrCart
export const resetDelivery = () => {
    dataDelivery= [];
    updateDeliveryLocalStorage();
};