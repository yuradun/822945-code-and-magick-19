'use strict';

var CLOUD_WIDTH = 530;
var CLOUD_HEIGHT = 255;
var CLOUD_Y = 30;
var CLOUD_X = 80;

var PlayerStatistic_WIDTH = 40;
var PlayerStatistic_HEIGHT = 150;
var PlayerStatistic_X = 130;
var PlayerStatistic_Y = 100;
var PlayerStatistic_COLOR = 'red';


var COLONS_INDENT = 100;
var TEXT_X = 130;
var TEXT_Y = 275

var OtherStatistic_WIDTH = 40;
var OtherStatistic_HEIGHT = 150;
var OtherStatistic_X = 130;
var OtherStatistic_Y = 100;
var OtherStatistic_COLOR = 'black';

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 50, '#fff');

  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 85, 45);
  ctx.fillStyle = 'black';
  ctx.fillText('Список результатов:', 85, 65);

  ctx.fillStyle = PlayerStatistic_COLOR;
  ctx.fillText('Вы', TEXT_X, TEXT_Y);
  ctx.fillRect(PlayerStatistic_X, PlayerStatistic_Y, PlayerStatistic_WIDTH, PlayerStatistic_HEIGHT);

  ctx.fillStyle = OtherStatistic_COLOR;
  ctx.fillText('Илья', TEXT_X + COLONS_INDENT, TEXT_Y);
  ctx.fillRect(OtherStatistic_X + COLONS_INDENT, OtherStatistic_Y, OtherStatistic_WIDTH, OtherStatistic_HEIGHT);

  ctx.fillStyle = OtherStatistic_COLOR;
  ctx.fillText('Кекс', TEXT_X + 2 * COLONS_INDENT, TEXT_Y);
  ctx.fillRect(OtherStatistic_X + 2 * COLONS_INDENT, OtherStatistic_Y, OtherStatistic_WIDTH, OtherStatistic_HEIGHT);
};