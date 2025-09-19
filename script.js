$(document).ready(function () {
  $('.sponsor-box').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]



  });

  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      header.classList.toggle("active");

      let content = header.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";

     
    });
  });

  $(".hamburger").click(function(e){
    e.preventDefault();
    $(".nav-links").toggleClass("on");
    $(".hamburger i").toggleClass("ri-close-large-line");
  })


})