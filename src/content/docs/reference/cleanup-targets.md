---
title: Cleanup Targets
description: "~150 known bloat and orphan path patterns by category."
---

Known bloat and orphan path patterns consolidated from Phase 1 scripts. Used by `scan-system.ps1` to detect remnants. All paths use environment variables.

## Program Files (~35 targets)

### Adware / Bundleware

- `$env:ProgramFiles\Adobe`
- `$env:ProgramFiles\CapCut`
- `$env:ProgramFiles\Lavasoft`
- `${env:ProgramFiles(x86)}\Adobe`
- `${env:ProgramFiles(x86)}\CapCut`

### Antivirus Trials / Remnants

- `$env:ProgramFiles\McAfee`
- `$env:ProgramFiles\McAfee.com`
- `$env:ProgramFiles\Norton`
- `$env:ProgramFiles\NortonLifeLock`
- `$env:ProgramFiles\Symantec`
- `$env:ProgramFiles\Kaspersky Lab`
- `$env:ProgramFiles\ESET`
- `$env:ProgramFiles\Avast Software`
- `$env:ProgramFiles\AVG`
- `$env:ProgramFiles\Malwarebytes`
- `${env:ProgramFiles(x86)}\McAfee`
- `${env:ProgramFiles(x86)}\McAfee.com`
- `${env:ProgramFiles(x86)}\Norton`
- `${env:ProgramFiles(x86)}\NortonLifeLock`
- `${env:ProgramFiles(x86)}\Symantec`
- `${env:ProgramFiles(x86)}\SymSilent`
- `${env:ProgramFiles(x86)}\Malwarebytes`

### Apple (discontinued / EOL)

- `$env:ProgramFiles\Bonjour`
- `$env:ProgramFiles\iTunes`
- `$env:ProgramFiles\QuickTime`
- `$env:ProgramFiles\iPod`
- `$env:ProgramFiles\Common Files\Apple`
- `${env:ProgramFiles(x86)}\Apple Software Update`
- `${env:ProgramFiles(x86)}\Bonjour`
- `${env:ProgramFiles(x86)}\iTunes`
- `${env:ProgramFiles(x86)}\QuickTime`
- `${env:ProgramFiles(x86)}\iPod`
- `${env:ProgramFiles(x86)}\Common Files\Apple`

### Dead Media Players

- `$env:ProgramFiles\Real`
- `$env:ProgramFiles\RealNetworks`
- `${env:ProgramFiles(x86)}\Real`
- `${env:ProgramFiles(x86)}\RealNetworks`

### OEM Manufacturer Bloatware

- `$env:ProgramFiles\HP`
- `$env:ProgramFiles\HPSoftware`
- `$env:ProgramFiles\Dell`
- `$env:ProgramFiles\Lenovo`
- `$env:ProgramFiles\ASUS`
- `$env:ProgramFiles\ASUSTeK`
- `$env:ProgramFiles\Acer`
- `$env:ProgramFiles\MSI`
- `$env:ProgramFiles\Samsung`
- `$env:ProgramFiles\Toshiba`
- `${env:ProgramFiles(x86)}\HP`
- `${env:ProgramFiles(x86)}\Lenovo`
- `${env:ProgramFiles(x86)}\Dell`
- `${env:ProgramFiles(x86)}\ASUS`

### Remote Desktop / Utilities

- `$env:ProgramFiles\TeamViewer`
- `$env:ProgramFiles\AnyDesk`
- `$env:ProgramFiles\CCleaner`

### Dead Runtimes / Adware Toolbars

- `$env:ProgramFiles\Microsoft Silverlight`
- `${env:ProgramFiles(x86)}\Microsoft Silverlight`
- `${env:ProgramFiles(x86)}\Ask.com`
- `${env:ProgramFiles(x86)}\Babylon`
- `${env:ProgramFiles(x86)}\Conduit`
- `${env:ProgramFiles(x86)}\Search Protect`
- `${env:ProgramFiles(x86)}\Qualcomm`

---

## ProgramData (~15 targets)

