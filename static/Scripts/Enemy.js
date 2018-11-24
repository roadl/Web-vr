AFRAME.registerComponent('enemy', {
    schema:
    {
      direction: {type: 'vec3', default: {x : 0, y : 0, z : 0}},
      rotation: {type: 'vec3', default: {x : 0, y : 0, z : 0}},
      step: {type: 'number', default: Math.random() * 0.1 + 0.05}
    },

    init: function()
    {
      var x = Math.random() - 0.5;
      var y = Math.random() - 0.5;
      var z = 0;

      this.data.rotation = new THREE.Vector3(x, y, z);

      var player = document.querySelector('#player');

      var position = this.el.object3D.position;
      var playerPosition = player.object3D.position;

      console.log(playerPosition);

      x = playerPosition.x - position.x;
      y = playerPosition.y - position.y;
      z = playerPosition.z - position.z;

      var direction = new THREE.Vector3(x, y, z).normalize();

      this.data.direction = direction;
    },

    tick: function(time, timeDelta)
    {
      var el = this.el;
      var data = this.data;

      setTimeout(function() {
        //var enemyEl = e.detail.body.el;

        var distanceWithOrigin = el.object3D.position.distanceTo(new THREE.Vector3(0, 0, 0));

        if (distanceWithOrigin >= 35) {
          el.parentNode.removeChild(el);
        }

      }, 0);

      //el.removeAttribute('dynamic-body');

      var rotation = el.getAttribute('rotation');

      rotation.x += data.rotation.x * 0.25 * timeDelta;
      rotation.y += data.rotation.y * 0.25 * timeDelta;

      el.setAttribute('rotation', rotation);

      var direction = data.direction.clone();

      var step = direction.multiplyScalar(data.step);

      //console.log(step);

      el.object3D.position.add(step);

      //el.setAttribute('dynamic-body', true);
    },
});
