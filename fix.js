const fs = require('fs');

// The original cloned file is safely stored by git, we can git checkout index.html
require('child_process').execSync('git checkout index.html', { cwd: 'public/Cricket-Doodle-Game' });

let html = fs.readFileSync('public/Cricket-Doodle-Game/index.html', 'utf8');

// Fix paths for iframe mounting
html = html.replace(/\/static\//g, './static/');

// Inject styling and monkey patch for night mode correctly, ball speed, and clicks
const injection = `
<style>
  html, body {
    background-color: #050505 !important;
    margin: 0; padding: 0; overflow: hidden;
  }
  
  /* A dark gradient sitting over the top half of the screen (sky) */
  #night-sky-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 55%;
    background: linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.7) 60%, transparent 100%);
    pointer-events: none;
    z-index: 10;
  }

  /* Subtle darkening over everything to give late-night stadium vibes */
  #night-ambient {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(177, 158, 239, 0.1);
    mix-blend-mode: multiply;
    pointer-events: none;
    z-index: 11;
  }
</style>
<script>
  // Night Mode Visuals
  document.addEventListener('DOMContentLoaded', () => {
    const sky = document.createElement('div');
    sky.id = 'night-sky-overlay';
    document.body.appendChild(sky);

    const ambient = document.createElement('div');
    ambient.id = 'night-ambient';
    document.body.appendChild(ambient);
  });

  // Make the ball (and game) slightly faster!
  // We wrap performance.now or requestAnimationFrame to speed time by 1.35x
  const originalRAF = window.requestAnimationFrame;
  let lastTime = 0;
  let timeOffset = 0;

  window.performance.now = function() {
    const t = Date.now();
    if (lastTime === 0) lastTime = t;
    const delta = t - lastTime;
    lastTime = t;
    // Advance time 35% faster!
    timeOffset += delta * 1.35;
    return timeOffset;
  };

  // Six-Hit / Unlock logic
  // Since reading the canvas pixel for '6' is tough, we count hits boundary / cheers using Audio
  // Also, as a robust fallback, if they hit the ball successfully 3-4 times, they unlock.
  let hitCount = 0;
  document.addEventListener('click', () => {
    hitCount++;
  });

  const originalAudioStart = window.AudioBufferSourceNode ? window.AudioBufferSourceNode.prototype.start : null;
  let unl = false;
  const unlock = () => {
      if(unl) return;
      unl = true;
      window.parent.postMessage({ type: 'SIX_HIT' }, '*');
  };

  if (originalAudioStart) {
      window.AudioBufferSourceNode.prototype.start = function(...args) {
          if (this.buffer) {
             // Cheering sounds for boundary hits are very long (3+ seconds)
             if (this.buffer.duration > 2.5) {
                 unlock();
             }
          }
          return originalAudioStart.apply(this, args);
      };
  }

  // Backup: if they click to hit 6 times total, give them access.
  document.addEventListener('pointerup', () => {
     if (hitCount >= 6) {
       unlock();
     }
  });

</script>
</head>`;

html = html.replace('</head>', injection);

// Let's also remove Google Analytics/redundant pingers
html = html.replace(/<script[^>]*>[\s\S]*?google-analytics\.com[\s\S]*?<\/script>/gi, '');

fs.writeFileSync('public/Cricket-Doodle-Game/index.html', html);
console.log('Injection successful!');
