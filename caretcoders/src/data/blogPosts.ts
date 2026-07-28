import { BlogPost } from '../types';

export const blogPostsData: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Building Zero-Knowledge Proof Pipelines for Enterprise Supply Chain Integrity',
    slug: 'zk-proof-pipelines-supply-chain',
    summary: 'How CaretCoders engineered DetailMint to generate and verify zk-SNARK cryptographic proofs in under 10ms for high-value physical asset verification.',
    content: `
### The Challenge of Modern Data Provenance

In global trade and high-value manufacturing, verifying that a physical good or software package matches its declared specifications without exposing sensitive proprietary trade secrets is a fundamental engineering challenge.

Traditional approaches rely on trusted central authorities or transparent public ledgers where all transaction payload data is exposed. Neither solution satisfies enterprise confidentiality requirements.

### Enter Zero-Knowledge Cryptography

To solve this for our **DetailMint** platform, the CaretCoders team architected a hybrid Rust + WebAssembly zk-SNARK pipeline.

\`\`\`rust
// Rust zk-SNARK circuit proof generator snippet
use ark_bn254::Bn254;
use ark_groth16::Groth16;
use ark_snark::SNARK;

pub fn generate_asset_proof(
    secret_hash: [u8; 32],
    public_root: [u8; 32]
) -> Result<Proof<Bn254>, CryptoError> {
    // Generate zk proof in < 8ms
    let circuit = ProvenanceCircuit { secret_hash, public_root };
    Groth16::<Bn254>::prove(&PROVING_KEY, circuit, &mut rng)
}
\`\`\`

### Key Architectural Takeaways

1. **Client-Side WASM Compilation**: Compiling proof generation logic into WebAssembly allows browsers and IoT edge nodes to generate proofs without exposing raw keys to central servers.
2. **Sub-10ms Verification**: By pre-indexing Merkle tree roots in TimescaleDB and Redis, verification occurs in constant time regardless of ledger size.
3. **Cross-Chain Interoperability**: Proofs can be submitted via relayers to EVM contracts or Solana programs simultaneously.
    `,
    author: {
      name: 'Aria Vance',
      role: 'Lead Cryptographic Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    category: 'Software Engineering',
    readTime: '6 min read',
    publishDate: 'July 18, 2026',
    tags: ['Cryptography', 'Rust', 'WebAssembly', 'DetailMint', 'Zero Knowledge'],
    featured: true
  },
  {
    id: 'post-2',
    title: 'Reducing Pesticide Usage by 68%: Lessons from Solar LoRaWAN Mesh Networks',
    slug: 'reducing-pesticides-lorawan-iot',
    summary: 'A deep dive into embedded C, LoRaWAN mesh topologies, and PyTorch thermal imaging algorithms deployed across 120,000 acres of farmland.',
    content: `
### Rethinking Agricultural Inputs

Excessive chemical pesticide and fertilizer application damages soil microbiology, contaminates groundwater, and increases operational expenses for agricultural producers. 

Our **Chemical-Reduced Precision Farming Initiative** was founded on a simple premise: *apply input only where and when the crop specifically demands it*.

### Hardware Topology at the Edge

We designed custom low-power solar sensor nodes equipped with:
- NPK (Nitrogen, Phosphorus, Potassium) ion-selective electrodes
- Soil moisture TDR (Time-Domain Reflectometry) sensors
- LoRaWAN 915MHz long-range mesh transceivers
- Ultra-low power STM32 microcontroller executing duty-cycled sleeping routines

\`\`\`c
// STM32 Sleep & LoRa Telemetry Burst
void System_Sleep_Routine(void) {
    HAL_ADC_Stop(&hadc1);
    LoRa_SetPowerMode(LORA_SLEEP);
    HAL_PWR_EnterSTOPMode(PWR_LOWPOWERREGULATOR_ON, PWR_STOPENTRY_WFI);
}
\`\`\`

### AI Micro-Dosing Neural Models

Multi-spectral drone imagery is processed daily using a PyTorch UNet segmentation model. By correlating thermal vegetation indices (NDVI) with ground-node soil pH and NPK levels, our engine outputs a precision GIS prescription map with sub-meter resolution for variable-rate tractor spraying.

### Results
- **Pesticide Volumetric Reduction**: -68.4%
- **Net Crop Yield Increase**: +21.5%
- **Battery Autonomy**: 3+ years continuous operation without battery replacement.
    `,
    author: {
      name: 'Dr. Rahul Sharma',
      role: 'VP of AgriTech Hardware & AI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    category: 'AI & Automation',
    readTime: '8 min read',
    publishDate: 'June 29, 2026',
    tags: ['IoT', 'AgriTech', 'LoRaWAN', 'PyTorch', 'Embedded Systems'],
    featured: true
  },
  {
    id: 'post-3',
    title: 'AST-Driven AI: How InkSquirel Eliminates Outdated API Documentation',
    slug: 'ast-driven-ai-inksquirel-documentation',
    summary: 'How parsing Abstract Syntax Trees alongside Gemini 2.5 models provides 99%+ accurate, auto-updating developer hubs directly inside Git CI/CD workflows.',
    content: `
### The Silent Death of Technical Documentation

In fast-moving engineering teams, documentation is almost always out of date the moment it is merged. Comments rot, function signatures evolve, and API parameters are added without updating the OpenAPI specification.

### Why Generic LLM Prompts Fail

Naive AI document generators feed entire files to an LLM prompt. This results in hallucinated parameter descriptions, missed edge-case return types, and context window pollution.

### The InkSquirel Hybrid Architecture

**InkSquirel** takes a two-phase hybrid approach:

1. **Deterministic AST Extraction**: Tree-Sitter parses source code into structural Abstract Syntax Trees to determine precise function signatures, type definitions, and exports.
2. **Contextual LLM Synthesizer**: The extracted AST nodes are passed to **Gemini 2.5 Flash** with strict schema instructions to synthesize clear human-readable explanations, cURL examples, and breaking-change logs.

\`\`\`typescript
import { GoogleGenAI } from '@google/genai';
import parser from 'tree-sitter';

export async function synthesizeApiDoc(astData: ASTNode) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: \`Generate OpenAPI v3 JSON snippet for AST node: \${JSON.stringify(astData)}\`
  });
  return response.text;
}
\`\`\`
    `,
    author: {
      name: 'Elena Rostova',
      role: 'Principal Developer Tooling Engineer',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
    },
    category: 'SaaS Development',
    readTime: '5 min read',
    publishDate: 'May 14, 2026',
    tags: ['InkSquirel', 'TypeScript', 'Gemini API', 'Developer Experience', 'AST'],
    featured: false
  },
  {
    id: 'post-4',
    title: 'Cross-Platform React Native vs Kotlin Multiplatform: Architectural Tradeoffs',
    slug: 'react-native-vs-kmp-tradeoffs',
    summary: 'Comparing user interface fluidity, build times, native bridge latency, and developer ergonomics across CaretCoders mobile client projects.',
    content: `
### Selecting the Ideal Mobile Stack

At CaretCoders, we build mobile companions for complex IoT, Web3, and SaaS platforms. Choosing between React Native and Kotlin Multiplatform (KMP) depends strictly on where your app logic lives.

### Comparison Matrix

- **React Native + Expo**: Ideal when rapid UI iteration, cross-platform component sharing, and instant over-the-air updates are top priority.
- **Kotlin Multiplatform**: Superior when core domain logic (e.g. offline SQLite syncing, Bluetooth LE peripheral communication, local encryption) must be shared without UI overhead.

### Our Recommendation
Use React Native for customer-facing mobile portals with heavy UI design requirements; leverage KMP when building low-level hardware companion apps or security modules.
    `,
    author: {
      name: 'Kaelen Miller',
      role: 'Lead Mobile Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    category: 'Mobile Development',
    readTime: '7 min read',
    publishDate: 'April 02, 2026',
    tags: ['Mobile', 'React Native', 'Kotlin', 'Architecture'],
    featured: false
  },
  {
    id: 'post-5',
    title: 'Bootstrap to Scale: Operational Lessons from Building CaretCoders',
    slug: 'bootstrap-to-scale-caretcoders-insights',
    summary: 'How our engineering ethos of modularity, zero-fluff aesthetics, and customer-first R&D propelled our startup growth.',
    content: `
### Building Software with Cyber-Precision

From day one at **CaretCoders**, we rejected standard startup fluff—no superficial marketing slogans, no unnecessary abstractions, and no bloated feature creep.

Instead, we committed to three core operating principles:
1. **Engineers Talking to Customers**: Every team member spends hours directly reviewing client telemetry and feedback.
2. **Deterministic Infrastructure**: Every product (DetailMint, Precision Farming, InkSquirel) runs on automated containerized Cloud Run / GCP pipelines.
3. **Relentless Craftsmanship**: Aesthetic design and code clarity are two sides of the same coin.

Here is what we learned after shipping 3 flagship platforms in 24 months.
    `,
    author: {
      name: 'Devin Thorne',
      role: 'Co-Founder & CEO',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    category: 'Startup Insights',
    readTime: '6 min read',
    publishDate: 'March 10, 2026',
    tags: ['Startup', 'Culture', 'Leadership', 'CaretCoders'],
    featured: false
  }
];
