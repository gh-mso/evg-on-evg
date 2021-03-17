!function(d){"use strict";d.fn.fusion_responsive_title_element=function(){d(this).each(function(){var t=d(this),i=t.find("h1, h2, h3, h4, h5, h6"),e=i.data("min-width")?i.data("min-width"):i.outerWidth(),n=t.parent(),o=t.parents(".slide-content").length?n.width():n.outerWidth(),a=t.find(".fusion-animated-texts-wrapper");(0!==e&&!1!==e&&"0"!==e||0!==o&&!1!==o&&"0"!==o)&&o<=e+100?(t.addClass("fusion-border-below-title"),i.data("min-width",e)):t.removeClass("fusion-border-below-title"),d(t).hasClass("fusion-title-rotating")&&!d(t).is(".fusion-title-typeIn,.fusion-title-clipIn")&&a.fusion_animated_title_element_rotation_width()})},d.fn.fusion_animated_title_element=function(){d(this).each(function(){var t=d(this),i=t.find(".fusion-animated-texts-wrapper"),e=t.hasClass("fusion-loop-on"),n="",o="",a="",s="",f=0,l="";d(t).hasClass("fusion-title-rotating")&&(s=getWaypointOffset(d(t).find(".fusion-animated-texts-wrapper")),l=d(t).closest("[data-animationduration]").data("animationduration"),d(t).find(".fusion-animated-texts-wrapper").removeData("textillate"),d(t).find(".fusion-textillate").remove(),d(t).is(".fusion-title-typeIn,.fusion-title-clipIn")||i.fusion_animated_title_element_rotation_width(),void 0!==l&&(f=200*parseFloat(l)),d(t).find(".fusion-animated-texts-wrapper").waypoint(function(){d(t).find(".fusion-animated-texts-wrapper").textillate({selector:".fusion-animated-texts",type:i.attr("data-length"),minDisplayTime:i.attr("data-minDisplayTime"),loop:e,initialDelay:f})},{triggerOnce:!0,offset:s})),d(t).hasClass("fusion-title-highlight")&&(s=getWaypointOffset(d(t).find(".fusion-highlighted-text")),n={circle:["M344.6,40.1c0,0-293-3.4-330.7,40.3c-5.2,6-3.5,15.3,3.3,19.4c65.8,39,315.8,42.3,451.2-3 c6.3-2.1,12-6.1,16-11.4C527.9,27,242,16.1,242,16.1"],underline_zigzag:["M6.1,133.6c0,0,173.4-20.6,328.3-14.5c154.8,6.1,162.2,8.7,162.2,8.7s-262.6-4.9-339.2,13.9 c0,0,113.8-6.1,162.9,6.9"],x:["M25.8,37.1c0,0,321.2,56.7,435.5,82.3","M55.8,108.7c0,0,374-78.3,423.6-76.3"],strikethrough:["M22.2,93.2c0,0,222.1-11.3,298.8-15.8c84.2-4.9,159.1-4.7,159.1-4.7"],curly:["M9.4,146.9c0,0,54.4-60.2,102.1-11.6c42.3,43.1,84.3-65.7,147.3,0.9c37.6,39.7,79.8-52.6,123.8-14.4 c68.6,59.4,107.2-7,107.2-7"],diagonal_bottom_left:["M6.5,127.1C10.6,126.2,316.9,24.8,497,23.9"],diagonal_top_left:["M7.2,28.5c0,0,376.7,64.4,485.2,93.4"],double:["M21.7,145.7c0,0,192.2-33.7,456.3-14.6","M13.6,28.2c0,0,296.2-22.5,474.9-5.4"],double_underline:["M10.3,130.6c0,0,193.9-24.3,475.2-11.2","M38.9,148.9c0,0,173.8-35.3,423.3-11.8"],underline:["M8.1,146.2c0,0,240.6-55.6,479-13.8"]}[d(t).data("highlight")],o=d(),"object"==typeof n&&n.forEach(function(t){o=o.add(d("<path>",{d:t}))}),a=d("<svg>",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 150",preserveAspectRatio:"none"}).html(o),d(t).find(".fusion-highlighted-text").waypoint(function(){d(t).find(".fusion-highlighted-text-wrapper svg").remove(),d(t).find(".fusion-highlighted-text").after(a[0].outerHTML)},{triggerOnce:!0,offset:s}))})},d.fn.fusion_animated_title_element_rotation_width=function(){var t=d(this),i=t.find(".fusion-animated-texts"),e=0,n=0,o=!1;e=parseInt(t.find(".fusion-animated-text").css("font-size")),e*=.6,i.is(":visible")||(o=!0,i.show()),d(t).find(".fusion-animated-text").each(function(){var t=d(this).width();n<t&&(n=t)}),o&&i.hide(),t.css("width",n+e)}}(jQuery),jQuery(document).ready(function(){jQuery(".fusion-title").fusion_responsive_title_element(),jQuery(window).on("resize",function(){jQuery(".fusion-title").fusion_responsive_title_element()}),jQuery(".fusion-title").fusion_animated_title_element()}),jQuery(window).on("fusion-column-resized fusion-element-render-fusion_title",function(t,i){var e=jQuery('div[data-cid="'+i+'"]').find(".fusion-title");e.length&&(e.fusion_responsive_title_element(),e.fusion_animated_title_element())});