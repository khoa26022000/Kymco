//header
let nav=document.querySelector('.nav');
let btnMenu= document.querySelector('.humberger');
// menu
btnMenu.onclick=function(){
    console.log(1);
    nav.classList.toggle('click');
    this.classList.toggle('click');
}
let header=document.querySelector('header');
function changeHeaderBg(){
    let scrollY=window.pageYOffset;
    if(scrollY>(header.clientHeight))
    {
        header.classList.add('bg');
    }
    else{
        header.classList.remove('bg');
    }
}
document.addEventListener('scroll',function(){
    changeHeaderBg();
})

//slider
let $carousel= $('.slider-wrap');
$carousel.flickity({
    cellAlign:'left',
    contain:true,
    wrapAround:true,
    prevNextButtons:false,
    autoPlay: 2000,
    pageDots: false,
    on: {
        change: function(index){
            let number=$('.slider__bottom-paging .number1');
            let indexPage=index+1;
            number.text(indexPage.toString().padStart(2,0))
        }
    }
});

//slider product
let $carousel1= $('.sliderpd-w');
$carousel1.flickity({
    cellAlign:'left',
    contain:true,
    wrapAround:true,
    prevNextButtons:false,
    autoPlay: 2000,
    pageDots: false,
    on: {
        change: function(index){
            let content=$('.content__body');
            content.eq(index).addClass('active').siblings().removeClass('active');
            let number=$('.sliderpd__paging .number1');
            let indexPage=index+1;
            number.text(indexPage.toString().padStart(2,0))
        },
    }
});
let nextBtn=$('.next');
let preBtn=$('.pre');
nextBtn.click(function(){
    $carousel1.flickity('next');
})
preBtn.click(function(){
    $carousel1.flickity('previous');
})
// product
window.addEventListener('resize', function(){
    $(".slider .flickity-viewport").css('height',document.querySelector('.slider-wrap')?.clientHeight);
    $(".sliderpd .flickity-viewport").css('height',document.querySelector('.sliderpd-w').clientHeight);
 })


 function changeProducthot(){
    let hw=window.innerWidth;
    if(hw<(768))
    {
        var $slideproducthot = $('.producthot__slider');
        $slideproducthot.removeClass('no-flickity');

        // $slideproducthot.flickity({
        //     cellAlign: "center",
		// 	contain: true,
		// 	lazyload: 1,
		// 	// prevNextButtons: false,
		// 	pageDots: false,
		// 	draggable: true,
		// 	initialIndex: 1,
		// 	setGallerySize: false,
        //     wrapAround: true
        // }); 

        $slideproducthot.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true, 
            centerPadding: '60px',

        })
    }
}
$(window).on("resize", () => {
    changeProducthot()
})
parallaxEarth = function(){
    var bodywidth = $("body").width();
    //console.log(bodywidth)
    $(document).mousemove(function(e){
        //getting mouse dimentions
        var mouseX = e.pageX;
        var now = 15*(mouseX - bodywidth/2)/bodywidth;
        jQuery(".earth").css({
            'transform:': 'rotate(' + now + 'deg) translateX(-50%)',
            '-webkit-transform':'rotate(' + now + 'deg) translateX(-50%)',
            '-o-transform':'rotate(' + now + 'deg) translateX(-50%)',
            'transform-origin':'0% 50%',
            '-webkit-transform-origin':'0% 50%',
            '-o-transform-origin':'0% 50%'
        })
    }); 
}



$(document).ready(function(){
    changeProducthot();
    parallaxEarth();
})


/// Product
//tag
let tag1 = $(".tag")
let tagItem=$('.products__item')
// $(tag1).click(function(){
//     $(this).addClass('active').siblings().removeClass('active');
//     console.log($(this).index());
//     tagItem.eq(tagID).addClass('active').siblings().removeClass('active');
// })
tag1.each((index, element) => {
    $(element).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    console.log(index);
    tagItem.eq(index).addClass('active').siblings().removeClass('active');
})
})

$('.sliderRight-w').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
let carItem=$('.itemCar');
let itemlcnum=$('.location__content .bottom .num')
let itemlcnext=$('.location__content .bottom .next')
carItem.click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});
itemlcnum.click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});
itemlcnext.click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

let min = 1;
let max = 100;

const calcLeftPosition = value => 100 / (100 - 1) *  (value - 1);
// const price = value => ((value*1035000)+13500000);
$('#rangeMin').on('input', function(e) {
  const newValue = parseInt(e.target.value);
  if (newValue > max) return;
  min = newValue;
  $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
  $('#min').text((newValue*1035000)+13500000 - 1035000 + " VND");
//   $('#min').number( 1234.5678 );
//   $('#min').text(formatNumber(700000, '.', ','));
  $('#lineRange').css({
    'left': calcLeftPosition(newValue) + '%',
    'right': (100 - calcLeftPosition(max)) + '%'
  });
});

$('#rangeMax').on('input', function(e) {
  const newValue = parseInt(e.target.value);
  if (newValue < min) return;
  max = newValue;
  $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
  $('#max').text((newValue*1035000)+13500000 + " VND");
  $('#lineRange').css({
    'left': calcLeftPosition(min) + '%',
    'right': (100 - calcLeftPosition(newValue)) + '%'
  });
});
/// thong so
let accordion=$('.item__head');
let aitem=$('.item__head .icon');
accordion.click(function(e){
    e.stopPropagation();
    $(this).next().stop().slideToggle(200);
    $(this).closest('.item').toggleClass('active');
    $(this).closest('.item').siblings('.active').removeClass('active').find('.item__content').stop().slideUp(200);
    
    $(this).closest('.item').siblings('.a').removeClass('a').find('.icon');
    // aitem.eq(indexAccordion).toggleClass('a')
    // $(this).closest(aitem).toggleClass('a');
})

//doi baner 
let color=$('.color__item')
let imgXe=$('.banner__img img')
console.log(imgXe)
color.click(function(){
    let indexColor=$(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    imgXe.eq(indexColor).addClass('active').siblings().removeClass('active');
})

/////////////************************************** */


$('.scalize').scalize({
      width :0,
      height : 0,
      selector :'.pin',
      styleSelector :'circle',
      // pulse, pulse2, marker
      animationSelector :'',
      // custom animation classe
      animationPopoverIn :'',
      animationPopoverOut :'',
      // functions
      onInit :null,
      getSelectorElement :null,
      getValueRemove :null

    });
    