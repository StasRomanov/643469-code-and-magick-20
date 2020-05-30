'use strict';
var GAP = 90;
var MAX_HEIGHT_HISTOGRAM = 150;
var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_X = 120;
var HISTOGRAM_Y = 250;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;

var rectRender = function (ctx, x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

var writer = function (ctx, x, y, font, baseline, color, text) {
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, name, time) {
  var ratio = Math.max.apply(null, time) / MAX_HEIGHT_HISTOGRAM;
  rectRender(ctx, CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  rectRender(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');
  writer(ctx, HISTOGRAM_X, 40, '16px PT Mono', 'handing', '#000000', 'Ура вы победили!');
  writer(ctx, HISTOGRAM_X, 60, '16px PT Mono', 'handing', '#000000', 'Список результатов:');
  for (var i = 0; i < name.length; i++) {
    if (name[i] === 'Вы') {
      rectRender(ctx, HISTOGRAM_X + (GAP * i), HISTOGRAM_Y, HISTOGRAM_WIDTH, -(time[i] / ratio), 'rgba(255, 0, 0, 1)');
    } else {
      rectRender(ctx, HISTOGRAM_X + (GAP * i), HISTOGRAM_Y, HISTOGRAM_WIDTH, -(time[i] / ratio), 'hsl(242,' + Math.random() * Math.floor(100) + '%' + ' , 47%)');
    }
    writer(ctx, HISTOGRAM_X + (GAP * i), CLOUD_HEIGHT, '16px PT Mono', 'bottom', '#000000', name[i]);
    writer(ctx, HISTOGRAM_X + (GAP * i), HISTOGRAM_Y - (time[i] / ratio), '16px PT Mono', 'bottom', '#000000', Math.round(time[i]));
  }
};
