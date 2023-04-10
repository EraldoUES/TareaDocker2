<style>
      .container-fluid{
            display: flex;
            align-items: center;
            justify-content: center;

          }
          </style>
<template>
  <q-card class="container-fluid" size="100px" style="width: 40rem;">
    <div class="container-fluid" style="width: 40rem;">
        <img src="https://lh3.googleusercontent.com/a/AGNmyxZO6kVLLDmZFIQP248u9YJc0bCt8WseJRCLz-TV=s288">
        <div class="card-body">
          <h2 class="card-text" style= "color:#000000;">PROYECTO CHIVO TOUR</h2>
        </div>
      </div>
    </q-card>
</template>
<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [

]

export default defineComponent({
  name: 'MainLayout',



  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
