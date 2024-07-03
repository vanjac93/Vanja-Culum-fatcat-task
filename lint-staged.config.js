export default {
    '*/**/*.{js,jsx,ts,tsx}': [
        'prettier --write',
        'eslint --fix',
        'eslint',
        () => 'tsc --noEmit --project tsconfig.json',
    ],
    '*/**/*.{json,css,md}': ['prettier --write'],
};
