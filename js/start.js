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
var NAME = 'Вы';

var renderRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderTextMultiline = function (ctx, x, y, font, baseline, color, text) {
  var lines = ('' + text).split('\n');
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillStyle = color;
  var yCurrentCoordinate = y;
  lines.forEach(function (line) {
    ctx.fillText(line, x, yCurrentCoordinate);
    yCurrentCoordinate += TEXT_GAP_Y;
  });
};

var renderCloud = function (ctx) {
  renderRect(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');
  renderTextMultiline(ctx, HISTOGRAM_X, TEXT_Y, MESSAGE_FONT, 'handing', '#000000', VICTORY_MESSAGE);
};

var getBlueColor = function (max) {
  return 'hsl(242, ' + Math.floor(Math.random() * max) + '% , 47%)';
};

var renderHistogram = function (ctx, time, ratio, name) {
  for (var i = 0; i < name.length; i++) {
    var histogramGap = (GAP * i);
    var histogramHeight = time[i] / ratio;
    var timeInt = Math.round(time[i]);
    var histogramCurrentX = HISTOGRAM_X + histogramGap;
    var timeY = HISTOGRAM_Y - histogramHeight;
    if (name[i] === NAME) {
      renderRect(ctx, histogramCurrentX, HISTOGRAM_Y, HISTOGRAM_WIDTH, -histogramHeight, 'rgba(255, 0, 0, 1)');
    } else {
      renderRect(ctx, histogramCurrentX, HISTOGRAM_Y, HISTOGRAM_WIDTH, -histogramHeight, getBlueColor(100));
      console.log(getBlueColor(100));
    }
    renderTextMultiline(ctx, histogramCurrentX, CLOUD_HEIGHT, MESSAGE_FONT, 'bottom', '#000000', name[i]);
    renderTextMultiline(ctx, histogramCurrentX, timeY, MESSAGE_FONT, 'bottom', '#000000', timeInt);
  }
};

window.renderStatistics = function (ctx, name, time) {
  var RATIO = Math.max.apply(null, time) / HISTOGRAM_MAX_HEIGHT;
  renderCloud(ctx);
  renderHistogram(ctx, time, RATIO, name);
};
