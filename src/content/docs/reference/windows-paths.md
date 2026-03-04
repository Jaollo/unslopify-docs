---
title: Windows Paths Reference
description: Directory and registry quick-reference for Windows 11.
---

## User Directories

| Variable | Typical Path | Contains |
|----------|-------------|----------|
| `$env:USERPROFILE` | `C:\Users\<name>` | User root |
| `$env:APPDATA` | `C:\Users\<name>\AppData\Roaming` | Per-user app configs (roaming) |
| `$env:LOCALAPPDATA` | `C:\Users\<name>\AppData\Local` | Per-user app data (local-only) |
| `$env:TEMP` / `$env:TMP` | `C:\Users\<name>\AppData\Local\Temp` | Temporary files |
| `$env:HOMEPATH` | `\Users\<name>` | Relative home path |

### AppData Subtrees

| Path | Purpose |
|------|---------|
| `AppData\Local` | Caches, databases, large app data |
| `AppData\LocalLow` | Low-integrity app data (browsers, Java) |
| `AppData\Roaming` | Configs that roam with domain profiles |

## System Directories

| Variable | Typical Path | Contains |
|----------|-------------|----------|
| `$env:SystemRoot` | `C:\Windows` | Windows OS |
| `$env:SystemDrive` | `C:` | System drive letter |
| `$env:ProgramFiles` | `C:\Program Files` | 64-bit applications |
| `${env:ProgramFiles(x86)}` | `C:\Program Files (x86)` | 32-bit applications |
| `$env:ProgramData` | `C:\ProgramData` | Machine-wide app data |
| `$env:windir` | `C:\Windows` | Same as SystemRoot |
| `$env:CommonProgramFiles` | `C:\Program Files\Common Files` | Shared components |

## Startup Folders

| Scope | Path |
|-------|------|
| Current user | `$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Startup` |
| All users | `$env:ProgramData\Microsoft\Windows\Start Menu\Programs\Startup` |
| Shell shortcut | `shell:startup` (user) / `shell:common startup` (all users) |

## Registry Hives

| Hive | PowerShell Drive | Scope |
|------|-------------------|-------|
| HKEY_CURRENT_USER | `HKCU:` | Current user settings |
| HKEY_LOCAL_MACHINE | `HKLM:` | Machine-wide settings |
| HKEY_CLASSES_ROOT | `HKCR:` (needs `New-PSDrive`) | File associations, COM |

### Common Registry Paths

| Path | Purpose |
|------|---------|
| `HKCU:\...\CurrentVersion\Run` | User startup programs |
| `HKLM:\...\CurrentVersion\Run` | Machine startup programs |
| `HKCU:\...\Explorer\Advanced` | Explorer settings |
| `HKLM:\...\Policies\Microsoft\Windows` | Group Policy overrides |
| `HKCU:\...\Directory\Background\shell` | Explorer context menu (background) |
| `HKCU:\...\Directory\shell` | Explorer context menu (folder) |

## GPU Cache Locations

| GPU | Cache Path |
|-----|-----------|
| NVIDIA | `$env:LOCALAPPDATA\NVIDIA\DXCache` |
| NVIDIA | `$env:LOCALAPPDATA\NVIDIA\GLCache` |
| NVIDIA | `$env:TEMP\NVIDIA Corporation` |
| AMD | `$env:LOCALAPPDATA\AMD\DxCache` |
| AMD | `$env:LOCALAPPDATA\AMD\GLCache` |
| Intel | `$env:LOCALAPPDATA\Intel\ShaderCache` |
| DirectX | `$env:LOCALAPPDATA\D3DSCache` |

## Temp and Cache Directories

| Path | Purpose |
|------|---------|
| `$env:TEMP` | User temp files |
| `$env:SystemRoot\Temp` | System temp files |
| `$env:LOCALAPPDATA\...\INetCache` | IE/Edge cache |
| `$env:LOCALAPPDATA\...\Explorer` | Thumbnail cache (`thumbcache_*.db`) |
| `$env:SystemRoot\SoftwareDistribution\Download` | Windows Update downloads |
| `$env:SystemRoot\Logs\CBS` | Component-Based Servicing logs |

## Windows Update / Servicing

| Path | Purpose |
|------|---------|
| `$env:SystemRoot\WinSxS` | Side-by-side component store |
| `$env:SystemRoot\SoftwareDistribution` | Windows Update data |
| `$env:SystemRoot\Logs\DISM` | DISM operation logs |
| `$env:SystemRoot\Panther` | Setup/upgrade logs |
