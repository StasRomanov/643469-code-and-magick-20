'use strict';
var GAP = 90;
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
var MESSAGE_FONT = '16px PT Mono';

var renderRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderTextMultiline = function (ctx, x, y, font, baseline, color, text) {
  var lines = ('' + text).split('\n');
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillStyle = color;
  lines.forEach(function (line) {
    ctx.fillText(line, x, y);
    y += TEXT_GAP_Y;
  });
};

var renderCloud = function (ctx) {
  renderRect(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');
  renderTextMultiline(ctx, HISTOGRAM_X, TEXT_Y, MESSAGE_FONT, 'handing', '#000000', VICTORY_MESSAGE);
};

function creatingBlueColor(min, max) {
  return 'hsl(242,' + Math.random() * (max - min) + min + '% , 47%)';
}

var renderHistogram = function (ctx, time, ratio, NAME) {
  for (var i = 0; i < NAME.length; i++) {
    var HISTOGRAM_GAP = (GAP * i);
    var HISTOGRAM_HEIGHT = time[i] / ratio;
    var TIME_INT = Math.round(time[i]);
    if (NAME[i] === 'Вы') {
      renderRect(ctx, HISTOGRAM_X + HISTOGRAM_GAP, HISTOGRAM_Y, HISTOGRAM_WIDTH, -HISTOGRAM_HEIGHT, 'rgba(255, 0, 0, 1)');
    } else {
      renderRect(ctx, HISTOGRAM_X + HISTOGRAM_GAP, HISTOGRAM_Y, HISTOGRAM_WIDTH, -HISTOGRAM_HEIGHT, creatingBlueColor(0, 100));
    }
    renderTextMultiline(ctx, HISTOGRAM_X + HISTOGRAM_GAP, CLOUD_HEIGHT, MESSAGE_FONT, 'bottom', '#000000', NAME[i]);
    renderTextMultiline(ctx, HISTOGRAM_X + HISTOGRAM_GAP, HISTOGRAM_Y - HISTOGRAM_HEIGHT, MESSAGE_FONT, 'bottom', '#000000', TIME_INT);
  }
};

window.renderStatistics = function (ctx, name, time) {
  var RATIO = Math.max.apply(null, time) / HISTOGRAM_MAX_HEIGHT;
  renderCloud(ctx);
  renderHistogram(ctx, time, RATIO, name);
};
