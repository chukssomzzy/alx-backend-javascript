export interface MajorCredits {
  credits: number;
  brand: string;
}

export interface MinorCredits {
  credits: number;
  brand: string;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits +  subject2.credits,
    brand: subject1.brand,
  };
}

export function sumMinorCredits(subject1: MajorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1.brand,
  };
}
