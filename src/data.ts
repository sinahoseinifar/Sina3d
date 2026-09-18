import { ServiceItem, WorkItem, HonorItem, ContactChannel } from './types.ts';

export const BRAND_ASSETS = {
  headerLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbFk2JpJIMoV0hSD5G_jGNtAWEjHn-oBqgWZcXCDJDwmiLM1ljbhRd8TzvypgaiBKYkxF_pE0stWoAdlvphnihk0BbIo2KQBZ7mBEjYqNOb5LERKKtzLUlBmncvs6ojMJEYMLWqNFKvhhuVgJZCy_O8xAnBkLaIapZcBU-xK6XhfaqJmVJZRQWar1NeEsD6CH5StkzbdUU-2DPPbb9rBXJ2L87WRMGE5DLh2r3s6TxUR2POOzINZLaPUGfIuJ7vQho6A',
  heroStudio: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpjnKowCnZmG3gSkvB5z7eD8Rul_mUN0eJRsvbRtai2ro38Vw1uT7ZFUTn5Tmd5vS2ws7rXAdnaXEIkwSLBVwlmcKOW2ML1nVemLKuUmYhiyGiPg1XPG5vUw785iB3WQ-nwDmS4Tp1vf1Aboxbqgj7DGBROfQHy-AP-xSafgfMpl7Yj5WoZx_pu8Sjz3bFb9L7TmXyR29Q51af9KQB1TOP1COsUdZDtINmKupZAlHORlmFbwJ7jDoNetX0wtJ2HYdXMw',
  footerLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqkvBnT6Y9S_SK5Umdke9omQt_oZpPPtWyIzDUtplNjntoESAU3gBb-YJ4fmLsyH4hGkmL7EAS5LRRvTnFM4Gssk1EUR-C1oc3v60bQgPVF_nD7KxquHO-Yu8uUo4WwfaxiK3BGlz6LRnJjc_Ezbo5v5OHwnVaCmhxhlWHGsmDCWYFvCW8LPgH1XBUF_NWz7Rl6J-Z7oU8nTlrWKTE2Hk-zcxmoaM4NgRnkJiqehSX3N567P18S0C-8WTR14YZikKROA'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    index: '01',
    title: 'Video Editing',
    description: 'Cinematic rhythm, tempo synchronization, and high-impact pacing built for commercials and digital flagships.'
  },
  {
    id: 's2',
    index: '02',
    title: 'Product Teasers',
    description: 'Highlighting industrial mechanics, luxury accessories, and tech hardware with macro caustics and moody studio lighting.'
  },
  {
    id: 's3',
    index: '03',
    title: 'Motion Graphics',
    description: 'Kinetic typography systems, interface HUDs, and stylized motion language for bold visual identities.'
  },
  {
    id: 's4',
    index: '04',
    title: 'Video Post-Production',
    description: 'Comprehensive color grading, optical cleanups, compositing, dynamic sound design, and master delivery.'
  },
  {
    id: 's5',
    index: '05',
    title: 'AI Video Creation',
    description: 'Next-generation generative neural models, hybrid 3D-AI style blending, and rapid conceptual prototyping.'
  },
  {
    id: 's6',
    index: '06',
    title: '3D Animation',
    description: 'Physical simulations, particle fluids, rigid-body mechanics, and sculptural lighting rendered in Octane and Redshift.'
  },
  {
    id: 's7',
    index: '07',
    title: 'Motion Design',
    description: 'Holistic creative direction, structural storyboarding, brand worldbuilding, and full broadcast execution.'
  },
  {
    id: 's8',
    index: '08',
    title: '& More',
    description: 'Custom experiential visual pipelines, projection installations, and proprietary generative motion toolsets.'
  }
];

