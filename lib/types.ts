export interface SocialMedia {
  name: string;
  username: string;
  url: string;
  icon: string;
  actionText: string;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  artistUrl?: string;
  imageUrl: string;
}

export interface CryptoDonation {
  name: string;
  logo: string;
  qrCode: string;
  address: string;
}

export interface MinecraftAccount {
  username: string;
  skinUrl: string;
}

export interface WebringSite {
  name: string;
  url: string;
  banner: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}
