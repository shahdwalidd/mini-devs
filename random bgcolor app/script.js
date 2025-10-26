document.getElementById("start-btn").addEventListener("click", function() {
   

    document.getElementById("start-btn").style.backgroundColor =generatergb()
    setInterval(function(){
        
          document.getElementById("bgcolor").style.backgroundColor =generatergb()
    },1000)
  
  });
  function generaterandomnum() {
    return  Math.floor(Math.random() * 256);
  }
  function generatergb(){
      var randomr = generaterandomnum();
    var randomg = generaterandomnum();
    var randomb = generaterandomnum();
    return `rgb(${randomr}, ${randomg}, ${randomb})`;
  }