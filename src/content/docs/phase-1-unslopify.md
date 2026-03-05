---
title: "Phase 1: Unslopify"
description: 18 debloating scripts with risk matrix.
---

Phase 1 removes the slop. All scripts require admin and are launched via the console menu or GUI.

## Script Table

| # | Script | What it does |
|---|--------|-------------|
| 00 | **Quick System Scan** | Quick system info + debloat status (read-only, no admin) |
| 01 | **Deep Telemetry & CBS** | Uses TrustedInstaller to rip out CBS telemetry packages (reboot required) |
| 03 | **Clean Program Files** | Removes known slop from Program Files and ProgramData |
| 04 | **Remove Copilot & Recall** | Disables Copilot, Recall, and Windows AI via registry + Edge flags |
| 05 | **GPU Cache Cleanup** | Clears NVIDIA, AMD, Intel shader caches (often 5-10 GB) |
| 06 | **Remove OneDrive** | Uninstalls OneDrive, restores local folder paths |
| 07 | **Clean Start Menu** | Removes empty folders, uninstall shortcuts, web links |
| 08 | **System Cleanup** | DISM `/ResetBase`, temp files, Reserved Storage |
| 09 | **Clean Default Apps** | Removes orphaned default app registry keys |
| 10 | **Remove AppX Bloat** | Mass uninstalls consumer bloatware (Xbox, Candy Crush, etc.) |
| 11 | **Disable Scheduled Tasks** | Disables telemetry, AI, and reinstall scheduled tasks |
| 12 | **Disable Content Delivery** | Blocks silent app installs, lock screen ads, nag screens |
| 13 | **Disable Telemetry Services** | Disables DiagTrack, Delivery Optimization P2P, WER |
| 14 | **Remove Resistant Apps** | Force-removes Teams, Phone Link, Widgets, Cortana, Dev Home |
| 15 | **Remove Microsoft Edge** | Removes Edge browser (keeps WebView2), blocks reinstall |
| 16 | **Remove Extended Bloat** | Removes Clipchamp, New Outlook, To Do, Power Automate, etc. |
| 17 | **Block App Resurrection** | Prevents removed apps from coming back via services and registry |
| 18 | **Clean AppData** | Removes remnants from uninstalled apps in AppData (runs last) |

:::note
Script numbering skips `02` -- gap from a renumber.
:::

## Risk Matrix

| # | Script | Risk | Usually | What could break |
|---|--------|------|---------|------------------|
| 1 | Quick System Scan | None | Just prints a report | Nothing, read-only |
| 2 | Telemetry CBS | **HIGH** | Works but slow, needs reboot | TrustedInstaller surgery, no undo |
| 3 | Clean Program Files | Medium | Finds old junk, safe cleanup | Could hit active app data |
| 4 | Copilot & Recall | Low | Clean removal, no side effects | Needs reboot |
| 5 | GPU Caches | Low | Frees 1-5 GB, rebuilds fast | Brief shader stutter |
| 6 | Remove OneDrive | **HIGH** | Clean uninstall | Cloud-only files lost if not synced |
| 7 | Clean Start Menu | Low | Removes ad tiles | Pinned items reset |
| 8 | DISM Cleanup | Medium | Recovers several GB | Loses Windows Update rollback |
| 9 | Dead Default Apps | Low | Finds 10-30 dead entries | Rarely noticed |
| 10 | AppX Bloatware | Medium | Removes 15-30 packages | Bing, Teams consumer gone |
| 11 | Disable Tasks | Low | Disables ~20 tasks silently | Reversible via Task Scheduler |
| 12 | Content Delivery | Low | Stops ghost app installs | Reversible |
| 13 | Telemetry Services | Low | Stops background noise | Reversible |
| 14 | Resistant Apps | Medium | Cleans out stubborn bloat | Teams, Widgets, Cortana gone |
| 15 | Remove Edge | **HIGH** | Works fine, search improves | WebView2 kept, Edge features gone |
| 16 | Extended Bloat | Medium | Removes 5-10 extra apps | Clipchamp, New Outlook gone |
| 17 | Block Resurrection | Low | Prevents zombie apps | Reversible registry |
| 18 | Clean AppData | Medium | Clears orphan caches | Run last after removals |

## Safety Guardrails

- **WebView2 is never removed** -- protected by `$FrameworkExclusions` in `common.ps1`
- **TrustedInstaller service is never disabled** -- breaks Windows servicing
- **System paths are never hardcoded** -- always uses `$env:SystemRoot`, `$env:ProgramFiles`, etc.
- **Registry changes are backed up** automatically before modification
- **Restore points** are created before destructive operations (after user confirms)

## Architecture

All Phase 1 scripts dot-source shared utilities:

```powershell
. "$PSScriptRoot\utils\common.ps1"
```

Key shared functions:
- `Require-Admin` -- self-elevates to admin
- `Safe-Remove` -- deletes with optional `-ForceOwnership` (takeown/icacls)
- `Remove-AppxBloat` -- removes AppX packages by wildcard, skips frameworks
- `Disable-ServiceSafe` -- stops and disables services
- `Disable-TaskSafe` -- disables scheduled tasks (exact or wildcard)
- `Create-RestorePoint` -- creates a system restore point
- `Write-Log` -- writes to `logs/YYYY-MM-DD.log`