export const WORKS: WorkItem[] = [
  {
    id: 'w1',
    index: '01',
    title: 'SYNTHESIS',
    category: 'Commercial CGI',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UIk8GQ0pJuCOwMqcFR80snEayA1D5igH9W1sqQE6IL8QqZxSrHieVvzbX2Ad3GsFkLqPam2GlQEpvduUXWNTgMYBltWcw-vLGSgC679eFnYkqQ3xNrWDmzadZwP449QtQ9WuwTidnw3WkKWRXrhlRl76PfTi-AU3Y_OVN2i4I4rBpuwMwngVKWbE8Cp6QMs3abGv_peI7fpYVuof88XDW95HQPJFAQ9QWmP9HLEadULZhrXe6NKP9Ycjc',
    tools: ['Cinema 4D', 'Redshift', 'After Effects'],
    client: 'Global Tech Hardware',
    duration: '0:30',
    synopsis: 'Futuristic product reveal focusing on architectural anodized finishes, micro-details, and spatial sound synchronization.'
  },
  {
    id: 'w2',
    index: '02',
    title: 'AETHELR TIMEPIECE',
    category: 'Product Teaser',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X804vIurJKeebsnH8iAKCSfFmJ-KyvU2nQI_Vmfq7Hlpf27KjFi0SbNfuo4kuJrhxlXOzf9vT_lnIJ-WwUvjZHsmWe1Ya0batLHwy7hwpPrihItkgIR3-yDVDlKvUddIdCKZ6G34-83KKAtVv6xm02YMDl8ZiXWwo224z-J1NHp3AnTo-1Rghu3yKB88B2C70IhFiMkU-yUBpUVzYRsHmxy4QRsItp3yHpbzVsTHalEHpuPwOB1lY0zFQ',
    tools: ['Houdini', 'Octane Render', 'DaVinci Resolve'],
    client: 'Haute Horlogerie House',
    duration: '0:45',
    synopsis: 'Macro cinematic journey through mechanical tourbillons, sapphire crystals, and precision gears in zero gravity.'
  },
  {
    id: 'w3',
    index: '03',
    title: 'NOCTURNE NOIR',
    category: 'Luxury CGI',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VQv5AYCeijSUgpqVnnQEBXQumAv2x8HeJlPF0H2PbZ0-jvt69H5zJNf_Jwpiyf_n5pFlw-fW6lKY-pREm9ac1GYXXilWlZ0TZf3V1kT0sHHfPZvMxuu3W9agAzleWozmrzYxL_w-esyyHTDn4pBcnrdm8JRfffRIOKNlp-YKgNkIVUFXEvLfR7wyUV-lebUWIX1lXKO5Ic9O22YRRsNBGKEdB2CnuZ1VSWwnRBWnYNnJydJQmZhWChePg',
    tools: ['Blender', 'Unreal Engine 5', 'Premiere Pro'],
    client: 'High Fashion Atelier',
    duration: '1:00',
    synopsis: 'Chiaroscuro lighting studies on high-end sculptural garments, velvet dynamics, and moody midnight atmosphere.'
  },
  {
    id: 'w4',
    index: '04',
    title: 'VORTEX 09',
    category: 'Fluid Dynamics',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1Umlq-Ht781_J0iGKShmQLb3jTtKpsYAY16gUFWaMWo5QngI2olj1b2v3-oIsAcChUvIaAIsRhdUwxsZz7ZyxuC3zcUceqMYUfBjz0B59E69JF4xc0d2PX9EsRPq9zedl484u2Z3Q7gbgIe-p2T9-33-d0ZI80fzZqVpnvdHLc95l22M4kUsgHUtQCLJr0Ekp4wMLZY0o0aFFA0sOBh0J7rumu2CptCEmUbPBacR7apLjUo2mrALwKHB0M',
    tools: ['Houdini', 'EmberGen', 'Nuke'],
    client: 'BioTech Innovations',
    duration: '0:25',
    synopsis: 'Organic high-viscosity viscous fluids interacting with metallic cores, highlighting refractive caustics.'
  },
  {
    id: 'w5',
    index: '05',
    title: 'MONOLITH HALO',
    category: 'Architectural Kinetic',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VN9O8VPaOx-yMqzF3_s3J3cfyONDdP0Pk07IXuNgpf9iR4iYxMWxIdr96-1ASpabn6YupAAf32LlZW6rQGlbUx3Bg-bDCMv8UvHMNPUtOUgC3VgGWHaQST78Ap3T9GQV5ruqWZHYZwpzdAqZdisElFl-muCdr5nBPvXJFDQOfgpIsWuxHtZPBCv9qWT8ReNpFjBoW2c34nHw5eA60vQOKmsXn1gEGfSduM5B0h-4BMs8K87sJ6xGXSFFM',
    tools: ['3ds Max', 'Corona', 'After Effects'],
    client: 'Spatial Biennale',
    duration: '0:40',
    synopsis: 'Brutalist concrete geometric structures reacting to dynamic volumetric atmospheric sunlight and celestial cycles.'
  },
  {
    id: 'w6',
    index: '06',
    title: 'QUANTUM HYPERCAR',
    category: 'Automotive Teaser',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VcT_bzll7NofI-6ujjqnDkcaekDF0lrX_qygDfhDT75flVlCYhAZMtkzDgbyesAhEGcA7hh7uQNo1vTIao84PHVQm3obiHBNvrzVpYnsmrSGP834d8U3z2oi4dRSMZwxR-isIguv7hkZhjrqPem_ZlkXmG0P1ATU16ai3OCtV-vWKtGJTvessd9nDJek1IWVwDZ_80VtprbaJdsqiabi8rZjLRAuSiisWpyxvZssUeYzN3CJlT13Cx3w',
    tools: ['Maya', 'V-Ray', 'DaVinci Resolve'],
    client: 'EV Propulsion Labs',
    duration: '0:50',
    synopsis: 'Aerodynamic wind-tunnel visualization with laser scanning particles, carbon weaves, and aggressive LED light signatures.'
  },
  {
    id: 'w7',
    index: '07',
    title: 'SINGULARITY',
    category: 'Sci-Fi Sequence',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1Xi1_OIrjEt8MX5Woe72JhtEIlTlwQeITPD38kuc--dz6PKlbGNKNQkiermf1bu974urA3yms4uTvBb7iF-dunkzWdhQcMo2j52OG01Pr5FUJvs9fUvs9HOvSmJByeC8fQjXU1Q0mKb5amKerV8btw3mPgq5FgwO5PjIhyBYqXEVdEnIukwVoc-h7JSviWz8yVsqDIdiCLI5DvMmY7AwXVsGZgto2uo2N3FIUYnp17VsZhdsX3qcjk_ehk',
    tools: ['Cinema 4D', 'Stable Diffusion', 'Flame'],
    client: 'Sci-Fi Film Foundation',
    duration: '0:35',
    synopsis: 'A cosmic gravitational singularity bending spacetime and digital artifacts into a unified light vortex.'
  }
];

