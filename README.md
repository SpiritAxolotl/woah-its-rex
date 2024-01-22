# woah, it's rex
This is a 2D browser version of a 3D idle mining game on Roblox called REx:R.

This is an unofficial version of amber's original project to make the code more readable and less messy, as well as implementing more QoL features that I felt the base game needed (and many UI fixes).

# TODO List

## Bugfixing
- [x] Make saving work properly \[high priority\]
- [x] get settings to display properly \[high priority\]
- [x] Fix the ore generation not working in deeper layers (95125m) \[obscure bug?\]
- [x] Fix recipes not displaying
- [x] Fix crafting not working
- [x] Fix rare ores from being fucked
- [x] Fix inventory being weird on first load (no data)
- [x] Get Discord stuff clamped to the bottom of the screen \[low priority\]
- [x] AND have the index/inventory stuff stretch \[low priority\]
- [ ] AND get column 3 to stop scrolling horizontally \[low priority\]
- [x] Implement old save file format transfer
- [ ] Make sure that the old save file format transfer works well and consistently
- [x] Figure out why gears don't save to inv
- [x] Fix layer generation to accommodate the new layer setting system
- [x] Make spawn messages work again
- [x] Make spawn logs generate in the correct order again
- [x] Fix white hearts not having logs? (on pick 6?)
- [x] Fix XY coords on "location" being NaN sometimes?
- [ ] Make the audio work properly (completely untested)
- [x] Fix inventory variant being set to 0 sometimes

## New features
- [x] Softcode things that will be harder to scale
  - [x] Buttons for crafting gears
  - [x] Descriptions for pickaxes and gears
  - [ ] Mute music buttons
- [ ] Make a better less hardcoded system for replacing blocks
- [x] Add title
- [x] Add versions
- [x] Hold shift to constantly go in a direction (after hitting wasd)
- [x] SillyTP has its own layer
- [ ] Highlight a layer when it's completed (as well as the elements under it when the player has at least one)
- [x] Add reset count to ore tracker logs
- [ ] Color spawned messages based on whether the player mined it or not
- [ ] Make the spawn/find messages into grids
- [x] Implement unaffectedByLuck (ores that are unaffected by luck)
- [ ] Abbreviate probabilities for screen space
- [ ] Arrange the on-screen controls in a d-pad configuration
- [ ] Add a dedicated "reset game" button
- [x] Add the main layer ore next to the teleport meter display button thing
  - [ ] Center the emoji somehow
- [ ] Display what pickaxe the player has currently selected
- [ ] Let players equip pickaxe 0 if they want to

## Misc.
- [x] Update to latest
- [ ] Combine gear and pickaxe crafting methods \[low priority\]
- [x] Make the layer variables arrays again with probability being stored in orelist
- [ ] Rename all "block"s to "ore"?
- [x] Add margins back to the craft buttons
- [ ] Add a web worker so music doesn't have to keep the page active
- [x] Add a readme
- [ ] Move TODO to a github tracking thing
- [ ] Move lots of initialized variables to a separate file to reduce clutter
- [ ] Clean up the code in the scary pickaxe ability functions...
- [ ] Add a list of features exclusive to this fork
- [x] Scale all probability things
- [ ] Add a better system for layer management (variable-wise)
