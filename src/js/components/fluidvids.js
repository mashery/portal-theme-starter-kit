var fluidvids = {
  selector: ['iframe', 'object'],
  players: ['www.youtube.com', 'player.vimeo.com']
};

var css = [
  '.fluidvids {',
    'width: 100%; max-width: 100%; position: relative;',
  '}',
  '.fluidvids-item {',
    'position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;',
  '}'
].join('');

var head = document.head || document.getElementsByTagName('head')[0];

function matches (src) {
  return new RegExp('^(https?:)?\/\/(?:' + fluidvids.players.join('|') + ').*$', 'i').test(src);
}

function getRatio (height, width) {
  return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
}

function fluid (elem) {
  if (!matches(elem.src) && !matches(elem.data) || !!elem.getAttribute('data-fluidvids')) return;
  var wrap = document.createElement('div');
  elem.parentNode.insertBefore(wrap, elem);
  elem.className += (elem.className ? ' ' : '') + 'fluidvids-item';
  elem.setAttribute('data-fluidvids', 'loaded');
  wrap.className += 'fluidvids';
  wrap.style.paddingTop = getRatio(elem.height, elem.width);
  wrap.appendChild(elem);
}

function addStyles () {
  if (document.querySelector('#fluid-vids-styles')) return;
  var div = document.createElement('div');
  div.innerHTML = '<p>x</p><style id="fluid-vids-styles">' + css + '</style>';
  head.appendChild(div.childNodes[1]);
}

fluidvids.render = function () {
  var nodes = document.querySelectorAll(fluidvids.selector.join());
  var i = nodes.length;
  while (i--) {
    fluid(nodes[i]);
  }
};

fluidvids.init = function (obj) {
  for (var key in obj) {
    fluidvids[key] = obj[key];
  }
  fluidvids.render();
  addStyles();
};

export default fluidvids;