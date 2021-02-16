// import React from 'react'

// export default function Carrousel() {

//      const slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   const i = 0;
// const slides = document.getElementsByClassName("mySlides");
//   const dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
//     return (
        
    
//         <div class="slideshow-container">
//             <div class="mySlides fade">
//             <div class="numbertext">1 / 3</div>
// <img className="header_logo"src="images/pink.png"  style="width:100%"alt="logo" />
// <div class="text">Caption Text</div> 
// </div>
// <div class="mySlides fade">
//             <div class="numbertext">1 / 3</div>
// <img className="header_logo"src="images/ivory.png"  style="width:100%"alt="logo" />
// <div class="text">Caption Two</div> 
// </div>
// <div class="mySlides fade">
//             <div class="numbertext">1 / 3</div>
// <img className="header_logo"src="images/purple"  style="width:100%"alt="logo" />
// <div class="text">Caption Tree</div> 
// </div>
// <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
// <a class="next" onclick="plusSlides(1)">&#10095;</a>

// <br></br>
// <div style="text-align:center">
// <span class="dot" onclick="currentSlide(1)"></span> 
//   <span class="dot" onclick="currentSlide(2)"></span> 
//   <span class="dot" onclick="currentSlide(3)"></span> 

// </div>


//             </div>
           
    
//     )
// }
