# Sunsetting the project
&nbsp;&nbsp;&nbsp;&nbsp;Hey. It's Spax. If you're reading this, you probably know about everything that happened. First off, I want to apologize for my actions. Everything after Amber's repository going private went beyond my good intentions, and I developed an unhealthy relationship with the game and the drama surrounding it. I've been so misunderstood by Amber and her friends, so if I can, I would like to briefly explain everything from my point of view, with zero assumptions.  
&nbsp;&nbsp;&nbsp;&nbsp;I originally worked on it because I genuinely wanted to help make Amber's game better. My UI changes were fine with Amber, but as soon as I started working on the javascript, my changes were outright rejected. Thinking it was only because there might be bugs, I deployed my version of it to my own github site and asked a few people in Amber's server to playtest it. Amber caught wind of me doing this, and I was prompty banned from her server and blocked. What I failed to understand was that this was Amber's project, and that she could do whatever the hell she wanted with it, including who contributes what to it. After this happened, I stopped working on my fork and apologized to Amber irl. Two weeks passed, and my github repository was DMCA claimed by Amber. This was the turning point for me. Out of anger, I started working on it again.  
&nbsp;&nbsp;&nbsp;&nbsp;I loved working on the code. Developing new small features for it and rewriting confusing aspects of it was very fun, as frustrating as it was sometimes. I learned a ton of things about html and javascript, better coding practices, gitlab workflows, so much about git, and more. It even reignited my passion for web development, which died off a couple years ago. I genuinely have to thank Amber, through everything, for these things.  
&nbsp;&nbsp;&nbsp;&nbsp;Even with significant aspects of the code refactored, it wasn't easy justifying my fork's existence, because it was morally wrong (legality aside). Still, please understand that having a game that I poured so much time and effort into, regardless of it not originally belonging to me, face attempts to get forcibly taken down, felt **soul-crushing**. I wanted proof of my work, some sort of tangible result to show for everything I've worked on, but I never got any slack with Amber. I was always open to a solution that didn't involve my fork of the game getting taken down, but Amber refused to let me keep working on it. I realized the day I'm writing this that I'm so burnt out with this code and this drama, and I can sacrifice no longer working on it for the permission to *at least* keep hosting it on my website. I reached out to one of our irl mutuals and asked her to tell this to Amber, and Amber agreed. I cannot stress how much of a relief this was to me, and most likely to her as well. This stupid feud is over. The last thing I truly request from her (and you), is forgiveness for everything I did, even if it takes a while.  

I am officially done with this project. Thank you for reading, and I'm so sorry.  
-Spax

