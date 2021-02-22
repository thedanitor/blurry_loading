# Blurry Loading

https://thedanitor.github.io/blurry_loading/

This project is from the Day 5 code along video from Udemy's 50 projects in 50 days series focused on web development. I have heavily commented the CSS and JavaScript to make notes to myself why certain choices are being made and what each line of code does.


### Overall Impression

Another cool front-end feature. I wonder if adding this feature would actually take the site more time to load? I also realize that the scale function might be a little overkill for these use cases, but would be very useful if we had an app that needed many of these number conversions.

### Things Learned

* filter: blur(). Blur effect will be white around edges, so can move edges offscreen and calc height, width
* setInterval to repeat function at specified time interval
* clearInterval to stop setInterval
* This scale function for converting one range of numbers to another: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
