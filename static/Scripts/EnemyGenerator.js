AFRAME.registerComponent('enemy-generator', {
  schema:{
    spawnDelay: {type: 'number', default: 0}
  },

  init: function()
  {
    this.el.addEventListener('generate', function()
    {
      console.log("generate");

      var newObjectEl;

      var x = Math.random() - 0.5;
      var y = Math.random();
      var z = Math.random() - 0.5;

      var direction = new THREE.Vector3(x, y, z).normalize();

      var step = direction.clone().multiplyScalar(30);

      console.log(step);

      var type = Math.floor(Math.random() * 2);

      if (type === 1)
        newObjectEl = document.createElement('a-sphere');
      else{
        newObjectEl = document.createElement('a-box');
      }

      newObjectEl.setAttribute('position', {x: step.x, y: step.y, z: step.z});
      newObjectEl.setAttribute('mixin', 'enemy');
      document.querySelector('a-scene').appendChild(newObjectEl);
    });

    this.el.emit('generate');
  },

  tick: function(time, timeDelta)
  {
    var data = this.data;

    data.spawnDelay += timeDelta;

    if(data.spawnDelay > 1000)
    {
      data.spawnDelay -= 1000;

      this.el.emit('generate');
    }
  }
});
