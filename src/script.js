document.getElementById('grievance-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const grievance = {
        id: Date.now(),
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        type: document.getElementById('type').value,
        description: document.getElementById('description').value,
        status: 'Pending'
    };
    
    // Save grievance to local storage
    let grievances = JSON.parse(localStorage.getItem('grievances')) || [];
    grievances.push(grievance);
    localStorage.setItem('grievances', JSON.stringify(grievances));
    
    alert('Grievance submitted successfully!');
    document.getElementById('grievance-form').reset();
    displayGrievances();
});

document.getElementById('search').addEventListener('input', displayGrievances);

document.getElementById('admin-login-btn').addEventListener('click', function() {
    document.getElementById('admin-dashboard').style.display = 'block';
    displayAdminGrievances();
});

function displayGrievances() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const grievances = JSON.parse(localStorage.getItem('grievances')) || [];
    
    const grievanceList = document.getElementById('grievance-list');
    grievanceList.innerHTML = '';
    
    grievances.forEach(grievance => {
        if (grievance.email.toLowerCase().includes(searchQuery) || grievance.id.toString().includes(searchQuery)) {
            const grievanceItem = document.createElement('div');
            grievanceItem.classList.add('grievance-item');
            grievanceItem.innerHTML = `
                <h3>${grievance.type} (ID: ${grievance.id})</h3>
                <p>${grievance.description}</p>
                <p><strong>Status:</strong> ${grievance.status}</p>
            `;
            grievanceList.appendChild(grievanceItem);
        }
    });
}

function displayAdminGrievances() {
    const grievances = JSON.parse(localStorage.getItem('grievances')) || [];
    
    const adminGrievanceList = document.getElementById('admin-grievance-list');
    adminGrievanceList.innerHTML = '';
    
    grievances.forEach(grievance => {
        const adminGrievanceItem = document.createElement('div');
        adminGrievanceItem.classList.add('admin-grievance-item');
        adminGrievanceItem.innerHTML = `
            <h3>${grievance.type} (ID: ${grievance.id})</h3>
            <p>${grievance.description}</p>
            <p><strong>Status:</strong> ${grievance.status}</p>
            <button onclick="updateGrievanceStatus(${grievance.id})">Mark as Resolved</button>
        `;
        adminGrievanceList.appendChild(adminGrievanceItem);
    });
}

function updateGrievanceStatus(id) {
    let grievances = JSON.parse(localStorage.getItem('grievances')) || [];
    grievances = grievances.map(grievance => {
        if (grievance.id === id) {
            grievance.status = 'Resolved';
        }
        return grievance;
    });
    localStorage.setItem('grievances', JSON.stringify(grievances));
    displayAdminGrievances();
    displayGrievances();
}

// Initial display
displayGrievances();