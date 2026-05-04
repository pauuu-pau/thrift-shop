const products = [
  {
    id: 1,
    title: "Highminds Clothing T-Shirt",
    price: "$25.00",
    image: "https://cf.shopee.ph/file/sg-11134201-81zud-mn6zeqi3da819c",
    description: "Original Highminds Clothing T-shirt. High-quality streetwear with authentic branding."
  },
  {
    id: 2,
    title: "Retro 80s Graphic Band Tee",
    price: "$45.00",
    image: "/images/retro_graphic_tee_1777558571984.png",
    description: "Authentic 1980s soft-spun cotton t-shirt with a perfectly distressed graphic. It carries that unbeatable paper-thin vintage feel. Has slight distressing which adds to its character."
  },
  {
    id: 3,
    title: "Boho Floral Vintage Maxi Dress",
    price: "$65.00",
    image: "/images/boho_floral_dress_1777558690774.png",
    description: "An elegant bohemian maxi dress featuring an intricate floral print and a sweeping silhouette. Lightweight and breathable, perfect for summer days or dressed up for events."
  },
  {
    id: 4,
    title: "90s Pastel Block Windbreaker",
    price: "$55.00",
    image: "/images/vintage_windbreaker_1777558797889.png",
    description: "Stand out in this classic 90s color-blocked windbreaker. Features vibrant pastel hues, elastic cuffs, and a lightweight nylon shell. Mint condition."
  }
];

const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');

const modal = document.getElementById('productModal');
const closeBtn = document.getElementById('closeBtn');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');

function renderProducts(items) {
  grid.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="product-img">
      <div class="product-info">
        <h3 class="product-title">${item.title}</h3>
        <p class="product-price">${item.price}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(item));
    grid.appendChild(card);
  });
}

function openModal(item) {
  modalImage.src = item.image;
  modalTitle.textContent = item.title;
  modalPrice.textContent = item.price;
  modalDesc.textContent = item.description;
  
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
}

function closeModal() {
  modal.classList.remove('active');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300); // Matches transition duration
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p => 
    p.title.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});

// Initial render
renderProducts(products);
