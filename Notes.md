Issues so far
- Loading CSS
    - Solution: generate one bundle per service
    - Load it insided the webcomponent via const `sheet = new CSSStyleSheet();`
    - See https://developers.google.com/web/updates/2019/02/constructable-stylesheets
- React Events don't work with shadow dom
    - Workaround: 
        - react-shadow-dom-retarget-events
            - evt.persist issue https://github.com/spring-media/react-shadow-dom-retarget-events/pull/11
- React is still global and not local...
    - still need to figure out a solution...
- Routing for app shell 
    - need to find a routing library


# TODO:
- Make regeneration webcomponent regeneration task generic
