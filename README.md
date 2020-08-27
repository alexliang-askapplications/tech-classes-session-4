# Ask Apps Tech Classes - Session 4

### Summary:
You are running a VR movie theater and the projector has been installed in the wrong place. Along with that no one can find the movie reel for the showing, 
Oh no!
Use the tools like Pano and transform, you have learned from the lesson to move the video to the theater screen and use the pano to load the correct image in the movie theater.

## Pre-requisites:
* Unzip software 
* Chrome browser - [https://www.google.com/chrome/](https://www.google.com/chrome/)
* Visual Studio Code - [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)
* (Optional) Visual Studio Code Javascript (ES6) Code Snippets plugin - [https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
* (Optional) Git - [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Setup instructions:
* Download the following zip file: https://github.com/andylu821/tech-classes-session-4/archive/master.zip or use git to checkout this repo
* Run `npm install react-vr-cli`
* Run `npm install`
* Run `npm start`
* Open the index.js.vr file in a browser to see your changes

## In this exercise, we will be creating a Movie Theater application using the React js and React VR skills that we learnt during the tech session. 
* Find a Video from the static_assets you would like to see
* Add the name to 'video” props inside of VideoElement.
* Move the VideoElement to the movie screen by changing the transform props.
* Enjoy your night at the movies

## Advanced exercise:
* Style the VideoControl toolbar at the bottom of the video.
* This can be styled passing in a style object into the `VideoElement` named `videoControllerStyles`
* Example: `videoControllerStyles={height: 1, width: 14}`

## Contributing 
andy.lu@apps.ask.com 
yang.he@askapplications.com
alex.liang@askapplications.com
 
## License 
This is released under the MIT license (https://opensource.org/licenses/MIT)
