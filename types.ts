
export enum AIProvider {
  OPENAI = 'OpenAI',
  ANTHROPIC = 'Anthropic',
  GOOGLE = 'Google',
  ASIAN = 'Modelos Asiáticos'
}

export interface ModelSpec {
  id: string;
  name: string;
  provider: AIProvider;
  contextWindow: string;
  maxOutput: string;
  sweBenchScore: number;
  bestFor: string[];
  strengths: string[];
  weaknesses: string[];
  costPerMillion: string;
  multimodal: boolean;
  color: string;
}

export interface TaskRecommendation {
  task: string;
  winner: string;
  provider: AIProvider;
  reason: string;
  icon: string;
}
