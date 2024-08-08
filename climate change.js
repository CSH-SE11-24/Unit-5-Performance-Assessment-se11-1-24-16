console.log("Script running")

let humanActivites = document.querySelector("#ha")
let pTag = document.querySelector("#p")


humanActivites.addEventListener('click', function(event){
  pTag.innerHTML = "<ul><li>Generating power</li><li>Manufacturing goods</li><li>Cutting down forests</li><li>Using transportation</li><li>Producing food</li><li>Powering buldings</li></ul>"
})

let backgroudncolor = document.querySelector(".navbar-toggler")

backgroudncolor.addEventListener('mouseover', function(event){
  backgroudncolor.style.backgroundColor = 'grey'
})

backgroudncolor.addEventListener('mouseout', function(event){
  backgroudncolor.style.backgroundColor = 'pink'
})


