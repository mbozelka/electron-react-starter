# Electron Starter Setup with React and Redux
A simple but full featured starter setup for Electron apps with React and Redux.

## Features
The react portion is handled through Webpack. Webpack was setup to include
- Redux as a default
- Image asset handling
- Uses sass as default
- Fonts handling
- Code hashing
- Jest testing (configuration was mimicked from create-react-app)
- Folder structure is quite similar to a create-react-app, so code sharing should be easy
- You can talk to Electron and the ipcRenderer by simply importing it (es6 style) in your electron app
- `./config/defaults.js` contains defaults that can be easily altered to make the structure of the setup as pleased (src folder, build folder, max inline image size, port number, etc.)
- Source maps in development
- Automatically downloads react and redux dev tools for a full development experience (courtesy of electron-devtools-installer)

## Usage
Clone the repo and run

```
npm install
```

### To start development

First run:
```
# starts on port 3000 (can be changed in defaults.js)
npm start
```

Then run:
```
npm run electron
```

Why not use concurency to start both at the same time? My opinion is it is more productive to run them separately in two terminal windows. You can then easily print logs to the electron terminal screen, and restart the webpack server when needed or the electron process when needed without rerunning both every time.

### Production
This still needs to be worked on. I've not gotten this far yet.

However, the React portion can be built, and all assets minified and moved to a "public" folder.

```
npm run build
```

Then you can run electron using the static assets with

```
npm run electron-prod
```
