console.log("Script running")

let humanActivites = document.querySelector("#ha")
let pTag = document.querySelector("#p")


humanActivites.addEventListener('click', function(event){
  pTag.innerHTML = "<ul><li>Dieases carried by Vectors</li><li>Allergens</li><li>Mental Health & Stress related Disorders</li><li>Food Borne Dieases</li><li>Air Polution</li><li>Floods</li><li>Food Security</li><li>Wildfires</li></ul>"
})

let images = document.querySelector("#img")

images.addEventListener("mouseover", function(event) {
    images.src = "https://www.commonwealthfund.org/sites/default/files/Seervai_Climate%20Change%20Health.png"
})

images.addEventListener("mouseout", function(event) {
    images.src = "https://www.statnews.com/wp-content/uploads/2021/08/AdobeStock_293156574-1024x576.jpeg"
})

let backgroudncolor = document.querySelector(".navbar-toggler")

backgroudncolor.addEventListener('mouseover', function(event){
  backgroudncolor.style.backgroundColor = 'grey'
})

backgroudncolor.addEventListener('mouseout', function(event){
  backgroudncolor.style.backgroundColor = 'pink'
})