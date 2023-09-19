function cambiarImagenes(){
  var img1 = document.getElementById('nosotros1');
  var img2 = document.getElementById('nosotros2');
  var img3 = document.getElementById('nosotros3');
  var img4 = document.getElementById('nosotros4');
  
  img1.classList.add('img-transition');
  img2.classList.add('img-transition');
  img3.classList.add('img-transition');
  img4.classList.add('img-transition');

  setTimeout(function () {
    var src1 = img1.src;
    var src2 = img2.src;
    var src3 = img3.src;
    var src4 = img4.src;

    img1.src = src2;
    img2.src = src3;
    img3.src = src4;
    img4.src = src1;

    setTimeout(function () {
      img1.classList.remove('img-transition');
      img2.classList.remove('img-transition');
      img3.classList.remove('img-transition');
      img4.classList.remove('img-transition');
    }, 500);
  }, 10);
}
  
setInterval(cambiarImagenes, 5000);





