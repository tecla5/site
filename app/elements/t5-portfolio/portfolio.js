(function() {
  Polymer({
    is: 't5-porfolio',

    properties: {
      items: {
        type: Array,
        notify: true
      },
      lastError: {
        type: String,
        notify: true
      }
    }
  });
})();
