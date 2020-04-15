
function lengthInUtf8Bytes(str) {
	var m = encodeURIComponent(str).match(/%[89ABab]/g);
	return str.length + (m ? m.length : 0);
}
/*
function isJpnString( str ) {
	var n = lengthInUtf8Bytes(str);
	var k = str.length * 2;
	return (n > k) ? true:false;
}
*/
function checkCaptionString( str ) {
	var l = str.length;
	var n = lengthInUtf8Bytes(str);
	var m = l * 3;
	var k = l * 2;
	if (n > k) {
		if (m > n) {
			return {
				jpn: true,
				mixed: true,
				strlength: l
			}
		} else {
			return {
				jpn: true,
				mixed: false,
				strlength: l
			}
		}
	} else {
		return {
			jpn: false,
			mixed: false,
			strlength: l
		}
	}		
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return '' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function getSimpleId() {
    return Math.random().toString(26).slice(2);
}

function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

function getSquareNumber(num) {
    const square = Math.sqrt(num)
    if(square * square === num ) {
        return true;
    } else {
        return false;
    }
}

function isStoryBookRunning() {
    // dirty checking whether storybook is running or not
    const flagDot = (process.env.PUBLIC_URL.charAt(0).indexOf('.')>=0)?true:false;
    const flagSocket = process.env.hasOwnProperty('WDS_SOCKET_HOST');
    return flagDot && !flagSocket;
} 

export default {
    isStoryBookRunning,
    shuffleArray,
    getSimpleId,
    getRandomInt,
    hasClass,
    addClass,
    removeClass,
    componentToHex,
    rgbToHex,
    getSquareNumber,
    checkCaptionString
}

