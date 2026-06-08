const fs = require('fs');

let content = fs.readFileSync('components/RoadmapGraph.tsx', 'utf8');

// Fix SVG dimensions so it doesn't collapse
content = content.replace(/<svg xmlns="http:\/\/www.w3.org\/2000\/svg"  viewBox="/g, '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="');

// Make topics clickable!
// Find any <g data-type="topic" data-title="..."> ... </g> and wrap the rect & text inside it with an <a> tag
// Or just wrap the whole <g> in an <a> tag? Actually SVG <a> tag <a href="..." target="_blank"> <g>...</g> </a> works perfectly!

// Let's replace <g data-type="topic" data-title="XXX" ... > ... </g>
// We can use a regex to match <g data-type="topic"[^>]*data-title="([^"]+)"[^>]*>
content = content.replace(/<g data-node-id="([^"]+)" data-type="topic" data-title="([^"]+)"[^>]*>([\s\S]*?)<\/g>/g, (match, id, title, inner) => {
  // Convert title to a slug
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const url = `https://roadmap.sh/${slug}`;
  // Let's make it an SVG <a> tag
  // We need to keep the original <g> wrapper, and put <a> inside it or outside it
  // Outside is safer for applying transform properly if any
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" className="cursor-pointer group/node">\n<g data-node-id="${id}" data-type="topic" data-title="${title}" className="transition-transform duration-300 hover:scale-110" style={{ transformOrigin: 'center', transformBox: 'fill-box' }}>\n${inner}\n</g>\n</a>`;
});

// Do the same for buttons that have data-link
content = content.replace(/<g data-link="([^"]+)" data-node-id="([^"]+)" data-type="button"[^>]*>([\s\S]*?)<\/g>/g, (match, link, id, inner) => {
  return `<a href="${link}" target="_blank" rel="noopener noreferrer" className="cursor-pointer">\n<g data-node-id="${id}" data-type="button" className="transition-transform duration-300 hover:scale-105" style={{ transformOrigin: 'center', transformBox: 'fill-box' }}>\n${inner}\n</g>\n</a>`;
});

// Let's check text colors to ensure they are visible.
// Some text was set to fill="var(--background)" because it was on a light yellow background.
// But some text was on white background.
// Wait, my previous script converted:
// fill="#000000" -> fill="var(--background)" (this is dark text on bright boxes like Yellow and White)
// If the background was transparent or white, var(--background) will be dark on dark!
// The original background was #ffffff (white).
// I made it fill="transparent".
// Thus, black text (#000000) on a transparent box (over dark theme) became var(--background) (dark gray) on dark theme! No wonder it's invisible!
// So: text that is #000000 on transparent background needs to be var(--foreground) (white).
// Yellow boxes use #fdff00. They still have var(--chart-3) (yellow). Text inside them SHOULD be var(--background) (dark).
// Since the structure doesn't easily link text to its parent box via regex, let's just make ALL text var(--foreground) (white text) UNLESS it is inside a <rect fill="var(--chart-3)">
// Actually, it's easier to recreate from rawSvg again with a DOM parser or just precise regex.

fs.writeFileSync('components/RoadmapGraph.tsx', content);
console.log('Fixed RoadmapGraph.tsx');
