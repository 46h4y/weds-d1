import { createClient } from '@supabase/supabase-js';

const getEnv = (key: string): string => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
      // @ts-ignore
      return import.meta.env[key];
    }
  } catch {}
  return '';
};

const supabaseUrl = getEnv('NEXT_PUBLIC_SUPABASE_URL') || getEnv('VITE_SUPABASE_URL') || 'https://placeholder.supabase.co';
const supabaseKey = getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY') || getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') || getEnv('VITE_SUPABASE_ANON_KEY') || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
