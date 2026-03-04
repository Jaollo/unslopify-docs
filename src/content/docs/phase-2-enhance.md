---
title: "Phase 2: Enhance"
description: 9 standalone UX enhancement scripts.
---

Phase 2 enhances the experience after debloating. These scripts run standalone (not through the launcher) and require admin.

## Scripts

| Script | What it does |
|--------|-------------|
| **01 - Context Menu** | Restores the Windows 10 full right-click menu |
| **02 - Taskbar** | Hides Search, Widgets, Task View, Copilot from the taskbar |
| **03 - Explorer** | Shows file extensions, opens to This PC, cleans Quick Access |
| **04 - Privacy** | Disables Ads, Delivery Optimization, Copilot, trackers, Activity History |
| **05 - Appearance** | Enables dark mode + creates Master Panel shortcut |
| **06 - Power Plan** | Unlocks the hidden Ultimate Performance power plan |
| **07 - Folders** | Creates an organized Projects/Work/Personal folder structure |
| **09 - Optimize Services** | Disables tracking services, sets unused services to Manual |
| **10 - Image Viewer** | Registers nomacs as the default image viewer |

:::note
Script numbering skips `08` -- gap in the sequence.
:::

## Running

Run any script directly:

```powershell
powershell -ExecutionPolicy Bypass -File "phase2-enhance/01-context-menu.ps1"
```

Phase 2 scripts that modify UI settings (taskbar, explorer, appearance) will **restart Explorer** automatically to apply changes.

## How They Work

Phase 2 scripts follow the same conventions as Phase 1:

- Dot-source shared utilities from `phase1-unslopify/utils/common.ps1`
- Require admin via `Require-Admin`
- Use `Set-RegistryValue` for registry modifications (auto-backed up)
- Use `Disable-ServiceSafe` and `Disable-TaskSafe` where applicable
- Log all operations to `logs/YYYY-MM-DD.log`
