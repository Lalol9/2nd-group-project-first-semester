// Image, captions and description array
const images = [
  "./assets/images/TurksCapLily.jpeg",
  "./assets/images/ClaudeShrideLily.jpeg",
  "./assets/images/Thornapple.jpeg",
  "./assets/images/FirCones.jpeg",
  "./assets/images/GinkgoTree.jpeg",
  "./assets/images/NorthernBlueFlagIris.jpeg",
  "./assets/images/RedFuchsia.jpeg",
  "./assets/images/WhiteWaterLily.jpeg"
];
const captions = [
  "<strong>MARTAGON LILY (Turk's Cap)</strong>",
  "<strong>MARTAGON LILY (Claude Shride)</strong>",
  "<strong>THORNAPPLE</strong>",
  "<strong>FIR TREE</strong>",
  "<strong>GINKGO TREE</strong>",
  "<strong>NORTHERN BLUE FLAG IRIS</strong>",
  "<strong>HUMMINGBIRD FUCHSIA</strong>",
  "<strong>WHITE WATER LILY</strong>"
];

const descriptions = [
  "The martagon lily (<em>lilium martagon</em>), also known as Turk's cap, is an Eurasian species of lily. Its native region extends as far as eastern Portugal to Mongolia. It can grow up to 120–180 cm tall, and carries numerous scented flowers in summer, typically pink-purple with dark spots.",
  "Named for its breeder, <em>lilium martagon</em> Claude Shride is a hardy variant of the martagon lily. It was cultivated in the Pacific Northwest and can tolerate colder climates and wet winters. It grows up to 120 cm and carries fragrant dark red flowers speckled with yellow markings.",
  "<em>Datura stramonium</em>, commonly known as the thornapple, is a poisonous flowering plant in the nightshade family <em>Solanaceae</em>. Its origin can be traced to Central America. Its branches form a bush 60-150 cm tall that flowers throughout the summer, producing fragrant trumpet-shaped blooms in white or violet.",
  "Firs are coniferous trees belonging to the genus <em>Abies</em> in the family <em>Pinaceae</em>. They are found throughout North and Central America, Eurasia, and North Africa. They can be distinguished from other members of the pine family by their short needle-like leaves, which are attached singly to the branches, and by their cones, which stand upright.",
  "Known for its unique fan-shaped leaves, the ginkgo (<em>Ginkgo biloba</em>) is a species of gymnosperm tree native to East Asia. It is a long-lived, insect- and disease-resistant tree that can grow up to 40 m tall, with some specimens estimated to be more than 3,500 years old.",
  "The northern blue flag (<em>Iris versicolor</em>), known in Great Britain and Ireland as the purple iris, is a poisonous species of Iris native to North America. It’s commonly found along streambanks and in marshes. It can grow up to 80 cm tall, and produces deep blue or purple flowers during May to July.",
  "The hummingbird fuchsia (<em>Fuchsia magellanica</em>) is a flowering plant in the evening primrose family <em>Onagraceae</em>. It is native to the lower Southern Cone of South America. This shrub can grow to 1-3 meters in height, and blossoms with many tubular flowers in shades of red and purple.",
  "The white water lily (<em>Nymphaea alba</em>) is an aquatic flowering plant in the family <em>Nymphaeaceae</em>. It is native to North Africa, temperate Asia, Europe and tropical Asia. Its flower blooms during the daytime in summer, sitting atop round leaves that can grow up to 35 cm in length. Both float on the water’s surface."
]

// Assigning variable to buttons
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const imageCounter = document.querySelector(".image-count");

// Assigning variables to image, caption and description divs
const imageContainer = document.querySelector(".slides__image");
const captionContainer = document.querySelector(".slides__caption")
const descriptionContainer = document.querySelector(".slides__description")
let mySlide = images[0];
let myCaption = captions[0];
let myDescription = descriptions[0];
let counter = 0;
let imageIndex = 1;

// Assigning element locations
imageContainer.innerHTML = '<img src="'+mySlide+'" />';
captionContainer.innerHTML = myCaption;
descriptionContainer.innerHTML = myDescription;

// Adding navigation to buttons
arrowLeft.addEventListener ("click", prevSlide);
document.addEventListener ("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prevSlide();
  }
});

function prevSlide() {
  if (counter > 0 && counter < images.length){
    counter--;
    mySlide = images[counter];
    myCaption = captions[counter];
    myDescription = descriptions[counter];
    imageContainer.innerHTML = '<img src="'+mySlide+'" />';
    captionContainer.innerHTML = myCaption;
    descriptionContainer.innerHTML = myDescription;
  } else if (counter === 0) {
    counter = images.length - 1;
    mySlide = images[counter];
    myCaption = captions[counter];
    myDescription = descriptions[counter];
    imageContainer.innerHTML = '<img src="'+mySlide+'" />';
    captionContainer.innerHTML = myCaption;
    descriptionContainer.innerHTML = myDescription;
  }

   imageIndex = imageIndex - 1;
  if (imageIndex < 1) {
    imageIndex = 8;
  }
  imageCounter.textContent = `${imageIndex}/8`;
};

arrowRight.addEventListener ("click", nextSlide);
document.addEventListener ("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextSlide();
  }
});

function nextSlide() {
  if (counter < images.length-1){
    counter++;
    mySlide = images[counter];
    myCaption = captions[counter];
    myDescription = descriptions[counter];
    imageContainer.innerHTML = '<img src="'+mySlide+'" />';
    captionContainer.innerHTML = myCaption;
    descriptionContainer.innerHTML = myDescription;
  } else if (counter === images.length - 1) {
    counter = 0;
    mySlide = images[counter];
    myCaption = captions[counter];
    myDescription = descriptions[counter];
    imageContainer.innerHTML = '<img src="'+mySlide+'" />';
    captionContainer.innerHTML = myCaption;
    descriptionContainer.innerHTML = myDescription;
    }

  imageIndex = imageIndex + 1;
  if (imageIndex > 8) {
    imageIndex = 1;
  }
  imageCounter.textContent = `${imageIndex}/8`;
};