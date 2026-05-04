const products = [
  {
    id: 1,
    title: "Highminds Clothing T-Shirt",
    price: "₱1,250.00",
    image: "https://cf.shopee.ph/file/sg-11134201-81zud-mn6zeqi3da819c",
    description: "Original Highminds Clothing T-shirt. High-quality streetwear with authentic branding."
  },
  {
    id: 2,
    title: "Retro 80s Graphic Band Tee",
    price: "₱2,250.00",
    image: "/images/retro_graphic_tee_1777558571984.png",
    description: "Authentic 1980s soft-spun cotton t-shirt with a perfectly distressed graphic. It carries that unbeatable paper-thin vintage feel. Has slight distressing which adds to its character."
  },
  {
    id: 3,
    title: "Boho Floral Vintage Maxi Dress",
    price: "₱3,250.00",
    image: "/images/boho_floral_dress_1777558690774.png",
    description: "An elegant bohemian maxi dress featuring an intricate floral print and a sweeping silhouette. Lightweight and breathable, perfect for summer days or dressed up for events."
  },
  {
    id: 4,
    title: "90s Pastel Block Windbreaker",
    price: "₱2,750.00",
    image: "/images/vintage_windbreaker_1777558797889.png",
    description: "Stand out in this classic 90s color-blocked windbreaker. Features vibrant pastel hues, elastic cuffs, and a lightweight nylon shell. Mint condition."
  },
  {
    id: 5,
    title: "Vintage Levi's 501 Jeans",
    price: "₱1,800.00",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
    description: "Classic light wash vintage Levi's 501 denim jeans. Perfectly faded with the iconic straight leg fit."
  },
  {
    id: 6,
    title: "90s Nike Center Swoosh Hoodie",
    price: "₱3,500.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
    description: "Highly sought-after vintage Nike hoodie with the embroidered center swoosh. Thick, heavyweight cotton in faded black."
  },
  {
    id: 7,
    title: "Carhartt Detroit Jacket J97",
    price: "₱4,500.00",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    description: "Rugged and beautifully distressed tan Carhartt Detroit work jacket featuring a corduroy collar and blanket lining."
  },
  {
    id: 8,
    title: "Polo Ralph Lauren Bear Sweater",
    price: "₱3,200.00",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80",
    description: "Iconic navy blue knit sweater featuring the classic Polo Bear. A true 90s prep staple in excellent condition."
  },
  {
    id: 9,
    title: "The North Face Nuptse 700 Puffer",
    price: "₱5,500.00",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
    description: "Vintage black and grey The North Face Nuptse down jacket. 700-fill goose down keeps you incredibly warm."
  },
  {
    id: 10,
    title: "Champion Reverse Weave Sweatshirt",
    price: "₱1,600.00",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&q=80",
    description: "Heavyweight vintage Champion Reverse Weave crewneck in heather grey. Built to last with a boxy, vintage fit."
  },
  {
    id: 11,
    title: "Adidas Originals Vintage Track Jacket",
    price: "₱1,850.00",
    image: "https://images.unsplash.com/photo-1608228079968-c7681eaef827?w=500&q=80",
    description: "Retro 80s blue Adidas track jacket with the iconic three white stripes down the sleeves."
  },
  {
    id: 12,
    title: "Tommy Hilfiger 90s Sailing Jacket",
    price: "₱3,800.00",
    image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=500&q=80",
    description: "Bold color-blocked red, white, and blue sailing jacket from Tommy Hilfiger's golden 90s era."
  },
  {
    id: 13,
    title: "Patagonia Synchilla Snap-T Fleece",
    price: "₱4,200.00",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500&q=80",
    description: "Cozy vintage Patagonia Synchilla fleece pullover with a vibrant Aztec pattern and snap-button collar."
  },
  {
    id: 14,
    title: "Dickies 874 Original Work Pants",
    price: "₱1,200.00",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80",
    description: "Faded black Dickies 874 straight leg work pants. Perfectly broken in for a comfortable streetwear look."
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
