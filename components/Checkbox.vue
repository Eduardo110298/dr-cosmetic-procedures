<template>
  <label class="container" :for="$vnode.key">
    <slot />
    <input :id="$vnode.key" :name="name" type="checkbox" :checked="checked ? 'checked' : ''" @change="handleChange" :value="$vnode.key"/>
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
    name: "Checkbox",
    props: {
      checked: {
        type: Boolean,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    methods: {
      handleChange({ target }){
        this.$emit('change', { checked: target.checked, value: target.value })
      }
    }
}
</script>

<style scoped>
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid black;
  background-color: #fff;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: black;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>