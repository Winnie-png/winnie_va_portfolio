console.log("JS is connected");
// === IMAGE DATA (arrays for carousel support) ===
const uploadedImages = {
  marketing_casestudy: [
    "images/marketing_casestudy.png"
  ],
  mock_client: [
    "images/mock_client.png",
    "images/mock_client1.png"
  ],
  va_day1_workflow: [
    "images/va_day1_workflow.png"
  ],
  lead_gen_workflow: [
    "images/lead_gen_workflow.png"
  ],
  content_repurposing: [
    "images/content_repurposing.png",
    "images/content_repurposing1.png"
  ],
  weekly_checklist: [
    "images/weekly_marketing_operations_checklist.png"
  ],
  outreach: [
    "images/collaboration_outreach_examples.png"
  ]
};

// === STATE ===
let currentImages = [];
let currentIndex = 0;

// === OPEN FROM PORTFOLIO (grid images) ===
function openImage(el) {
  const imgs = el.querySelectorAll("img");
  if (!imgs.length) return;

  currentImages = Array.from(imgs).map(img => img.src);
  currentIndex = 0;

  showImage();
}

// === OPEN FROM CASE STUDY (by ID) ===
function openLightbox(id) {
  const images = uploadedImages[id];
  if (!images) return;

  currentImages = images;
  currentIndex = 0;

  showImage();
}

// === DISPLAY IMAGE ===
function showImage() {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");

  if (!lightbox || !img) return;

  img.src = currentImages[currentIndex];
  lightbox.classList.add("open");
}

// === NEXT ===
function nextSlide() {
  if (!currentImages.length) return;

  currentIndex = (currentIndex + 1) % currentImages.length;
  updateImage();
}

// === PREVIOUS ===
function prevSlide() {
  if (!currentImages.length) return;

  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateImage();
}

// === UPDATE IMAGE ===
function updateImage() {
  const img = document.getElementById("lightboxImg");
  if (img) img.src = currentImages[currentIndex];
}

// === CLOSE ===
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) lightbox.classList.remove("open");
}