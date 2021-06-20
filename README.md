1. Donwload OBS Tools.zip and unzip the file.
2. Add control panel: View/Panels/Browser panels. Add title in left column (ie. "Lower thirds"), put a path to file "lower thirds/control-panel.html" from the extracted folder into right column. Click "Apply" and close window. You can dock the panel between existing panels.
3. Add new browser source, pointing to file "lower thirds/browser-source.html". Set width to 1920 (or any other you use for streaming).
4. You can use predefined list - just click on the name - or type new data on the fly, then show them by clicking "Show". You can edit predefined values in "control-panel.html" file. Also you can change the logo. Basically, you can change everything, cause it's just a bunch of CSS lines :)

Works only on Windows, OBS 25.0+, or 27+ for linux or mac

I use simple transition, but you can do your own template and animate with CSS transitions, keyframes or whatever you want. For communication between control panel and browser layer I use BroadcastChannel API.