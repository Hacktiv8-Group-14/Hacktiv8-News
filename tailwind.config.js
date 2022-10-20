module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors : {
          orange : "#F67D12",
          red : "#FF3030"
        },
        fontSize : {
          small : '8px'
        }
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
  };