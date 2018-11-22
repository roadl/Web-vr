AFRAME.registerComponent('automove', {
  schema:{
    step: {type: 'number', default: -0.01}
  },

  tick: function(){
    var player = this.el.parentNode;
    var camera = this.el;
    
    var direction = new THREE.Vector3().copy(camera.object3D.getWorldDirection());
    
    console.log()

    var step = direction.multiplyScalar(this.data.step * 4);

    var tmpPos = new THREE.Vector3().copy(player.object3D.position);
    
    tmpPos.add(step);
    var distanceWithOrigin = tmpPos.distanceTo(new THREE.Vector3(0, 0, 0));

    if(distanceWithOrigin > 28)
    {
      
    }
    else
    {
      if(tmpPos.y < 0)
      {
        step.y = 0;
      }

      player.object3D.position.add(step);
    }
  }
});