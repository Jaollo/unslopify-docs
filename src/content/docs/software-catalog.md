---
title: Software Catalog
description: Curated FOSS toolkit with install commands and configuration reference.
---

All tools install via `winget install <id>`. The machine-readable catalog lives in `phase3-control/reference/tools.json`.

## Tool Catalog

| Tool | Winget ID | Category |
|------|-----------|----------|
| PowerToys | Microsoft.PowerToys | Productivity |
| Everything | voidtools.Everything | Search |
| FolderIco | (manual install) | Customization |
| WizTree | AntibodySoftware.WizTree | Disk |
| EarTrumpet | File-New-Project.EarTrumpet | Audio |
| PDFgear | PDFgear.PDFgear | Productivity |
| BCUninstaller | Klocman.BulkCrapUninstaller | Maintenance |
| WinRAR | RARLab.WinRAR | Archiver |
| Notepad++ | Notepad++.Notepad++ | Editor |
| Helium | ImputNet.Helium | Browser |
| Brave | Brave.Brave | Browser |
| VLC | VideoLAN.VLC | Multimedia |
| mpv.net | mpv.net | Multimedia |
| OBS Studio | OBSProject.OBSStudio | Multimedia |
| YTDownloader | aandrew-me.ytDownloader | Multimedia |
| Readest | chrox.Readest | Reader |
| Ungoogled Chromium | eloston.ungoogled-chromium | Browser |
| Windhawk | RamenSoftware.Windhawk | Productivity |
| Ferrite | (manual install) | Markdown Editor |
| nomacs | nomacs.nomacs | Image Viewer |
| Shotcut | Meltytech.Shotcut | Video Editor |
| Greenshot | Greenshot.Greenshot | Screenshots |

## Installation

Install all tools at once:

```powershell
$tools = Get-Content "phase3-control\reference\tools.json" -Raw | ConvertFrom-Json
foreach ($tool in $tools) {
    winget install $tool.id --silent --accept-source-agreements --accept-package-agreements
}
```

Or install selectively:

```powershell
winget install ShareX.ShareX --silent --accept-source-agreements --accept-package-agreements
```

Check what's already installed:

```powershell
winget list --accept-source-agreements
```

## Configuration Reference

### Everything

- **Config**: `$env:APPDATA\Everything\Everything.ini`
- Config file only exists after first launch

Recommended hotkey (Ctrl+Alt+Space):

| INI Key | Value | Meaning |
|---------|-------|---------|
| `toggle_window_key` | `32` | VK_SPACE |
| `toggle_window_key_modifiers` | `3` | MOD_CONTROL + MOD_ALT |

### PowerToys

- **Config**: `$env:LOCALAPPDATA\Microsoft\PowerToys\settings.json`
- Module toggles require PowerToys restart

**Recommended enabled modules**: AlwaysOnTop, ColorPicker, CmdPal, FancyZones, File Locksmith, Hosts File Editor, Image Resizer, Keyboard Manager, Peek, PowerRename, PowerToys Run, TextExtractor, EnvironmentVariables

**Recommended disabled modules**: Awake, CropAndLock, FindMyMouse, Measure Tool, MouseHighlighter, MouseJump, MousePointerCrosshairs, MouseWithoutBorders, NewPlus, RegistryPreview, Shortcut Guide, Video Conference Mute, Workspaces

### Greenshot

- **Config**: `$env:APPDATA\Greenshot\Greenshot.ini`
- Must close Greenshot before editing -- it overwrites config on exit
- Config file only exists after first run

| Key | Value | Purpose |
|-----|-------|---------|
| `Destinations` | `FileDefault,Clipboard` | Save to file + copy to clipboard |
| `OutputFileFormat` | `png` | Image format |
| `PlayCameraSound` | `False` | Disable shutter sound |
| `CaptureMousepointer` | `False` | Don't capture cursor |

### Windhawk

- Install: `winget install RamenSoftware.Windhawk`
- Config managed via Windhawk's own UI

**Recommended mods**:

| Mod | Purpose |
|-----|---------|
| Disable grouping on the taskbar | Forces true per-window taskbar icons |
| Windows 11 Taskbar Styler | Custom CSS for taskbar transparency and colors |

### Ferrite

- **Config (portable)**: `<ferrite-dir>\portable\config.json`
- **Config (installed)**: `$env:APPDATA\ferrite\config.json`
- Best configured via UI (Ctrl+,)
