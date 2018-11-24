AFRAME.registerComponent('score', {
    schema:
    {
        score:{type: 'number', default: 0},
    },

    init: function()
    {

    },

    tick: function(time, timeDelta)
    {
      var el = this.el;

      this.data.score += timeDelta;

      var score = "Score : " + Math.floor(this.data.score * 0.025);

      el.setAttribute('value', score);
    },
});
