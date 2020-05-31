'use strict';
var HISTOGRAM_GAP = 90;
var HISTOGRAM_MAX_HEIGHT = 150;
var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_X = 120;
var HISTOGRAM_Y = 250;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var TEXT_Y = 40;
var TEXT_GAP_Y = 20;
var VICTORY_MESSAGE = 'Ура вы победили!\nСписок результатов:';

var renderRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderTextMultiline = function (ctx, x, y, font, baseline, color, text) {
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillStyle = color;
  var lines = ('' + text).split('\n');
  for (var i = 0; i < lines.length; ++i) {
    ctx.fillText(lines[i], x, y);
    y += TEXT_GAP_Y;
  }
};

var renderCloud = function (ctx) {
  renderRect(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');
  renderTextMultiline(ctx, HISTOGRAM_X, TEXT_Y, '16px PT Mono', 'handing', '#000000', VICTORY_MESSAGE);
};

var renderBlue = function () {
  return 'hsl(242,' + Math.random() * Math.floor(100) + '% , 47%)';
};

var renderHistogram = function (ctx, time, ratio, name) {
  for (var i = 0; i < name.length; i++) {
    if (name[i] === 'Вы') {
      renderRect(ctx, HISTOGRAM_X + (HISTOGRAM_GAP * i), HISTOGRAM_Y, HISTOGRAM_WIDTH, -(time[i] / ratio), 'rgba(255, 0, 0, 1)');
    } else {
      renderRect(ctx, HISTOGRAM_X + (HISTOGRAM_GAP * i), HISTOGRAM_Y, HISTOGRAM_WIDTH, -(time[i] / ratio), renderBlue());
    }
    renderTextMultiline(ctx, HISTOGRAM_X + (HISTOGRAM_GAP * i), CLOUD_HEIGHT, '16px PT Mono', 'bottom', '#000000', name[i]);
    renderTextMultiline(ctx, HISTOGRAM_X + (HISTOGRAM_GAP * i), HISTOGRAM_Y - (time[i] / ratio), '16px PT Mono', 'bottom', '#000000', Math.round(time[i]));
  }
};

window.renderStatistics = function (ctx, name, time) {
  var RATIO = Math.max.apply(null, time) / HISTOGRAM_MAX_HEIGHT;
  renderCloud(ctx);
  renderHistogram(ctx, time, RATIO, name);
};
