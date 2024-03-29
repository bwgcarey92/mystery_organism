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
    },
    compareDNA(pAeqour) {
      const otherDNA = pAeqour.dna;
      let identicalBases = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === otherDNA[i]) {
          identicalBases++;
        }
      }

      const percentage = (identicalBases / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and Specimen #${pAeqour.specimenNum} have ${percentage}% DNA in common.`);
    },
    willLikelySurvive() {
      const countCG = this.dna.filter(base => base === 'C' || base === 'G').lenth;
      const percentageCG = (countCG / this.dna.length) * 100;

      if (percentageCG >= 60) {
        return true;
      } else {
        return false;
      };
    }
  }
};

const pAeqourInstances = [];

for (let i = 1; i <= 30, i++) {
  const organism = pAequorFactory(i, mockUpStrand());

  while (!organism.willLikelySurvive()) {
    organism.mutate();
  }

  pAeqourInstances.push(organism);
}

console.log(pAeqourInstances);








