'use strict';

Polymer({
  is: 't5-home',
  behaviors: [
    Polymer.NeonAnimationRunnerBehavior
  ],
  properties: {
    // START ANIMATIONS
    animationConfig: {
      value: function() {
        return {
          'entry': [{
            name: 'fade-in-animation',
            node: this
          }, {
            name: 'transform-animation',
            transformFrom: 'translateX(-100vh)',
            node: this
          }],
          'exit': [{
            name: 'hero-animation',
            id: 'hero',
            fromPage: this
          }, {
            name: 'fade-out-animation',
            node: this
          }]
        };
      }
    },
    items: Array,
    item: {
      type: Object,
      // when `items` changes `computeItem` is called once
      // and the value it returns is stored as `item`
      computed: 'computeItem(items)'
    },
    lastError: String
  },
  computeItem: function(items) {
    return items && items[0] || {};
  },
  _repeatRender: function() {
    this.paperCard = Polymer.dom(this.root).querySelectorAll('paper-card');
    this.animationConfig.entry.push({
      name: 'cascaded-animation',
      animation: 'transform-animation',
      transformFrom: 'translateY(100vh)',
      nodes: this.paperCard
    });
  },
  _openCard: function(event) {
    if (event.target.classList.contains('paper-fab')) {
      this.fire('updateShowcase', this.productsList[event.model.__data__['item.id']]);
      this.sharedElements = {
        'hero': event.target
      };
      this.fire('changePage', 'showcase');
    }
  },

  getMsg: function(msgid) {
    var value = null;
    console.log('home-get', msgid);

    var i18n = new Element.tag('t5-i18n');//t5-i18n
    console.log(i18n);

    //var i18n = new T5I18n();
    //var i18n = Polymer.dom(document).querySelector('t5-i18n');
    if (i18n) {
      value = i18n.getMsg(msgid);
    }
    console.log(value);
    return value;

  }
});
