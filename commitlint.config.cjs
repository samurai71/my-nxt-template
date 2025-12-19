module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Examples:
    // feat(auth): add login
    // fix(ui): button alignment

    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'revert',
      ],
    ],

    'scope-case': [2, 'always', 'kebab-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
  },
};
