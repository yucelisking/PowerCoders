import table from `./object.json` 
console.log(table);
// JavaScript for table sorting
// const table = document.getElementById('comparisonTable');

// table.querySelectorAll('th').forEach(header => {
//     header.addEventListener('click', () => {
//         const category = header.getAttribute('data-category');
//         sortTable(category);
//     });
// });

// function sortTable(category) {
//     const rows = Array.from(table.querySelectorAll('tr'));
//     rows.shift(); // Remove the header row
//     rows.sort((a, b) => {
//         const cellA = a.querySelector(`[data-category="${category}"]`).textContent;
//         const cellB = b.querySelector(`[data-category="${category}"]`).textContent;
//         return cellA.localeCompare(cellB, undefined, { numeric: true });
//     });

//     while (table.firstChild) {
//         table.removeChild(table.firstChild);
//     }

//     table.appendChild(rows[0].parentNode); // Re-add the header row
//     rows.forEach(row => table.appendChild(row));
// }

const companies = [
    {
      name: "IBM",
      location: "Zurich",
      numberOfInternship: 1,
      language: "D",
      department: "cross IT",
      prerequisits: "Cloud API, Cloud Usage Models, Kubernetes Technologies, Programming Skills",
      website: "https://www.ibm.com/de-de"
    },
    {
        name: "Galenica",
        location: "Bern",
        numberOfInternship: 2,
        language: "D",
        department: "Software Engineering",
        prerequisits: " C# or Java, React and Typescrypt, GitLab and/or Azure DevOps, Azure and especially Azure Kubernetes Service (AKS)",
        website: "https://www.galenica.com/en/"
      },
      {
        name: "KPT",
        location: "Bern",
        numberOfInternship: 1,
        language: "D",
        department: "Development",
        prerequisits: "Good theoretical IT architecture knowledge",
        website:"https://www.kpt.ch"
      },
      {
        name: "On Ag",
        location: "Zurich",
        numberOfInternship: 1,
        language: "D",
        department: "DTC",
        prerequisits: "We need someone that could work with a team that have several expertise, in frontend backend and devops.Our stack: javascripts, nuxt.js node. vue.js and ruby on rails, Go. ",
        website: "https://www.on-running.com/en-ch/explore/about-on"
      },
      {
        name: "Siemens Schweiz AG",
        location: "Zug",
        numberOfInternship: 2,
        language: "D",
        department: "R&D Zug Software",
        prerequisits: "AWS: good knowledge about AWS console and structure, CI/DC pipelines, Go-lang. Web: high level on HTML5 and Angular",
        website: "https://www.siemens.com/ch/de.html"
      },
];

const table = document.getElementById('companyTable');

companies.forEach(company => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    cell1.innerHTML = company.name;
    const cell2 = row.insertCell(1);
    cell2.innerHTML = company.location;
    const cell3 = row.insertCell(2);
    cell3.innerHTML = company.numberOfInternship;
    const cell4 = row.insertCell(3);
    cell4.innerHTML = company.language;
    const cell5 = row.insertCell(4);
    cell5.innerHTML = company.department;
    const cell6 = row.insertCell(5);
    cell6.innerHTML = company.prerequisits;
    const cell7 = row.insertCell(6);
    cell7.innerHTML = `<a href="${company.website}" target="_blank">Website</a>`;
});