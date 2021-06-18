// ================================================================================================
// Common Variables
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = $(window).height();
var scrollTop = 0;
var $body = $('body');
var $themeYellow = '#fdd407';

// Layout or content related variables
//...TO BE FILLED

// Page-specific variables
//...TO BE FILLED
// ================================================================================================

$(document).ready(function(){
    init();
})

function init() {
    setGlobalVar();
    addClass();

    // High priority in execution
    //...TO BE FILLED

    // Browser or devices related
    //...TO BE FILLED

    // Common
    //...TO BE FILLED

    // Pages or sections specfic

    // Action or triggers
    $(window).scroll();
    navPages();
    navWorks();
    overlayShow();
    projAjax();

    // Run lastly
    //...TO BE FILLED
}

// ========================
// Init functions
// ========================
function setGlobalVar() {
    scrollTop = $(document).scrollTop();
    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    windowHeight = $(window).height();
}

function preventDefault() {
    event.preventDefault();
}

function addClass(){
    $elm = $('[data-animation]');
    $elm.addClass('js-animated');
}

// ========================
// Layout Handlers
// ========================
function scrollTransition() {
    $scrollTop = $(window).scrollTop();
    $elm = $('.js-animated');
    $elm.addClass('animated');
    $elm.each(function(){
        var $this = $(this),
            $animation = $this.data('animation');
            $windowHeight = $(window).height();

        if($scrollTop > $this.offset().top - $windowHeight){
            $this.addClass($animation);
        } else {
            $this.removeClass($animation);
        }
    });
}

// ========================
// Action Handlers
// ========================
$(window).scroll(function() {
    scrollTransition();
});

function navPages(){
    function toggleClass(){
         $('.nav_wrapper a').stop().toggleClass('active');
    }

    $('#home').click(function(){
        preventDefault();
        $('body, .overflow_wrapper, .bkgrd-circle, .bkgrd-color, .main-txt_wrapper, .nav_wrapper, .about-txt_wrapper, .sort-nav, .works_wrapper, .work-index_wrapper, .proj_wrapper').removeClass('about_active works_active proj_active active');
        $('.overlay_wrapper').fadeOut();
        $('.bkgrd-color').css('background', $themeYellow);
        toggleClass();
    })

    $('#about').click(function(){
        preventDefault();
        $('body, .bkgrd-circle, .bkgrd-color, .main-txt_wrapper, .nav_wrapper, .about-txt_wrapper').addClass('about_active');
        toggleClass();
    })

    $('#works').click(function(){
        preventDefault();
        $('.bkgrd-color, .main-txt_wrapper, .sort-nav, .works_wrapper, .work-index_wrapper').addClass('works_active');
        toggleClass();
        $( "#uiux" ).click();
    })
}

function navWorks(){
    $elm = $('.sort-nav').children();
    //categories id preset
    $elm.each(function(){
        $this = $(this);
        $attr = $this.html().toLowerCase();
        $this.attr('id', $attr);
    })
    //categories tab handling
    $elm.click(function(){
        preventDefault();
        $this = $(this);
        $attr = $this.html().toLowerCase();
        $elm = $('.works_inner_wrapper');
        $this.addClass('active').siblings().removeClass('active');

        $elm.each(function(){
            $this = $(this);
            $thisAttr = $this.data('cat');
            if($attr == $thisAttr){
                $this.addClass('active').siblings().removeClass('active');
                $('.work_each').removeClass('active');
                $this.children().first().addClass('active');
            } else{}
        })
        //append indication dots
        $indexWrapper = $('.work-index_wrapper');
        $activeWrapper = $('.works_inner_wrapper.active');
        $itemsNo = $activeWrapper.children().length;
        $indexWrapper.empty();
        for (i = 0; i < $itemsNo; i++) {
            $indexWrapper.append('<div class="work-index"></div>');
        }
        $dots = $('.work-index');
        $dots.each(function(){
            $this = $(this);
            $index = $this.index() + 1;
            $this.attr('data-num', $index); //append data-index
        })
        ProjectChange();
        dotChange();
    })
    //append data-index
    $elm = $('.work_each');
    $elm.each(function(){
        $this = $(this);
        $index = $this.index() + 1;

        $this.attr('data-num', $index);
    })
    //next prev handling
    $('#next').click(function(){
        $activeProj = $('.work_each.active')
        preventDefault();
        if ($activeProj.is(':last-child') == true){
            $activeProj.removeClass('active').siblings().first().addClass('active');
        } else {
            $activeProj.removeClass('active').next().addClass('active');
        }
        ProjectChange();
    })
    $('#prev').click(function(){
        $activeProj = $('.work_each.active')
        preventDefault();
        if ($activeProj.is(':first-child') == true){
            $activeProj.removeClass('active').siblings().last().addClass('active');
        } else {
            $activeProj.removeClass('active').prev().addClass('active');
        }
        ProjectChange();
    })
    //index dots handling
    function dotChange(){
        $('.work-index').mouseover(function(){
            $this = $(this);
            $dotIndex = $this.data('num')
            $elm = $('.works_inner_wrapper.active').children();

            $elm.each(function(){
                $this = $(this);
                $thisIndex = $(this).data('num');
                if($dotIndex == $thisIndex){
                    $this.addClass('active').siblings().removeClass('active');
                } else{}
            })
            ProjectChange();
        })
    }
}

