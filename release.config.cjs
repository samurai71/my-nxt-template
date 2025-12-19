module.exports = {
  branches: ['main'],

  plugins: [
    // Analyze commit messages
    '@semantic-release/commit-analyzer',

    // Generate release notes
    '@semantic-release/release-notes-generator',

    // Update CHANGELOG.md
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],

    // Commit release artifacts
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],

    // Create GitHub release
    '@semantic-release/github'
  ]
}