export const HONORS: HonorItem[] = [
  {
    id: 'h1',
    title: 'FILMMAKER SESSIONS VOL. 9',
    subtitle: 'OFFICIAL SELECTION 2026',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsyiH_2HfLJMMJxiLfMUX-b3DGq_Uty5a9hLO9O71maCqnVyv0KBOA_7DrOBGWp7oFdV8_GgG2-CB8hoszlufVTY8eb9KAFZCCqqF0EGxrViQPDSeVRmSomGSjSdunmm4w7wBudxFfmA4_iCUPfIZPY5QjzmSruOFqR42cjmQw-nS02fTD7-_rcYU2MlYv3SJ8vKRus8YAmmLwrsIYlICYZpEPoEup4R9pJrnF4nUKzI8LQQBS4FWgPUlbxtTnBWdsgg'
  },
  {
    id: 'h2',
    title: 'PERSIAN FILM AWARDS 2026',
    subtitle: 'OFFICIAL SELECTION 2026',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsMtOx6V6XiwG9jh2mZb9Ag5BPdX-MsrP8RqSCege3qDPnQHTvBg9wfbrwu9t0uwFydhJn2GSwKPEeo4fR5NLqlsYc087eZ3HZc6X1tQQDjby4FkNDL7WMvcZaYLba19BVR4METOr-oQpTMBPai_X2CHEUBHFxihcgyJmcqWpPR3SvKl6I9QMdjMzjeYl77kZimkkEq00Y7tv3SQ3QAYLVxurhuGG7wBykAcAzAaBJU2PJQiIWVn9UVlH1h4rxkVDqng',
    isFeatured: true
  },
  {
    id: 'h3',
    title: 'FILMMAKER SESSIONS VOL. 10',
    subtitle: 'OFFICIAL SELECTION 2026',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2OIGwgzcueY3YUeSXUYVYMbU86cCaU7c0ShLYj2Se1vaY0XiMVfa0fm7VqMGT-cW1pkaGakkhSwS5A-focwdC1o6Kx3d8QxKww3jGGSEYeA73Ap9iGZ3Fvw0p6vKbeFyrqpgAM2bnxl3W4GWJ5ZJA3AKcF69euXXy-wuW2FZokiEDspZwA9yv6cOt3wQTUiWGOeQsedTP3s41LLlnMi6UXXcl7onge1oRWuSAArtwAU3DaqyhGCwzfqcqrbv8eV58iA'
  }
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'c1',
    title: 'TELEGRAM DIRECT',
    tag: 'TELEGRAM',
    description: 'Fastest channel for project discussions, rapid turnarounds, and briefs.',
    handle: '@sina3din',
    href: 'https://t.me/sina3din',
    iconType: 'telegram'
  },
  {
    id: 'c2',
    title: 'INSTAGRAM',
    tag: 'INSTAGRAM',
    description: 'Recent commercial reels, behind-the-scenes simulations, and story updates.',
    handle: '@sina.3d',
    href: 'https://www.instagram.com/sina.3d/',
    iconType: 'instagram'
  },
  {
    id: 'c3',
    title: 'PHONE • WHATSAPP',
    tag: 'PHONE / WHATSAPP',
    description: 'Direct audio calls, WhatsApp briefs, and urgent project requests.',
    handle: '+44 7470 947719',
    href: 'tel:+447470947719',
    iconType: 'phone'
  },
  {
    id: 'c4',
    title: 'OFFICIAL EMAIL',
    tag: 'EMAIL',
    description: 'Preferred for commercial treatments, NDAs, RFP packages, and detailed briefs.',
    handle: 'sina3ddd@gmail.com',
    href: 'mailto:sina3ddd@gmail.com',
    iconType: 'email'
  },
  {
    id: 'c5',
    title: 'LINKEDIN',
    tag: 'LINKEDIN',
    description: 'Professional background, agency collaborations, and production credentials.',
    handle: 'sina-3d-1108aa214',
    href: 'https://www.linkedin.com/in/sina-3d-1108aa214/',
    iconType: 'linkedin'
  }
];
