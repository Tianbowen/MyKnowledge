# Dot-source before any Quartz/git ops that hit GitHub:
#   . .\use-github-mirror.ps1
# This only affects the current PowerShell session (no global git config).

$script:GithubMirror = if ($env:GITHUB_MIRROR) { $env:GITHUB_MIRROR.TrimEnd('/') } else { 'https://gh-proxy.com' }

$env:GIT_CONFIG_COUNT = '1'
$env:GIT_CONFIG_KEY_0 = "url.$script:GithubMirror/https://github.com/.insteadOf"
$env:GIT_CONFIG_VALUE_0 = 'https://github.com/'

Write-Host "GitHub mirror enabled for this session: $script:GithubMirror" -ForegroundColor Green
Write-Host "Override with: `$env:GITHUB_MIRROR='https://ghfast.top'; . .\use-github-mirror.ps1"
