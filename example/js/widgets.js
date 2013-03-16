
zenDashboard.directive("number", function() {

  var currentColors = [];

  var linkFn = function(scope, element, attrs, WidgetCtrl) {

    function onSuccess(data) {
      element.height(265);
      Flotr.draw(element[0], FlotrGraphHelper.transformSeriesOfDatapoints(data, scope.widget, currentColors), FlotrGraphHelper.defaultOptions(scope.widget));
    }

    function update() {
      return GraphModel.getData(scope.widget).success(onSuccess);
    }

    function calculateWidth(size_x) {
      var widthMapping = { 1: 290, 2: 630, 3: 965 };
      return widthMapping[size_x];
    }

    WidgetCtrl.init(update);

    // changing the widget config width should redraw flotr2 graph
    scope.$watch("config.size_x", function(newValue, oldValue) {
      element.width(calculateWidth(scope.widget.size_x));
      WidgetCtrl.init(update);
    });

  };

  return {
    require: "^widget",
    template: '<div class="number-container"></div>',
    link: linkFn
  };
});
