const icons = ['user', 'github', 'about', 'folder', 'stacks', 'email'];

icons.forEach(name => {
  const el = document.getElementById(`${name}-icon`);
  if (el) {
    fetch(`assets/icons/${name}.svg`)
      .then(res => res.text())
      .then(svg => {
        // Create a temporary wrapper to parse the SVG string
        const temp = document.createElement('div');
        temp.innerHTML = svg;
        const svgEl = temp.querySelector('svg');

        if (svgEl) {
          svgEl.classList.add('icon');
          el.innerHTML = '';
          el.appendChild(svgEl);
        }
      })
      .catch(err => console.error(`Error loading ${name}.svg:`, err));
  }
});
