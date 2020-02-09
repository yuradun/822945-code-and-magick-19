'use strict';

var CLOUD_WIDTH = 530;
var CLOUD_HEIGHT = 255;

var CLOUD_X = 80;
var CLOUD_Y = 30;

var PlayerStatistic_WIDTH = 40;
var PlayerStatistic_HEIGHT = 160;
var PlayerStatistic_X = 90;
var PlayerStatistic_Y = 100;

var INDENT = 10; 
var INDENT_TEXT = PlayerStatistic_HEIGHT + PlayerStatistic_Y + 15;



var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + INDENT, CLOUD_Y + INDENT, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 85, 45);
  ctx.fillStyle = 'black';
  ctx.fillText('Список результатов:', 85, 65);


  var maxTime = getMaxElement(times);


  for (var i = 1; i < players.length; i++) {
  	if (players[i] == 'Вы') {
  		ctx.fillStyle = 'red';
  		ctx.fillText(players[i], PlayerStatistic_X + (INDENT * 2), INDENT_TEXT);
  		ctx.fillRect(PlayerStatistic_X + (INDENT * 2), PlayerStatistic_Y, PlayerStatistic_WIDTH, (PlayerStatistic_HEIGHT * times[i]) / maxTime);
  		INDENT += 40;
  	}
  	ctx.fillStyle = 'black';
  	ctx.fillText(players[i], PlayerStatistic_X + (INDENT * 2), INDENT_TEXT);
  	ctx.fillRect(PlayerStatistic_X + (INDENT * 2), PlayerStatistic_Y, PlayerStatistic_WIDTH, (PlayerStatistic_HEIGHT * times[i]) / maxTime);
  	INDENT += 40;
  }
};
  

