/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'mobot-blue-100' : '#C2FFFF',
        'mobot-blue-200' : '#8DFDFF',
        'mobot-blue-300' : '#60FFFF',
        'mobot-blue-400' : '#33FCFC',
        'mobot-light-purple-100' : '#FBFBFF',
        'mobot-light-purple-200' : '#DCDAF9',
        'mobot-light-purple-300' : '#B6B2EB',
        'mobot-light-purple-400' : '#8D87D3',
        'mobot-purple-100' : '#FCF9FF',
        'mobot-purple-200' : '#E5D1F9',
        'mobot-purple-300' : '#C8A6EB',
        'mobot-purple-400' : '#A679D3',
        'mobot-gray-100' : '#F2F2F2',
        'mobot-gray-200' : '#C3C3C3',
        'mobot-gray-300' : '#989898',
        'mobot-gray-400' : '#696868',
        'mobot-dark-gray-100' : '#999898',
        'mobot-dark-gray-200' : '#666666',
        'mobot-dark-gray-300' : '#2D2D2D',
        'mobot-dark-gray-400' : '#030202'
      },
    },
  },
  plugins: [],
}
