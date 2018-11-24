AFRAME.registerComponent('player', {
    schema:
    {
        hp:{type:'number', default: 100},
    },

    init: function()
    {
        var hp = this.data.hp;

        this.el.addEventListener('decreaseHp', function(evt){
            console.log("Decrease Hp: " + evt.detail.damage);
            hp -= evt.detail.damage;

            var hpEl = document.querySelector('#hp');

            var score = "HP : " + hp;

            hpEl.setAttribute('value', score);
         });

        this.el.emit('decreaseHp', {damage:10});

        console.log(this.el.object3D.position.clone());
    },

    tick: function()
    {

    }
});
