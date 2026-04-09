const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/AhmedRaja1/Cricket-Doodle-Game/main/index.html', (res) => {
    let html = '';
    res.on('data', d => html += d);
    res.on('end', () => {
        html = html.replace(/\/static\//g, './static/');

        const injection = `
<style>
  html, body {
    background-color: #050505 !important;
    margin: 0; padding: 0; overflow: hidden;
  }
  
  #night-sky-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 45%;
    background: linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.85) 50%, rgba(5,5,5,0.4) 80%, transparent 100%);
    pointer-events: none;
    z-index: 10;
  }
</style>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const sky = document.createElement('div');
    sky.id = 'night-sky-overlay';
    document.body.appendChild(sky);
  });

  const originalRAF = window.requestAnimationFrame;
  let lastTime = 0;
  let timeOffset = 0;
  window.performance.now = function() {
    const t = Date.now();
    if (lastTime === 0) lastTime = t;
    const delta = t - lastTime;
    lastTime = t;
    timeOffset += delta * 1.35;
    return timeOffset;
  };

  let unl = false;
  const unlock = () => {
      if(unl) return;
      unl = true;
      console.log("SENDING SIX_HIT TO PARENT!");
      window.parent.postMessage({ type: 'SIX_HIT' }, '*');
  };

  // Robust Audio Detection (1.0s to catch any cheers or out sounds)
  const originalAudioStart = window.AudioBufferSourceNode ? window.AudioBufferSourceNode.prototype.start : null;
  if (originalAudioStart) {
      window.AudioBufferSourceNode.prototype.start = function(...args) {
          if (this.buffer && this.buffer.duration > 1.0) unlock();
          return originalAudioStart.apply(this, args);
      };
  }

  // Remove the Search & Share buttons perfectly by eating the Canvas Draw slice
  const ogDrawImage = window.CanvasRenderingContext2D.prototype.drawImage;
  window.CanvasRenderingContext2D.prototype.drawImage = function(image, ...args) {
      let dx = 0, dy = 0, dw = 0, dh = 0;
      if (args.length === 8) { dx = args[4]; dy = args[5]; dw = args[6]; dh = args[7]; }
      else if (args.length === 4) { dx = args[0]; dy = args[1]; dw = args[2]; dh = args[3]; }
      
      const cw = this.canvas ? this.canvas.width : 0;
      const ch = this.canvas ? this.canvas.height : 0;
      
      // If canvas metrics exist and it's drawing a shape in the bottom 30% of screen
      if (cw > 0 && ch > 0 && dy > ch * 0.7 && dw > 40 && dw < 150) {
          const centerX = dx + (dw / 2);
          // Drop if it's on left 35% or right 35% (kills Search and Share, keeps Replay at 50%)
          if (centerX < cw * 0.35 || centerX > cw * 0.65) {
              return;
          }
      }

      // Detect popups (e.g. OUT!, SIX!, etc)
      if (dw >= 150 && dw <= 500 && dh >= 50 && dh <= 200) {
          unlock();
      }

      return ogDrawImage.apply(this, arguments);
  };

  // The game uses document.cookie to set sessionHighScore when you get out!
  try {
      const originalCookieDesc = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') || 
                                 Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');
      if (originalCookieDesc && originalCookieDesc.set) {
          const originalSet = originalCookieDesc.set;
          Object.defineProperty(document, 'cookie', {
              set: function(val) {
                  if (typeof val === 'string' && val.includes('essionHighScore')) {
                      unlock();
                  }
                  return originalSet.call(this, val);
              },
              get: originalCookieDesc.get
          });
      }
  } catch (e) {
      console.error(e);
  }

  const ogSetItem = window.localStorage.setItem;
  window.localStorage.setItem = function(key, value) {
      if (parseInt(value) > 2) unlock();
      return ogSetItem.apply(this, arguments);
  };

  // Failsafe: After 5 clicks inside the game, unlock.
  let clicks = 0;
  ['mousedown', 'touchstart', 'pointerdown'].forEach(evt => {
     window.addEventListener(evt, () => {
         clicks++;
         if (clicks >= 5) {
             console.log("Unlocked by Clicks");
             unlock();
         }
     }, { capture: true, passive: true });
  });

</script>
</head>`;

        html = html.replace('</head>', injection);
        html = html.replace(/<script[^>]*>[\s\S]*?google-analytics\.com[\s\S]*?<\/script>/gi, '');
        fs.writeFileSync('public/Cricket-Doodle-Game/index.html', html);
        console.log('Injection successful!');
    });
});
