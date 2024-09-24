let banner = document.getElementById( 'banner' )

function showBanner ()
{
	console.log(banner);
	
	banner.innerHTML = 'The sales end in 10min !'
	banner.style.backgroundColor = 'red'
}

setTimeout(showBanner,5000)
