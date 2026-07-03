/**
 * Prism/refractor grammar for Lean 4, registered in contentlayer.config.ts
 * since refractor has no built-in Lean support.
 */
leanSyntax.displayName = 'lean'
leanSyntax.aliases = ['lean4']

export default function leanSyntax(Prism) {
  Prism.languages.lean = {
    comment: [
      { pattern: /\/-[\s\S]*?-\//, greedy: true },
      { pattern: /--.*/, greedy: true },
    ],
    string: {
      pattern: /"(?:\\.|[^\\"])*"/,
      greedy: true,
    },
    char: {
      pattern: /'(?:\\.|[^\\'])'/,
      greedy: true,
    },
    attribute: {
      pattern: /@\[[^\]]*\]/,
      greedy: true,
      alias: 'regex',
    },
    keyword:
      /\b(?:abbrev|admit|attribute|axiom|by|calc|class|constant|def|deriving|do|else|end|example|exact|extends|for|from|fun|have|if|import|in|inductive|infix|infixl|infixr|instance|lemma|let|macro|macro_rules|match|mutual|namespace|noncomputable|notation|open|partial|postfix|prefix|private|protected|rec|return|scoped|section|set_option|show|sorry|structure|syntax|then|theorem|universe|unsafe|variable|where|with)\b/,
    sort: {
      pattern: /\b(?:Prop|Sort|Type)\b/,
      alias: 'builtin',
    },
    number: /\b(?:0x[a-fA-F\d]+|0b[01]+|\d+(?:\.\d+)?)\b/,
    function: /\b[a-zA-Z_][\w!?']*(?=\s*\()/,
    'class-name': /\b[A-Z][\w!?']*/,
    operator:
      /:=|=>|<-|->|←|→|↔|∀|∃|∧|∨|¬|≠|≤|≥|∈|∉|⊆|∘|×|↦|⟨|⟩|‹|›|\.\.|[=<>+\-*/%!&|^~∣λ]|:(?!=)/,
    punctuation: /[(){}[\],;.]/,
  }
}
