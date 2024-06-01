import axios from 'axios'; // Import Axios

//const API_ENDPOINT = 'http://localhost:7071/api/MedicalGPT';  
const API_ENDPOINT = 'https://medicalgpt.azurewebsites.net/api/medicalgpt?code=UVHCGTPu45GKrRr2BMHLW9AO-HjlKS6ZSehsBvSSgF2ZAzFuCIRpqw%3D%3D'

export const handleSubmit = async (e, formData) => {
  e.preventDefault();

  try {
    const response = await axios.post(API_ENDPOINT, formData // Pass required parameters
    );
    
    return response.data;  // Return the API response data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;  // Return null on error (optional)
  }
}
