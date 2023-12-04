// Lấy dữ liệu từ Local Storage hoặc sử dụng mảng trống nếu không có dữ liệu
export let arrTranspost= JSON.parse(localStorage.getItem('transpost')) || [];
// Cập nhật Local Storage với dữ liệu mới
export const updateTranspostLocalStorage = () => {
  localStorage.setItem('transpost', JSON.stringify(arrTranspost));
};
//trả về mảng arrTranspost
export const getArrTranspost = () => arrTranspost;

//Xóa data arrTranspost
export const resetTranspost= () => {
    arrTranspost = [];
    updateTranspostLocalStorage();
};