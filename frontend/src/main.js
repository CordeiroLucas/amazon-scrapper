ALERT = 'INVALID VALUE'; // Alert Message
API_URL = 'http://localhost:3000/api/products?keyword='; // API URL

document.getElementById('search').addEventListener('click', async () => {
  const keyword = document.getElementById('keyword').value;

  if (!keyword) alert(ALERT); // If there's no value, display an alert
  else {
    console.log('Searching for:', keyword); // Log

    const response = await fetch(`${API_URL}${encodeURIComponent(keyword)}`); // Make the request
    const data = await response.json(); // Wait for the response and convert to JSON
    
    console.log('Response:', response.status); // Log

    const resultsDiv = document.getElementById('results'); // Get the results div
    resultsDiv.innerHTML = data.map(product => `
      <div class="product">
        <h3>${product.title}</h3>
        <p>${product.rating || "No Rating"} - ${product.reviews || "0"} reviews</p>
        <img src="${product.image}" alt="${product.title}"/>
      </div>
    `).join(''); // Map the products and create HTML for each, then join everything into a string and insert it into the div
  }
});