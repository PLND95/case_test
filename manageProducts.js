let productsList = [];
function showProducts() {
    let content = `<tr>
        <td>Tên sản phẩm</td>
        <td>Số lượng</td>
        <td>Nhà sản xuất</td>
        <td>Hình ảnh</td>
        <td>&nbsp;</td>
    </tr>`;
    for (let i =0; i < productsList.length; i++) {
         content +=`<tr>
        <td>${productsList[i].name}</td>
        <td>${productsList[i].amount}</td>
        <td>${productsList[i].manu}</td>
        <td></td>
        <td>
            <button onclick ='editProducts(${i})'>Sửa</button> <button onclick = 'delProducts(${i})'>Xóa</button>
        </td> 
    </tr>`;
        document.getElementById("productsList").innerHTML = content;
    }

}showProducts()

// hàm xóa
function delProducts(index) {
    let check = confirm('Bạn có chắc chắn muốn xóa? ');
    if (check == true) {
        productsList.splice(index, 1);
        showProducts();
    }
}



// hàm tạo
// có các điều kiện
function createProducts() {
    let nameProducts = document.getElementById("nameProducts").value;
    let amountProducts = document.getElementById("amountProducts").value;
    let manuProducts = document.getElementById("manufacturer").value;
    if (_.isEmpty(nameProducts)) {
        document.getElementById("nameError").innerHTML = 'Vui lòng nhập tên sản phẩm';
    }else {
        document.getElementById("nameError").innerHTML = '';
    }

    if (_.isEmpty(amountProducts)) {
        document.getElementById("amountError").innerHTML = 'Vui lòng nhập số lượng';
    }else {
        document.getElementById("amountError").innerHTML = '';
    }

    if (_.isEmpty(manuProducts)) {
        document.getElementById("manuError").innerHTML = 'Vui lòng nhập tên nhà sản xuất';
    }else {
        document.getElementById("manuError").innerHTML = '';
    }

    if (nameProducts && amountProducts && manuProducts) {
        productsList.push({
            name: nameProducts,
            amount: amountProducts,
            manu: manuProducts,
        });

        } showProducts();
        
}


