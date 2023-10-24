
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bxfrvybcftkntonghqjt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZnJ2eWJjZnRrbnRvbmdocWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwOTA5ODksImV4cCI6MjAxMzY2Njk4OX0.r3yRrDyf3mmM1kgva_QE4hkR-K4k0RWFVy1tPbECNb4'

export const supabase = createClient(supabaseUrl, supabaseKey);