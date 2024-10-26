document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tablinks');
  const submitButtons = document.querySelectorAll('.tabcontent button');

  // Set up tab switching
  tabButtons.forEach(button => {
      button.addEventListener('click', function() {
          openTab(this.id.replace('Tab', ''));
      });
  });

  // Set up submit buttons
  submitButtons.forEach(button => {
      button.addEventListener('click', function() {
          const tabContent = this.closest('.tabcontent');
          if (tabContent) {
              submitQuery(tabContent.id.toLowerCase());
          }
      });
  });

  // Open the default tab
  openTab('Medicines');
});

function openTab(tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }
  if(document.getElementById(tabName)!=null) {
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName + 'Tab').classList.add("active");
  }  
}

function submitQuery(type) {
  let inputElement, endpoint;
  switch (type) {
      case 'medicines':
          inputElement = document.getElementById('medicinesInput');
          endpoint = 'medicines';
          break;
      case 'symptoms':
          inputElement = document.getElementById('symptomsInput');
          endpoint = 'symptoms';
          break;
      case 'diseases':
          inputElement = document.getElementById('diseasesInput');
          endpoint = 'healthconditions';
          break;
      default:
          console.error(`Unknown query type: ${type}`);
          return;
  }

  if (!inputElement) {
      console.error(`Input element not found for type: ${type}`);
      return;
  }

  const query = inputElement.value.trim();

  if (query === '') {
      alert('Please enter a valid input.');
      return;
  }

  const apiUrl = `https://medicalgpt.azurewebsites.net/api/medicalgpt?code=UVHCGTPu45GKrRr2BMHLW9AO-HjlKS6ZSehsBvSSgF2ZAzFuCIRpqw%3D%3D?query=${encodeURIComponent(query)}&name=${endpoint}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Handle the API response here
          console.log(data);
          // You can display the results in a modal or update the extension's UI
          alert('API response received. Check console for details.');
      })
      .catch(error => {
          console.error('Error:', error);
          alert('An error occurred while fetching data. Please try again.');
      });

  // Clear the input field after submission
  inputElement.value = '';
}