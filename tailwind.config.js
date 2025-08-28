const twilight = require('@salla.sa/twilight');

module.exports = {
  content: [
    './src/views/**/*.twig',
    './src/assets/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': twilight.color('primary'),
        'primary-dark': twilight.color('primary_dark'),
        'primary-light': twilight.color('primary_light'),
        'primary-fg': twilight.color('primary_fg'),
        // Alsumo Theme Custom Colors
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
      },
      fontFamily: {
        'main': twilight.font('main'),
        'secondary': twilight.font('secondary'),
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
