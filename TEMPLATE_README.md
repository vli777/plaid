# Template README for landing page take-home

_Fill this template out before submitting your take-home to your recruiter._

## Installation

To set up this project and install its tools/dependencies, if any, run the following command(s):

```
cd landing
npm install
```

## Running locally

To run this project locally as a static webpage, run the following command(s):

```
npm run dev
```

## Future improvements

_We recognize that building a beautiful and convincing website is not a simple or speedy task, which is why we'd like to see what future improvements you would suggest to get this project to a 100% production-ready state. No suggestion is a bad one, and we welcome every detail you provide._

Assumptions & Decision choices:
- Most components assume some fixed props. I assumed there would be a connected CMS that provides the data to hydrate the components, but mostly stayed with the image mockup. e.g. Header has one title and one cta link in the interest of time, versus handling a list of links or varied element types.
- A lot of the styling was based on the image and video vs wireframe guides. I estimated layouts and margin, padding, breakpoints visually and refined through UX review and inspecting the page elements within devTools.
- In the video, the scroll effect seems to work fine, but as I was testing out navigating the page, the content change relied on the subtitle element in the right column passing `inView (framer motion)` / `Observer` intersection with the title element on the left column. If some content had fewer sections, we would have needed to create custom css rules to expand the container height, at least for the last panel, to ensure we can actually scroll that far up. Rather than creating extra space and to reduce the need to scroll past all that space, I opted to use a snap-to feature where the next panel's content 
accelerates into view and using the initial offset position under the header.
- I couldn't find the exact animation on framer motion docs or examples so I went with a straightforward gradient overlay animation. The same was used for the background image. 
- I ensured basic compatibility in mobile view with css breakpoints but skipped the graphics animations.
