import { Coffee, Heart, MessageSquare, Mail, Users, Video, Twitter, Globe, 
         ExternalLink, Home, Package, Download, Gift, Sparkles, Gamepad2, 
         Camera, Music, Film, Palette } from 'lucide-react'

// Navigation items
export const navItems = [
  { href: '/socials', label: 'Socials', icon: Users },
  { href: '/art', label: 'Art', icon: Palette },
  { href: '/download', label: 'Download', icon: Download },
  { href: '/donate', label: 'Donate', icon: Heart },
  { href: '/contact', label: 'Contact', icon: Mail },
] as const

// Splash texts
export const splashTexts = [
  "100% Made by AI",
  "Hacked by Lampuss",
  "Minecon 2019",
  "Croisssants 🥐",
  "Try CTRL + F4",
  "Wreeper is the K I N G!",
  "Made with ❤️",
  "Free DDR5 here!",
  "Powered by coffee ☕",
  "Now with 100% more sparkles ✨",
] as const

// Hobbies
export const hobbies = [
  { emoji: "📷", name: "Photography" },
  { emoji: "🎮", name: "Casual Gamer" },
  { emoji: "🎥", name: "Movie Enthusiast" },
  { emoji: "🎧", name: "Music Lover" },
] as const

// Experiences
export const experiences = [
  {
    title: "Admin at r/FMM Reborn Discord Server",
    period: "2024 - Present",
    description: "Moderate and help people in the server"
  },
  {
    title: "???",
    period: "??? - ???",
    description: "???"
  }
] as const

// Webring sites
export const webringSites = [
  { id: 1, name: 'Fan Club Fanclub', url: 'https://discord.gg/fanclub', image: '/Assets/webring/fanclub.png' },
  { id: 2, name: 'Bluecoin Community', url: 'https://t.me/+U7qdSQdu1fswZGY0', image: '/Assets/webring/bluecoin.png' },
  { id: 3, name: 'hy.wtf', url: 'https://hy.wtf/', image: '/Assets/webring/hy.png' },
  { id: 4, name: 'Faav.top', url: 'https://faav.top/', image: '/Assets/webring/faav.png' },
  { id: 5, name: 'catmaid.coffee', url: 'https://catmaid.coffee/', image: '/Assets/webring/ashley.png' },
  { id: 6, name: 'Wreeper.com', url: 'https://wreeper.com/', image: '/Assets/webring/wrepeer.png' },
  { id: 7, name: 'Geigi.net', url: 'https://geigi.net/', image: '/Assets/webring/geigi.png' },
] as const

