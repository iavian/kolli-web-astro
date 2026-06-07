// Emoji used for placeholder thumbnails and category chips.
export const attractionEmoji: Record<string, string> = {
  Waterfall: '💧',
  Viewpoint: '🌄',
  Temple: '🛕',
  Nature: '🌿',
  Adventure: '🥾',
  Culture: '🎭',
};

export const stayEmoji: Record<string, string> = {
  Resort: '🏨',
  Hotel: '🏨',
  Homestay: '🏡',
  Cottage: '🛖',
  'Guest House': '🏠',
  Camping: '⛺',
  'Eco-Hut': '🌿',
};

export const contactEmoji: Record<string, string> = {
  Emergency: '🚨',
  Police: '👮',
  Hospital: '🏥',
  'Car Mechanic': '🚗',
  'Bike Mechanic': '🏍️',
  Taxi: '🚕',
  Tourism: 'ℹ️',
  Fuel: '⛽',
};

export const facilityEmoji: Record<string, string> = {
  Restroom: '🚻',
  ATM: '🏧',
  Fuel: '⛽',
  'Drinking Water': '🚰',
  Parking: '🅿️',
  'Bus Stop': '🚌',
  'Liquor (TASMAC)': '🍺',
  Checkpoint: '🚧',
  'Wi-Fi': '📶',
  Other: '📍',
};

export const severityStyle: Record<string, { cls: string; label: string; emoji: string }> = {
  info: { cls: 'border-sky-300 bg-sky-50 text-sky-900', label: 'Info', emoji: 'ℹ️' },
  warning: { cls: 'border-amber-300 bg-amber-50 text-amber-900', label: 'Warning', emoji: '⚠️' },
  critical: { cls: 'border-red-300 bg-red-50 text-red-900', label: 'Critical', emoji: '🛑' },
};
