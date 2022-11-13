<template>
    <div class='modal-content-root'>
        {{ projectName }}
    </div>
</template>

<script>

    export default {
        name: 'ModalContent',
        props: {
            projectName: { type: String, default: '' },
        }
    }

</script>

<style>

</style>