// Art pieces data
export const artPieces = [
  {
    id: 1,
    title: 'Stars',
    artist: 'AmuuSalto',
    artistUrl: 'https://discord.com/users/739007222201319515',
    imageUrl: '/Assets/StarsArt/StarsByAmuu.png',
  },
  {
    id: 2,
    title: 'Stars',
    artist: 'JOVE',
    artistUrl: 'https://vgen.co/JOVE',
    imageUrl: '/Assets/StarsArt/StarsByJOVE.png',
  },
  {
    id: 3,
    title: 'Stars Chad',
    artist: 'AmuuSalto',
    artistUrl: 'https://discord.com/users/739007222201319515',
    imageUrl: '/Assets/StarsArt/StarsChadByAmuu.png',
  },
  {
    id: 4,
    title: 'Stars Mini',
    artist: 'RubicArt',
    artistUrl: 'https://discord.com/users/660008407608328193',
    imageUrl: '/Assets/StarsArt/StarsAnotherByRubicArt.png',
  },
  {
    id: 5,
    title: 'Stars Sigma',
    artist: 'BurgerFlipper',
    artistUrl: 'https://vgen.co/BurgerFlipper',
    imageUrl: '/Assets/StarsArt/StarsSigmaByBurgerFlipper.png',
  },
  {
    id: 6,
    title: 'Stars Melted Ice Cream',
    artist: 'Laelius',
    artistUrl: 'https://vgen.co/Laelius',
    imageUrl: '/Assets/StarsArt/StarsMeltedIceCreamByLaelius.png',
  },
  {
    id: 7,
    title: 'Stars Chibi',
    artist: 'RubicArt',
    artistUrl: 'https://discord.com/users/660008407608328193',
    imageUrl: '/Assets/StarsArt/StarsChibiByRubicArt.png',
  },
  {
    id: 8,
    title: 'Stars Handstand',
    artist: 'Rizzzolis',
    artistUrl: 'https://vgen.co/rizzzolis/',
    imageUrl: '/Assets/StarsArt/StarsByRizzzolis.png',
  },
  {
    id: 9,
    title: 'Stars Big',
    artist: 'AhzanMC',
    artistUrl: 'https://discord.com/users/692325258581114951',
    imageUrl: '/Assets/StarsArt/StarsByAhzanMC.png',
  },
  {
    id: 10,
    title: 'Stars Minecraft Live',
    artist: 'Clouhhh',
    artistUrl: 'https://discord.com/users/198628548649418752',
    imageUrl: '/Assets/StarsArt/StarsMinecraftLiveByClouh.gif',
  },
  {
    id: 11,
    title: 'Stars Chibi',
    artist: 'Minn1e',
    artistUrl: 'https://vgen.co/Minn1e/',
    imageUrl: '/Assets/StarsArt/StarsChibiByMinn1e.png',
  },
  {
    id: 12,
    title: 'Stars Render',
    artist: 'Vekra',
    artistUrl: 'https://discord.com/users/1306863580221669391',
    imageUrl: '/Assets/StarsArt/StarsRenderByVekra.png',
  },
  {
    id: 13,
    title: 'Stars',
    artist: 'Robin',
    artistUrl: 'https://discord.com/users/249696282711556107',
    imageUrl: '/Assets/StarsArt/StarsByRobin.png',
  },
  {
    id: 14,
    title: 'Stars Render',
    artist: 'ErenSky',
    artistUrl: 'https://discord.com/users/1404884011238555719',
    imageUrl: '/Assets/StarsArt/RenderByErenSky.png',
  },
  {
    id: 15,
    title: 'Stars And Zims',
    artist: 'Zeze',
    artistUrl: null,
    imageUrl: '/Assets/StarsArt/StarsAndZimsByZeze.png',
  },
  {
    id: 16,
    title: 'Stars Weird',
    artist: 'Kelvinram',
    artistUrl: 'https://discord.com/users/785453769391341578',
    imageUrl: '/Assets/StarsArt/StarsByKELVINRAM.png',
  },
] as const

// Social media accounts
export const socialAccounts = [
  { name: 'Discord', username: 'Stars6199', url: 'https://discord.com/users/895228843500126209', icon: 'discord' },
  { name: 'Telegram', username: '@stars6199', url: 'https://t.me/Stars6199', icon: 'telegram' },
  { name: 'Instagram', username: '@Hypervitaminosis', url: 'https://instagram.com/Hypervitaminosis', icon: 'instagram' },
  { name: 'YouTube', username: '@Hypervitaminosis', url: 'https://youtube.com/@Hypervitaminosis', icon: 'youtube' },
  { name: 'Twitter', username: '@Gemintang', url: 'https://twitter.com/Gemintang', icon: 'twitter' },
  { name: 'BlueSky', username: '@starzy.top', url: 'https://bsky.app/profile/starzy.top', icon: 'bluesky' },
  { name: 'Xbox', username: 'Stars6199', url: 'https://www.xbox.com/en-us/play/user/Stars6199', icon: 'xbox' },
  { name: 'Twitch', username: 'Stars6199', url: 'https://twitch.tv/Stars6199', icon: 'twitch' },
  { name: 'Steam', username: 'Stars', url: 'https://steamcommunity.com/profiles/76561199141831904', icon: 'steam' },
  { name: 'GitHub', username: 'Stars6199', url: 'https://github.com/Stars6199', icon: 'github' },
  { name: 'TikTok', username: '@Stars6199', url: 'https://tiktok.com/@Stars6199', icon: 'tiktok' },
  { name: 'OgUsers', username: '/Sick7771', url: 'https://oguser.com/Sick7771', icon: 'ogusers' },
] as const

