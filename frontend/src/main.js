ALERT = 'INVALID VALUE'; // Alert Message
API_URL = 'http://localhost:3000/api/scrape?keyword='; // API URL

document.getElementById('search').addEventListener('click', async () => {
  const keyword = document.getElementById('keyword').value;

  if (!keyword) alert(ALERT); // If there's no value, display an alert
  else {
    console.log('Searching for:', keyword); // Log

    try {
      const response = await fetch(`${API_URL}${encodeURIComponent(keyword)}`); // Make the request
      const data = await response.json(); // Wait for the response and convert to JSON
      
      console.log('Response:', response.status); // Log

      const resultsDiv = document.getElementById('result-list'); // Get the results div
      resultsDiv.innerHTML = data.map(product => `
        <a class="product" href="https://www.amazon.com.br${product.link}" target="_blank">
          <div class="img-container">
            <img src="${product.image}" alt="${product.title}"/>
          </div>
          <div class="section">
            <h3>${product.title}</h3>
            <p>${product.rating || "No Rating"} - ${product.reviews || "0"} reviews</p>
          </div>
        </a>
      `).join(''); // Map the products and create HTML for each, then join everything into a string and insert it into the div
    }
    catch (error) {
      alert(error);
    }
  }
});