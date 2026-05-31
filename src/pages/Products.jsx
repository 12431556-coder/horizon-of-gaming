import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


// ─── Product Data ────────────────────────────────────────────────────────────


const consoles = [
  {
    id: 1,
    img: '/images/ps5slim.webp',
    alt: 'PS5 Slim Disc Edition',
    name: 'PS5 Slim Disc Edition',
    description: 'A sleek, compact PlayStation 5 with full disc support for next-gen gaming.',
    price: '$650',
  },
  {
    id: 2,
    img: '/images/ps5pro.jpeg',
    alt: 'PS5 Pro',
    name: 'PS5 Pro',
    description: 'The ultimate PlayStation powerhouse delivering enhanced performance and premium visuals.',
    price: '$900',
  },
  {
    id: 3,
    img: '/images/xbox-series-x.png',
    alt: 'Xbox Series X',
    name: 'Xbox Series X',
    description: "Microsoft's flagship console offering 4K gaming with lightning-fast load times.",
    price: '$650',
  },
  {
    id: 4,
    img: '/images/xboxseries.jpeg',
    alt: 'Xbox Series S',
    name: 'Xbox Series S',
    description: 'A smaller, all-digital Xbox built for smooth next-gen gaming at an affordable price.',
    price: '$450',
  },
  {
    id: 5,
    img: '/images/Nintendo-Switch-2.jpeg',
    alt: 'Nintendo Switch 2',
    name: 'Nintendo Switch 2',
    description:
      'The hybrid console that seamlessly switches between handheld and docked play with upgraded performance.',
    price: '$450',
  },
  {
    id: 6,
    img: '/images/steamdeck.jpeg',
    alt: 'Steam Deck',
    name: 'Steam Deck',
    description: 'A portable PC gaming device that brings your entire Steam library to your hands.',
    price: '$900',
  },
]

const laptops = [
  {
    id: 1,
    img: '/images/legion.webp',
    alt: 'Lenovo Legion 5',
    name: 'Lenovo Legion 5',
    description:
      'Experience next-generation AI-powered gaming with the Lenovo Legion 5 15IRX10. Equipped with a high-performance 14-core Intel Core i7 processor, ultra-fast DDR5 memory, and the revolutionary RTX 5050 GPU, this laptop delivers exceptional frame rates and photorealistic graphics on a stunning 15.3″ 165Hz display.',
    price: '$1,199',
  },
  {
    id: 2,
    img: '/images/acer.webp',
    alt: 'Acer Predator Helios Neo 16 AI',
    name: 'Acer Predator Helios Neo 16 AI',
    description:
      'The Acer Predator Helios Neo 16 AI – Core Ultra 9 275HX – 32GB RAM – 1TB SSD – RTX 5070 Ti 12GB is a professional-quality powerhouse featuring a 240Hz WQXGA display and next-generation Blackwell graphics. The best option for users seeking a dependable solution for 2026 gaming and high-end creative workstations.',
    price: '$2,000',
  },
  {
    id: 3,
    img: '/images/gigabyte.webp',
    alt: 'GIGABYTE A16 Gaming',
    name: 'GIGABYTE A16 Gaming',
    description:
      'The GIGABYTE Gaming A16 – Core i7-13620H – 16GB RAM – 512GB SSD – RTX 4050 6GB is a professional-quality powerhouse featuring a 165Hz WUXGA display and powerful RTX 40-series graphics. The best option for users seeking a dependable solution for 2026 gaming and high-end productivity.',
    price: '$900',
  },
]

