<template>
  <div id="dr-cosmetic-default-container">
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap');
html {
  /* font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif; */
  font-family: 'Josefin Sans', sans-serif !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#dr-cosmetic-default-container{
  overflow-y: auto;
  height: 768px;
}
#dr-cosmetic-default-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

#dr-cosmetic-default-container::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}

#dr-cosmetic-default-container::-webkit-scrollbar-thumb {
  background-color: rgba(31, 26, 57, 0.101961);
  border-radius: 10px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-family: inherit;
}

a {
  color: black;
}

a:hover {
  color: #e0d0d0;
}

p {
  margin-bottom: 20px;
}
</style>
