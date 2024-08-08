console.log("Script running")

let backgroudncolor = document.querySelector(".navbar-toggler")

backgroudncolor.addEventListener('mouseover', function(event){
  backgroudncolor.style.backgroundColor = 'grey'
})

backgroudncolor.addEventListener('mouseout', function(event){
  backgroudncolor.style.backgroundColor = 'pink'
})

