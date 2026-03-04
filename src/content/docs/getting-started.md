---
title: Getting Started
description: Requirements, download, and first run.
---

## Requirements

- **Windows 11** (tested on 24H2)
- **PowerShell 5.1** (built into Windows -- do not use PowerShell 7+)
- **Administrator privileges** for Phase 1 and Phase 2

Phase 3 (system intelligence) runs without admin.

## Download

```powershell
git clone https://github.com/Jaollo/unslopify.git
cd unslopify
```

Or download the ZIP from the [GitHub releases page](https://github.com/Jaollo/unslopify/releases).

## Running

### Console Launcher

```powershell
powershell -ExecutionPolicy Bypass -File Unslopify.ps1
```

Interactive menu with 18 numbered options. Select individual scripts or run all at once.

### GUI Launcher

```powershell
powershell -ExecutionPolicy Bypass -File Unslopify-GUI.ps1
```

WPF dark-themed window with checkboxes, progress bar, and scrolling log output. Supports "Run Selected" and "Run All".

### Run a Single Script

```powershell
powershell -ExecutionPolicy Bypass -File "phase1-unslopify/05-cleanup-gpu-cache.ps1"
```

### Phase 3: System Scan (no admin)

```powershell
powershell -ExecutionPolicy Bypass -File "phase3-control/scan-system.ps1"
```

Generates a `system-profile.md` with your OS info, installed software, configs, and detected orphans.

## Script Pattern

Every script follows the same pattern:

1. **Scan** -- discover targets, measure sizes
2. **Report** -- display findings with color-coded output
3. **Confirm** -- prompt before destructive operations
4. **Execute** -- perform the operation using shared utilities
5. **Log** -- record results to `logs/YYYY-MM-DD.log`

Registry changes are automatically backed up to `backups/registry/` as `.reg` files before modification.

## After Running

- **Reboot** after running scripts 1 (Copilot/Recall) and 2 (Telemetry CBS)
- Run script 18 (AppData cleanup) **last** to catch remnants from removed apps
- Phase 2 enhancement scripts restart Explorer automatically to apply UI changes
