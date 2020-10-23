import Vue from 'vue'
import Router from 'vue-router'
//
  import introduction from '@/components/introduction.vue'
  import installation from '@/components/installation.vue'
  import simple from '@/components/simple.vue'
  import autogenerate from '@/components/autogenerate.vue'
  import textfields from '@/components/textfields.vue'
  import emptymodel from '@/components/emptymodel.vue'
  import basic from '@/components/basic.vue'
  import grouping from '@/components/grouping.vue'
  import wrap from '@/components/wrap.vue'
  import async from '@/components/async.vue'
  import grid from '@/components/grid.vue'
  import dragdrop from '@/components/dragdrop.vue'
  import css from '@/components/css.vue'
  import slots from '@/components/slots.vue'
  import displayhelpers from '@/components/displayhelpers.vue'
  import deep from '@/components/deep.vue'
  import partial from '@/components/partial.vue'
  import multisourcedata from '@/components/multisourcedata.vue'
  import validate from '@/components/validate.vue'
  import arrayease from '@/components/arrayease.vue'
  import array from '@/components/array.vue'
  import selection from '@/components/selection.vue'
  import selectioncascading from '@/components/selectioncascading.vue'
  import treeview from '@/components/treeview.vue'
  import conditional from '@/components/conditional.vue'
  import list from '@/components/list.vue'
  import pickers from '@/components/pickers.vue'
  import images from '@/components/images.vue'
  import dynamic from '@/components/dynamicattributes.vue'
  import typehandling from '@/components/typehandling.vue'
  import toctrfunction from '@/components/tocontrolfunction.vue'
  import customcomponentdemo from '@/components/customcomponentdemo.vue'
  import fetchautocomplete from '@/components/fetchautocomplete.vue'
 // 
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', redirect: '/introduction' },
    { path: '/introduction', name: 'introduction', component: introduction, text:'Introduction' },    
    { path: '/installation', name: 'installation', component: installation, text:'Installation' },    
    { path: '/simple', name: 'simple', component: simple, text:'Textfields' },    
    { path: '/textfields', name: 'textfields', component: textfields, text:'Textfields with HTML Type Attribute'  },    
    { path: '/autogenerate', name: 'autogenerate', component: autogenerate, text:'Missing Schema Definition' },    
    { path: '/emptymodel', name: 'emptymodel', component: emptymodel, text:'Empty Model Object'  },    
    { path: '/basic', name: 'basic', component: basic, text:'Missing Properties in Model or Schema'  },    
    { path: '/grouping', name: 'grouping', component: grouping, text:'Group Controls based on Model-Structure'  },    
    { path: '/wrap', name: 'wrap', component: wrap, text:'Wrap Controls to Model-Structure independent Groups'  },    
    { path: '/async', name: 'async', component: async, text:'Async Loading of Form-Base Attributes'  },    
    
    { path: '/grid', name: 'grid', component: grid, text:`Responsive Grid using Flex, Order and Offset`  },    
    { path: '/css', name: 'css', component: css, text:`CSS, Tooltips & Buttons`  },    
    { path: '/slots', name: 'slots', component: slots, text:`Slots`  },    
    { path: '/displayhelpers', name: 'displayhelpers', component: displayhelpers, text:`Display, Typo & Layout control with Vuetify display helpers`  },    
    
    { path: '/customcomponentdemo', name: 'customcomponentdemo', component: customcomponentdemo, text:'Custom Component'  },    
    { path: '/deep', name: 'deep', component: deep, text:`Deep nested Model-Data including Objects & Arrays`  },    
    { path: '/partial', name: 'partial', component: partial, text:`Partial & Linked Model-Data Object`  },    
    { path: '/multisourcedata', name: 'multisourcedata', component: multisourcedata, text:`Integrate Multi-Source Data by using Form-Base as Slot in Form-Base`  },    
    { path: '/validate', name: 'validate', component: validate, text:`Form-Base with Rules and Validation`  },    
    
    { path: '/list', name: 'list', component: list, text:`List from Model-Data`  },    
    { path: '/treeview', name: 'treeview', component: treeview, text:`Treeviews from Model-Data`  },    
    { path: '/arrayease', name: 'arrayease', component: arrayease, text:`Array from Model-Data`  },    
    { path: '/array', name: 'array', component: array, text:`Array - Add, Edit and Drag to Remove Items in Model-Data`  },    
    
    { path: '/selection', name: 'selection', component: selection, text:`Selection, Combobox, Autocomplete from Schema-Array`  },    
    { path: '/selectioncascading', name: 'selectioncascading', component: selectioncascading, text:`Cascading Selection using computed Schema-Array`  },    
    { path: '/fetchautocomplete', name: 'fetchautocomplete', component: fetchautocomplete, text:`Fetch Data on Search Input with Autocomplete or Combobox` },
    
    { path: '/pickers', name: 'pickers', component: pickers, text:`Date, Time, Color as native HTML-Type, Menu and Pickers`  },    
    { path: '/images', name: 'images', component: images, text:`Images`  },    
    { path: '/dragdrop', name: 'dragdrop', component: dragdrop, text:`Drag & Drop`  },    
    { path: '/dynamic', name: 'dynamic', component: dynamic, text:'Work with Dynamic Attributes Schema, Model and Grid'  },    
    { path: '/typehandling', name: 'typehandling', component: typehandling, text:`Handling special Schema-Key 'type' occuring in Model-Data`  },    
    { path: '/toctrfunction', name: 'toctrfunction', component: toctrfunction, text:`Manipulate Data incoming/outgoing to Control`  },    
    { path: '/conditional', name: 'conditional', component: conditional, text:`Conditional Form`  },    
  ],

})

// const moon = () => ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'][Math.floor((Date.now()/100)%8)];
// location.hash = moon()
router.beforeEach((to, from, next) => {  
  return next(true)
  //   // is pathTo ident with new current state, then next(true) otherwise cancel with next(false)
  //   console.log('beforeEach', to, from, store.state.user);
  //   return next( to.name=== 'login' || (store.state.user && store.state.user.token) ? true: '/login' )
  //   return next(getStateFromRoute(to) === stateMachine.current.state.toLowerCase())
})

export default router

