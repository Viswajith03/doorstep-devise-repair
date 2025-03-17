
export interface Brand {
  id: string;
  name: string;
  logo?: string;
  deviceTypes: string[];
}

export interface Issue {
  id: string;
  name: string;
  description: string;
  compatibleDevices: string[];
  basePrice: number;
  icon: string;
}

export const deviceTypes = [
  { id: 'smartphone', name: 'Smartphone', icon: 'smartphone' },
  { id: 'laptop', name: 'Laptop', icon: 'laptop' }
];

export const brands: Brand[] = [
  { 
    id: 'apple', 
    name: 'Apple', 
    deviceTypes: ['smartphone', 'laptop'] 
  },
  { 
    id: 'samsung', 
    name: 'Samsung', 
    deviceTypes: ['smartphone', 'laptop'] 
  },
  { 
    id: 'oneplus', 
    name: 'OnePlus', 
    deviceTypes: ['smartphone'] 
  },
  { 
    id: 'nothing', 
    name: 'Nothing', 
    deviceTypes: ['smartphone'] 
  },
  { 
    id: 'xiaomi', 
    name: 'Xiaomi', 
    deviceTypes: ['smartphone', 'laptop'] 
  },
  { 
    id: 'vivo', 
    name: 'Vivo', 
    deviceTypes: ['smartphone'] 
  },
  { 
    id: 'oppo', 
    name: 'Oppo', 
    deviceTypes: ['smartphone'] 
  },
  { 
    id: 'realme', 
    name: 'Realme', 
    deviceTypes: ['smartphone'] 
  },
  { 
    id: 'asus', 
    name: 'Asus', 
    deviceTypes: ['laptop'] 
  },
  { 
    id: 'dell', 
    name: 'Dell', 
    deviceTypes: ['laptop'] 
  },
  { 
    id: 'hp', 
    name: 'HP', 
    deviceTypes: ['laptop'] 
  },
  { 
    id: 'lenovo', 
    name: 'Lenovo', 
    deviceTypes: ['laptop'] 
  },
  { 
    id: 'acer', 
    name: 'Acer', 
    deviceTypes: ['laptop'] 
  },
  { 
    id: 'microsoft', 
    name: 'Microsoft', 
    deviceTypes: ['laptop'] 
  }
];

export const issues: Issue[] = [
  {
    id: 'battery_replacement',
    name: 'Battery Replacement',
    description: 'Replace your worn-out battery with a new one for longer device life.',
    compatibleDevices: ['smartphone', 'laptop'],
    basePrice: 999,
    icon: 'battery-charging'
  },
  {
    id: 'screen_replacement',
    name: 'Screen Replacement',
    description: 'Fix cracked screens or display issues with a complete replacement.',
    compatibleDevices: ['smartphone', 'laptop'],
    basePrice: 1999,
    icon: 'monitor'
  },
  {
    id: 'water_damage',
    name: 'Water Damage Repair',
    description: 'Specialized treatment for water damaged devices.',
    compatibleDevices: ['smartphone', 'laptop'],
    basePrice: 2499,
    icon: 'droplets'
  },
  {
    id: 'software_issues',
    name: 'Software Troubleshooting',
    description: 'Fix system crashes, slow performance, and other software problems.',
    compatibleDevices: ['smartphone', 'laptop'],
    basePrice: 799,
    icon: 'settings'
  },
  {
    id: 'charging_port',
    name: 'Charging Port Repair',
    description: 'Replace damaged charging ports for reliable power connection.',
    compatibleDevices: ['smartphone', 'laptop'],
    basePrice: 1299,
    icon: 'plug'
  },
  {
    id: 'speaker_mic',
    name: 'Speaker/Microphone Repair',
    description: 'Fix audio issues including speaker and microphone problems.',
    compatibleDevices: ['smartphone', 'laptop'],
    basePrice: 1199,
    icon: 'volume-2'
  },
  {
    id: 'camera_repair',
    name: 'Camera Repair',
    description: 'Fix front or rear camera issues for clear photos and video.',
    compatibleDevices: ['smartphone'],
    basePrice: 1499,
    icon: 'camera'
  },
  {
    id: 'keyboard_replacement',
    name: 'Keyboard Replacement',
    description: 'Replace damaged or non-responsive keyboards.',
    compatibleDevices: ['laptop'],
    basePrice: 1799,
    icon: 'keyboard'
  },
  {
    id: 'trackpad_repair',
    name: 'Trackpad Repair',
    description: 'Fix trackpad sensitivity issues or replace damaged trackpads.',
    compatibleDevices: ['laptop'],
    basePrice: 1599,
    icon: 'mouse-pointer'
  },
  {
    id: 'data_recovery',
    name: 'Data Recovery',
    description: 'Recover lost or inaccessible data from your device.',
    compatibleDevices: ['smartphone', 'laptop'],
    basePrice: 2999,
    icon: 'database'
  }
];

export const timeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '1:00 PM - 3:00 PM',
  '3:00 PM - 5:00 PM',
  '5:00 PM - 7:00 PM'
];