- `$env:ProgramData\Adobe`
- `$env:ProgramData\CapCut`
- `$env:ProgramData\Dbg`
- `$env:ProgramData\install_clap`
- `$env:ProgramData\Package Cache`
- `$env:ProgramData\McAfee`
- `$env:ProgramData\Norton`
- `$env:ProgramData\Symantec`
- `$env:ProgramData\Kaspersky Lab`
- `$env:ProgramData\ESET`
- `$env:ProgramData\Avast Software`
- `$env:ProgramData\AVG`
- `$env:ProgramData\Malwarebytes`
- `$env:ProgramData\Lavasoft`
- `$env:ProgramData\HP`
- `$env:ProgramData\Hewlett-Packard`
- `$env:ProgramData\Dell`
- `$env:ProgramData\Lenovo`
- `$env:ProgramData\ASUS`
- `$env:ProgramData\Acer`
- `$env:ProgramData\MSI`
- `$env:ProgramData\Samsung`
- `$env:ProgramData\Toshiba`
- `$env:ProgramData\Apple`
- `$env:ProgramData\Google`
- `$env:ProgramData\Electronic Arts`

---

## AppData Local (~25 targets)

### Dead Tech Caches (always safe)

- `Local\D3DSCache`
- `Local\CrashDumps`
- `Local\Microsoft\Windows\WER`
- `Local\Microsoft\Windows\GameExplorer`
- `Local\ConnectedDevicesPlatform`
- `Local\VirtualStore`

### Game Launchers (if uninstalled)

- `Local\EpicGamesLauncher`
- `Local\Battle.net`
- `Local\Blizzard Entertainment`
- `Local\Amazon Games`
- `Local\Rockstar Games`
- `Local\Riot Games`
- `Local\Overwolf`

### Apps (if uninstalled)

- `Local\Discord`
- `Local\slack`
- `Local\Spotify`
- `Local\Zoom`
- `Local\WhatsApp`
- `Local\Teams`
- `Local\AzureFunctionsTools`
- `Local\TslGame`
- `Local\SMITE2Alpha`
- `Local\SquadGame`
- `Local\Origin`
- `Local\DaVinci Resolve Welcome`
- `Local\com.bilingify.readest`

### Antivirus (if uninstalled)

- `Local\AVAST Software`
- `Local\AVG`
- `Local\Malwarebytes`
- `Local\Piriform`

### OEM / Peripheral Software (if uninstalled)

- `Local\Razer`
- `Local\Corsair`
- `Local\SteelSeries`
- `Local\Logitech`
- `Local\NZXT`

---

## AppData LocalLow (~6 targets)

- `LocalLow\BattleBitDevTeam`
- `LocalLow\Innersloth`
- `LocalLow\nils.asejevs`
- `LocalLow\Sun\Java`
- `LocalLow\Oracle\Java`
- `LocalLow\Adobe\Flash Player`
- `LocalLow\Macromedia\Flash Player`
- `LocalLow\Apple`
- `LocalLow\Apple Computer`

---

## AppData Roaming (~25 targets)

### Dead Tech

- `Roaming\com.adobe.dunamis`
- `Roaming\Macromedia`
- `Roaming\Adobe\Flash Player`

### Legacy Apps (if uninstalled)

- `Roaming\Skype`
- `Roaming\discord`
- `Roaming\Spotify`
- `Roaming\Slack`
- `Roaming\Zoom`
- `Roaming\Dropbox`
- `Roaming\TeamViewer`
- `Roaming\AnyDesk`
- `Roaming\uTorrent`
- `Roaming\BitTorrent`
- `Roaming\GIMP`
- `Roaming\EasyAntiCheat`

### Antivirus / Utilities (if uninstalled)

- `Roaming\Malwarebytes`
- `Roaming\AVAST Software`
- `Roaming\AVG`
- `Roaming\Piriform`

### OEM / Peripheral Software (if uninstalled)

- `Roaming\Nahimic`
- `Roaming\Razer`
- `Roaming\Corsair`
- `Roaming\SteelSeries`
- `Roaming\Logitech`
- `Roaming\Apple Computer`

### Game Launchers (if uninstalled)

- `Roaming\Wargaming.net`
- `Roaming\Battlestate Games`
- `Roaming\Overwolf`
- `Roaming\RiotGames`
- `Roaming\Rockstar Games`
- `Roaming\Ubisoft Game Launcher`
- `Roaming\GOG.com`
- `Roaming\Bethesda.net Launcher`
- `Roaming\IObit`