const games = [
  {
    id: 1,
    img: '/images/forbidden west.jpeg',
    alt: 'Horizon Forbidden West Complete Edition',
    name: 'Horizon Forbidden West Complete Edition',
    description:
      'Embark on an awe-inspiring odyssey across a majestic yet lethal frontier, where Aloy must unravel ancient mysteries and master tactical machine combat to save a vibrant, post-apocalyptic world from a collapsing biosphere.',
    price: '$70',
    buttonText: 'Order Now',
  },
  {
    id: 2,
    img: '/images/zerodawnremastered.jpeg',
    alt: 'Horizon Zero Dawn Remastered',
    name: 'Horizon Zero Dawn Remastered',
    description:
      "Experience Aloy's iconic origin story reborn with stunning, state-of-the-art visuals and enhanced character models that bring the lush, machine-dominated wilds to the same breathtaking fidelity as Forbidden West.",
    price: '$50',
    buttonText: 'Order Now',
  },
  {
    id: 3,
    img: '/images/zerodawn.jpeg',
    alt: 'Horizon Zero Dawn Complete Edition (PS4)',
    name: 'Horizon Zero Dawn Complete Edition (PS4)',
    description:
      "Embark on the definitive version of the award-winning masterpiece, featuring the full epic journey of Aloy plus the massive The Frozen Wilds expansion, offering dozens of hours of exploration in a beautiful post-apocalyptic world.",
    price: '$20',
    buttonText: 'Order Now',
  },
  {
    id: 4,
    img: '/images/james.jpeg',
    alt: 'First Light (Upcoming)',
    name: 'First Light (Upcoming)',
    description:
      "Step into the shoes of the world's most iconic secret agent in a gripping origin story that combines elite stealth, high-stakes espionage, and the sophisticated action of a 007.",
    price: '$70',
    buttonText: 'Pre-Order Now',
  },
  {
    id: 5,
    img: '/images/Red_Dead_Redemption_II.jpeg',
    alt: 'Red Dead Redemption II',
    name: 'Red Dead Redemption II',
    description:
      'An epic, emotionally charged tale of outlaws and survival set in the dying days of the American Wild West, where every choice carries the weight of a crumbling brotherhood.',
    price: '$25',
    buttonText: 'Order Now',
  },
  {
    id: 6,
    img: '/images/uncharted.jpeg',
    alt: 'Uncharted Legacy of Thieves Collection',
    name: 'Uncharted Legacy of Thieves Collection',
    description:
      'Experience the globe-trotting pursuit of fortune and legacy through the eyes of Nathan Drake and Chloe Frazer in this visually stunning, remastered cinematic adventure.',
    price: '$30',
    buttonText: 'Order Now',
  },
  {
    id: 7,
    img: '/images/astrobot.jpeg',
    alt: 'Astro Bot',
    name: 'Astro Bot',
    description:
      'Join Astro on a whimsical, imaginative journey across the galaxy that celebrates the history of PlayStation through innovative gameplay and pure platforming joy.',
    price: '$60',
    buttonText: 'Order Now',
  },
  {
    id: 8,
    img: '/images/codww2.jpeg',
    alt: 'Call of Duty WW2',
    name: 'Call of Duty WW2',
    description:
      'Return to the gritty roots of the series in an intense, cinematic journey that captures the horror and heroism of soldiers fighting through the most pivotal battles of the Second World War.',
    price: '$30',
    buttonText: 'Order Now',
  },
   {
    id: 9,
    img: '/images/lastofus1.jpg',
    alt: 'The Last of Us Part I Remastered',
    name: 'The Last of Us Part I Remastered',
    description:
      'Experience the definitive, high-fidelity reconstruction of Joel and Ellie’s harrowing journey across a fungal-ravaged America, where every desperate choice explores the brutal depths of human love and survival..',
    price: '$50',
    buttonText: 'Order Now',
  },
  {
    id: 10,
    img: '/images/lastofus2.jpg',
    alt: 'The Last of Us Part II Remastered',
    name: 'The Last of Us Part II Remastered',
    description:
      'Confront the devastating cycle of violence and grief in this technologically enhanced sequel, following Ellie and Abby through a hauntingly beautiful, post-apocalyptic Seattle with improved visuals and a brand-new roguelike survival mode.',
    price: '$70',
    buttonText: 'Order Now',
  },
    {
    id: 11,
    img: '/images/spidermanremastered.jpg',
    alt: "Marvel's Spider Man Remastered",
    name: "Marvel's Spider Man Remastered",
    description:
      'Unleash the full power of the web-slinger in a vibrant, ray-traced Manhattan, featuring a younger Peter Parker facing a gauntlet of iconic villains in a definitive version that includes all DLC adventures.',
    price: '$50',
    buttonText: 'Order Now',
  },
  {
   id: 12,
    img: '/images/spiderman2.jpeg',
    alt: "Marvel's Spider Man 2",
    name: "Marvel's Spider Man 2",
    description:
      'Experience the ultimate superhero team-up as you seamlessly switch between Peter Parker and Miles Morales to battle the monstrous Venom and the relentless Kraven the Hunter across an expanded New York City.',
    price: '$70',
    buttonText: 'Order Now',
  },
 
 
 
]

