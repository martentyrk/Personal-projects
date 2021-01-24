<template>
  <div class="chat-window">
    <textarea name="chatbox" id="chatbox" cols="40" rows="5" placeholder="Type here..."></textarea>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .chat-window {
        background-color: white;
        margin: 150px auto;
        width: 350px;
        height: 500px;
        border-width: 0.5;
        border-style: solid;
        border-color: gray;
        position: relative
    }
    #chatbox {
      border-color: orange;
      resize: none;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 344px;
    }
</style>