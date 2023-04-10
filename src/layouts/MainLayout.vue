<template>
  <q-layout view="hHr lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-weight-bold">
          Diseño de Sistemas 2023
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/" exact>
              <q-item-section avatar>
                <q-icon name="img:https://cdn-icons-png.flaticon.com/512/3388/3388845.png"
                size="45px" />
              </q-item-section>

              <q-item-section class="text-weight-bold">
                <font size="4px">Inicio</font>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/miProyecto" exact>
              <q-item-section avatar>
                <q-icon name="img:https://cdn-icons-png.flaticon.com/512/1232/1232900.png"
                size="50px" />
              </q-item-section>

              <q-item-section class="text-weight-bold">
                <font size="4px">miProyecto</font>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/miConocimiento" exact>
              <q-item-section avatar>
                <q-icon name="img:https://i.pinimg.com/originals/89/f0/3b/89f03b90f81676eead3393cbca2b4bbb.png"
                size="50px"/>
              </q-item-section>

              <q-item-section class="text-weight-bold">
                <font size="4px">miConocimiento</font>
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      <q-img class="absolute-top" src="https://i0.wp.com/www.eniun.com/wp-content/uploads/paginas-web-tecnologia-informatica-conocer.png?fit=900%2C450&ssl=1" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="65px" class="q-mb-sm">
              <img src="https://lh3.googleusercontent.com/a/AGNmyxavQuw2C96mDQnosRtff30PsC3kzpm_NW6bdW-o5WM=s288">
            </q-avatar>
            <div class="text-weight-bold"><font color=#000000 size="4px">Eraldo Ariel Hernandez Ramirez</font></div>
            <div class="text-weight-bold"><font color=#000000 size="4px">HR18024</font></div>
          </div>
        </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="site-footer">

      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Preguntas Frecuentes</h6>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Contacto</h6>
            <ul class="footer-links">
              <li>eraldo.ramirez40@gmail.com</li>
              <li>hr18024@ues.edu.sv</li>
            </ul>
          </div>

        </div>
        <hr>
      </div>
    </q-footer>
  </q-layout>

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
<style>
.{
  background-color:#49ca90;
}
.site-footer
{
  background-color:#034b2b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>
