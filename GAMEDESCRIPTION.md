# Woah It's Rex

> Start your journey from nothing and craft your way to the most overpowered pickaxes to ever exist! Collect ores ranging from 1/750,000 to over 1/5,000,000,000!

This fork is meant to be a rewrite of the original, complimenting the core gameplay with a better UI and tons of QoL features.

# IF THE GAME DOESN'T WORK FOR YOU
If you get the error "**The connection was reset**", the domain spax.zone might be blocked by your internet service provider (because it was registered relatively recently, and ISPs tend to block new sites as a low-effort anti-scam measure). Contact them and request the domain get unblocked so you can play the game in the browser.  
If you want to play the game still, the [gitlab mirror](https://spiritaxolotl.gitlab.io/woah-its-rex) should work for you. If you still want to play the game on galaxy, I recommend getting a VPN or proxy. Alternatively, I might write a small userscript that replaces the iframe for rex.spax.zone with the gitlab mirror.

## DIFFERENCES

### QOL CHANGES/ADDITIONS
- Hold shift and move to automine!
- Press esc to settings!
- Silly TP now sends you to its own layer!
- Silly TP button now says "Teleport!" once owned!
- Completely revamped UI
- Custom Themes! No more custom stylesheets!
  - Presets too! Normal, Light, Catppuccin, and Rose
  - Custom theme loading coming soon
- A new original background song! (anonymous composer)
- Twemoji color font!
  - No more OS-specific emoji issues!
  - Won't work on mobile, but this game is REALLY not meant for mobile
- A [beta version](https://rex.spax.zone/beta) for testing new experimental features before they get merged to stable
- A [dev version](https://rex.spax.zone/dev) for testing cutting-edge features before they go to the beta
- New "bloody" variant! (1/1000 rarity)
- A plethora of bug fixes, too many to list (but [here](#notable-bugs-fixed))
- Equippable gears!
- A proper discord embed!
- Live variant generation for rare ores!
  - Usually variants were decided upon the player mining them, but now you can know exactly what ores will be
- Latest Spawns and Latest Finds are now combined into one Latest Display!
  - Rows now turn green if an ore was found, or red if the mine was reset
- Wider playfield! 21x21 is now 26x21
- Playfield is now centered!
- The Discord display in the bottom right now sticks to the bottom of the screen
- Disabled overscroll behavior to keep the game window stable
- The teleport button has a better visual indicator
- The layer name in the index now turns green if it's completed
- New pixel art as the favicon! Drawn by `tayfennec` on discord
- "Already mined" blocks are indicated by a `⬜` instead of a `⚪️` to fill more space
- Tweaked a few recipes to be a little more fair to the player
- Caves are changed to be slightly more performant and less geometric
- Scrollbars (and styled ones at that) were re-added!
- You can now sell up to a certain variant!
  - Will start selling at the loweset rarity first
  - The tolerance to which rarity is configurable in the settings
  - Visual indicator of what you might be selling above the recipe
- Lots of new settings!
  - Disable caves
  - Warn the browser before closing the tab
  - Full game reset
- More statistics!
  - Number of total resets
  - Total time spent playing
- Hovering over recipes shows you the rarity of the ingredient
  - A layer display will be added as well soon
- And more!

### CODE CHANGES
- JavaScript files were moved into their own folder
- Combining similar methods to reduce repetitive code and make changes easier \[ONGOING\]
- Major mechanics (gears, pickaxes, layers, variants, etc) are now separated into their own classes \[ONGOING\]
- Major mechanics that used to be arrays (and a manual commented-out lookup table) were converted to key-value objects
- Save data is no longer obfuscated (because it saves me a headache)
- Save data from past versions will import correctly because of better version control
- Lots of use of nullish operators
- Layer generation and tracking was given a better implementation
- Rolling for ore rarity is overhauled
- Rolling for variant rarity is overhauled
  - This implementation is even better than the current ore rarity one, so that one will be rewritten soon
- DESCRIPTIVE VARIABLE NAMES
- Reduced the amount of [magic numbers](https://wikipedia.org/wiki/Magic_number_(programming)) present
- Many `for` loops were changed to `for...in`/`for...of` loops
- Oh god so many more

### NOTABLE BUGS FIXED
- Pausing during a pickaxe ability keeps the game running in the background
- Disabling the display now doesn't have small [tracking](https://wikipedia.org/wiki/Letter_spacing)
- Spawn messages don't persist when ores of a certain rarity are ignored

### TEMPORARILY DISABLED FEATURES
- Caves, due to a softlocking bug
- Spawn sounds, because they're very bugged and haven't been rewritten yet

## NOTES

### UPDATES
Amber, the original dev, is vehemently against this fork. Her code is technically copyrighted, and as such, I'm reluctant to update the game with her newer code in fear of her persuing legal action. So as of right now, I'm focusing on improving the current state of the game and keeping the code clean and readable (to prevent future headaches) before considering updating.

### SAVE DATA
This game's data importing is mostly compatible with amber's version, with the only non-compatible aspects being some settings, although come to think of it, I don't think this fork supports new ores. Import at your own risk.
Also, the save data from this fork is NOT compatible with amber's version. Writing a save data conversion script for this is on my to-do list.

### RE:REX AND OTHER ROBLOX MINING GAMES
I do not play Roblox. I know very little about how Rex Reincarnated, Go Mining, and UMG work. I am implementing features based on player requests and my own vision to improve the current state of the game. As such, apologies in advance for possible deviations from the original inspiration's source material.

### SPIRIT OF THE FORK
This game is meant to be as open as possible. I don't believe in obfuscating save data to prevent players from save editing, and writing anti-cheat code to further that effort (and then obfuscating *that*). My [discord server](https://spax.zone/discord) isn't focused on Rex, and as such there aren't any roles for completion or anything. Because of this, there is very little incentive to cheat, and even if you do, I don't really care. This is the game in its purest form, where you play it because it's fun. If you enjoy the game enough to play it without cheating, massive kudos to you. And if you decide to cheat, kudos to you too. As long as you have fun with it.

### CONTRIBUTING
If you would like to contribute (all help is welcome!), [join the discord](https://spax.zone/discord) or DM me `@spaxolotl` to discuss details. Thank you in advance!!

### FEATURE REQUESTS, BUG REPORTING, CRITICISMS, ETC
If you have any feedback for the game, feel free to [join the discord server](https://spax.zone/discord)! You'll need to ping me (`@spaxolotl`) to get the role to access the rex channel. Or feel free to dm me!

Thanks for reading!

[And play the original!](https://galaxy.click/play/233)
