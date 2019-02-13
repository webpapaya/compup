Issues so far
- Loading CSS
    - Solution: generate one bundle per service
    - Load it insided the webcomponent via const `sheet = new CSSStyleSheet();`
    - See https://developers.google.com/web/updates/2019/02/constructable-stylesheets
- React Events don't work with shadow dom
    - Workaround: react-shadow-dom-retarget-events
- React is still global and not local...
    - still need to figure out a solution...
- Routing 
    - need to find a routing library
    
