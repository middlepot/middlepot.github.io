//   ・゜ ♡   color set code   ♡ ゜ ・
//    © middlepot.com  ꒰ ू´ ˘ ` ू ꒱

window.addEventListener('load', function(){
	var styles = `
	.shy { color: rgba(255,255,255,0.1) !important;
	-webkit-background-clip: text !important; background-clip: text !important;
	-webkit-text-fill-color: transparent !important; text-fill-color: transparent !important;
	background-image: url(https://middlepot.com/colors/shy.png) !important; background-repeat: repeat !important; }

	.cozy { color: rgba(255,255,255,0.1) !important;
	-webkit-background-clip: text !important; background-clip: text !important;
	-webkit-text-fill-color: transparent !important; text-fill-color: transparent !important;
	background-image: url(https://middlepot.com/colors/cozy.png) !important; background-repeat: repeat !important; }

	.pretty { color: rgba(255,255,255,0.1) !important;
	-webkit-background-clip: text !important; background-clip: text !important;
	-webkit-text-fill-color: transparent !important; text-fill-color: transparent !important;
	background-image: url(https://middlepot.com/colors/pretty.png) !important; background-repeat: repeat !important; }

	.fluffy { color: rgba(255,255,255,0.1) !important;
	-webkit-background-clip: text !important; background-clip: text !important;
	-webkit-text-fill-color: transparent !important; text-fill-color: transparent !important;
	background-image: url(https://middlepot.com/colors/fluffy.png) !important; background-repeat: repeat !important; }

	.creamy { color: rgba(255,255,255,0.1) !important;
	-webkit-background-clip: text !important; background-clip: text !important;
	-webkit-text-fill-color: transparent !important; text-fill-color: transparent !important;
	background-image: url(https://middlepot.com/colors/creamy.png) !important; background-repeat: repeat !important; }
	`;
	
	var style = document.createElement('style');
	style.innerHTML = styles;
	document.head.appendChild(style);
	
	var classes = ['shy', 'cozy', 'pretty', 'fluffy', 'creamy'];
	for(let i = 0; i < classes.length; ++i){
		classes[i] = classes[i].replace(/\s/g, "").toLowerCase();
	}
	
	var elementsWithColor = document.querySelectorAll(`[color]`);
	var elementsWithStyle = document.querySelectorAll(`[style*="color"]`);
	classes.forEach(c =>{
		elementsWithColor.forEach(el =>{
			var col = el.getAttribute('color') || '';
			if(col.replace(/\s/g, "").toLowerCase() === c){
				el.classList.add(c);
			}
		});
		elementsWithStyle.forEach(el =>{
			var fullStyle = el.getAttribute('style') || '';
			var styleTags = fullStyle.split(';');
			var style = {};
			styleTags.forEach(tag =>{
				var split = tag.split(':');
				if(split.length === 2){
					var key = split[0].replace(/\s/g, "").toLowerCase();
					var val = split[1].replace(/\s/g, "").toLowerCase();
					style[key] = val;
				}
			});
			var col = style.color || '';
			if(col === c){
				el.classList.add(c);
			}
		});
	});
});

//   ・゜ ♡   color set code   ♡ ゜ ・
//    © middlepot.com  ꒰ ू´ ˘ ` ू ꒱