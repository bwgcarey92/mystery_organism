// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arrDNA) => {
  return {
    specimenNum: num,
    dna: arrDNA.slice(0, 15),
    mutate() {
      const randBase = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randBase];

      let newBase = returnRandBase();
      while (newBase === currentBase) {
        newBase = returnRandBase();
      }

      this.dna[randomIndex] = newBase;

      return this.dna;
    }
  }
};