(I'd also like to give a special thanks to everyone who, despite everything, decided to contribute to my fork.)

# Original Description
> # Woah It's Rex
> This is a 2D browser version of a 3D idle mining game on Roblox called REx:R.
> This is a fork of [amber](https://github.com/ambercatgirl)'s original (formerly open-source) project,
> which can be found [here](https://ambercatgirl.github.io/woah-its-rex).
>
> This is an unofficial version of amber's original project to make the code more readable and less messy, as well as implementing more QoL features that I felt the base game needed (and many UI fixes). Read up on all the changes [here](./GAMEDESCRIPTION.md)!
>
> # [LICENSE](./media/LICENSE.mp4)
> From the [anti-license manifesto](https://www.boringcactus.com/2021/09/29/anti-license-manifesto.html)
>
> <!--# galaxy.click
> The game is up on galaxy.click now! Play it [here](https://galaxy.click/edit/313)!-->
>
> # Bug Reporting
> Report all bugs [here](https://gitlab.com/SpiritAxolotl/woah-its-rex/-/issues/new?issuable_template=Bug)
>
> # TODO List
>
> ## Bugfixing
> - [x] Make saving work properly \[high priority\]
> - [x] get settings to display properly \[high priority\]
> - [x] Fix the ore generation not working in deeper layers (95125m) \[obscure bug?\]
> - [x] Fix recipes not displaying
> - [x] Fix crafting not working
> - [x] Fix rare ores from being fucked
> - [x] Fix inventory being weird on first load (no data)
> - [x] Get Discord stuff clamped to the bottom of the screen \[low priority\]
> - [x] AND have the index/inventory stuff stretch \[low priority\]
> - [x] AND get columns to stop scrolling horizontally \[low priority\]
>   - can probably do `overflow-x: hidden;`
> - [x] Implement old save file format transfer
> - [ ] Make sure that the old save file format transfer works well and consistently
> - [x] Figure out why gears don't save to inv
> - [x] Fix layer generation to accommodate the new layer setting system
> - [x] Make spawn messages work again
>   - Now they work *extra* correctly
> - [x] Make spawn logs generate in the correct order again
> - [x] Fix white hearts not having logs? (on pick 6?)
> - [x] Fix XY coords on "location" being NaN sometimes?
>   - it's persistent ughh
>   - when is it safe to check this off
>   - fuck it
> - [ ] Make the audio work properly (audio is completely untested rn) \[high priority\]
> - [x] Fix inventory variant being set to 0 sometimes
> - [ ] Fix whatever causes the game to either freeze for a bit or just stop mining when automining
>   - Probably a performance issue that can be solved with optimizing code
>   - fixed?? maybe???
> - [x] Fix latest spawns not displaying when it should be ??? \[medium priority\]
>   - Fixed by combining the two
> - [ ] Fix index completion highlighting on ores themselves (only doesn't work for some ores)
> - [x] Nerf caves by making them more performant
> - [x] Players can seemingly keep mining when the game is paused if they pause during an activity
> - [ ] Fix cave ore generation from softlocking the game
>   - underlying issue of them being separate methods. will try to combine them with the normal methods at some point
>   - disabled caves until this is fixed
>
> ## New features
> - [x] Softcode things that will be harder to scale
>   - [x] Buttons for crafting gears
>   - [x] Descriptions for pickaxes and gears
>   - [ ] Mute music buttons
> - [ ] Make a better less hardcoded system for replacing blocks \[low priority\]
> - [x] Add title
> - [x] Add versions
> - [x] Hold shift to constantly go in a direction (after hitting wasd)
> - [x] SillyTP has its own layer
> - [ ] Highlight a layer when it's completed (as well as the elements under it when the player has at least one)
>   - new UI changes this lol. will have to re-implement
>   - (highlighting still works on completion)
> - [x] Add reset count to ore tracker logs
> - [x] Color spawned messages based on whether the player mined it or not
> - [ ] Make the spawn messages into grids
> - [x] Implement unaffectedByLuck (ores that are unaffected by luck)
> - [ ] Abbreviate probabilities for screen space
> - [ ] ~~Arrange the on-screen controls in a d-pad configuration~~
> - [x] Add a dedicated "reset game" button
> - [x] Add the main layer ore next to the teleport meter display button thing
> - [x] Center the emoji somehow
> - [ ] Display what pickaxe the player has currently selected
>   - the emoji will just be visibly different
> - [ ] Get custom pickaxe textures for each pickaxe
> - [x] Let players equip pickaxe 0 if they want to
> - [x] Let gears be equippable
> - [x] totalResets statistic
> - [x] Bloody variant (1/1000)
> - [ ] Add what layer an ore spawns on when hovering (`title` attribute)
> - [x] Update the title to something like the main branch
> - [x] Hide crafting stuff by clicking the selected item again
> - [x] Make the white squares black squares and the white circles white squares
> - [x] Combine the latestSpawns and latestFinds into one latestDisplay
> - [ ] Searchbar for ores in the inventory (feature request from nykk)
> - [x] Theming
>   - Thanks niko
> - [x] New music!
>   - Thanks niko (again)
> - [x] Use exotic variants to craft things (if specified)
>
> ## Misc.
> - [x] Update to latest
> - [ ] Combine gear and pickaxe crafting methods \[medium priority\]
> - [x] Make the layer variables arrays again with probability being stored in orelist
> - [x] Add margins back to the craft buttons
> - [ ] Add a web worker so music doesn't have to keep the page active
> - [x] Add a readme
> - [ ] Move TODO to a github tracking thing
> - [ ] Move lots of initialized variables to a separate file to reduce clutter
> - [x] Clean up the code in the scary pickaxe ability functions...
> - [x] Add a list of features exclusive to this fork
> - [x] Scale all probability things
> - [x] Add a better system for layer management (variable-wise) (make it a class maybe?)
>   - Thank you niko
> - [ ] ~~Somehow shift the game icon down by three pixels without increasing the filesize~~
>   - replaced the icon (to differentiate between amber's version and my version) so I don't think I need to do this one yet
>   - replaced it to something completely different now
> - [ ] Combine data-old.js with data.js (using `data["version"]` to differentiate the different save files)
> - [x] Make a dev branch
>   - [x] and have testable dev builds deploy at `https://rex.spax.zone/dev`
> - [x] make an actual beta branch
>   - I want the workflow to be main < beta < dev, where dev is the actively worked on, gets merged into beta, and then merged into main
> - [ ] Add some sort of symmetry function to eliminate repetitive code (for pickaxe abilities)
> - [x] Set up webhook on discord to post whatever activity goes on in the repository
> - [ ] Add more organized credits
> - [ ] Add a manager class for:
>   - [x] layers
>   - [x] pickaxes
>   - [ ] gears
>   - [ ] ores
>   - [x] variants
> - [ ] Move this TODO list to the github projects thing
> - [x] Get un-dmca'd on github
>   - march 13th babyyyyyy
>   - hell yeah
> - [x] Set up gitlab mirror in the meantime (hi!)
>   - permanently moved to gitlab actually
> - [x] More debugging features
>   - `debugActuallyPlaying`
>   - `debugVerbose`
> - [ ] Add a save conversion back to amber's old save file format (for people who want to switch back to the original)
