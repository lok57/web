export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  image?: string; // Make image optional since we're using media array
  media: ProductMedia[];
  inStock?: boolean;
  createdAt: string;
  updatedAt: string;
  sizes?: string[];
}

export interface ProductMedia {
  url: string;
  type: 'image' | 'video';
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}

export interface ToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
}

export interface MediaFile {
  id: string;
  type: 'image' | 'video';
  file: File;
  preview: string;
}

export interface UserProfile {
  id: string;
  name?: string;
  email: string;
  phone?: string;
  photoURL?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthContextType {
  currentUser: any;
  userProfile: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  googleSignIn: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  updatePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void>;
  loading: boolean;
  isOffline: boolean;
  error?: string;
  clearError?: () => void;
}