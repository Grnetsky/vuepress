<template>
  <div>
  <div class="resource" v-for="i in mydate" @click="alert('124')">
    <li>{{ i.id}}</li>
    {{i.name}}
</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      mydate:[
        {id:1,name:"a"},
        {id:2,name:"b"},
        {id:3,name:"c"},
      ]
    }
  },
  methods:{
    alert(a){
      alert(a)
    }
  }
}

</script>

<style scoped>
* {
  text-decoration: none;
  list-style: none;
}

.resource {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin: 15px;
  border: 4px solid tomato;
  background-color: pink;
}


</style>
