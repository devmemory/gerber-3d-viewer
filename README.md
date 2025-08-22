## Gerber 3d viewer
![gerber](https://github.com/user-attachments/assets/86790261-3414-4322-98d5-0c428b30bdc2)
- Base URL : https://devmemory.github.io/gerber-3d-viewer
- query param : gerber=[gerber zip file URL]
- example : https://devmemory.github.io/gerber-3d-viewer/?gerber=https://devmemory.github.io/gerber-3d-viewer/example/a/gerber.zip

### [options]
#### In case you want to hide buttons, you can give options with query parameters
- ?order=1 : You can hide order button
- ?download=1 : You can hide download button
- ?github=1 : You can hide github buttons

### feature
- [Viewer] Gerber file to 3D including rotation
  - limitation : currently it doesn't support edget perfectly
    - (Bbox is based on width and height. Not shape of gerber) 
- [Download] Gerber file to png
- [Order] You can order your PCB directly with button
- [Examples] It provides gerber examples to test if it works or not