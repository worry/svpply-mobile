;(function(e,a,g,h,f,c,b,d){var i,el,len;if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(true),b=1);f(c).remove();}};i=0;len=a.documentElement.childNodes.length;while(--len){el=a.documentElement.childNodes[i];if(typeof el.tagName!=='undefined'&&el.tagName.toLowerCase()==='head'){a.documentElement.childNodes[i].appendChild(c);break;}i++;}}})(window,document,"1.6.1",function($,L){
;(function(f){f.fn.drag=function(b,a,d){var e=typeof b=="string"?b:"",k=f.isFunction(b)?b:f.isFunction(a)?a:null;if(e.indexOf("drag")!==0)e="drag"+e;d=(b==k?a:d)||{};return k?this.bind(e,d,k):this.trigger(e)};var i=f.event,h=i.special,c=h.drag={defaults:{which:1,distance:0,not:":input",handle:null,relative:false,drop:true,click:false},datakey:"dragdata",livekey:"livedrag",add:function(b){var a=f.data(this,c.datakey),d=b.data||{};a.related+=1;if(!a.live&&b.selector){a.live=true;i.add(this,"draginit."+ c.livekey,c.delegate)}f.each(c.defaults,function(e){if(d[e]!==undefined)a[e]=d[e]})},remove:function(){f.data(this,c.datakey).related-=1},setup:function(){if(!f.data(this,c.datakey)){var b=f.extend({related:0},c.defaults);f.data(this,c.datakey,b);i.add(this,"mousedown",c.init,b);this.attachEvent&&this.attachEvent("ondragstart",c.dontstart)}},teardown:function(){if(!f.data(this,c.datakey).related){f.removeData(this,c.datakey);i.remove(this,"mousedown",c.init);i.remove(this,"draginit",c.delegate);c.textselect(true); this.detachEvent&&this.detachEvent("ondragstart",c.dontstart)}},init:function(b){var a=b.data,d;if(!(a.which>0&&b.which!=a.which))if(!f(b.target).is(a.not))if(!(a.handle&&!f(b.target).closest(a.handle,b.currentTarget).length)){a.propagates=1;a.interactions=[c.interaction(this,a)];a.target=b.target;a.pageX=b.pageX;a.pageY=b.pageY;a.dragging=null;d=c.hijack(b,"draginit",a);if(a.propagates){if((d=c.flatten(d))&&d.length){a.interactions=[];f.each(d,function(){a.interactions.push(c.interaction(this,a))})}a.propagates= a.interactions.length;a.drop!==false&&h.drop&&h.drop.handler(b,a);c.textselect(false);i.add(document,"mousemove mouseup",c.handler,a);return false}}},interaction:function(b,a){return{drag:b,callback:new c.callback,droppable:[],offset:f(b)[a.relative?"position":"offset"]()||{top:0,left:0}}},handler:function(b){var a=b.data;switch(b.type){case !a.dragging&&"mousemove":if(Math.pow(b.pageX-a.pageX,2)+Math.pow(b.pageY-a.pageY,2)<Math.pow(a.distance,2))break;b.target=a.target;c.hijack(b,"dragstart",a); if(a.propagates)a.dragging=true;case "mousemove":if(a.dragging){c.hijack(b,"drag",a);if(a.propagates){a.drop!==false&&h.drop&&h.drop.handler(b,a);break}b.type="mouseup"}case "mouseup":i.remove(document,"mousemove mouseup",c.handler);if(a.dragging){a.drop!==false&&h.drop&&h.drop.handler(b,a);c.hijack(b,"dragend",a)}c.textselect(true);if(a.click===false&&a.dragging){$.event.triggered=true;setTimeout(function(){$.event.triggered=false},20);a.dragging=false}break}},delegate:function(b){var a= [],d,e=f.data(this,"events")||{};f.each(e.live||[],function(k,j){if(j.preType.indexOf("drag")===0)if(d=f(b.target).closest(j.selector,b.currentTarget)[0]){i.add(d,j.origType+"."+c.livekey,j.origHandler,j.data);f.inArray(d,a)<0&&a.push(d)}});if(!a.length)return false;return f(a).bind("dragend."+c.livekey,function(){i.remove(this,"."+c.livekey)})},hijack:function(b,a,d,e,k){if(d){var j={event:b.originalEvent,type:b.type},n=a.indexOf("drop")?"drag":"drop",l,o=e||0,g,m;e=!isNaN(e)?e:d.interactions.length; b.type=a;b.originalEvent=null;d.results=[];do if(g=d.interactions[o])if(!(a!=="dragend"&&g.cancelled)){m=c.properties(b,d,g);g.results=[];f(k||g[n]||d.droppable).each(function(q,p){l=(m.target=p)?i.handle.call(p,b,m):null;if(l===false){if(n=="drag"){g.cancelled=true;d.propagates-=1}if(a=="drop")g[n][q]=null}else if(a=="dropinit")g.droppable.push(c.element(l)||p);if(a=="dragstart")g.proxy=f(c.element(l)||g.drag)[0];g.results.push(l);delete b.result;if(a!=="dropinit")return l});d.results[o]=c.flatten(g.results); if(a=="dropinit")g.droppable=c.flatten(g.droppable);a=="dragstart"&&!g.cancelled&&m.update()}while(++o<e);b.type=j.type;b.originalEvent=j.event;return c.flatten(d.results)}},properties:function(b,a,d){var e=d.callback;e.drag=d.drag;e.proxy=d.proxy||d.drag;e.startX=a.pageX;e.startY=a.pageY;e.deltaX=b.pageX-a.pageX;e.deltaY=b.pageY-a.pageY;e.originalX=d.offset.left;e.originalY=d.offset.top;e.offsetX=b.pageX-(a.pageX-e.originalX);e.offsetY=b.pageY-(a.pageY-e.originalY);e.drop=c.flatten((d.drop||[]).slice()); e.available=c.flatten((d.droppable||[]).slice());return e},element:function(b){if(b&&(b.jquery||b.nodeType==1))return b},flatten:function(b){return f.map(b,function(a){return a&&a.jquery?f.makeArray(a):a&&a.length?c.flatten(a):a})},textselect:function(b){f(document)[b?"unbind":"bind"]("selectstart",c.dontstart).attr("unselectable",b?"off":"on").css("MozUserSelect",b?"":"none")},dontstart:function(){return false},callback:function(){}};c.callback.prototype={update:function(){h.drop&&this.available.length&& f.each(this.available,function(b){h.drop.locate(this,b)})}};h.draginit=h.dragstart=h.dragend=c})($);
  /*
   * The Bookmarklet. No longer the scavenger.
   */
  var sv_bookmarklet = {
    /*
     * This is the array of images from scanning.
     */
    images: [],

    /*
     * What will eventually be submitted
     */
    product_info: {},

    /*
     * This becomes the image you select.
     */
    image: false,

    /*
     * Events that need to be fired.
     */
    events: {
      api_loaded: [],
    },

    /*
     * Reference the sets of this user.
     */
    sets: false,

    /*
     * Keep track of state of the api load
     */
    api_loaded: false,

    /*
     * Check to see if we need to hide sets or not
     */
    hasSets: true,    /*
     * These are our main categories.
     */
    categories: {
      0: 'Apparel',
      1: 'Accessories',
      2: 'Shoes',
      3: 'Tech',
      4: 'Media',
      5: 'Home',
      7: 'Art',
      6: 'Other'
    },

    /*
     * If the category that you selected requires gender.
     */
    requires_gender: [0, 1, 2],

    /*
     * Gender.
     */
    genders: {
      0: 'Male',
      1: 'Female',
      2: 'Neutral'
    },

    /*
     * The prices that we support
     */
    prices: {
      0: '1-20',
      1: '20-50',
      2: '50-100',
      3: '100-200',
      4: '200-500',
      5: '500-5000',
      6: '5000+'
    },

    /*
     * Start everythign up.
     */
    init: function(username, key, user_id){
      var self = this;
      /*
       * Setup the instance variables
       */
      this.username = username;
      this.user_id  = user_id;
      this.key = key;
      this.container = $('<div id="sv_bookmarklet">').appendTo(document.body);

      /*
       * Bind a few events
       */
      $('.sv_category_values', $('#sv_bookmarklet')).live('click', function(){
        self.checkForSubmit();
      });
      $('.sv_close', $('#sv_bookmarklet')).live('click', function(){
        self.close();
      });

      /*
       * Start loading!
       */
      this.scan();
    },

    /*
     * When you select a yellow lined image, we will build your box for you.
     */
    select: function(container){
      var $container = $(container),
          $img = $('img', $container),
          self = this;

      self.image = $img[0].src;

      if(self.api_loaded === true){
        self.buildBox(function(){
          self.showCategories();
        });
      } else {
        self.buildBox(function(){
          self.showLoading();
        });
      }
    },

    /*
     * This looks through all of the images and checks to see if we can
     * grab them. It basically loads the images again and checks their
     * size so that we dont get folled by manually sized 1x1 px.
     */
    scan: function(){
      var $images = $('img'),
          imageCount = $images.length,
          self = this,
          allImagesChecked = function(){
            // Clear the timeout
            clearTimeout(window.sv_scan_timeout);

            if(self.images.length){
              self.addImageBorders();
            } else {
              self.buildBox(function(){
                self.showSorry();
              });
            }
          },
          imageChecked = function(){
            if(!--imageCount){
              allImagesChecked();
            }
          };

      // This is a manual timeout if for some reason some of the images
      // never load.
      window.sv_scan_timeout = setTimeout(function(){
        allImagesChecked();
      }, 5000);

      if(!imageCount){
        allImagesChecked();
      } else {
        $images.each(function(k, v){
          var image = v,
              imageCheck = $('<img>');

          if(v.offsetHeight < 100 || v.offsetWidth < 100){
            imageChecked();
          } else {
            (function(image){
              imageCheck
                .attr('src', image.src)
                .load(function(){
                  var width, height, left, top,
                      overlay = $('<div>');

                  if(this.width >= 100 && this.height >= 100){
                    self.images.push(image);
                  }

                  imageChecked();
                });
            })(image);
          }
        });
      }
    },

    /*
     * This function gives the images that distinct yellow border that is a
     * Svpply trademark. That way, you can easily see what products we can grab.
     */
    addImageBorders: function(){
      var self = this;
      $.each(this.images, function(k, image){
        var $img = $(image),
            offset = $img.offset(),
            overlay = $('<div class="sv_overlay">'),
            insetText = $('<div class="sv_overlay_text">'),
            textIndent = parseInt($img.css('text-indent').split('px')[0], 10) || 0,
            lineHeight = parseInt($img.css('line-height').split('px')[0], 10) || 0;

        insetText.text('Click to Add');

        overlay.css({
          top: offset.top-14,
          left: (offset.left-14)+(-textIndent),
          width: $img.outerWidth()+12,
          height: $img.outerHeight()+12,
          opacity: 0
        })
        .click(function(e){
          e.stopImmediatePropagation();
          e.preventDefault();
          self.clean.call(this);
          self.select(this);
        })
        .append($img.clone().css({ display: 'none' }))
        .append(insetText)
        .appendTo(self.container)
        .animate({ opacity: 1 }, 1000);
      });
    },

    /*
     * This builds what many consider "the bookmarklet". They don't consider the
     * image scanning that we do to avoid grabbing small images, etc etc.
     */
    buildBox: function(fn){
      var $selectionBox = $('<div class="sv_select_box">'),
          $selectionContent = $('<div class="sv_select_content">'),
          $handle = $('<div class="sv_drag_handle">'),
          $logo = $('<img>', { src: 'http://svpply.com/assets/image/svpply_white.png' }),
          $close = $('<img>', { src: 'http://svpply.com/assets/image/bookmarklet_close.png', 'class': 'sv_close' }),
          scrollTop = $(document.body).scrollTop(),
          self = this,
          fn = fn || function(){};

      // Position the black box in the middle of the screen
      $selectionBox.css({
        top: ($(window).height()/2)+scrollTop-220,
        left: ($(window).width()/2)-275,
        opacity: 0
      }).append($selectionContent);

      // Build the initial selection box, which is the black box
      $selectionBox
        .append($handle, $close, $selectionContent)
        .appendTo(this.container)
        .animate({ opacity: 1 });

      $selectionContent.append($logo);

      // Make the handle dragable.
      $selectionBox.drag(function(ev, dd){
        $(this).css({
           top: dd.offsetY,
           left: dd.offsetX
        });
      })
      .drag("start", function(){
        $(this).animate({ opacity: .8 });
      })
      .drag("end", function(){
        $(this).animate({ opacity: 1 });
      });

      fn();
    },

    showCategories: function(){
      var $selectionContent = $('.sv_select_content', this.container),
          $categories = $('<ul>', { 'class': 'sv_categories' }),
          $prices = $('<ul>', { 'class': 'sv_prices' }),
          $genders = $('<ul>', { 'class': 'sv_genders, sv_gender_category' }),
          $sets = $('<div>', { 'class': 'sv_category sv_set'}),
          $setSelect = $('<div>', { text: 'Add to set' }),
          self = this;

      $setSelect.click(function(e){
        SetSelector = new SV.components.SetSelector(e, {
          current_user: new SV.User({ id: this.user_id}),
          needs_product: false,
          start: [function(el, e, next){
            $('.setListing.setAdd', this.$instance).remove();
            next();
          }]
        })
        .pushEvent('close', function(next){
          var $inputs = $('input', this.$instance),
              addToSets = [];

          $inputs.each(function(){
            if($(this).is(':checked')){
              addToSets.push({
                id: $(this).data('id'),
                title: $(this).data('title')
              });
            }
          });

          $setSelect = $setSelect.clone(true);

          if(addToSets.length){
            self.sets = addToSets;
            $setTitle = $('<span class="set_title"><strong>Added to</strong> '+ (addToSets.length === 1 ? addToSets[0].title : addToSets.length) +'</span>');
            $setSelect.html('<span class="sv_type sv_underline">edit</span>');
            $sets.empty().append($setTitle, $setSelect);
          } else {
            $setSelect.text('Add to set');
            $sets.empty().append($setSelect, $('<span>', { 'class': 'sv_type', text: 'Optional'}));
          }

          next();
        });
      });

      $sets.append($setSelect, $('<span>', { 'class': 'sv_type', text: 'Optional'}));

      // Adding the item categories
      $.each(this.categories, function(id, category){
        var el = $('<li>', { 'class': 'sv_category_values', 'data-type': 'category', 'data-id': id, text: category });
        el.click(function(){
          var $list = $(this);
          $('.selected', $list.parent()).toggleClass('selected');
          $list.addClass('selected');
          if($.inArray($list.data('id'), self.requires_gender) !== -1){
            $('.sv_gender_category', self.container).show().children().removeClass('selected');
          } else {
            $('.sv_gender_category', self.container).hide();
          }
        });
        el.appendTo($categories);
      });

      // Adding the gender options
      $.each(this.genders, function(id, gender){
        var el = $('<li>', { 'class': 'sv_category_values', 'data-type': 'gender', 'data-id': id, text: gender });
        el.click(function(){
          $('.selected', $(this).parent()).toggleClass('selected');
          $(this).addClass('selected');
        });
        el.appendTo($genders);
      });

      // Adding each of the prices
      $.each(this.prices, function(id, price){
        var el = $('<li>', { 'class': 'sv_category_values', 'data-type': 'price', 'data-id': id, text: '$'+price });
        el.click(function(){
          $('.selected', $(this).parent()).toggleClass('selected');
          $(this).addClass('selected');
        });
        el.appendTo($prices);
      });

      if(!self.hasSets){
        $sets.empty().html('&nbsp;');
      }

      // Put all of the lists inside this content box so that we can just give it
      // a universal margin.
      $selectionContent
        .append($sets)
        .append($('<div class="sv_seperator">'))
        .append($('<div class="sv_category"><span class="sv_main">Select a Category</span><span class="sv_type">Required</span></div>'))
        .append($categories)
        .append($('<div class="sv_seperator sv_gender_category" style="display: none;">'))
        .append($('<div class="sv_category sv_gender_category" style="display: none;"><span class="sv_main">Select a Category</span><span class="sv_type">Required</span></div>'))
        .append($genders.css({ display: 'none' }))
        .append($('<div class="sv_seperator">'))
        .append($('<div class="sv_category"><span class="sv_main">Select a Prices</span><span class="sv_type">Required</span></div>'))
        .append($prices);
    },

    showSorry: function(msg1, msg2){
      if(!msg1){
          var msg1 = 'We had trouble finding any images large enough to save.',
              msg2 = 'Try visiting a page with larger product images or email help@svpply.com if you continue to have trouble.';
      }
      var $selectionContent = $('.sv_select_content', this.container),
          $message = $('<div class="sv_message">')
            .html('<span class="sv_message_yellow">' + msg1 + '</span>' +
                  '<span class="sv_message_grey">' + msg2 + '</span>').css({margin: 5});

      $('#sv_bookmarklet_loader', document.body).animate({ opacity: 0 }, function(){
        $(this).remove();
      });

      $selectionContent.append($message);
    },

    showLoading: function(){
      var $selectionContent = $('.sv_select_content', this.container),
          self = this;
          $message = $('<div class="sv_message">')
            .html('<span class="sv_message_yellow sv_large"><img style="float: none;" src="http://svpply.com/assets/image/onemoment.gif" /></span>');

      // When the api loads, show the categories.
      self.pushEvent('api_loaded', function(){
        $('.sv_select_box', self.container).remove();
        self.buildBox(function(){
          self.showCategories();
        });
      });

      $selectionContent.append($message);
    },

    showError: function(){
      var $selectionContent = $('.sv_select_content', this.container),
          $message = $('<div class="sv_message">')
            .html('<span class="sv_message_yellow sv_large">Uh oh. You\'ve found a problem. Would you mind reporting it?.</span>' +
                  '<span class="sv_message_grey">Try reloading the page or email help@svpply.com if you continue to have trouble adding this product.');

      $('#sv_bookmarklet_loader', document.body).animate({ opacity: 0 }, function(){
        $(this).remove();
      });

      $selectionContent.append($message);
    },

    showSuccess: function(){
      var $selectionContent = $('.sv_select_content', this.container),
          self = this,
          $message = $('<div class="sv_message">'),
          link = 'http://svpply.com/' + (self.sets.length ? self.username + '/sets' : self.username),
          title = self.product_info.t,
          category = self.product_info.c ? self.categories[self.product_info.c] : '',
          gender = self.product_info.g ? ', '+self.genders[self.product_info.g] : '',
          price = self.product_info.p ? ', $'+ self.prices[self.product_info.p] : '';

          $message
            .html('<img class="sv_product_image" src="'+ self.image +'" />' +
                  '<div class="add_message_container">'+
                    '<span class="sv_message_yellow sv_large">Added.</span>'+
                    '<a href="'+ link +'" class="sv_message_link">View this item in your '+ (self.sets.length ? 'set' : 'Svpply') +'</a>'+
                    '<span class="sv_message_grey">'+ title +'<br />'+ category + gender +price +'</span>'+
                 '</div>');

      $('#sv_bookmarklet_loader', document.body).animate({ opacity: 0 }, function(){
        $(this).remove();
      });

      $selectionContent
        .append($message);

      setTimeout(function(){
        self.close();
      }, 5000);
    },

    /*
     * This function listens to live click events on categories to see if the
     * user has clicked on the required stuff. The only thing that is optional
     * will be the set selection.
     */
    checkForSubmit: function(){
      var category, price, gender, sets=[], self = this;

      // Check for a category to be selected
      if($('.sv_category_values.selected[data-type=category]', self.container).length){
        category = $('.sv_category_values.selected[data-type=category]', self.container);
        // and now see if the category is one that requires a gender
        if(($.inArray(category.data('id'), self.requires_gender) === -1) || ($('.sv_category_values.selected[data-type=gender]', self.container).length)){
          gender = $('.sv_category_values.selected[data-type=gender]', self.container);
          // and finally, see if they have selected a price
          if($('.sv_category_values.selected[data-type=price]', self.container).length){
            price = $('.sv_category_values.selected[data-type=price]', self.container);


            if(self.sets.length){
              $.each(self.sets, function(k, v){
                sets.push(v.id);
              });
            }

            // Set the data we will need before submission
            self.product_info = {
              c: parseInt(category.data('id'), 10) || '',
              p: parseInt(price.data('id'), 10) || '',
              g: parseInt(gender.data('id'), 10) || '',
              i: self.image,
              r: location.href,
              t: document.title,
              l: document.referrer,
              s: sets
            };

            // and Fire away!
            self.submit();
          }
        }
      }
    },

    /*
     * Load a users sets
     */
    loadSets: function(fn){
      var self = this,
          current_user = new SV.User({ id: this.user_id}),
          SetSelector = SV.components.SetSelector;

      if(!$('.setListing', SetSelector.setup(current_user)).not('.setAdd').length){
        self.noSets = true;
      }

      if(fn) fn.call(this);
    },

    /*
     * This submits the product to Svpply.
     */
    submit: function(){
      var self = this, message, gateway;

      // If we had to query local storage for a user's key, then
      // the svpply_needs_x_domain will be set.
      if(!window['svpply_needs_x_domain']){
        self.container.empty();
        self.buildBox(function(){
          self.showSuccess();
        });

        $.ajax({
          url: 'http://svpply.com/b/'+ this.key,
          dataType: 'jsonp',
          data: self.product_info,
          success: function(d){ }
        });
      } else {
        message = {
            type: 'submit',
            url: 'http://svpply.com/b/'+ self.key +'?' + $.param(self.product_info)
        };
        gateway = $('.svpply_gateway')[0];
        if(gateway){
          gateway.contentWindow.postMessage(JSON.stringify(message), 'http://svpply.com');
        }

        self.container.empty();
        self.buildBox(function(){
          self.showSuccess();
        });
      }
    },

    close: function(){
      window.sv_bookmarklet_running = false;

      $('.sv_category_values', $('#sv_bookmarklet')).die('click');
      $('.sv_close', $('#sv_bookmarklet')).die('click');

      this.container.animate({ opacity: 0 }, function(){
        $(this).remove();
      });
      $('#sv_bookmarklet_loader').animate({ opacity: 0 }, function(){
        $(this).remove();
      });
    },

    clean: function(fn){
      var fn = fn || function() {},
          self = this;

      $('.sv_overlay', self.container)
        .not(this)
        .animate({ opacity: 'hide' }, function(){
          var self = this;
          // We set a timeout because sometimes the render jitters
          // if we try and delete right when the animation is finished.
          setTimeout(function(){ $(self).remove(); fn(); }, 1000);
        });
    },

    remove: function(){
      this.container.remove();
    },

    pushEvent: function(type, fn){
      if(type === 'api_loaded' && this.api_loaded === true){
        this.execEvent(type);
      } else {
        this.events[type].push(fn);
      }

      return this;
    },

    execEvent: function(type){
      var self = this;
      $.each(this.events, function(k, v){
        if(type === k){
          for(var i=0; i<v.length; i++){
            v.pop().call(self);
          };
        }
      });

      return this;
    }
  };

  /*
   * If the bookmarklet has already been started (aka, someone double clicks
   * the bookmarklet button, then we don't want to start another scan process.
   */
  if(typeof window.sv_bookmarklet_running === 'undefined' || window.sv_bookmarklet_running === false){
    var $sv = $('<img src="http://svpply.com/assets/image/svpply_icon_large.jpg">').css({ width: 60 }),
        $exit = $('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAMAAABE+WOeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAhlxAAAAFlJREFUeNrslLENACAMw/wJ/3/JDKqgnmAIW1MLRWmB4Q7hw7/jsYCtN4G7f4y9VaKXD41eIdLPn2OnlHHzlbq8X/qX+cj85Xzl/sj9lDX+Aea/Cv8PPwUYADZZBxQtE/3DAAAAAElFTkSuQmCC">').css({ width: 60 });
    // Set the window variables so we know if we need to load stuff again
    window.sv_bookmarklet_running = true;

    // Show the "loading" icon, so people know the bookmarklet is working
    $('<div id="sv_bookmarklet_loader">')
      .append($sv)
      .css({
        opacity: 0
      }).appendTo('body').animate({ opacity: 1 }, 500)
      .hover(function(){
        $($sv, $(this)).replaceWith($exit);
      }, function(){
        $($exit, $(this)).replaceWith($sv);
      })
      .click(function(){
        $(this).animate({ opacity: 0 }, function(){
          window.sv_bookmarklet_running = false;
          $(this).remove();
        });
        sv_bookmarklet.clean();
        sv_bookmarklet.remove();
      });


    /*
     * If we haven't run the bookmarklet on this page, then load our
     * external style sheets.
     */
    if(!window.sv_bookmarklet_ran){
      $('<link>', {
        href: 'http://svpply.com/assets/css/bookmarklet_v2.css?v=2',
        rel: 'stylesheet',
        type: 'text/css'
      }).appendTo('head');
      window.sv_bookmarklet_ran = true;
    }

    // check if this domain is blacklisted
    if(window.location.protocol == 'https:'){
      if(typeof sv_bookmarklet.blacklisted == 'undefined'){
        $.ajax({
          url: 'http://svpply.com/bookmarklet/check_blacklist/' + window.location.host,
          method: 'GET',
          dataType: 'jsonp',
          success: function(d){
            sv_bookmarklet.blacklisted = d.blacklisted;
            if(d.blacklisted == true){
                sv_bookmarklet.buildBox(function(){
                  sv_bookmarklet.showSorry("We're sorry", "You can't post to Svpply from " + window.location.host + " because they don't sell any products. If you've found a product you admire, please post it from the retailer's website so other people can easily find it . For more information, visit our <a href='http://svpply.com/guidelines' style='color: white;' >community guidelines</a>.</p>");
                });
               sv_bookmarklet.clean();
            }
          }
        });
      } else if (sv_bookmarklet.blacklisted == true){
          sv_bookmarklet.buildBox(function(){
            sv_bookmarklet.showSorry("We're sorry", "You can't post to Svpply from " + window.location.host + " because they don't sell any products. If you've found a product you admire, please post it from the retailer's website so other people can easily find it . For more information, visit our <a href='http://svpply.com/guidelines' style='color: white;' >community guidelines</a>.</p>");
          });
         sv_bookmarklet.clean();
      }
    }

    if(typeof SVPPLY_API_LOADED === 'undefined'){
      // Load the api.
      $.getScript('http://svpply.com/api/api.js?m=user,set&c=SetSelector', function(){
        // Make sure the sets have been initialized before calling LoadSets.
        // The SV object's pushEvent takes care of us playing the waiting game.
        SV.pushEvent('load', function(){
          sv_bookmarklet.loadSets(function(){
            sv_bookmarklet.api_loaded = true;
            sv_bookmarklet.execEvent('api_loaded');
          });
        });
      });

      // Include the component styles. This will dynamically string together
      // the css required for all of the components to look good.
      $.ajax({
        url: 'http://svpply.com/api/api.css?c=setselector',
        dataType: 'jsonp',
        success: function(styles){
          $('<style type="text/css">').text(styles).appendTo('head');
        }
      });
    } else {
      sv_bookmarklet.api_loaded = true;
      sv_bookmarklet.loadSets();
    }

    // And finally, init the bookmarklet, with real content.
    sv_bookmarklet.init('USERNAME', 'svpk_TOKEN', 'USERID');
  }
});