const accessories = [
  { id: 1,  img: '/images/controller1.webp',   alt: 'PS5 DualSense White',              name: 'PlayStation 5 DualSense Wireless Controller – White',              price: '$70',  buttonText: 'Order Now' },
  { id: 2,  img: '/images/dualedge.webp',       alt: 'PS5 DualSense Edge',               name: 'PlayStation 5 DualSense Edge Wireless Controller',                 price: '$200', buttonText: 'Order Now' },
  { id: 3,  img: '/images/controller3.png',     alt: 'PS5 DualSense Camouflage',         name: 'PlayStation 5 DualSense Wireless Controller – Camouflage',         price: '$70',  buttonText: 'Order Now' },
  { id: 4,  img: '/images/007cont.webp',        alt: 'PS5 DualSense 007 Edition',        name: 'PlayStation 5 DualSense Wireless Controller – 007 Special Edition', price: '$140', buttonText: 'Pre-Order Now' },
  { id: 5,  img: '/images/spidermancont.jpg',   alt: 'PS5 DualSense Spider-Man Edition', name: 'PlayStation 5 DualSense Wireless Controller – Spider-Man Edition',  price: '$140', buttonText: 'Order Now' },
  { id: 6,  img: '/images/godofwarcont.webp',   alt: 'PS5 DualSense God of War Edition', name: 'PlayStation 5 DualSense Wireless Controller – God of War Edition',  price: '$140', buttonText: 'Order Now' },
  { id: 7,  img: '/images/ps5vr.webp',          alt: 'PlayStation 5 VR Set',             name: 'PlayStation 5 VR Set',                                             price: '$580', buttonText: 'Order Now' },
  { id: 8,  img: '/images/ps5headset.webp',     alt: 'PlayStation 5 Headset',            name: 'PlayStation 5 Headset',                                            price: '$220', buttonText: 'Order Now' },
  { id: 9,  img: '/images/ps5stand.webp',       alt: 'PlayStation 5 Slim/Pro Stand',     name: 'PlayStation 5 Slim/Pro Stand',                                     price: '$30',  buttonText: 'Order Now' },
  { id: 10, img: '/images/xboxelitecont.jpg',   alt: 'Xbox Elite Controller Series 2',   name: 'Xbox Elite Controller Series 2',                                   price: '$200', buttonText: 'Order Now' },
  { id: 11, img: '/images/xboxheadset.webp',    alt: 'Xbox Headset',                     name: 'Xbox Headset',                                                     price: '$95',  buttonText: 'Order Now' },
  { id: 12, img: '/images/xboxexcard.avif',     alt: 'Xbox Storage Expansion Card 2TB',  name: 'Xbox Storage Expansion Card (2TB)',                                 price: '$300', buttonText: 'Order Now' },
  { id: 13, img: '/images/nintendoprocont.webp',alt: 'Nintendo Switch 2 Pro Controller', name: 'Nintendo Switch 2 Pro Controller',                                 price: '$130', buttonText: 'Order Now' },
  { id: 14, img: '/images/nin2case.jpg',        alt: 'Nintendo Switch 2 Carrying Case',  name: 'Nintendo Switch 2 Carrying Case',                                  price: '$15',  buttonText: 'Order Now' },
  { id: 15, img: '/images/nin2micro.webp',      alt: 'Nintendo Switch 2 MicroSD Card',   name: 'Nintendo Switch 2 MicroSD Card',                                   price: '$70',  buttonText: 'Order Now' },
  { id: 16, img: '/images/laptopfan.avif',      alt: 'Gaming Laptop Cooling Fan',        name: 'Gaming Laptop Cooling Fan',                                        price: '$50',  buttonText: 'Order Now' },
  { id: 17, img: '/images/mousemelogaga.jpg',   alt: 'MELOGAGA Wireless Gaming Mouse',   name: 'MELOGAGA Wireless Gaming Mouse',                                   price: '$20',  buttonText: 'Order Now' },
  { id: 18, img: '/images/mouse2.webp',         alt: 'ZELOTES F18 Ergonomic Mouse',      name: 'ZELOTES F18 Vertical Ergonomic Wireless Gaming Mouse',             price: '$37',  buttonText: 'Order Now' },
]

const giftCards = [
  { id: 1, img: '/images/us100card.png',      alt: '50 USD PlayStation Gift Card',  name: '50 USD PlayStation Gift Card',  price: '$50',    buttonText: 'Order Now' },
  { id: 2, img: '/images/eucard20.png',       alt: '20 EUR PlayStation Gift Card',  name: '20 EUR PlayStation Gift Card',  price: '$23.50', buttonText: 'Order Now' },
  { id: 3, img: '/images/btcard25.png',       alt: '25 GBP PlayStation Gift Card',  name: '25 GBP PlayStation Gift Card',  price: '$34',    buttonText: 'Order Now' },
  { id: 4, img: '/images/xboxcard50.png',     alt: '50 USD Xbox Gift Card',         name: '50 USD Xbox Gift Card',         price: '$50',    buttonText: 'Order Now' },
  { id: 5, img: '/images/xboxcard20eu.png',   alt: '20 EUR Xbox Gift Card',         name: '20 EUR Xbox Gift Card',         price: '$23.50', buttonText: 'Order Now' },
  { id: 6, img: '/images/xboxbt25card.png',   alt: '25 GBP Xbox Gift Card',         name: '25 GBP Xbox Gift Card',         price: '$34',    buttonText: 'Order Now' },
]

