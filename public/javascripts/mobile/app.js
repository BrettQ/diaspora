var App =  {
  initialize: function() {
    _.each(this.Controllers, function(controller) {
      new controller();
    });
    Backbone.history.start();

    if(window.location.hash === "#" || window.location.hash == "") {
      //hack for now
      _.each(Backbone.history.handlers, function(handler) {
        if(handler.route.test("aspects")) {
          handler.callback("aspects");
        }
      });
    }
    var $asteriskLogo = $("#asterisk-logo");
    $(document).ajaxStart(function() {
      $asteriskLogo.addClass("rideSpinners");
    }).ajaxSuccess(function() {
      $asteriskLogo.removeClass("rideSpinners");
    });
  },
  Collections: {},
  Controllers: {},
  Models: {},
  Views: {}
};

$(document).ready(function() {
  App.initialize();
});
