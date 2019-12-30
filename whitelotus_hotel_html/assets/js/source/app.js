jQuery(document).ready(function($) {
  $('.lazy').lazy({
    effect: "fadeIn",
    effectTime: 500,
    threshold: 0
  });

  $('a[href*="#"]:not([href="#"]):not([href*="#step"]):not([role="tab"]):not([data-toggle="pill"])').click(function() {
    if (document.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && document.location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var body = $('body');

  // Datetime picker
  $.fn.datetimepicker.dates['vi'] = {
    days: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ 7", "Chủ nhật"],
    daysShort: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"],
    daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7", "CN"],
    months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
    today: "Hôm nay",
    suffix: [],
    meridiem: [],
    // rtl: true
  };

  if (body.hasClass('vi')) {
    $('.datetime').datetimepicker({
      language: 'vi',
      format: "dd/mm/yyyy - hh:ii",
      autoclose: true,
      //todayBtn: true,
      //pickerPosition: "bottom-left"
    });
  }
  $('.datetime').datetimepicker({
    language: 'en',
    format: "dd/mm/yyyy - hh:ii",
    autoclose: true,
  });

  // FIXED NAVBAR
  var navbar = $('#navbar');
  fixexNavbar = function() {
    var position = $(window).scrollTop();
    if (position >= 40) {
      navbar.addClass('nav-active');
    } else {
      navbar.removeClass('nav-active');
    }
  }
  $(window).scroll(function() {
    fixexNavbar();
  });
  if ($(window).scrollTop() >= 40) {
    fixexNavbar();
  }

  // SCROLL TOP
  var scroll_top = $('#scrollTop');
  fixexScroll = function() {
    var position = $(window).scrollTop();
    if (position >= 250) {
      scroll_top.addClass('active');
    } else {
      scroll_top.removeClass('active');
    }
  }
  $(window).scroll(function() {
    fixexScroll();
  });
  if ($(window).scrollTop() >= 250) {
    fixexScroll();
  }

  //Only skrollr desktop (when on mobile)
  // if (body.hasClass('single-apps')) {
  var s = skrollr.init({
    forceHeight: false,
    mobileCheck: function() {
      //hack - forces mobile version to be off
      return false;
    }
  });
  // }


  // HEADER
  $('.slide-header').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    dotsClass: 'owl-dots container'
  });

  // FANCYBOX
  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "zoom",
      //"share",
      //"slideShow",
      //  "fullScreen",
      //"download",
      "thumbs",
      "close"
    ],
    transitionEffect: "slide",
    animationEffect: 'fade',
    // gutter: 40,
    image: {
      preload: true
    }
  });

  // SLIDE
  $('.slide-full-width').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 3,
        nav: true
      },
      992: {
        items: 5,
        nav: true
      }
    }
  });

  // Review slide
  $('.review-slide').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    // autoplay: true,
    mouseDrag: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    dotsContainer: '#review-slide-dots'
  });

  // Gym slide
  $('.gym-slide').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
  });
  function resizeGymSlide() {
    var leisure_gym = $('#leisure-gym');
    leisure_gym.find('.gym-slide .owl-item').css('height', leisure_gym.outerHeight() + 'px');
  }
  resizeGymSlide();
  $(window).resize(function () {
    resizeGymSlide();
  });

  // Slide sync
  function slideSync() {
    var slide_simple = $('.tab-content > .tab-pane.active > .slide-simple').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      items: 1,
      responsive: {
        0: {
          autoplay: true,
          mouseDrag: true,
          mouseTouch: true,
        },
        768: {
          autoplay: false,
          mouseDrag: false,
          mouseTouch: false,
        }
      }
    });

    var slide_multiple = $('.tab-content > .tab-pane.active > .slide-multiple').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      autoplay: false,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
      responsive: {
        0: {
          autoplay: false,
        },
        768: {
          items: 3,
          nav: true,
          autoplay: true,
        },
        992: {
          items: 4,
          nav: true,
          autoplay: true,
        }
      }
    });

    slide_multiple.on('changed.owl.carousel', function(event) {
      $(this).find('.owl-item').removeClass('sync');
      $(this).find('.owl-item:eq(' + event.item.index + ')').addClass('sync');
      slide_simple.trigger('to.owl.carousel', [event.item.index + 1, 300]);
    });
    slide_multiple.on('click', '.owl-item', function(e) {
      e.preventDefault();
      var number = $(this).index();
      slide_multiple.find('.owl-item').removeClass('sync');
      $(this).addClass('sync');
      slide_simple.trigger("to.owl.carousel", number + 1);
    });

  }
  slideSync();

  // TAB
  $('#meeting-tabs a').on('shown.bs.tab', function(event) {
    slideSync();
    $('#meeting-tabs-toggle').prop('checked', false).trigger('change');
  });

  // Set min height package item
  function resize_package_item() {
    var packages = $('.package-list');
    packages.find('.package-item .box').css('min-height', 'auto');
    if ($(window).width() < 767) {
      return false;
    }

    $.each(packages, function(index, package_list) {
      package_list = $(package_list);
      var height = 0;
      var items = package_list.find('.package-item');

      $.each(items, function(index_item, item) {
        if ($(item).height() > height) {
          height = $(item).height();
        }
      });

      package_list.find('.package-item .box').css('min-height', height + 'px');
    });
  }

  resize_package_item();
  $(window).resize(function() {
    resize_package_item();
  });

  // Resize frame content blog detail
  var resizeIframe = function() {
    var entry_content = $('.single .entry-content'),
      width = entry_content.width(),
      height = (width * 56.25) / 100;

    entry_content.find('iframe').css({
      'width': width + 'px',
      'height': height + 'px'
    });
  };
  resizeIframe();
  $(window).on('resize', function(e) {
    resizeIframe();
  });

  // Dropdown
  $('#nav-menus .dropdown').on('show.bs.dropdown', function() {
    if (!$(this).hasClass('active'))
      window.open($(this).find('>.dropdown-toggle').attr('href'));
  });


  // Popup
  if (body.hasClass('home')) {
    setTimeout(function () {
      $('#subscribeModal').modal('show');
    }, 3500);
  }


  // TABLE SCROLL
  var table_scrolls = body.find('.table-wrap table');
  $.each(table_scrolls, function(index, table) {
    table = $(table);
    var total_th = table.find('th').length;
    if (total_th <= 8) {
      table.closest('.table-wrap').find('.table-navs').hide();
    }
  });

  body.on('click', '.table-navs > .table-nav', function() {
    var self = $(this);
    var table = self.closest('.table-scroll').find('.table-content');
    if (self.hasClass('prev')) {
      prev_table(table);
    } else if (self.hasClass('next')) {
      next_table(table);
    }
    return false;
  });

  function prev_table(table) {
    var position = table.scrollLeft();
    table.animate({
      scrollLeft: position - 200
    }, 300);
  }

  function next_table(table) {
    var position = table.scrollLeft();
    table.animate({
      scrollLeft: position + 200
    }, 300);
  }

  // Fixed Meeting Tabs
  function fixed_meeting_tabs_wrap() {
    var meeting_tabs_wrap = $('#meeting-tabs-wrap');
    
    if ($(window).width > 767) {
      meeting_tabs_wrap.removeClass('fixed');
      return;
    }

    if ($(window).scrollTop() >= (meeting_tabs_wrap.parent().offset().top - 81)) {
      meeting_tabs_wrap.addClass('fixed');
    } else if ($(window).scrollTop() < (meeting_tabs_wrap.parent().offset().top - 81)) {
      meeting_tabs_wrap.removeClass('fixed');
    }
  }
  
  fixed_meeting_tabs_wrap();
  $(window).scroll(function () {
    fixed_meeting_tabs_wrap();
  });

  // Toggle Metting Tabs
  $('#meeting-tabs-toggle').on('change', function () {
    var self = $(this);
    var meeting_tabs = $('#meeting-tabs');
    if (!self.is(":checked")) {
      var li_active = meeting_tabs.find('li.active');
      meeting_tabs.css('margin-top', '-' + (li_active.index() * 46) + 'px');
    } else {
      meeting_tabs.css('margin-top', 0);
    }
  });
  
});