<template>

    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" v-on:click="editBtn = !editBtn"/>
        <grid-layout
                :layout.sync="layout"
                :col-num="12"
                :row-height="30"
                :is-draggable="editBtn"
                :is-resizable="editBtn"
                :vertical-compact="true"
                :use-css-transforms="true"
                :auto-size="true"
                ref="Grid"
                :responsive="true"
        >

            <grid-item v-for="item in layout"
                       :x="item.x"
                       :y="item.y"
                       :w="item.w"
                       :h="item.h"
                       :min-h="item.minHeight"
                       :min-w="item.minWidth"
                       drag-allow-from=".vue-draggable-handle"
                       drag-ignore-from=".no-drag"
                       :i="item.i" class="item panel panel-default">
                <div style="position:relative;height: 100%;">
                    <div class="vue-draggable-handle"
                         style="position: fixed; top: 10px; left: 10px; color: left; background: white; padding: .2rem; z-index: 999999;"
                         v-show="editBtn">
                        <font-awesome-icon icon="arrows-alt"/>
                    </div>
                    <div class="no-drag" style="padding: 1rem; height: 100%;z-index: 10;">
                        <component v-bind:is="item.content"></component>
                    </div>
                </div>
            </grid-item>
        </grid-layout>
    </div>
</template>

<style lang="scss">
    .home {
        background: lightgrey;

        .item {
            background: white;
            border-radius: 5px;
            border-width: 3px;
            border-color: black;
            overflow: hidden;
        }

        .no-drag {
            overflow: auto;
            height: 100%;
        }
        /* width */
        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: none;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }
</style>


<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Tab from '@/components/Tab.vue'

  let testLayout = [
    { 'x': 6, 'y': 0, 'w': 5, 'h': 4, 'i': '1', 'content': 'Tab', 'minHeight': 2, 'minWidth': 4 },
    { 'x': 0, 'y': 0, 'w': 5, 'h': 8, 'i': '2', 'content': 'Tab' },
  ]

  export default {
    name: 'home',
    components: {
      HelloWorld,
      Tab
    },
    data () {
      return {
        layout: testLayout,
        editBtn: false,
        testI: 3
      }
    },
    mounted () {
      // this.test()
    },
    methods: {
      test() {
        setTimeout(() => {
          this.layout.push({ 'x': 0, 'y': 999, 'w': 5, 'h': 8, 'i': this.testI++, 'content': 'Tab', 'minHeight': 2, 'minWidth': 4 })
          this.test()
        }, 5000)
      }
    }
  }


</script>
