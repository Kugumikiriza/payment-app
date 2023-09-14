<template>
  
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default{
  name:'App',
  components:{
    //
  }

}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  color: blue;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.Payment-btn {
  width: 200px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: blue;
  cursor: pointer;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  margin-top: 4cm;
}

.container{
  width: 300px; 
  height: 600px;
  background-color:aliceblue;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  margin-left: 15cm;
}
.container h3,p{
  text-align: left;
  margin-left: 8px;
}
.navbar{
  color: white;
  background-color: blue;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
}
</style>
