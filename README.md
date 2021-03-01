# NiceScrollNative
A simpler alternative to jquery.nicescroll - with limitations

If you desire a far simpler, native alternative to jquery.nicescroll, look no further. But note that this has both advantages and disadvantages.

### Advantages
- uses the native scrollbar
- extremely light weight
- vanilla JS, no dependencies required
- more customizable with editable SCSS and JS files
- mimics jquery.nicescroll reasonably well
- doesn't create a ton of extra DOM objects
- no JS running in the background to keep calculating said objects' positions
- no need to control behaviour, such as resizing the thumb based on change of scroll height
- scrolls large content far faster (using home/end keys)

### Disadvantages
- Webkit browsers only, with an approximation for Mozilla built in
- doesn't overlap, takes up space in the browser body
- no animations, such as fade in/out
- body scroll only; will consider making it applicable to any scrollable element