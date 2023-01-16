function fitsInOneBox(boxes: { l: number; w: number; h: number }[]): boolean {
  return boxes
    .sort((a, b) => a.l - b.l)
    .slice(0, -1)
    .every((curr, i) => {
      const next = boxes[i + 1];
      return curr.l < next.l && curr.w < next.w && curr.h < next.h;
    });
}

// Banguis, Mark Vergel B.
// BSCS 4A
