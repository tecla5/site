(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

  /*

  var DEFAULT_ROUTE = 0;

  var template = document.querySelector('template[is="auto-binding"]');
  //var template = document.querySelector('#t');
  var ajax, pages, scaffold;
  var cache = {};

  template.pages = [
    //url:'http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/'
    {name: 'Home', hash: 'one', url:'home.html' },
    {name: 'Services', hash: 'two', url: 'services.html'},
    {name: 'About Us', hash: 'three', url: 'about-us.html'},
    {name: 'Contact Us', hash: 'four', url: 'contact-us.html'},
    {name: 'Blog', hash: 'five', url: 'http://blog.tecla5.com'}
  ];

  template.addEventListener('template-bound', function(e) {
    scaffold = document.querySelector('#scaffold');
    ajax = document.querySelector('#ajax');
    pages = document.querySelector('#pages');
    var keys = document.querySelector('#keys');

    // Allow selecting pages by num keypad. Dynamically add
    // [1, template.pages.length] to key mappings.
    var keysToAdd = Array.apply(null, template.pages).map(function(x, i) {
      return i + 1;
    }).reduce(function(x, y) {
      return x + ' ' + y;
    });
    keys.keys += ' ' + keysToAdd;

    this.route = this.route || DEFAULT_ROUTE; // Select initial route.
  });

  template.keyHandler = function(e, detail, sender) {
    // Select page by num key.
    var num = parseInt(detail.key);
    if (!isNaN(num) && num <= this.pages.length) {
      pages.selectIndex(num - 1);
      return;
    }

    switch (detail.key) {
      case 'left':
      case 'up':
        pages.selectPrevious();
        break;
      case 'right':
      case 'down':
        pages.selectNext();
        break;
      case 'space':
        detail.shift ? pages.selectPrevious() : pages.selectNext();
        break;
    }
  };

  template.menuItemSelected = function(e, detail, sender) {
    console.log ('menuItemSelected',e, detail, sender);

    if (detail.isSelected) {

      // Need to wait one rAF so <core-ajax> has it's URL set.
      this.async(function() {
        if (!cache[ajax.url]) {
          ajax.go();
        } else {

          this.injectBoundHTML(cache[ajax.url], pages.selectedItem.firstElementChild);
        }

        scaffold.closeDrawer();
      });

    }
  };

  template.ajaxLoad = function(e, detail, sender) {
    e.preventDefault(); // prevent link navigation.
  };

  template.onResponse = function(e, detail, sender) {
    console.log('onResponse', e, detail, sender);

    var article = detail.response.querySelector('.article');//'#article-content'
    //article.querySelector('.byline').remove();

    // Fix up image paths to not be local.
    [].forEach.call(article.querySelectorAll('img'), function(img) {
      img.setAttribute('src', img.src);
    });
    var html = article.innerHTML;

    cache[ajax.url] = html; // Primitive caching by URL.
    //console.log('selectedPages: ',selectedPage);

    console.log ('pages:',pages, pages.selectedItem, pages.selected);
    if(pages.selectedItem === null){
      pages.selected = 0;
      pages.selectedItem = pages.childNodes[1];
    }

    this.injectBoundHTML(html, pages.selectedItem.firstElementChild);
  };
  
  */
  
  
  // wrap document so it plays nice with other libraries
  // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
  
})(wrap(document));
