<template>
  <div>
<!--  <div class="resource" v-for="i in mydate" @click="alert('124')">-->
<!--    <p>{{ i.id }}{{i.name}}</p>-->
<!--</div>-->
    <h1>待补充</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      mydate:[
        {id:1,name:"A"},
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
  transition: all .3s;
}
.resource:hover {
  transform: translateY(-10px);
}
</style>