// Minecraft accounts
export const minecraftAccounts = [
  { username: 'Gemintang', uuid: '437960c5-7310-4154-9760-c9082c27c9f7' },
  { username: 'Hypervitaminosis', uuid: '0b966f68-1871-40dc-9cdd-7914807d328d' },
  { username: 'Jeova', uuid: '0ae08171-48df-49bb-995a-2e5ff70e9722' },
  { username: 'Nasution', uuid: '1e573812-af93-4c3d-82f1-9a65a9214195' },
] as const

// Crypto addresses
export const cryptoAddresses = [
  { 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    address: 'bc1qjwpgex0fuwfn7sr0j2fe7anvx66fap2v20sjcf', 
    qrCode: '/Assets/CryptoQR/Bitcoin.jpg',
    logo: '/Assets/CryptoLogo/Bitcoin.png'
  },
  { 
    name: 'Ethereum', 
    symbol: 'ETH', 
    address: '0xD29e33Dea83c1130De7eaEb8b383D2340499775E', 
    qrCode: '/Assets/CryptoQR/Ethereum.jpg',
    logo: '/Assets/CryptoLogo/Ethereum.png'
  },
  { 
    name: 'Litecoin', 
    symbol: 'LTC', 
    address: 'LhixMifGZFawYoKAhUpSSphZCRYX95icxE', 
    qrCode: '/Assets/CryptoQR/Litecoin.jpg',
    logo: '/Assets/CryptoLogo/Litecoin.png'
  },
  { 
    name: 'Solana', 
    symbol: 'SOL', 
    address: 'FoN4uUhi7cT5NEWDNCkgsAwhFaXzqn33SEENHpRGfEPX', 
    qrCode: '/Assets/CryptoQR/Solana.jpg',
    logo: '/Assets/CryptoLogo/Solana.png'
  },
] as const

// Donation platforms
export const donationPlatforms = [
  {
    name: 'Ko-fi',
    description: 'Buy me a coffee!',
    url: 'https://ko-fi.com/gemintang',
    color: 'bg-pink-500/20',
    icon: Coffee,
    details: 'Support me with a one-time donation or monthly membership. You can also leave a message!'
  },
  {
    name: 'Sociabuzz',
    description: 'Become a supporter',
    url: 'https://sociabuzz.com/starry/tribe',
    color: 'bg-blue-500/20',
    icon: Heart,
    details: 'Send tips or become a supporter with exclusive benefits and early access.'
  }
] as const

// Server events
export const serverEvents = [
  { name: 'Halloween Special 2023', resourcePack: true, world: true },
  { name: 'Winter Festival', resourcePack: true, world: false },
  { name: 'Summer Adventure', resourcePack: false, world: true },
] as const

// Minecraft skins
export const minecraftSkins = [
  { 
    name: 'Stars', 
    creator: 'creqpe', 
    front: '/Assets/Skins/StarsFront.png', 
    back: '/Assets/Skins/StarsBack.png', 
    url: 'http://textures.minecraft.net/texture/3e75c372bbe0cf89204a94bfaf72b7af24d6356a43b8ab99a1697868182280e3' 
  },
  { 
    name: 'Stars Cherry', 
    creator: 'creqpe', 
    front: '/Assets/Skins/StarsSakuraFront.png', 
    back: '/Assets/Skins/StarsSakuraBack.png', 
    url: 'https://textures.minecraft.net/texture/7cf9a67d1b0a7a0ca0bf2bfd9113f5e9f7b0234440efcd0f7f007853fde34a1f' 
  },
  { 
    name: 'Stars Winter', 
    creator: 'creqpe', 
    front: '/Assets/Skins/StarsWinterFront.png', 
    back: '/Assets/Skins/StarsWinterBack.png', 
    url: 'http://textures.minecraft.net/texture/1a3eacb3ac9dbe8a3b3753c2dab75c1f76785ba3265f296435f3981721f3f9c1' 
  },
  { 
    name: 'Stars (Concept)', 
    creator: 'CyanWolf', 
    front: '/Assets/Skins/StarsOldFront.png', 
    back: '/Assets/Skins/StarsOldBack.png', 
    url: 'https://textures.minecraft.net/texture/9cd5e986d98a62a4d985c6a0458c28cbe5cf273cc1a32a9c08119c52cf0e6b11' 
  },
] as const
