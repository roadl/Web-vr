AFRAME.registerComponent('player', {
    schema:
    {
        hp:{type:"number", default: 100},
    },

    init: function()
    {
        var asdf = this.data.hp;

        this.el.addEventListener('asdf', function(evt){
            console.log("Decrease Hp: " + evt.detail.damage);
            asdf -= evt.detail.damage;
         });

        this.el.emit('asdf', {damage:10});

        console.log(this.el.object3D.position.clone());
    },

    tick: function()
    {
    }
});
