class Hamming {
  compute(strandA: string, strandB: string): number {
    let distance: number = 0

    if (strandA.length !== strandB.length)
      throw new Error('DNA strands must be of equal length.')

    for (let i = 0; i < strandA.length; i++) {
      if (strandA[i] !== strandB[i]) 
        distance++
    }

    return distance
  }
}

export default Hamming