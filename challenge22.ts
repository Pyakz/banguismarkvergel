function checkStepNumbers(systemNames: string[], stepNumbers: number[]) {
  const systems = systemNames.reduce((acc, name, i) => {
    if (!acc[name]) {
      acc[name] = [stepNumbers[i]];
    } else {
      acc[name].push(stepNumbers[i]);
    }
    return acc;
  }, {});

  return Object.values(systems).every((steps: any) => {
    for (let i = 1; i < steps.length; i++) {
      if (steps[i] <= steps[i - 1]) {
        return false;
      }
    }
    return true;
  });
}

// Banguis, Mark Vergel
// BSCS 4A
