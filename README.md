# Pinterest Clean Profile Extension

This extension fixes the annoying sticky positioning of the profile header on Pinterest that cover up a lot of screen realestate. Pinterest's web design uses `position: sticky` on the profile header, which causes it to stick to the top of the screen and block content while scrolling and its sucks. This extension changes it to `position: relative` so the header scrolls normally with the page.

## Installation

### For Firefox:
1. Download or clone this repository
2. Open Firefox and go to `about:debugging`
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from the folder
6. The extension will be temporarily installed

### For Chrome:
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the folder containing `manifest.json`
5. The extension should now be installed

## Compatibility

- Firefox (Manifest V2)
- Chrome (Manifest V3)
- Works on all Pinterest profile pages