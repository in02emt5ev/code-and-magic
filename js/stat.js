'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';

var SHADOW_X = CLOUD_X + 10;
var SHADOW_Y = CLOUD_Y + 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var GIST_X = CLOUD_X + 20;
var GIST_Y = CLOUD_Y + 85;

var COLUMN_WIDTH = 40;
var COLUMN_MAX_HEIGHT = 150;
var COLUMN_GAP = 50;

var getMaxValue = function (arr) {
  var max = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
};

var renderText = function (ctx, text, x, y) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText(text, x, y);
};

var drawCloud = function (ctx) {
  ctx.fillStyle = SHADOW_COLOR;
  ctx.fillRect(SHADOW_X, SHADOW_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  renderText(ctx, 'Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 30);
  renderText(ctx, 'Список результатов:', CLOUD_X + 20, CLOUD_Y + 50);
};

var renderGistColumn = function (ctx, x, y, height, name, time, color) {
  renderText(ctx, Math.floor(time), x, y - 10);

  ctx.fillStyle = color;
  ctx.fillRect(x, y, 40, height);

  renderText(ctx, name, x, y + height + 20);
};

var renderGist = function (ctx, names, times) {
  var maxTime = getMaxValue(times);

  for (var i = 0; i < names.length; i++) {
    var columnColor = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)';
    var columnHeight = Math.floor(times[i]) * COLUMN_MAX_HEIGHT / Math.floor(maxTime);
    var columnX = GIST_X + i * (COLUMN_GAP + COLUMN_WIDTH);
    var columnY = GIST_Y + (COLUMN_MAX_HEIGHT - columnHeight);

    renderGistColumn(ctx, columnX, columnY, columnHeight, names[i], times[i], columnColor);
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);
  renderGist(ctx, names, times);
};
