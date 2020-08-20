'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';

var SHADOW_X = CLOUD_X + 10;
var SHADOW_Y = CLOUD_Y + 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var drawCloud = function (ctx) {
  ctx.fillStyle = SHADOW_COLOR;
  ctx.fillRect(SHADOW_X, SHADOW_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 40);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 60);
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);
};