// ─── Card Components ──────────────────────────────────────────────────────────

function ConsoleCard({ img, alt, name, description, price, addToCart }) {
  const product = { name, price };

  function handleOrder() {
    const confirmAdd = window.confirm(`Do you want to add "${name}" to your cart?`);
    if (confirmAdd) {
      addToCart(product);
      alert(`✅ "${name}" has been added to your cart!`);
    }
  }

  return (
    <div className="console-card">
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="btn" onClick={handleOrder}>Order Now</button>
      <p className="price">{price}</p>
    </div>
  );
}



function LaptopCard({ img, alt, name, description, price, addToCart }) {
  const product = { name, price };

  function handleOrder() {
    const confirmAdd = window.confirm(`Do you want to add "${name}" to your cart?`);
    if (confirmAdd) {
      addToCart(product);
      alert(`✅ "${name}" has been added to your cart!`);
    }
  }

  return (
    <div className="pc-card">
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="btn" onClick={handleOrder}>Order Now</button>
      <p className="price">{price}</p>
    </div>
  );
}



function GameCard({ img, alt, name, description, price, addToCart }) {
  const product = { name, price };

  function handleOrder() {
    const confirmAdd = window.confirm(`Do you want to add "${name}" to your cart?`);
    if (confirmAdd) {
      addToCart(product);
      alert(`✅ "${name}" has been added to your cart!`);
    }
    // stays on the same page — no navigate
  }

  return (
    <div className="game-card">
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="btn" onClick={handleOrder}>
        Order Now
      </button>
      <p className="price">{price}</p>
    </div>
  );
}

function AccessoryCard({ img, alt, name, price, addToCart }) {
  const product = { name, price };

  function handleOrder() {
    const confirmAdd = window.confirm(`Do you want to add "${name}" to your cart?`);
    if (confirmAdd) {
      addToCart(product);
      alert(`✅ "${name}" has been added to your cart!`);
    }
  }

  return (
    <div className="acc-card">
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <button className="btn" onClick={handleOrder}>Order Now</button>
      <p className="price">{price}</p>
    </div>
  );
}



function GiftCard({ img, alt, name, price, addToCart }) {
  const product = { name, price };

  function handleOrder() {
    const confirmAdd = window.confirm(`Do you want to add "${name}" to your cart?`);
    if (confirmAdd) {
      addToCart(product);
      alert(`✅ "${name}" has been added to your cart!`);
    }
  }

  return (
    <div className="gift-card">
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <button className="btn" onClick={handleOrder}>Order Now</button>
      <p className="price">{price}</p>
    </div>
  );
}


// ─── Products Page ────────────────────────────────────────────────────────────

function Products({ addToCart }) {
  return (
    <>
      <h1>Products</h1>

      {/* Consoles */}
      <h2>Consoles</h2>
      <section className="CONSOLES">
        {consoles.map((c) => (
          <ConsoleCard key={c.id} {...c} addToCart={addToCart} />
        ))}
      </section>

      {/* Laptops */}
      <h2>Laptops</h2>
      <section className="PCS">
        {laptops.map((l) => (
          <LaptopCard key={l.id} {...l} addToCart={addToCart} />
        ))}
      </section>
      
      {/* Games */}
      <h2>Games</h2>
      <section className="GAMES">
        {games.map((g) => (
          <GameCard key={g.id} {...g} addToCart={addToCart} />
        ))}
      </section>


      {/* Accessories */}
      <h2>Accessories</h2>
      <section className="ACCS">
        {accessories.map((a) => (
          <AccessoryCard key={a.id} {...a} addToCart={addToCart} />
        ))}
      </section>

      {/* Gift Cards */}
      <h2>Gift Cards</h2>
      <section className="GIFTCARDS">
        {giftCards.map((g) => (
          <GiftCard key={g.id} {...g} addToCart={addToCart} />
        ))}
      </section>
    </>
  );
}


export default Products
