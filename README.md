
# 🚀 TeosPump – Cultural Token Launchpad on Solana

**TeosPump** is a decentralized launchpad empowering creators to mint meme and cultural tokens on the **Solana blockchain**, backed by **$TEOS Egypt**, a heritage-themed SPL token inspired by Pharaoh Teos. Developed by **Elmahrosa International 🇪🇬**, TeosPump bridges ancient Egyptian legacy with modern blockchain utility, enabling fast, low-cost tokenization integrated with mobile mining rewards and educational content.

---

## 🌐 Live Project

🔗 [TeosPump DApp](https://teospump.vercel.app)  
🔗 [$TEOS SPL Token on Solscan](https://solscan.io/token/AhXBUQmbhv9dNoZCiMYmXF4Gyi1cjQthWHFhTL2CJaSo)  
🔗 [$TEOS on DexLab](https://www.dexlab.space/token-hub/AhXBUQmbhv9dNoZCiMYmXF4Gyi1cjQthWHFhTL2CJaSo)  

---

## 🎯 Key Features

- 🔐 Phantom Wallet Integration
- 🪙 SPL Token Creator (Name, Symbol, Supply)
- 💸 Launch Fee in $TEOS or SOL
- 📱 Mobile Sync for Miners (Pi Network Compatible)
- ⚡ Fast On-Chain Deployment via Solana
- 🌍 Cultural Branding & NFT Architecture
- 🚀 GitHub + Vercel Auto-Deployment

---

## 🧠 How It Works

1. Connect your **Phantom wallet**  
2. Input token metadata: name, symbol, supply  
3. Pay launch fee in $TEOS or 0.1 SOL  
4. Mint token live on Solana  
5. Sync reward data with mobile TEOS mining app  
6. Token info & rewards managed via backend API  

---

## 🛠 Tech Stack

| Layer         | Tools/Frameworks                      |
|---------------|----------------------------------------|
| Frontend      | React, Next.js (v14), TailwindCSS      |
| Wallet        | Phantom Wallet, `@solana/web3.js`      |
| Backend       | Express API (Node.js + TypeScript)     |
| Token Logic   | Solana SPL Minting                     |
| Mobile Sync   | Firebase / REST API                    |
| Hosting       | GitHub + Vercel                        |
| Branding      | $TEOS Egypt Cultural & Meme Ecosystem |

---

## 📁 Repository Structure

```bash
Teospump/
├── backend/
│   ├── src/
│   │   ├── app.ts
│   │   ├── routes/
│   │   │   ├── mobile.ts
│   │   │   └── token.ts
│   │   └── utils/
│   │       └── solana.ts
├── pages/
│   ├── index.tsx
│   └── create-token.tsx
├── public/
│   └── logo.png
├── utils/
│   └── solana.ts
├── WHITEPAPER.md
├── README.md
└── next.config.js
```

---

## 🌟 Project Vision

The TeosPump launchpad is a cornerstone of the **$TEOS Egypt** initiative—a meme coin with meaning. By giving creators instant access to tokenization tools backed by cultural narratives, Elmahrosa International is transforming how blockchain can honor the past while shaping the future. Whether it’s launching collectible NFTs, gamified mining campaigns, or educational assets, TeosPump fuels decentralized creativity with soul.

---

# ðŸš€ TeosPump â€“ Peluncuran Token Budaya di Solana

**TeosPump** adalah platform peluncuran token meme dan budaya berbasis **Solana**, terinspirasi oleh warisan Mesir kuno dan didukung oleh token SPL `$TEOS`. Proyek ini bertujuan untuk menyediakan antarmuka cepat dan aman untuk siapa saja yang ingin mencetak token SPL dengan biaya rendah dan integrasi penuh dengan dompet Phantom.

ðŸ”— [DApp TeosPump](https://teospump.vercel.app/)  
ðŸ”— [Token $TEOS di Solscan](https://solscan.io/token/AhXBUQmbhv9dNoZCiMYmXF4Gyi1cjQthWHFhTL2CJaSo)

---

## ðŸ“¦ Installation Guide

### ðŸ”§ Requirements
- Node.js >= 18
- Yarn atau npm
- Phantom Wallet

### ðŸ–¥ï¸ Local Setup

```bash
# Clone repositori
git clone https://github.com/Elmahrosa/TeosPump.git
cd TeosPump

# Install dependencies frontend
cd frontend
yarn install
yarn dev
```

```bash
# Install backend
cd ../backend
yarn install
yarn dev
```

> Atau deploy otomatis via Vercel (sudah disiapkan `vercel.json`)

---

## ðŸ”Œ API Reference

### POST `/api/token/create`
> Membuat token SPL baru

**Body**:
```json
{ "name": "MyToken", "symbol": "MTK", "supply": 1000000 }
```

**Response**:
```json
{ "mint_address": "xxxx...", "transaction_url": "https://solscan.io/tx/..." }
```

### GET `/api/mobile/sync`
> Sinkronisasi data token ke aplikasi mobile (fitur internal)

---

## ðŸ§ª Contoh Proyek SPL Token (Demo)

Langkah:
1. Hubungkan dompet Phantom.
2. Isi nama token, simbol, jumlah suplai.
3. Bayar biaya 0.1 SOL atau 1000 TEOS.
4. Token langsung dibuat dan bisa dicek di Solscan.

Contoh hasil:
```
Token: "PharaohCoin"
Simbol: "PHC"
Supply: 1.000.000
Solscan: https://solscan.io/token/...
```

---

## ðŸ‘¨â€ðŸ’» Developer Guide

- Frontend: Next.js + TailwindCSS (`/frontend`)
- Backend: Node.js + Express + TypeScript (`/backend`)
- Blockchain Layer: Solana SPL, `@solana/web3.js`
- Hosting: Vercel
- Sinkronisasi: Firebase (opsional)

Struktur proyek:
```
TeosPump/
 â”œâ”€â”€ frontend/
 â”‚   â””â”€â”€ create-token.tsx
 â”œâ”€â”€ backend/
 â”‚   â””â”€â”€ routes/token.ts
 â””â”€â”€ utils/
     â””â”€â”€ solana.ts
```

---

## ðŸ¤ How to Contribute

Kami menerima kontribusi dari komunitas. Baca [CONTRIBUTING.md](CONTRIBUTING.md) untuk detailnya.

---

## ðŸ“„ License

MIT Â© 2025 Elmahrosa International
