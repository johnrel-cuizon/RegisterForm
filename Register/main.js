 const form = document.getElementById("registrationForm");
 const dashboard = document.getElementById("dashboard");
 const userTable = document.getElementById("userTable");
 const formContainer = document.getElementById("form-container");

 form.addEventListener("submit", function(event) {
     event.preventDefault();

     const firstname = document.getElementById("firstname").value;
     const middlename = document.getElementById("middlename").value;
     const lastname = document.getElementById("lastname").value;
     const technology = document.getElementById("technology").value;
     const batch = document.getElementById("batch").value;
     const contact = document.getElementById("contact").value;

     // Add data to dashboard table
     const newRow = document.createElement("tr");
     newRow.innerHTML = `
        <td>${firstname}</td>
        <td>${middlename}</td>
        <td>${lastname}</td>
        <td>${technology}</td>
        <td>${batch}</td>
        <td>${contact}</td>
      `;
     userTable.appendChild(newRow);

     // Show dashboard and hide form
     formContainer.style.display = "none";
     dashboard.style.display = "block";
 });