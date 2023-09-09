(async function getGenral() {
    let apiResponse= await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let finalResult = await apiResponse.json()
    let y=finalResult.results
    console.log(finalResult.results);

    let box =``
    for (let index = 0; index < y.length; index++) {
        box +=`<div class="col-md-6 p-4 col-sm-8 col-lg-4  ">
        <div class="item gy-3 p-4 hite position-relative text-white">
            <img class=" hite w-100" src="https://image.tmdb.org/t/p/w500${y[index].backdrop_path
            }" alt="">
            <div class="item-caption text-white p-4 hidder">
                <h1 class="mt-2 text-white mb-2">${y[index].name}</h1>
                <p class="mt-3">Lordipit alias id dolor adipisci quam. Debitis. Lorem ipsum dolor sit amet.ipsum dolor, sit amet consectetur adipisicing elit. Officiis perferendis eos perspiciatis.</p>
                <p>${y[index].overview}</p>
                <h3 class="mt-4">
                    <i class="fa-solid fa-star fa-2xs" style="color: #fff93d;"></i>
                    <i class="fa-solid fa-star fa-2xs" style="color: #fff93d;"></i>
                    <i class="fa-solid fa-star fa-2xs" style="color: #fff93d;"></i>
                </h3>
                <h3 class="ronud">70</h3>
            </div>
        </div>
    </div>
`
        
    }
    document.getElementById("rowData").innerHTML = box
})()



$(document).ready(function(){
    $('.loader').fadeOut(500,function () {
        $('.loading').fadeOut (500)
        $('body').css("overflow","auto")
        $('.loading').remove()
    })
})


let sectionOffset = $("#evenScroll").offset().top
$(window).scroll(function () {
    let windoScroll= $(window).scrollTop();
    if (windoScroll > sectionOffset) {
        $("#btnUp").fadeIn(300)
    }
    else{
        $("#btnUp").fadeOut(300)
    }

})

let sideBarInnerWidth = $(".sideBar-inner").innerWidth()
$("#sideBar").css('left' ,-sideBarInnerWidth)

$("#sideBar .point").click(function () {

    if (  $("#sideBar").css('left')=="0px") 
    {
        $("#sideBar").animate({left:-sideBarInnerWidth},600)
        $(".linksInMenu .cc").slideUp(400)
        $("#sideBar #openBar ").css("display","block")
        $("#sideBar #closeBar ").css("display","none")





    }
    else
    {
        $("#sideBar").animate({left:"0px"},500 )
        $(".linksInMenu .cc ").slideDown(600)
        $("#sideBar #openBar ").css("display","none")
        $("#sideBar #closeBar ").css("display","block")

       


    }
})

$("#btnUp").click(function () {
    $("html,body").animate({scrollTop:0},800)
})

let contactOffset = $("#contact").offset().top
$("#contactB").click(function () {
    $("html,body").animate({scrollTop:contactOffset},1000)
})




$("#rowData").click(function (e) {
    console.log(e);
})



// ================================================================


































