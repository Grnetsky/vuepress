<template>
  <div id="course_container">
    <audio src=""></audio>
    <div class="resource" v-for="i in mydate" @click="alert('124')">
      <a :href="i.link"><p>{{i.name}}</p>
      <p>{{i.detail}}</p>
      </a>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      mydate:[
        {id:1,name:"数据结构与算法/css",link:"https://www.bilibili.com/video/BV1cf4y1j7hL",detail:"HTML和CSS作为web页面的骨架是前端必学的基础课"},
        {id:2,name:"javascript",link:"https://www.bilibili.com/video/BV1Sy4y1C7ha?spm_id_from=333.999.0.0"},
        {id:3,name:"javascript高级",link:"https://www.bilibili.com/video/BV1KJ411x7X7?from=search&seid=9271643685260791561&spm_id_from=333.337.0.0"},
        {id:4,name:"jquery",link: "https://www.bilibili.com/video/BV1pt411H7D6?from=search&seid=14476124447803955135&spm_id_from=333.337.0.0"},
        {id:5,name:"vue",link: "https://www.bilibili.com/video/BV1zq4y1p7ga?spm_id_from=333.999.0.0"},
        {id:6,name:"vuepress",link:"https://www.bilibili.com/video/BV1vb411m7NY"},
        {id:7,name:"react",link: "https://www.bilibili.com/video/BV14y4y1g7M4?from=search&seid=17794743732653815947&spm_id_from=333.337.0.0"},
        {id:8,name:""},
        {id:9,name:""},
      ]
    }
  },
  methods:{

  }
}

</script>

<style scoped>
a:hover {
  text-decoration: none !important;
}
a:link {
  text-decoration: none;
}
* {
  text-decoration: none;
  list-style: none;
}

.resource {
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 200px;
  height: 250px;
  border-radius: 10px;
  margin: 15px;
  border:2px solid;
  transition: all .3s;
}
#course_container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;

}
.resource:hover {
  transform: scale(1.05);
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,.2);

}
.resource p {

}
</style>
