<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li :class="returnColor(this.msg)">
        <span  v-on:click="aa">
          Core Docs
        </span>
         <router-link to="/venen">11111111</router-link> |
      </li>
      <li>
        {{datalist.address}}
      </li>     
    </ul>
  </div>
</template>

<script>

export default {
  name: 'B',
  data () {
    return {
      msg: 'B',
      datalist:""
    }
  },
  methods: {
    returnColor:function(type){
      let aa = "123456789"
       switch(type)
            {
            case 'A':
            return 'red'
            break;
            case 'B':
            return 'blue'
            break;
            default:
            return 'red'
            }

    },
    aa:function(){
       let bb = "123456789"
       console.log(bb)
      this.msg="A";
      [2,1,3].forEach(x=> {console.log(x)});

      this.axios.get('https://www.easy-mock.com/mock/5d0061826748ee11d73e1481/example/list').then((response)=>{
                console.log(response.data.data.projects[0])
                this.datalist = response.data.data.projects[0]
                console.log(this.datalist.object['310000'])
            }).catch((response)=>{
                console.log(response)
            })

    }
  },
}



</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red{
  border: 1px solid red;
}
.blue{
  border: 1px solid blue;
}
</style>
