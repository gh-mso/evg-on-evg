jQuery(window).on("load",function(){"function"==typeof jQuery.fn.equalHeights&&jQuery(window).on("fusion-resize-horizontal",function(){jQuery(".fusion-events-shortcode").each(function(){jQuery(this).find(".fusion-events-meta").equalHeights()})})}),jQuery(window).on("load fusion-element-render-fusion_events",function(e,n){var i=void 0!==n?'div[data-cid="'+n+'"] .fusion-events-shortcode':".fusion-events-shortcode";"function"==typeof jQuery.fn.equalHeights&&jQuery(i).each(function(){jQuery(this).find(".fusion-events-meta").equalHeights()}),jQuery(i+".fusion-events-pagination-infinite, "+i+".fusion-events-pagination-load-more-button").each(function(){var t=jQuery(this),e="."+t.attr("class").replace(/\ /g,".").replace(/.fusion\-events\-[a-zA-Z]+\-sidebar/g,"").replace(".fusion-masonry-has-vertical","")+" ",s=t.find(".fusion-events-wrapper").data("pages"),n={layoutMode:"packery",itemSelector:".fusion-events-post",isOriginLeft:!jQuery("body.rtl").length};t.find(".fusion-events-wrapper").isotope(n),t.children(".fusion-events-wrapper").infinitescroll({navSelector:e+".fusion-infinite-scroll-trigger",nextSelector:e+".pagination-next",itemSelector:e+"div.pagination .current, "+e+" .fusion-events-post",loading:{finishedMsg:fusionEventsVars.infinite_finished_msg,msg:jQuery('<div class="fusion-loading-container fusion-clearfix"><div class="fusion-loading-spinner"><div class="fusion-spinner-1"></div><div class="fusion-spinner-2"></div><div class="fusion-spinner-3"></div></div><div class="fusion-loading-msg">'+fusionEventsVars.infinite_blog_text+"</div>")},maxPage:s||void 0,errorCallback:function(){t.find(".fusion-events-post").css("height",""),t.find(".fusion-events-wrapper").isotope(n)}},function(o){jQuery().isotope&&((o=jQuery(o)).hide(),imagesLoaded(o,function(){var i,e,n;(i=jQuery(o).find(".fusion-placeholder-image")).parents(".fusion-events-content-wrapper, .fusion-image-wrapper").animate({opacity:1}),(e=jQuery(o).find(".fusion-video")).each(function(){jQuery(this).animate({opacity:1}),jQuery(this).parents(".fusion-events-content-wrapper").animate({opacity:1})}),e.fitVids(),window.$events_images_index=0,jQuery(o).imagesLoaded().progress(function(e,n){1<=jQuery(n.img).parents(".fusion-events-content-wrapper").length?jQuery(n.img,i).parents(".fusion-events-content-wrapper").delay(100*window.$events_images_index).animate({opacity:1}):jQuery(n.img,i).parents(".fusion-image-wrapper").delay(100*window.$events_images_index).animate({opacity:1}),window.$events_images_index++}),o.fadeIn(),t.find(".fusion-events-post").css("height",""),t.find(".fusion-events-wrapper").isotope("appended",o),o.each(function(){jQuery(this).find(".full-video, .video-shortcode, .wooslider .slide-content").fitVids()}),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")}),"individual"===fusionEventsVars.lightbox_behavior&&jQuery(o).find(".fusion-rollover-gallery").length&&jQuery(o).find(".fusion-rollover-gallery").each(function(){window.$ilInstances.push(jQuery('[data-rel^="'+jQuery(this).attr("data-rel")+'"]').iLightBox(window.avadaLightBox.prepare_options(jQuery(this).attr("data-rel"))))}),n=t.find(".current").html(),t.find(".current").remove(),s==n&&(t.find(".fusion-loading-container").hide(),t.find(".fusion-load-more-button").hide()),"undefined"!=typeof niceScrollReInit&&niceScrollReInit(),window.dispatchEvent(new Event("fusion-resize-horizontal",{bubbles:!0,cancelable:!0})),setTimeout(function(){t.find(".fusion-events-wrapper").isotope()},250)}))}),t.hasClass("fusion-events-pagination-load-more-button")&&(t.find(".fusion-events-wrapper").infinitescroll("unbind"),t.find(".fusion-load-more-button").on("click",function(e){e.preventDefault(),t.find(".fusion-events-wrapper").infinitescroll("retrieve")}))})});