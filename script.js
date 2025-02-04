document.addEventListener("DOMContentLoaded", function() {
    const clients = [
        { numero: 3, nom: "Ndione", prenom: "Ibra", telephone: "785663710", email: "mer@gmail.com", adresse: "Yene", categorie: "Solvable" },
        { numero: 3, nom: "Ndione", prenom: "Ibra", telephone: "785663710", email: "mer@gmail.com", adresse: "Yene", categorie: "Solvable" },
        { numero: 3, nom: "Ndione", prenom: "Ibra", telephone: "785663710", email: "mer@gmail.com", adresse: "Yene", categorie: "Solvable" },
        { numero: 3, nom: "Ndione", prenom: "Ibra", telephone: "785663710", email: "mer@gmail.com", adresse: "Yene", categorie: "Solvable" },
        { numero: 3, nom: "Ndione", prenom: "Ibra", telephone: "785663710", email: "mer@gmail.com", adresse: "Yene", categorie: "Solvable" },
        { numero: 3, nom: "Ndione", prenom: "Ibra", telephone: "785663710", email: "mer@gmail.com", adresse: "Yene", categorie: "Solvable" }
    ];

    const rowsPerPage = 3;
    let currentPage = 1;

    function displayTable(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedClients = clients.slice(start, end);
        
        const tableBody = document.getElementById("clientTableBody");
        tableBody.innerHTML = "";
        paginatedClients.forEach(client => {
            const row = `<tr>
                <td>${client.numero}</td>
                <td>${client.nom}</td>
                <td>${client.prenom}</td>
                <td>${client.telephone}</td>
                <td>${client.email}</td>
                <td>${client.adresse}</td>
                <td>${client.categorie}</td>
                <td><button class="btn btn-success">Affiches</button></td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    function setupPagination() {
        const pageCount = Math.ceil(clients.length / rowsPerPage);
        const pagination = document.getElementById("pagination");
        pagination.innerHTML = "";
        
        for (let i = 1; i <= pageCount; i++) {
            const li = document.createElement("li");
            li.classList.add("page-item");
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener("click", function() {
                currentPage = i;
                displayTable(currentPage);
            });
            pagination.appendChild(li);
        }
    }

    displayTable(currentPage);
    setupPagination();
});
