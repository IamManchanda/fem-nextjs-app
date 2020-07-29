const notes = new Array(15).fill(1).map((_, i) => ({
  id: Date.now() + (i + 1),
  title: `Note ${i + 1}`,
}));

module.exports = notes;
