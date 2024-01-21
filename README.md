# Bugfixing
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
- [ ] Fix XY coords on "location" being NaN sometimes?

# New features
- [x] Softcode things that will be harder to scale
  - [x] Buttons for crafting gears
  - [x] Descriptions for pickaxes and gears
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

# Misc.
- [x] Update to latest
- [ ] Combine gear and pickaxe crafting methods \[low priority\]
- [x] Make the layer variables arrays again with probability being stored in orelist
- [ ] Rename all "block"s to "ore"?
- [x] Add margins back to the craft buttons
- [ ] Add a web worker so music doesn't have to keep the page active
- [x] Add a readme
- [ ] Move TODO to a github tracking thing
- [ ] Move lots of initialized variables to a separate file to reduce clutter
