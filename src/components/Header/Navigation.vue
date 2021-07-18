<template>

<nav>

    <ul>
        <li>
            <a href="#"><fa-icon icon="home" /> Inicio</a>
        </li>
    </ul>

    <ul>
        <li>
            <a href="#"><fa-icon icon="search" /> Buscar</a>
        </li>
    </ul>

    <ul>
        <li>
            <a href="#"><fa-icon icon="book" /> Tu biblioteca</a>
        </li>
    </ul>

</nav>

</template>

<script>
export default {
    
    name: "Navigation",

}
</script>

<style scoped>

a {
    display: inline-block;
    width: 100%;
    padding: 10px 25px;
}

a svg {
    margin-right: 15px;
}

</style>