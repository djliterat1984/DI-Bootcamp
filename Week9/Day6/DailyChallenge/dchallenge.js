// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// 1.Create a class named Video. The class should be constructed with the following parameters:
			// title (a string)
			// uploader (a string, the person who uploaded it)
			// time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
		// “uploader parameter watched all time parameter of title parameter!”
// 3.Instantiate a new Video instance and call the watch() method.
// 4.Instantiate a second Video instance with different values.
class Video{
	constructor(title, uploader, time) {
		this.title = title;
		this.uploader = uploader;
		this.time = this.getTime( time );
	}
	
	getTime ( timeInSeconds ) {
		const hours = Math.floor( timeInSeconds / 3600 )
		const remainder = timeInSeconds - hours * 3600
		const minutes = Math.floor( remainder / 60 )
		const seconds = remainder - minutes * 60
		return `${hours}:${minutes}:${seconds}`
	}
	
	watch () {
		 return `${this.uploader} watched all ${this.time} of ${this.title}!`
	}
}

const video1 = new Video( 'Batman', 'person1', 4900 )
console.log(video1.watch());

const video2 = new Video( 'Superman', 'person2', 4760 )
console.log( video2.watch() );



// 5.Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// 		Think of the best data structure to save this information within the array.
const videos = [
	 {title:'Batman', uploader:'person1', time: 4900 },
	 {title:'Superman', uploader:'person2', time: 4760 },
	 {title:'Spiderman', uploader:'person3', time: 4870 },
	 {title:'Flash', uploader:'person4', time: 4530 },
	 {title:'Arrow', uploader:'person5', time: 4220 },
]

// 6.Bonus: Loop through the array to instantiate those instances.

videos.forEach( video => {
	console.log(new Video(video.title, video.uploader, video.time).watch())
} )