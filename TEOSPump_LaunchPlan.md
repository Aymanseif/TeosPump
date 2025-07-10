
# 📦 TEOSPump Launch Plan (Full Steps)

## ✅ Overview
This is the master execution plan for launching $TEOS with 500 holders **before listing**, using:
- TeosPump (custom launchpad)
- Airdrops (250 free wallets)
- Paid sales (250 wallets)
- Whale onboarding
- Optional use of Smithii Launchpad

---

## 🚀 STEP 1: TeosPump Finalization

### 🔧 1.1 Backend Integration
- [ ] Create Express API endpoint `/api/whales` to store whale form data
- [ ] Connect backend to MongoDB or JSON file (to track submissions)
- [ ] Add `/api/buy` endpoint to handle $TEOS purchases (SOL/USDT-based)

### 💻 1.2 Frontend Pages
- [x] Whale Contribution Portal (`/whales`)
- [ ] Presale Buy Page (`/presale`): Connect Phantom → Pay SOL → Get $TEOS
- [ ] Airdrop Claim Page (`/claim`): Connect wallet → Check eligibility → Allow claim
- [ ] Dashboard Page: Show live holder count, supply, latest buyers

### 📦 1.3 Deployment
- [ ] Connect to GitHub repo: https://github.com/Elmahrosa/TeosPump
- [ ] Deploy to Vercel or pinet.com (TeosPump branded subdomain)
- [ ] Use environment variables for wallet, token address, RPC endpoints

---

## 🐋 STEP 2: Whale Strategy

### 🧩 2.1 Whale Portal
- [x] Build and deploy `/whales` page with form: wallet, name, amount
- [ ] Connect form to backend (step 1.1)

### 📣 2.2 Whale Shoutouts
- [ ] Auto-post to @TEOSWhales on X when whale form submitted (or manual post)
- [ ] Publish Top 10 Whale Leaderboard (graphic)

---

## 👥 STEP 3: Holder Build-Up (Goal: 500 Wallets)

### 🎁 3.1 Airdrop Giveaway
- [ ] 250 wallet addresses (collected manually or via claim page)
- [ ] Send 2,000 $TEOS each via Phantom or backend script

### 🛒 3.2 Paid Presale
- [ ] Sell 250 slots at 10 USDT or 0.1 SOL = 10,000 $TEOS each
- [ ] Buyers get immediate access to claim/withdraw page

### 📊 3.3 Live Holder Count
- [ ] Fetch unique token holders using Solana RPC
- [ ] Display progress: e.g., `🔥 246 / 500 holders`

---

## 📈 STEP 4: Optional Smithii Launch

### 🚨 4.1 Quick Launch via Smithii.io
- [ ] Setup at https://tools.smithii.io/launch/TEOS-Launch
- [ ] Configure price, whitelist, and LP settings
- [ ] Collect funds through their UI (fees apply)

---

## 🗓️ STEP 5: Promotion

### 📣 5.1 Social Media (3 X Accounts)
- @TEOSOfficial → Public airdrop and presale campaigns
- @TEOSWhales → Whale onboarding, leaderboard updates
- @FPBE_Egypt → Culture + banking integration posts

### 📊 5.2 Tweet Templates
- ✅ Airdrop: "Claim 2,000 $TEOS for free! First 250 only"
- ✅ Presale: "Pay 10 USDT / SOL → Get 10,000 $TEOS before listing"
- ✅ Whale: "🐋 New whale joined! Wallet: xyz...123, 100K $TEOS"

### 🖼️ 5.3 Graphics
- [x] Whale leaderboard
- [ ] Airdrop claim QR poster
- [ ] Presale funnel diagram

---

## 📍 Final Listing Plan
Once 500 holders reached:
1. List $TEOS on Raydium (manual liquidity)
2. Show live price on TeosPump via Jupiter API
3. Register token on: Birdeye, Coinhall, DexScreener

---

## 🔐 Extras
- [ ] Add .env.example and README.md to repo
- [ ] Add Arabic localization toggle
- [ ] Write full smart contract presale claim logic (or use Anchor template)

---

## 🧠 Current Token Info
- SPL Token Mint: `AhXBUQmbhv9dNoZCiMYmXF4Gyi1cjQthWHFhTL2CJaSo`
- Verified on DexLab + Solscan
- Explorer: https://solscan.io/token/AhXBUQmbhv9dNoZCiMYmXF4Gyi1cjQthWHFhTL2CJaSo
