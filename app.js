var critters = [
  spider = {
    name: "Spider",
    legs: 8,
    wings: 0,
    eyes: 8,
    image: "https://scx2.b-cdn.net/gfx/news/hires/2019/spider.jpg",
    description: "Spiders are air-breathing arthropods that have eight legs, chelicerae with fangs able to inject venom, and spinnerets that extrude silk. They are the largest order of arachnids and rank seventh in total species diversity among all orders of organisms."
  },
  dragonfly = {
    name: "Dragonfly",
    legs: 6,
    wings: 4,
    eyes: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sympetrum_flaveolum_-_side_%28aka%29.jpg/1920px-Sympetrum_flaveolum_-_side_%28aka%29.jpg",
    description: "A dragonfly is an insect belonging to the order Odonata, infraorder Anisoptera. Adult dragonflies are characterized by large, multifaceted eyes, two pairs of strong, transparent wings, sometimes with coloured patches, and an elongated body."
  },
   pondskater = {
    name: "Pondskater",
    legs: 6,
    wings: 0,
    eyes: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Gerris_by_webrunner.JPG",
    description: "The Gerridae are a family of insects in the order Hemiptera, commonly known as water striders, water skeeters, water skooters, water bugs, pond skaters, water skippers, or Jesus bugs."
  },
   butterfly = {
    name: "Butterfly",
    legs: 6,
    wings: 4,
    eyes: 12000,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Fesoj_-_Papilio_machaon_%28by%29.jpg",
    description: "Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight."
  }
];

const dataArr = ["name", "legs", "wings", "eyes", "image", "description"];


function buildBoxes(){
   var newBox = "";
for(let i = 0; i < Object.keys(critters).length; i++) {
  let j = i+1;
  newBox +=  "<div class = 'box' id = 'box"+ j + "'>\
          <h2 class = 'name' id = 'name" + j + "'>" + critters[i].name + "</h2>\
          <img class = 'image' id = 'image" + j + "' src = '" + critters[i].image + "'>\
          <p>Legs: " + critters[i].legs + "\
          Wings: " + critters[i].wings + "\
          Eyes: " + critters[i].eyes + "</p>\
          <p class = 'description' id = description" + j + ">" + critters[i].description + "</p>\
      </div>";
  document.getElementById("grid").innerHTML = newBox;
}
}
buildBoxes();

document.getElementById("submit").onclick = function() {
  var inputName = document.getElementById("name");
  var inputImage = document.getElementById("image");
  var inputLegs = document.getElementById("legs");
  var inputWings = document.getElementById("wings");
  var inputEyes= document.getElementById("eyes");
  var inputDescr = document.getElementById("descr");
  
  var newObjName = inputName.value.toLowerCase().replace(/\s/g, '');
  var newObj = {
    name: inputName.value,
    legs: inputLegs.value,
    wings: inputWings.value,
    eyes: inputEyes.value,
    image: inputImage.value,
    description: inputDescr.value
  }
  if(newObj.name !== "" && newObj.legs !== "" && newObj.wings !== "" && 
    newObj.eyes !== "" && newObj.image !== "" && newObj.description !== ""){
    critters.push(newObj);
    buildBoxes();
    alert("New critter submitted!");
  }else{
    alert("You have missing fields!");
  }
}

