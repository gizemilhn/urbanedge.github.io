
    // Satışlar (Zamanla)
    var ctx1 = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
            datasets: [{
                label: 'Satışlar',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Stok Durumu (Kategorilere göre)
    var ctx2 = document.getElementById('stockChart').getContext('2d');
    var stockChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Giyim', 'Ayakkabı', 'Aksesuar', 'Çanta'],
            datasets: [{
                label: 'Stok Durumu',
                data: [50, 30, 20, 10],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Sipariş Durumu (Tamamlanan vs Bekleyen)
    var ctx3 = document.getElementById('orderStatusChart').getContext('2d');
    var orderStatusChart = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Tamamlanan', 'Bekleyen'],
            datasets: [{
                data: [75, 25],
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            }]
        }
    });

    // Site Trafiği (Ziyaretçi sayıları)
    var ctx4 = document.getElementById('trafficChart').getContext('2d');
    var trafficChart = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['1. Hafta', '2. Hafta', '3. Hafta', '4. Hafta'],
            datasets: [{
                label: 'Trafik',
                data: [1200, 1500, 1800, 2200],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    // Ürün filtreleme işlevi
document.getElementById('search').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let products = document.querySelectorAll('.product-card');
    
    products.forEach(function(product) {
        let productName = product.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// modal
// Ürün verileri için dizi
// Modal'ı açma fonksiyonu
function openModal() {
    document.getElementById("addProductModal").style.display = "block";
}

// Modal'ı kapama fonksiyonu
function closeModal() {
    document.getElementById("addProductModal").style.display = "none";
}

// Ürün ekleme işlemi (basit örnek)
function addProduct() {
    var productName = document.getElementById("productName").value;
    var productDescription = document.getElementById("productDescription").value;
    var productPrice = document.getElementById("productPrice").value;
    var productImage = document.getElementById("productImage").files[0];

    if (!productName || !productPrice) {
        alert("Ürün adı ve fiyatı gereklidir!");
        return;
    }

    // Ürün ekleme işlemi (örnek olarak sadece konsola yazdırma)
    console.log("Yeni Ürün Eklendi:", productName, productDescription, productPrice, productImage);
    
    // Modal'ı kapatma
    closeModal();
    
    // Formu sıfırlama
    document.getElementById("addProductForm").reset();
}

 //users

 document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("userModal");
    const openModalBtn = document.querySelector(".btn-add-user");
    const closeModalBtn = document.querySelector(".close-btn");
    const userForm = document.getElementById("userForm");
    const userTable = document.querySelector(".user-table tbody");

    // Modalı açma
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Modalı kapatma
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Yeni kullanıcı ekleme
    userForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = userForm.querySelectorAll(".form-input");
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${userTable.children.length + 1}</td>
            <td>${inputs[0].value}</td>
            <td>${inputs[1].value}</td>
            <td>${inputs[2].value === "aktif" ? "Aktif" : "Pasif"}</td>
            <td>
                <button class="btn btn-edit">Düzenle</button>
                <button class="btn btn-delete">Sil</button>
            </td>
        `;

        userTable.appendChild(newRow);
        modal.style.display = "none";
        userForm.reset();
    });
});
///orders
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("orderModal");
    const openModalBtn = document.querySelector(".btn-add-order");
    const closeModalBtn = document.querySelector(".close-btn");
    const orderForm = document.getElementById("orderForm");
    const orderTable = document.querySelector(".order-table tbody");

    // Modalı açma
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Modalı kapatma
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Yeni sipariş ekleme
    orderForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = orderForm.querySelectorAll(".form-input");
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${orderTable.children.length + 1}</td>
            <td>${inputs[0].value}</td>
            <td>${inputs[1].value}</td>
            <td>${inputs[2].value === "hazırlanıyor" ? "Hazırlanıyor" : "Tamamlandı"}</td>
            <td>${inputs[3].value}</td>
            <td>
                <button class="btn btn-view">Görüntüle</button>
                <button class="btn btn-edit">Düzenle</button>
                <button class="btn btn-delete">Sil</button>
            </td>
        `;

        orderTable.appendChild(newRow);
        modal.style.display = "none";
        orderForm.reset();
    });
});


