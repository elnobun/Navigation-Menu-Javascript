# Navigation-Menu-Javascript

A simple Navbar navigation using vanilla javascript, to change
links to the active link when clicked.

- Desktop view

![desktop](https://user-images.githubusercontent.com/15114201/105118986-4fdff080-5ac7-11eb-98a5-11cf894ea5a1.png)

- Mobile view

<img width="200" alt="mobile" src="https://user-images.githubusercontent.com/15114201/105119370-19ef3c00-5ac8-11eb-8cf0-9b15b97b104c.png">

## Why?
After some research, I realised that one of the most asked 
questions on the web, is *how to remove or add an active link
using vanilla javascript.*

Another common question is this: *Since the `:hover` pseudo class
cannot be changed in javascript, how do you ensure that the
active link maintains the active color when you hover over the
link?*

As simple those questions may be, I noticed that many developers
approach this with so much complexity, when it can be 
achieved using fewer lines of readable code.

Most people prefer using the `jQuery` approach, which to be
honest, is very easy. However, replicating the same thing
in vanilla javascript, is equally easier.

### Steps
- `Select all` the links or anchor tags in the document.
- `Loop` through them, and add a `click` event on each link.
- Get the current active link in the document
- Keep `track` of the current active link by storing it in a variable.
- When a link is clicked, `replace` the current active link className
with an empty string, and set the active class to the clicked link.
- Set the new link className be set to active.
