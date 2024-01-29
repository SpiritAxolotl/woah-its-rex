# A final note
Hi. It's Spax. Amber is filing a DMCA claim against this repository. As much as I hate to do this, I am going to be taking down the website build and archiving the repository. I would hope I won't have to delete it (or be forced to delete it) but I guess you'll find out if this webpage disappears. Thank you to everyone who playtested, sent me bug reports, and contributed to the code. I'm sorry for my mistakes.
-Spax

# Woah It's Rex
This is a 2D browser version of a 3D idle mining game on Roblox called REx:R.

This is an unofficial version of amber's original project to make the code more readable and less messy, as well as implementing more QoL features that I felt the base game needed (and many UI fixes). Her version can be found [here](https://ambercatgirl.github.io/woah-its-rex).

# [LICENSE](./media/LICENSE.mp4)
From the [anti-license manifesto](https://www.boringcactus.com/2021/09/29/anti-license-manifesto.html)

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
- [ ] AND get columns to stop scrolling horizontally \[low priority\]
- [x] Implement old save file format transfer
- [ ] Make sure that the old save file format transfer works well and consistently
- [x] Figure out why gears don't save to inv
- [x] Fix layer generation to accommodate the new layer setting system
- [x] Make spawn messages work again
- [x] Make spawn logs generate in the correct order again
- [x] Fix white hearts not having logs? (on pick 6?)
- [x] Fix XY coords on "location" being NaN sometimes?
  - it's persistent ughh
  - when is it safe to check this off
  - fuck it
- [ ] Make the audio work properly (completely untested)
- [x] Fix inventory variant being set to 0 sometimes
- [ ] Fix whatever causes the game to either freeze for a bit or just stop mining when automining
  - Probably a performance issue that can be solved with optimizing code
  - fixed?? maybe???
- [ ] Fix latest spawns not displaying when it should be ??? \[medium priority\]
- [ ] Fix index completion highlighting on ores themselves (only doesn't work for some ores)
- [ ] Replace my `overflow-y: scroll;` stuff with `overflow: clip;` to better get rid of scrollbars
- [ ] Players can seemingly keep mining when the game is paused if they pause during an activity

## New features
- [x] Softcode things that will be harder to scale
  - [x] Buttons for crafting gears
  - [x] Descriptions for pickaxes and gears
  - [ ] Mute music buttons
- [ ] Make a better less hardcoded system for replacing blocks \[low priority\]
- [x] Add title
- [x] Add versions
- [x] Hold shift to constantly go in a direction (after hitting wasd)
- [x] SillyTP has its own layer
- [ ] Highlight a layer when it's completed (as well as the elements under it when the player has at least one)
  - new UI changes this lol. will have to re-implement
  - (highlighting still works on completion)
- [x] Add reset count to ore tracker logs
- [ ] Color spawned messages based on whether the player mined it or not
- [ ] Make the spawn/find messages into grids
- [x] Implement unaffectedByLuck (ores that are unaffected by luck)
- [ ] Abbreviate probabilities for screen space
- [ ] ~~Arrange the on-screen controls in a d-pad configuration~~
- [ ] Add a dedicated "reset game" button
- [x] Add the main layer ore next to the teleport meter display button thing
- [x] Center the emoji somehow
- [ ] Display what pickaxe the player has currently selected
- [x] Let players equip pickaxe 0 if they want to
- [x] Let gears be equippable
- [x] totalResets statistic
- [ ] Add what layer an ore spawns on when hovering (`title` attribute)
- [x] Update the title to something like the main branch
- [x] Hide crafting stuff by clicking the selected item again

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
- [x] Clean up the code in the scary pickaxe ability functions...
- [ ] Add a list of features exclusive to this fork
- [x] Scale all probability things
- [x] Add a better system for layer management (variable-wise) (make it a class maybe?)
  - Thank you niko
- [ ] Somehow shift the game icon down by three pixels without increasing the filesize
  - replaced the icon (to differentiate between amber's version and my version) so I don't think I need to do this one yet
- [ ] Combine data-old.js with data.js (using `data["version"]` to differentiate the different save files)
- [x] Make a dev branch
  - [ ] and have testable dev builds deploy at `https://spiritaxolotl.github.io/woah-its-rex/dev` or something
- [ ] Add some sort of symmetry function to eliminate repetitive code (for pickaxe abilities)
- [x] Set up webhook on discord to post whatever activity goes on in the repository
  - cmon please be less spammy but still useful
- [ ] Add more organized credits
- [ ] Add a manager class for:
  - [x] layers
  - [ ] pickaxes & gears
  - [ ] ores
- [ ] Move this TODO list to the github projects thing
