<template>

  <div>

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



</style>
