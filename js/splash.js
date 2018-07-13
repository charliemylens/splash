
// prism splash page.

function animate_canvas (id) {

	var canvas = document.getElementById(id);

	canvas.width  = 1024
	canvas.height = 768

	var start = null;
	var context = canvas.getContext('2d');
	  	context.imageSmoothingEnabled = true;

	function step(timestamp) {
	  if (!start) start = timestamp;
	  	var progress = timestamp - start;

	  	var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;

	  	context.beginPath();
	  	context.fillStyle = 'black';
		context.fill();
	  	context.clearRect(0,0, canvas.width, canvas.height)
		
		var radius = (Math.random() > 0.9) ? Math.min(Math.random()*600) : Math.min(Math.random()*11)
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.strokeStyle =  'rgb(255,255,255,'+ Math.random()+')';
		context.lineWidth = Math.floor(Math.random()*11)
		context.stroke();
	    window.requestAnimationFrame(step);
	}

	window.requestAnimationFrame(step);

}


var ambient = new Howl({
  src: ['/sounds/soundscape/dystopia.wav']
});

var dialup = new Howl({
  src: ['/sounds/soundscape/dialup2.wav']
});

dialup.play()


var brainwashing = new Howl({
  src: ['/sounds/soundscape/brainwashing.wav']
})

setInterval(function () {
	brainwashing.play();
}, 110000)

var darkrave = new Howl({
  src: ['/sounds/soundscape/serveroom.wav']
})

setTimeout(function () {
	dialup.play();
	darkrave.play();
}, 60000)


setInterval(function () {
	darkrave.play();
}, 30000)

// one shots
var blip = new Howl({
  src: ['/sounds/oneshot/blip.wav']
})

var burp = new Howl({
  src: ['/sounds/oneshot/burp.wav']
})

var delay = new Howl({
  src: ['/sounds/oneshot/delay.wav']
})

var doublezap = new Howl({
  src: ['/sounds/oneshot/doublezap.wav']
})

var multizap = new Howl({
  src: ['/sounds/oneshot/multizap.wav']
})

var whist = new Howl({
  src: ['/sounds/oneshot/zap.wav']
})

var oneshots = [
	blip,
	burp,
	delay,
	doublezap,
	multizap,
	whist
]

// glitches

var glitch = new Howl({
  src: ['/sounds/glitches/glitch.wav']
});

var insane = new Howl({
  src: ['/sounds/glitches/insane.wav']
});

var long = new Howl({
  src: ['/sounds/glitches/long.wav']
});

var short = new Howl({
  src: ['/sounds/glitches/short.wav']
});

var glitches = [
	short
]

setInterval(function () {
	var glitch1 = document.getElementById('glitch-1')
	if (glitch1.innerHTML === '|ABOUT THE WORLD WE LIVE IN') {
		glitch1.innerHTML = '|ABOUT THE VIRTUAL WORLD'
	} else {
		glitch1.innerHTML = '|ABOUT THE WORLD WE LIVE IN'
	}
}, 1000)


setInterval(function () {
	var numbers = setInterval(function () {		
		var glitch1 = document.getElementById('glitch-1')
		glitch1.innerHTML = Math.random()
	}, 50)

	glitches[Math.floor(Math.random()*glitches.length)].play()

	setTimeout(function () {
		clearInterval(numbers)
	}, 1000)
}, 11000)


var glitch2 = document.getElementById('gitch-2')

var virtual_you = [
	'AN EXTENSION OF YOU',
	'A COLLECTION OF YOUR DATA',
	'YOUR DIGITAL IDENTITY'
]

setInterval(function () {

	oneshots[Math.floor(Math.random()*oneshots.length)].play()

	var glitch = setInterval(function () {
		glitch2.innerHTML = virtual_you[Math.floor(Math.random()*virtual_you.length)]
	}, 50)

	setTimeout(function () {
		clearInterval(glitch)
		glitch2.innerHTML = virtual_you[Math.floor(Math.random()*virtual_you.length)]
	}, 5000)

}, 7000)


setInterval(function () {
	var numbers = setInterval(function () {		
		glitch2.innerHTML = Math.random()
	}, 50)
	setTimeout(function () {
		clearInterval(numbers)
	}, 100)
}, 5000)

function isVisible(elem) {
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    const elemCenter   = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
}


var presenting_lens = true;

document.onscroll = function () {
	var lens = document.getElementById('lens_show')
	if (isVisible(lens) && presenting_lens) {
		ambient.play();
		presenting_lens = false
	}
}

// average user has ...
var counter1_incro = Math.floor(Math.random() * 99)
var counter2_incro = Math.floor(Math.random() * 9999999)
var counter3_incro = Math.floor(Math.random() * 9999999)
var counter4_incro = Math.floor(Math.random() * 9999999)

var counter1 = document.getElementById('counter1')
var counter2 = document.getElementById('counter2')
var counter3 = document.getElementById('counter3')
var counter4 = document.getElementById('counter4')


