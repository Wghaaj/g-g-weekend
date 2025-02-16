# G-G-Weekend

# Fonts 

All fonts are located in the fonts/ folder and should be declared in home.scss.
They can be used with:
font-family: "Aclonica", sans-serif;
‼ Always use double quotes ("") for Aclonica and Montserrat fonts.

# Classes

- Use .big-container-width for header and footer.
- Use .small-container-width for main.
- For all other classes, check home.scss.

# SCSS

For SCSS documentation, see: https://sass-lang.com/guide/

Live Sass Compiler Setup
1. Install the Live Sass Compiler extension: https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass
2. After installation, open Settings for this extension and select option 'settings'.
3. Search for Live Sass Compile › Settings: Formats.
4. Delete existing formats and add the following:
{
    "workbench.iconTheme": "vscode-icons",
    "liveSassCompile.settings.forceBaseDirectory": "",
    "liveSassCompile.settings.formats": [
      
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/css",
      "savePathReplacementPairs": null
    }
  ],
  "explorer.confirmDelete": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveSassCompile.settings.autoprefix": [
    
  ],
  "vsicons.dontShowNewVersionMessage": true,
  "explorer.confirmPasteNative": false,
  "explorer.confirmDragAndDrop": false,
  "liveServer.settings.ChromeDebuggingAttachment": false,
  "liveSassCompile.settings.generateMap": false,
}
5. Every time you start coding, turn on "Watch Sass" at the bottom of VS Code.

# GitHub

!!! always use // git pull origin main // before coding 

Essential Git Commands

git add .               # Add all changes  
git commit -m "..."     # Describe your changes briefly  
git push origin HEAD    # Push changes to the repository  
‼ Use only in this sequence.

# Working with Branches
To create a new branch (e.g., for the transport page):
git checkout -b transport-page
This will help us work independently without interfering with each other.
Once the page is finished, I will merge this branch into main.

