'use strict';

var Cloud = {
  width: 420,
  height: 270,
  x: 100,
  y: 10
};

var Shadow = {
  x: Cloud.x + 10,
  y: Cloud.y + 10
};

var Gist = {
  x: Cloud.x + 20,
  y: Cloud.y + 85
};

var Column = {
  width: 40,
  maxHeight: 150,
  gap: 50
};


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
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(Shadow.x, Shadow.y, Cloud.width, Cloud.height);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(Cloud.x, Cloud.y, Cloud.width, Cloud.height);

  renderText(ctx, 'Ура вы победили!', Cloud.x + 20, Cloud.y + 30);
  renderText(ctx, 'Список результатов:', Cloud.x + 20, Cloud.y + 50);
};

var renderGistColumn = function (ctx, x, y, height, name, time, color) {
  renderText(ctx, Math.floor(time), x, y - 10);

  ctx.fillStyle = color;
  ctx.fillRect(x, y, Column.width, height);

  renderText(ctx, name, x, y + height + 20);
};

var renderGist = function (ctx, names, times) {
  var maxTime = getMaxValue(times);

  for (var i = 0; i < names.length; i++) {
    var columnColor = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)';
    var columnHeight = Math.floor(times[i]) * Column.maxHeight / Math.floor(maxTime);
    var columnX = Gist.x + i * (Column.gap + Column.width);
    var columnY = Gist.y + (Column.maxHeight - columnHeight);

    renderGistColumn(ctx, columnX, columnY, columnHeight, names[i], times[i], columnColor);
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);
  renderGist(ctx, names, times);
};