function overlayShow(){
    $img = $('.work_each').children('img');
    $wrapper = $('.overlay_wrapper');

    $img.mouseenter(function(){
        $img.addClass('active');
        $wrapper.fadeIn();
    })
    $wrapper.mouseleave(function(){
        $wrapper.stop().fadeOut();
        $img.removeClass('active');
    })
}

function ProjectChange(){
    //bkgrd & overlay color handling
    $activeProj = $('.work_each.active').children();
    $thisTitle = $activeProj.data('title');
    $thisCat = $activeProj.data('cat');
    $bkgrdColor = $activeProj.data('color');
    $title = $('.project-title');
    $cat = $('.project-cat');

    $('.bkgrd-color').css('background', $bkgrdColor); //color handling
    $title.html($thisTitle); //title handling
    $cat.html($thisCat); //category handling

    $proj = $('.work_each.active');
    $projAttr = $proj.data('num');
    $dot = $('.work-index');
    $dot.removeClass('active');
    $dot.each(function(){
        $this = $(this);
        $thisAttr = $this.data('num');

        if($projAttr == $thisAttr){
            $this.addClass('active');
        }
    })
    $('.work_each').children('img').removeClass('active');
    $('.overlay_wrapper').fadeOut();
}

function projAjax(){ 
    $('.overlay_wrapper').click(function(){  
        $('.proj_wrapper, .bkgrd-circle').addClass('proj_active active');
        $thisCat = $('.works_inner_wrapper.active').data('cat');
        $thisProj = $('.work_each.active').data('num') - 1;

        $.getJSON('../json/' + $thisCat + '/proj.json', function(result){
           $dataRow = result['projects'][$thisProj];
           $appendContent = "";

           $appendContent += '<h1>' + $dataRow['project_name'] + '</h1>';
           $appendContent += '<h2>' + $dataRow['project_cat'] + '</h2>';
           $appendContent += '<p>' + $dataRow['project_brief'] + '</p>';
           $('.proj-head').html($appendContent);

           $appendContent = "";
           $appendContent += '<img src="../images/projs/' + $dataRow['project_folder'] + '/' + $dataRow['project_banner'] + '">';
           $('.proj-banner').html($appendContent);

           $appendContent = "";
           $appendContent += '<h2>Client</h2>';
           $appendContent += '<p>' + $dataRow['client'] + '</p>';
           $('.client-info').html($appendContent);

           $appendContent = "";
           $appendContent += '<h2>Company</h2>';
           $appendContent += '<p>' + $dataRow['company'] + '</p>';
           $('.company-info').html($appendContent);

           $appendContent = "";
           $appendContent += '<h2>Year</h2>';
           $appendContent += '<p>' + $dataRow['year'] + '</p>';
           $('.year-info').html($appendContent);

           $appendContent = "";
           $appendContent += '<div class="line"></div>';
           $appendContent += '<h3>' + $dataRow['proj_desc'] + '</h3>';
           $('.proj-mid').html($appendContent);

           $appendContent = "";
           $appendContent += $dataRow['info-one'];
           $('.info-one').html($appendContent);

           $appendContent = "";
           $appendContent += $dataRow['info-two'];
           $('.info-two').html($appendContent);

           $appendContent = "";
           $appendContent += $dataRow['info-three'];
           $('.info-three').html($appendContent);

           $appendContent = "";
           $appendContent += $dataRow['info-four'];
           $('.info-four').html($appendContent);

           $appendContent = "";
           $appendContent += '<img src="../images/projs/' + $dataRow['project_folder'] + '/' + $dataRow['footer_banner'] + '">';
           $('.proj-foot').html($appendContent);
        });

        $('body, .overflow_wrapper, .main-txt_wrapper').addClass('proj_active');
        $('.sort-nav').removeClass('works_active');
    });

    $('.bk-to-proj').click(function(){
        preventDefault();
        $('body, .overflow_wrapper, .proj_wrapper, .main-txt_wrapper').removeClass('proj_active active');
        $('.sort-nav').addClass('works_active');
        $('html, body').animate({
            scrollTop: (0)
        }, 600);
    })
}

// ========================
// Helper, Validation Functions
// ========================