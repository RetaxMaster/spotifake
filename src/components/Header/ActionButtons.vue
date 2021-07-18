<template>
    
<div class="action-buttons">

    <button>
        <fa-icon icon="plus" />
        Crear lista
    </button>

    <button>
        <fa-icon icon="heart" />
        Canciones que te gustan
    </button>

</div>

</template>

<script>
export default {
    
    name: "ActionButtons",

}
</script>

<style scoped>

.action-buttons {
    margin-top: 25px;
}

button {
    display: flex;
    width: 100%;
    padding: 10px 25px;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
}

button svg {
    display: flex;
    width: 25px !important;
    height: 25px;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
}

button svg.fa-plus {
    background: #fff;
    color: #000;
}

button svg.fa-heart {
    background: #3d1ea8;
}

</style>