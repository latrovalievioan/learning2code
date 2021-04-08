<template>
  <header>
    <router-link to="/">
    <h1><span>Vue</span>Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: cursive;


  &::selection {
    background: transparentize($color: #42B883, $amount: 0.5);
  }

  body {
    background-color: #35485E;
  }

  a {
    text-decoration: none;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    background-color: #2c3d4e;
    box-shadow: 0px 0px 6px rgba($color: #000000, $alpha: 0.2);
  }
  h1 {
    color: #FFF;
    font-size: 28px;

    span {
      color: #42B883
    }

  };
}

</style>
