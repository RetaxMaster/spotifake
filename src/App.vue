<template>

  <div id="spotifake">

    <header>

      <Navigation />

      <ActionButtons />

      <PlayLists />

    </header>

    <main>

      <header>

        <PrevNext />

        <Album />

      </header>

    </main>

    <Actividad />

    <section>
      <p>Aquí ira el reproductor de música</p>
    </section>

  </div>

</template>

<script>

// Header
import Navigation from '@/components/Header/Navigation'
import ActionButtons from '@/components/Header/ActionButtons'
import PlayLists from '@/components/Header/PlayLists'

// Main
import PrevNext from '@/components/Main/PrevNext'
import Album from '@/components/Main/Album'

// Aside
import Actividad from '@/components/Actividad'

export default {

  name: 'App',

  components: {
    Navigation,
    ActionButtons,
    PlayLists,
    PrevNext,
    Album,
    Actividad
  }

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
  color: #fff;
  opacity: 0.7;
  font-weight: bold;
  transition: opacity ease 0.5s;
}

a:hover {
  opacity: 1;
}

button {
  background: none;
  border: none;
  outline: none;
  color: #fff;
}

figure {
  display: inline-block;
  width: 100%;
  max-width: 200px;
}

figure img {
  display: inline-block;
  width: 100%;
}

#spotifake {
  display: grid;
  grid-template-areas: "header main   aside"
                       "player player player"
}

#spotifake > header {
  grid-area: header;
  background: #000;
  color: #fff;
}

#spotifake > main {
  grid-area: main;
}

#spotifake > aside {
  grid-area: aside;
}

#spotifake > section {
  grid-area: player;
}

</style>
