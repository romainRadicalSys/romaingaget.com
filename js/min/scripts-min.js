jQuery(document).ready(function(){jQuery(".latest-articles").find("img").each(function(){var t=this.width/this.height>1?"wide":"tall";jQuery(this).addClass(t)}),jQuery(".count").each(function(){var t=Math.floor(100*Math.random()+1);jQuery(this).text(t)}),jQuery(".like_button").one("click",function(){var t=jQuery(this).parent().find(".count");t.html(1*t.html()+1);var a=jQuery(this).parent().find(".like-counter");jQuery(a).removeClass("fa-heart-o"),jQuery(a).addClass("fa-heart")}),jQuery(".like_button").on("click",function(){event.preventDefault()}),jQuery("li a.share-trigger").on("click",function(){jQuery(".share-dropdown").toggleClass("is-open"),event.preventDefault()}),jQuery(".show-search").on("click",function(){jQuery(".search-wrapper").addClass("is-visible")}),jQuery(".hide-search").on("click",function(){jQuery(".search-wrapper").removeClass("is-visible"),jQuery(".search-wrapper input").removeClass("is-selected")}),jQuery(".search-wrapper input").on("click",function(){jQuery(this).addClass("is-selected")}),jQuery(".search-wrapper input").keypress(function(t){13===t.which&&window.alert("Ready for implementation.")}),jQuery(".bar").width("0%"),jQuery(".bar").waypoint(function(){jQuery(".bar").each(function(){var t=jQuery(this).data("percentage");jQuery(this).animate({width:t},{duration:2e3,easing:"easeOutExpo"})})},{offset:"85%"});var t="0";jQuery(".stats-number").text(t),jQuery(".stats-number").waypoint(function(){jQuery(".stats-number").each(function(){var t=jQuery(this);jQuery({Counter:0}).animate({Counter:t.attr("data-stop")},{duration:5e3,easing:"swing",step:function(a){t.text(Math.ceil(a))}})}),this.destroy()},{offset:"75%"}),jQuery("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var t=jQuery(this.hash);if(t=t.length?t:jQuery("[name="+this.hash.slice(1)+"]"),t.length)return jQuery("html,body").animate({scrollTop:t.offset().top},2e3),!1}}),jQuery(".nav-toggle").click(function(){jQuery(this).toggleClass("active"),jQuery(".navicon").toggleClass("fixed"),jQuery(".primary-nav-wrapper").toggleClass("open"),event.preventDefault()}),jQuery(".primary-nav-wrapper li a").click(function(){jQuery(".nav-toggle").toggleClass("active"),jQuery(".navicon").toggleClass("fixed"),jQuery(".primary-nav-wrapper").toggleClass("open")}),jQuery(".wp1").waypoint(function(){jQuery(".wp1").addClass("animated fadeInUp")},{offset:"80%"}),jQuery(".wp2").waypoint(function(){jQuery(".wp2").addClass("animated fadeInUp")},{offset:"95%"}),jQuery(".wp3").waypoint(function(){jQuery(".wp3").addClass("animated fadeInUp")},{offset:"95%"}),jQuery(".wp4").waypoint(function(){jQuery(".wp4").addClass("animated fadeInUp")},{offset:"75%"}),jQuery(".wp5").waypoint(function(){jQuery(".wp5").addClass("animated fadeIn")},{offset:"75%"}),jQuery(".wp6").waypoint(function(){jQuery(".wp6").addClass("animated fadeIn")},{offset:"75%"}),jQuery(".wp7").waypoint(function(){jQuery(".wp7").addClass("animated fadeIn")},{offset:"75%"}),jQuery(".wp8").waypoint(function(){jQuery(".wp8").addClass("animated fadeIn")},{offset:"75%"}),Modernizr.touch&&jQuery("figure").bind("touchstart touchend",function(t){jQuery(this).toggleClass("hover")})});