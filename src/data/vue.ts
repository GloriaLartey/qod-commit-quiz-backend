export const vueQuestions = [
{
id:1,

question:"What is Vue.js primarily used for?",
options:[
"Building user interfaces",
"Server-side programming",
"Database management",
"Networking"
],
answer:"Building user interfaces"
},

{
id:2,

question:"Which directive is used for conditional rendering in Vue?",
options:[
"v-if",
"v-for",
"v-show",
"v-bind"
],
answer:"v-if"
},

{
id:3,

question:"Which directive is used to loop over arrays or objects?",
options:[
"v-for",
"v-if",
"v-bind",
"v-on"
],
answer:"v-for"
},

{
id:4,

question:"Which directive is used to bind an attribute to an expression?",
options:[
"v-bind",
"v-model",
"v-if",
"v-on"
],
answer:"v-bind"
},

{
id:5,

question:"Which directive is used for two-way data binding on form inputs?",
options:[
"v-model",
"v-bind",
"v-if",
"v-on"
],
answer:"v-model"
},

{
id:6,

question:"Which directive is used to listen to DOM events?",
options:[
"v-on",
"v-bind",
"v-model",
"v-for"
],
answer:"v-on"
},

{
id:7,

question:"Which property holds the data of a Vue component?",
options:[
"data",
"methods",
"computed",
"props"
],
answer:"data"
},

{
id:8,

question:"Which property is used to define methods in a Vue component?",
options:[
"methods",
"data",
"computed",
"watch"
],
answer:"methods"
},

{
id:9,

question:"Which property is used for computed properties in Vue?",
options:[
"computed",
"methods",
"data",
"watch"
],
answer:"computed"
},

{
id:10,

question:"Which property is used to watch changes in Vue data?",
options:[
"watch",
"computed",
"methods",
"props"
],
answer:"watch"
},

{
id:11,

question:"Which attribute is used to pass data from parent to child component?",
options:[
"props",
"data",
"emit",
"v-model"
],
answer:"props"
},

{
id:12,

question:"Which method is used to emit custom events from a child component?",
options:[
"$emit",
"$on",
"$watch",
"$refs"
],
answer:"$emit"
},

{
id:13,

question:"Which lifecycle hook runs when a component is mounted to the DOM?",
options:[
"mounted",
"created",
"beforeMount",
"destroyed"
],
answer:"mounted"
},

{
id:14,

question:"Which lifecycle hook runs after the component is created but before mounting?",
options:[
"created",
"mounted",
"beforeMount",
"destroyed"
],
answer:"created"
},

{
id:15,

question:"Which lifecycle hook runs before a component is destroyed?",
options:[
"beforeDestroy",
"destroyed",
"mounted",
"created"
],
answer:"beforeDestroy"
},

{
id:16,

question:"Which lifecycle hook runs after a component is destroyed?",
options:[
"destroyed",
"beforeDestroy",
"created",
"mounted"
],
answer:"destroyed"
},

{
id:17,

question:"Which function is used to register a global component in Vue?",
options:[
"app.component()",
"Vue.component()",
"defineComponent()",
"createApp()"
],
answer:"app.component()"
},

{
id:18,

question:"Which method is used to programmatically navigate in Vue Router?",
options:[
"this.$router.push()",
"this.$router.navigate()",
"this.$router.go()",
"this.$router.change()"
],
answer:"this.$router.push()"
},

{
id:19,

question:"Which directive is used to conditionally apply a CSS class?",
options:[
"v-bind:class",
"v-class",
"v-style",
"v-bind:style"
],
answer:"v-bind:class"
},

{
id:20,

question:"Which directive is used to bind inline styles dynamically?",
options:[
"v-bind:style",
"v-style",
"v-bind:class",
"v-class"
],
answer:"v-bind:style"
},

{
id:21,

question:"Which function is used to create a Vue 3 application instance?",
options:[
"createApp()",
"new Vue()",
"Vue.createApp()",
"app.new()"
],
answer:"createApp()"
},

{
id:22,

question:"Which function is used to define a component in Vue 3?",
options:[
"defineComponent()",
"createComponent()",
"Vue.component()",
"new Component()"
],
answer:"defineComponent()"
},

{
id:23,

question:"Which concept allows a parent to provide data to deeply nested components?",
options:[
"provide/inject",
"props",
"emit",
"slots"
],
answer:"provide/inject"
},

{
id:24,

question:"Which feature allows reusable template content in Vue components?",
options:[
"slots",
"props",
"mixins",
"directives"
],
answer:"slots"
},

{
id:25,

question:"Which function is used to create reactive data in Vue 3 Composition API?",
options:[
"reactive()",
"ref()",
"computed()",
"watch()"
],
answer:"reactive()"
},

{
id:26,

question:"Which function is used to create a reactive primitive in Vue 3?",
options:[
"ref()",
"reactive()",
"computed()",
"watch()"
],
answer:"ref()"
},

{
id:27,

question:"Which function is used to watch reactive data in Vue 3?",
options:[
"watch()",
"watchEffect()",
"computed()",
"reactive()"
],
answer:"watch()"
},

{
id:28,

question:"Which function automatically tracks dependencies and re-runs the effect in Vue 3?",
options:[
"watchEffect()",
"watch()",
"computed()",
"reactive()"
],
answer:"watchEffect()"
},

{
id:29,

question:"Which function is used to define computed properties in Vue 3 Composition API?",
options:[
"computed()",
"watch()",
"ref()",
"reactive()"
],
answer:"computed()"
},

{
id:30,

question:"Which directive is used to render HTML content as raw HTML?",
options:[
"v-html",
"v-text",
"v-bind",
"v-show"
],
answer:"v-html"
},

{
id:31,

question:"Which directive toggles element visibility based on a condition without removing it from DOM?",
options:[
"v-show",
"v-if",
"v-for",
"v-bind"
],
answer:"v-show"
},

{
id:32,

question:"Which directive is used to attach a key to elements in v-for loops?",
options:[
":key",
"v-key",
"v-bind:key",
"v-for:key"
],
answer:":key"
},

{
id:33,

question:"Which property contains all props received by a Vue component?",
options:[
"props",
"$props",
"data",
"$data"
],
answer:"$props"
},

{
id:34,

question:"Which function is used to access DOM elements in Vue 3 Composition API?",
options:[
"ref()",
"reactive()",
"onMounted()",
"watch()"
],
answer:"ref()"
},

{
id:35,

question:"Which lifecycle hook is called before the component is mounted in Vue 3 Composition API?",
options:[
"onBeforeMount",
"onMounted",
"onCreated",
"onBeforeUpdate"
],
answer:"onBeforeMount"
},

{
id:36,

question:"Which lifecycle hook is called after the component is mounted in Vue 3 Composition API?",
options:[
"onMounted",
"onBeforeMount",
"onUpdated",
"onUnmounted"
],
answer:"onMounted"
},

{
id:37,

question:"Which lifecycle hook is called before a component is updated in Vue 3 Composition API?",
options:[
"onBeforeUpdate",
"onUpdated",
"onMounted",
"onUnmounted"
],
answer:"onBeforeUpdate"
},

{
id:38,

question:"Which lifecycle hook is called after a component is updated in Vue 3 Composition API?",
options:[
"onUpdated",
"onBeforeUpdate",
"onMounted",
"onUnmounted"
],
answer:"onUpdated"
},

{
id:39,

question:"Which lifecycle hook is called before a component is unmounted in Vue 3 Composition API?",
options:[
"onBeforeUnmount",
"onUnmounted",
"onMounted",
"onUpdated"
],
answer:"onBeforeUnmount"
},

{
id:40,

question:"Which lifecycle hook is called after a component is unmounted in Vue 3 Composition API?",
options:[
"onUnmounted",
"onBeforeUnmount",
"onMounted",
"onUpdated"
],
answer:"onUnmounted"
},

{
id:41,

question:"Which package is commonly used for state management in Vue 2?",
options:[
"Vuex",
"Pinia",
"Redux",
"MobX"
],
answer:"Vuex"
},

{
id:42,

question:"Which state management library is recommended for Vue 3?",
options:[
"Pinia",
"Vuex",
"Redux",
"MobX"
],
answer:"Pinia"
},

{
id:43,

question:"Which method is used to access the Vue Router instance inside a component?",
options:[
"this.$router",
"this.$route",
"this.$navigate",
"this.router"
],
answer:"this.$router"
},

{
id:44,

question:"Which object contains the current route information?",
options:[
"this.$route",
"this.$router",
"this.route",
"this.router"
],
answer:"this.$route"
},

{
id:45,

question:"Which directive is used to render dynamic components?",
options:[
"component",
"v-component",
"v-dynamic",
"v-is"
],
answer:"v-is"
},

{
id:46,

question:"Which method is used to programmatically replace the current route in Vue Router?",
options:[
"this.$router.replace()",
"this.$router.push()",
"this.$router.go()",
"this.$router.navigate()"
],
answer:"this.$router.replace()"
},

{
id:47,

question:"Which lifecycle hook is useful for fetching data when a route changes?",
options:[
"beforeRouteUpdate",
"beforeRouteEnter",
"beforeRouteLeave",
"mounted"
],
answer:"beforeRouteUpdate"
},

{
id:48,

question:"Which directive is used to bind event listeners in Vue templates?",
options:[
"v-on",
"v-bind",
"v-model",
"v-event"
],
answer:"v-on"
},

{
id:49,

question:"Which method is used to prevent default behavior in an event handler in Vue?",
options:[
"event.preventDefault()",
"event.stopPropagation()",
"event.prevent()",
"event.stop()"
],
answer:"event.preventDefault()"
},

{
id:50,

question:"Which method is used to stop event propagation in Vue?",
options:[
"event.stopPropagation()",
"event.preventDefault()",
"event.stop()",
"event.cancel()"
],
answer:"event.stopPropagation()"
},

{
id:51,

question:"Which feature allows passing multiple root elements in Vue 3 templates?",
options:[
"Fragment",
"Slot",
"Teleport",
"Portal"
],
answer:"Fragment"
},

{
id:52,

question:"Which feature allows rendering content outside the component hierarchy?",
options:[
"Teleport",
"Fragment",
"Slot",
"Portal"
],
answer:"Teleport"
},

{
id:53,

question:"Which directive is used for dynamic component props binding?",
options:[
"v-bind",
"v-on",
"v-model",
"v-for"
],
answer:"v-bind"
},

{
id:54,

question:"Which feature allows a parent to capture child events in Vue?",
options:[
"Event Emission",
"Props",
"Slots",
"Watchers"
],
answer:"Event Emission"
},

{
id:55,

question:"Which hook is called before navigating away from a route in Vue Router?",
options:[
"beforeRouteLeave",
"beforeRouteEnter",
"beforeRouteUpdate",
"onBeforeUnmount"
],
answer:"beforeRouteLeave"
},

{
id:56,

question:"Which helper function maps Vuex/Pinia state to component computed properties?",
options:[
"mapState",
"mapGetters",
"mapActions",
"mapMutations"
],
answer:"mapState"
},

{
id:57,

question:"Which helper function maps Vuex/Pinia actions to component methods?",
options:[
"mapActions",
"mapState",
"mapGetters",
"mapMutations"
],
answer:"mapActions"
},

{
id:58,

question:"Which helper function maps Vuex/Pinia getters to computed properties?",
options:[
"mapGetters",
"mapState",
"mapActions",
"mapMutations"
],
answer:"mapGetters"
},

{
id:59,

question:"Which helper function maps Vuex/Pinia mutations to methods?",
options:[
"mapMutations",
"mapActions",
"mapState",
"mapGetters"
],
answer:"mapMutations"
},

{
id:60,

question:"Which directive is used to dynamically toggle the disabled attribute of an element?",
options:[
"v-bind:disabled",
"v-disabled",
"v-model",
"v-on:disabled"
],
answer:"v-bind:disabled"
},

{
id:61,

question:"Which feature allows sharing reusable logic across components in Vue 3?",
options:[
"Composition API",
"Mixins",
"Slots",
"Directives"
],
answer:"Mixins"
},

{
id:62,

question:"Which Vue 3 feature allows grouping reactive state and methods in a function?",
options:[
"Composition API",
"Options API",
"Mixins",
"Directives"
],
answer:"Composition API"
},

{
id:63,

question:"Which function is used to define emits in Vue 3 Composition API?",
options:[
"defineEmits()",
"emit()",
"createEmits()",
"onEmit()"
],
answer:"defineEmits()"
},

{
id:64,

question:"Which function is used to access refs in the template in Vue 3 Composition API?",
options:[
"ref()",
"reactive()",
"computed()",
"watch()"
],
answer:"ref()"
},

{
id:65,

question:"Which function is used to mark a reactive object as readonly in Vue 3?",
options:[
"readonly()",
"ref()",
"reactive()",
"toRefs()"
],
answer:"readonly()"
},

{
id:66,

question:"Which function converts a reactive object’s properties to refs in Vue 3?",
options:[
"toRefs()",
"reactive()",
"ref()",
"computed()"
],
answer:"toRefs()"
},

{
id:67,

question:"Which directive is used to define a named slot in Vue?",
options:[
"slot",
"v-slot",
"v-bind",
"v-for"
],
answer:"v-slot"
},

{
id:68,

question:"Which directive allows a parent to provide content for a child’s slot?",
options:[
"v-slot",
"slot",
"v-bind",
"v-model"
],
answer:"v-slot"
},

{
id:69,

question:"Which method is used to force update a component in Vue?",
options:[
"$forceUpdate()",
"$update()",
"$refresh()",
"$rerender()"
],
answer:"$forceUpdate()"
},

{
id:70,

question:"Which function is used to watch multiple reactive sources at once in Vue 3?",
options:[
"watch()",
"watchEffect()",
"computed()",
"reactive()"
],
answer:"watch()"
},

{
id:71,

question:"Which feature allows rendering a list of components dynamically using a loop?",
options:[
"v-for",
"v-if",
"v-show",
"v-bind"
],
answer:"v-for"
},

{
id:72,

question:"Which directive is used to bind HTML attributes dynamically in Vue templates?",
options:[
"v-bind",
"v-on",
"v-model",
"v-text"
],
answer:"v-bind"
},

{
id:73,

question:"Which directive binds an input or textarea element to a variable for two-way binding?",
options:[
"v-model",
"v-bind",
"v-on",
"v-text"
],
answer:"v-model"
},

{
id:74,

question:"Which method is used to emit a custom event in Vue?",
options:[
"$emit()",
"emit()",
"trigger()",
"$dispatch()"
],
answer:"$emit()"
},

{
id:75,

question:"Which function allows creating a reactive object from a plain object in Vue 3?",
options:[
"reactive()",
"ref()",
"computed()",
"toRefs()"
],
answer:"reactive()"
},

{
id:76,

question:"Which function is used to create a read-only computed property in Vue 3?",
options:[
"computed()",
"reactive()",
"ref()",
"watch()"
],
answer:"computed()"
},

{
id:77,

question:"Which feature allows a child to access parent-provided data without prop drilling?",
options:[
"provide/inject",
"props",
"v-bind",
"v-model"
],
answer:"provide/inject"
},

{
id:78,

question:"Which directive is used to conditionally render elements in Vue templates?",
options:[
"v-if",
"v-show",
"v-for",
"v-bind"
],
answer:"v-if"
},

{
id:79,

question:"Which directive is used to render a template only once for performance optimization?",
options:[
"v-once",
"v-if",
"v-for",
"v-show"
],
answer:"v-once"
},

{
id:80,

question:"Which feature allows defining multiple root nodes in Vue 3 templates?",
options:[
"Fragments",
"Slots",
"Teleport",
"Mixins"
],
answer:"Fragments"
},

{
id:81,

question:"Which component allows delaying rendering until asynchronous dependencies are resolved?",
options:[
"Suspense",
"AsyncComponent",
"LazyLoad",
"DeferComponent"
],
answer:"Suspense"
},

{
id:82,

question:"Which function is used to define an asynchronous component in Vue 3?",
options:[
"defineAsyncComponent()",
"asyncComponent()",
"createAsync()",
"loadAsync()"
],
answer:"defineAsyncComponent()"
},

{
id:83,

question:"Which feature allows handling errors thrown in templates or lifecycle hooks?",
options:[
"ErrorBoundary",
"try/catch",
"onErrorCaptured",
"v-error"
],
answer:"onErrorCaptured"
},

{
id:84,

question:"Which lifecycle hook captures errors from child components in Vue 3?",
options:[
"errorCaptured",
"onErrorCaptured",
"onError",
"catchError"
],
answer:"onErrorCaptured"
},

{
id:85,

question:"Which feature allows mounting a Vue app to multiple DOM elements?",
options:[
"Multiple root mounts are not allowed",
"Teleport",
"Fragments",
"v-mount"
],
answer:"Multiple root mounts are not allowed"
},

{
id:86,

question:"Which Vue Router method navigates forward or backward in history by a number?",
options:[
"this.$router.go()",
"this.$router.push()",
"this.$router.replace()",
"this.$router.back()"
],
answer:"this.$router.go()"
},

{
id:87,

question:"Which testing utility library is commonly used for Vue components?",
options:[
"Vue Test Utils",
"Jest Vue",
"Mocha Vue",
"Vitest Vue"
],
answer:"Vue Test Utils"
},

{
id:88,

question:"Which function is used to mount a component for testing in Vue Test Utils?",
options:[
"mount()",
"shallowMount()",
"render()",
"createApp()"
],
answer:"mount()"
},

{
id:89,

question:"Which function is used to mount a component without rendering child components in tests?",
options:[
"shallowMount()",
"mount()",
"render()",
"createApp()"
],
answer:"shallowMount()"
},

{
id:90,

question:"Which function is used to spy on emitted events during component tests?",
options:[
"emitted()",
"spy()",
"mock()",
"onEmit()"
],
answer:"emitted()"
},

{
id:91,

question:"Which feature allows prefetching data before rendering a component in Vue Router?",
options:[
"Navigation Guards",
"Route Guards",
"beforeRouteEnter",
"beforeRouteLeave"
],
answer:"beforeRouteEnter"
},

{
id:92,

question:"Which directive allows applying multiple CSS classes conditionally?",
options:[
"v-bind:class",
"v-class",
"v-style",
"v-bind:style"
],
answer:"v-bind:class"
},

{
id:93,

question:"Which directive allows applying multiple inline styles conditionally?",
options:[
"v-bind:style",
"v-style",
"v-bind:class",
"v-css"
],
answer:"v-bind:style"
},

{
id:94,

question:"Which Vue 3 function creates a reactive reference to a DOM element?",
options:[
"ref()",
"reactive()",
"toRef()",
"onMounted()"
],
answer:"ref()"
},

{
id:95,

question:"Which function converts a reactive object to a plain object for debugging or serialization?",
options:[
"toRaw()",
"toRefs()",
"reactive()",
"readonly()"
],
answer:"toRaw()"
},

{
id:96,

question:"Which Vue 3 API allows watching multiple reactive sources with side effects?",
options:[
"watch()",
"watchEffect()",
"computed()",
"onUpdated()"
],
answer:"watchEffect()"
},

{
id:97,

question:"Which feature allows providing default slot content when none is passed?",
options:[
"Default slot",
"Named slot",
"Scoped slot",
"v-slot"
],
answer:"Default slot"
},

{
id:98,

question:"Which directive is used to conditionally apply classes or styles based on boolean expressions?",
options:[
"v-bind",
"v-if",
"v-show",
"v-model"
],
answer:"v-bind"
},

{
id:99,

question:"Which feature allows defining reusable template fragments in Vue?",
options:[
"Slots",
"Mixins",
"Components",
"Directives"
],
answer:"Slots"
},

{
id:100,

question:"Which function is used to create a new Vue app instance?",
options:[
"createApp()",
"new Vue()",
"mountApp()",
"initializeApp()"
],
answer:"createApp()"
}

];