setInterval(function () {

	counter1.innerHTML = counter1_incro
	counter2.innerHTML = counter2_incro
	counter3.innerHTML = counter3_incro
	counter4.innerHTML = counter4_incro

	counter1_incro += Math.floor(Math.random()*10000)
	counter2_incro += Math.floor(Math.random()*10000)
	counter3_incro += Math.floor(Math.random()*10000)
	counter4_incro += Math.floor(Math.random()*10000)

}, 50)

setInterval(function () {
	var glitch1 = document.getElementById('glitch3')
	if (glitch1.innerHTML === '|YOUR DATA?') {
		glitch1.innerHTML = '|CONTROL OF THE VIRTUAL YOU ?'
	} else {
		glitch1.innerHTML = '|YOUR DATA?'
	}
}, 1000)

setInterval(function () {
	var numbers = setInterval(function () {		
		var glitch1 = document.getElementById('glitch3')
		glitch1.innerHTML = Math.random()
	}, 50)

	oneshots[Math.floor(Math.random()*oneshots.length)].play()

	setTimeout(function () {
		clearInterval(numbers)
	}, 1000)
}, 19000)

// THIS IS A CHOICE

var choices = [
	'A CHOICE',
	'ADDICTION',
	'FRAGMENTATION',
	'CONFUSION',
	'OUT OF CONTROL'
]

setInterval(function () {
	var glitch4 = document.getElementById('glitch4')
	glitch4.innerHTML = '| '+choices[Math.floor(Math.random()*choices.length)]
}, 500)

// TRUTH

var truth = [ 'TRUTH', 'IDENTITY', 'PERSONALITY', 'SECURITY', 'CONTROL' ]


setInterval(function () {
	var glitch4 = document.getElementById('glitch5')
	glitch4.innerHTML = '| '+truth[Math.floor(Math.random()*truth.length)]
}, 500)

setInterval(function () {

	var splurt = setInterval(function () {
		var glitch4 = document.getElementById('glitch5')
		glitch4.innerHTML = '| '+truth[Math.floor(Math.random()*truth.length)]
	}, 11)

	setTimeout(function () {
		clearInterval(splurt)
	}, 1000)

}, 11000)

// LOCATION
var countries = [
	'ALBUQUERQUE',
	'PORTLAND',
	'SEATTLE',
	'LONDON',
	'AMSTERDAM',
	'OSLO',
	'HELSINKI',
	'MADRID',
	'PARIS'
]

var location_glitch = document.getElementById('glitch_location')

setInterval(function () {
	var location_glitch = document.getElementById('glitch_location')
	location_glitch.innerHTML = ' '+countries[Math.floor(Math.random()*countries.length)]
}, 500)

var slide_1_left  = `
<h1 >
LENS ROLLOUT EVENT
</h1>
<h2 >
7.27.18<br/>
10:00 - 16:00<br/>
101 Broadway Blvd NE
</h2>
`
var slide_1_right = ` <img src="/images/Asset_10.png" /> `

var slide_2_left  = `<img src="/images/Asset_11.png" />`
var slide_2_right = `<p style="color:#222;" class="pa4">LENS is a new starting
 point where individuals own their information, control its use and dictate its access.
  The LENS Model flips data ownership, providing the tools and services for an individual
   to centralize thier information. Uplug from the Cloud and initiate sharing of 
   data in a peer-to-peer ecosphere.</p>`

var slide_3_left  =  `<img src="/images/Asset_13.png" />`
var slide_3_right =   `<img src="/images/Asset_14.png" />`

// bottom slider 
var slider_handle1 = document.getElementById('slider-handle-1')
var slider_handle2 = document.getElementById('slider-handle-2')
var slider_handle3 = document.getElementById('slider-handle-3')

var bottom_panel_left  = document.getElementById('bottom_slide_left')
var bottom_panel_right = document.getElementById('bottom_slide_right')

slider_handle1.addEventListener('click', function() { 
	bottom_panel_left.innerHTML  = slide_1_left
	bottom_panel_right.innerHTML = slide_1_right
	slider_handle1.classList.remove("selected")
	slider_handle2.classList.remove("selected")
	slider_handle3.classList.remove("selected")
	slider_handle1.classList.add("selected")
	oneshots[0].play()
}, false);


slider_handle2.addEventListener('click', function() { 
	bottom_panel_left.innerHTML  = slide_2_left
	bottom_panel_right.innerHTML = slide_2_right
	slider_handle1.classList.remove("selected")
	slider_handle2.classList.remove("selected")
	slider_handle3.classList.remove("selected")
	slider_handle2.classList.add("selected")
	oneshots[0].play()
}, false);


slider_handle3.addEventListener('click', function() { 
	bottom_panel_left.innerHTML  = slide_3_left
	bottom_panel_right.innerHTML = slide_3_right
	slider_handle1.classList.remove("selected")
	slider_handle2.classList.remove("selected")
	slider_handle3.classList.remove("selected")
	slider_handle3.classList.add("selected")
	oneshots[0].play()
}, false);

// glitch mobile footer 

var glitch_footer = document.getElementById('glitch_mobile_footer')

var options = [ 'TRUTH', 'IDENTITY', 'SECURITY', 'CONTROL' ]

setInterval(function () {
	glitch_footer.innerHTML = '| ' + options[Math.floor(Math.random()*options.length)]
}, 1000)
