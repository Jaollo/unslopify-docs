---
title: "Phase 3: System Intelligence"
description: Agent-agnostic reference files and system scanner.
---

Phase 3 provides system intelligence that any AI coding agent can consume. No admin required.

## Components

| File | Purpose |
|------|---------|
| `scan-system.ps1` | Generates a live system profile (OS, software, configs, orphans) |
| `reference/software-catalog.md` | FOSS tool config recipes: paths, settings, gotchas |
| `reference/windows-paths.md` | Windows directory and registry quick-reference |
| `reference/cleanup-targets.md` | ~150 known bloat and orphan path patterns |
| `clipboard-to-file.ps1` | Save clipboard content to file via Explorer context menu |

## System Scanner

The scanner is read-only and needs no admin:

```powershell
powershell -ExecutionPolicy Bypass -File "phase3-control/scan-system.ps1"
```

It generates `system-profile.md` containing:
- OS version and build number
- Installed software inventory
- Current configuration state
- Detected orphan files and folders
- Disk usage analysis

## Reference Files

### Software Catalog

`reference/software-catalog.md` contains configuration recipes for each recommended FOSS tool:
- Process names
- Config file paths (using environment variables)
- Recommended settings with explanations
- Gotchas (e.g., "Greenshot overwrites config on exit")

### Windows Paths

`reference/windows-paths.md` is a quick-reference for:
- User directories (`$env:APPDATA`, `$env:LOCALAPPDATA`, etc.)
- System directories (`$env:SystemRoot`, `$env:ProgramFiles`, etc.)
- Registry hives and common paths
- GPU cache locations
- Temp/cache directories

See the full [Windows Paths Reference](/reference/windows-paths/).

### Cleanup Targets

`reference/cleanup-targets.md` catalogs ~150 known bloat patterns across:
- Program Files (adware, antivirus trials, OEM bloat, dead runtimes)
- ProgramData
- AppData Local, LocalLow, and Roaming

See the full [Cleanup Targets Reference](/reference/cleanup-targets/).

## AI Agent Integration

Phase 3 is designed to be consumed by any AI coding agent. The typical workflow:

1. Agent runs `scan-system.ps1` to understand the current system state
2. Agent reads reference files for context on paths, tools, and known bloat
3. Agent generates targeted recommendations or scripts based on the profile

The reference files use environment variables (not hardcoded paths) so they work on any Windows installation.
