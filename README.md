
# Spotify Lyrics Clone

  

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

  

Angular + Ionic project to replicate the Spotify Mobile UI, however, renders the Lyrics instead of playing the song. The app uses the MusixMatch API for data.

  

## Example app

  

![Alt Text](https://media.giphy.com/media/ekvgZ28zJ62JlBzRv9/giphy.gif)

  

## Installation

(NOTE: Please get an API Key from *MusixMatch*, and add it to the `src/environment.ts` file.
1. Clone repo and run 'npm install'

2. Run `ionic serve -l` in the repo directory.

3. Open [http://localhost:8200](http://localhost:8200) to view it in the browser.

  ### Build for Android:
  1. Connect your android device and run `adb devices` to confirm that your device is detected.
  2. Navigate to the repo directory in terminal.
  3. Run `ionic cordova platform rm android`.
  4. Run `ionic cordova platform add android`
  5. Run `ionic cordova run android`

## Current Road-map
1. Add Genre fetch
2. Add creating playlists
3. Add Exploring new music