export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type Item = {
  id: string;
  name: string;
  category: string;
  image: string;
};

export const categories: Category[] = [
  { id: "fruits", name: "ফলমূল", icon: "🥭" },
  { id: "food", name: "বাঙালি খাবার", icon: "🍚" },
  { id: "festival", name: "উৎসব ও অনুষ্ঠান", icon: "🎉" },
  { id: "childhood", name: "শৈশবের স্মৃতি", icon: "🪁" },
  { id: "village", name: "গ্রামবাংলা", icon: "🌾" },
  { id: "folk", name: "লোকসংস্কৃতি", icon: "🎵" }
];

export const items: Item[] = [
  { id: "mango", name: "আম", category: "fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=700&q=85" },
  { id: "jackfruit", name: "কাঁঠাল", category: "fruits", image: "https://images.unsplash.com/photo-1603052875278-7c0d7a3b2f2d?auto=format&fit=crop&w=700&q=85" },
  { id: "lychee", name: "লিচু", category: "fruits", image: "https://images.unsplash.com/photo-1629367308842-2d5f5c6f5f15?auto=format&fit=crop&w=700&q=85" },
  { id: "guava", name: "পেয়ারা", category: "fruits", image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=700&q=85" },
  { id: "jam", name: "জাম", category: "fruits", image: "https://images.unsplash.com/photo-1591084821432-ef8a5f9c3f06?auto=format&fit=crop&w=700&q=85" },
  { id: "boroi", name: "বরই", category: "fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=700&q=85" },

  { id: "panta", name: "পান্তা-ইলিশ", category: "food", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85" },
  { id: "bhorta", name: "ভর্তা", category: "food", image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=85" },
  { id: "pitha", name: "পিঠা", category: "food", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=85" },
  { id: "khichuri", name: "খিচুড়ি", category: "food", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85" },

  { id: "eid", name: "ঈদ", category: "festival", image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=700&q=85" },
  { id: "pohela", name: "পহেলা বৈশাখ", category: "festival", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=85" },

  { id: "kite", name: "ঘুড়ি ওড়ানো", category: "childhood", image: "https://images.unsplash.com/photo-1523742811240-7c8a0f0b3a5f?auto=format&fit=crop&w=700&q=85" },
  { id: "hide", name: "লুকোচুরি", category: "childhood", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=85" },
  { id: "rain", name: "বৃষ্টিতে ভেজা", category: "childhood", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e620?auto=format&fit=crop&w=700&q=85" },

  { id: "boat", name: "নৌকায় ভ্রমণ", category: "village", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85" },
  { id: "pond", name: "পুকুরে গোসল", category: "village", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=85" },
  { id: "rice", name: "ধানের মাঠ", category: "village", image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=700&q=85" },

  { id: "baul", name: "বাউল গান", category: "folk", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=85" },
  { id: "dotara", name: "দোতারা", category: "folk", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=700&q=85" }
];